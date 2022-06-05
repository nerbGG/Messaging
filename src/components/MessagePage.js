import WriteMessage from "./WriteMessage";
import Messages from "./Messages";
// import ReactDOM from 'react-dom';

const MessagePage=()=>{
    return (
        <div className="p-1 h-100 w-100 d-flex flex-column border bg-light">
            <Messages/>
            <WriteMessage/>
        </div>
    )
}
export default MessagePage;
