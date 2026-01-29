export default function layout2({children}:{children: React.ReactNode}){
    return (<>
        <div className="border-b-4 p-4">This is layout only for auth routes</div>
        {children}
    </>
    )
}