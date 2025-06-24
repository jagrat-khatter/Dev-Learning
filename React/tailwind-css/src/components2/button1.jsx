export const Button1 = ({disabled , children , onClick }) =>{

    // to use ${} we need to make use of javascript for that there is extrnal {}
    // so that we can have a dynamic string for jsx to use
    return <div  onClick={onClick} className={`cursor-pointer my-4 px-24 w-80 py-2 mx-auto text-center rounded-xl text-white-500 ${disabled ? 'bg-grey-500' : 'bg-skyBlue-500'}`}> 
    {children}
    </div>
}


// w-fit makes the button only as wide as its content.
// mx-auto centers the button horizontally.
// text-center centers the text inside the button.
// rounded-lg gives it a button-like rounded look.
// px-8 py-2 for more button-like padding (adjust as needed).
// display: 'block' (via inline style) ensures mx-auto works on the div.