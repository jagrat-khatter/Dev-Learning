
// After next js 13 framework has become smart enough to idenitfy that this is 
// static site and no dynamic rendering is required even if it is presented as server 
// component, so it is distributed as .html file you can see in next folder
export default function staticPage(){
    return <div>This is static page </div>
}