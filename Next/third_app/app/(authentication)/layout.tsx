interface props{
    children: React.ReactNode
}

export default function({children} : props){
    return<>
        <div>Authentication</div>
        <div>{children}</div>
    </>
}