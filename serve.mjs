import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=fileURLToPath(new URL('./dist/',import.meta.url));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml'};
const server=createServer(async(req,res)=>{
  try{
    const requestUrl=new URL(req.url,'http://127.0.0.1');
    const pathname=decodeURIComponent(requestUrl.pathname);
    if(pathname==='/__qa/mobile'){
      const width=Math.max(320,Math.min(850,Number(requestUrl.searchParams.get('width'))||390));
      res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
      res.end(`<!doctype html><html><head><title>Technova mobile layout check</title></head><body style="margin:0;background:#e2e5df"><iframe title="Mobile website preview" src="/" style="display:block;width:${width}px;height:844px;border:0;margin:0 auto"></iframe></body></html>`);return;
    }
    const target=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
    if(!target.startsWith(root)){res.writeHead(403).end();return;}
    const data=await readFile(target);res.writeHead(200,{'Content-Type':types[path.extname(target)]??'application/octet-stream','Cache-Control':'no-store'});res.end(data);
  }catch{res.writeHead(404).end('Not found');}
});
server.listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
