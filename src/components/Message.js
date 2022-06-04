import Text from "./Text"

const RightSide = ({text, author})=>{
    return (
        <div className="w-100 d-flex justify-content-end" 
            style={{marginLeft:'-20px'}}>
            <Text text={text} color='primary'/>
        </div>
    );
}
const LeftSide=({text, author})=>{
    return (
        <div className="w-100 d-flex justify-content-begin" style={{marginLeft:'20px'}}>
           <Text text={text} color='dark'/>
        </div>
    );
}

const Message = (props)=> {
    if (props.sent){
        return <RightSide text= {props.text} author = {props.author}/>;   
    }
    else
        return <LeftSide text ={props.text} author ={props.author}/>;
    
}
export default Message;