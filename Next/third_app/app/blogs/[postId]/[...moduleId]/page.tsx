type Params = {
    params: Promise<{
        postId: string;
        moduleId: string[];
    }>
}
export default async function({params} : any){

    const postId = (await params).postId ;
    const rest = (await params).moduleId ;

    return <div><div>{postId}</div><div>{rest.join(", ")}</div></div>
}