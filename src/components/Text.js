const Text = ({text, color})=>{
    const bgColor = `bg-${color}`
    const classString = bgColor + " border p-1 rounded text-light"
    return (
        <p className= {classString}
        style={{maxWidth:'40%', wordWrap:"break-word", textAlign:"left"}}>
            {text}
        </p>
    );
}
export default Text;