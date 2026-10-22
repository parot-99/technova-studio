import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const html=fs.readFileSync('dist/index.html','utf8');
const app=fs.readFileSync('dist/app.js','utf8');
const locales=fs.readFileSync('dist/locales.js','utf8');
const context={};
vm.createContext(context);
vm.runInContext(locales+'\nthis.translations=extraLocales;',context);
vm.runInContext(app.split('const nodes =')[0]+'\nthis.english=english;',context);
const visibleKeys=[...new Set([...html.matchAll(/data-i18n="([^"]+)"/g)].map(match=>match[1]))];
const englishKeys=Object.keys(context.english);
for(const key of visibleKeys)assert.equal(typeof context.english[key],'string',`Missing English text: ${key}`);
for(const language of ['tr','de']){
  for(const key of englishKeys){
    assert.equal(typeof context.translations[language][key],'string',`Missing ${language} translation: ${key}`);
    assert.ok(context.translations[language][key].trim(),`Empty ${language} translation: ${key}`);
  }
  assert.match(context.translations[language].waCatalog,/Excel/);
}
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]);
assert.equal(new Set(ids).size,ids.length,'Duplicate HTML IDs');
for(const match of html.matchAll(/(?:src|href)="(assets\/[^"#]+|(?:app|locales)\.js|(?:styles|premium)\.css)"/g))assert.ok(fs.existsSync('dist/'+match[1]),`Missing asset: ${match[1]}`);
for(const match of html.matchAll(/href="#([^"]+)"/g))assert.ok(ids.includes(match[1]),`Missing section target: ${match[1]}`);
const expected=['main','next-chapter','languages','work','packages','excel','systems','process','faq','contact'];
for(const menu of ['desktop-nav','mobile-nav']){
  const navigation=html.match(new RegExp('<nav class="'+menu+'[^>]*>([\\s\\S]*?)<\\/nav>'))[1];
  const targets=[...navigation.matchAll(/href="#([^"]+)"/g)].map(match=>match[1]);
  assert.deepEqual(targets,expected,menu+' must cover all sections in page order');
}
const sectionOrder=['main',...html.matchAll(/<section[^>]*\bid="([^"]+)"/g)].map(item=>typeof item==='string'?item:item[1]);
assert.deepEqual(sectionOrder,expected,'Navigation must match the actual section order');
assert.match(html,/https:\/\/technova-solutions\.com\//);
console.log(`Checked ${visibleKeys.length} page strings, ${englishKeys.length} translations per added language, unique IDs, and local assets.`);
