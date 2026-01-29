const arr:string[]= ['first blog' , 'second blog' , 'another blogs']

// even this is static page but you have to exlicitly tell in this all the pages are 
export default async function ({params} : {
    params: Promise<{
        blogId : string
    }>
}){

    let id = parseInt((await params).blogId);
    if(id>=3) id=3;

    return <div>
        {arr[id-1]}
    </div>
}

// Dynamic Routes:

// In your case, blogId is a dynamic parameter ([blogId]), meaning the page can handle multiple routes like:
// /staticBlog/1
// /staticBlog/2
// /staticBlog/3
// By default, Next.js dynamically generates these pages at runtime (Server-Side Rendering or SSR) unless you explicitly configure them to be statically generated.
// Static Generation for Dynamic Routes:

// To statically generate pages for dynamic routes, you use getStaticPaths along with getStaticProps.
// getStaticPaths tells Next.js which blogId values should be pre-rendered at build time.