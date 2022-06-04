import React, {useEffect} from 'react' 
import Message from "./Message";
import ReactDOM from 'react-dom';


const getMessages=()=>{
   const messages  = [
        {
            text:"hello",
            author:"Nel",
            to:"krishna",
            sent : true,     
        },
        {
            text:"hello",
            author:"Krishna",
            to:"Nel",
            sent :false,
        },
        {
            text:"hello",
            author:"Krishna",
            to:"Nel",
            sent:false,
        },
        {
            text:"hello",
            author:"Nel",
            to:"krishna",
            sent:true,
        },
        {
            text:"i pooped just now",
            author:"Nel",
            to:"krishna",
            sent:true,
        },
        {
            text:"hello",
            author:"Nel",
            to:"krishna",
            sent:true,
        },
        {
            text:"i pooped just now",
            author:"Nel",
            to:"krishna",
            sent:true,
        },
        {
            text:"and showered",
            author:"Nel",
            to:"krishna",
            sent:true,
        },
        {
            text:"I am treating my sick brother",
            author:"Krishna",
            to:"Nel",
            sent:false,
        },
        {
            text:"I am treating my sick brother",
            author:"Krishna",
            to:"Nel",
            sent:false,
        },
        {
            text:"jsabdjhabsdjhbajdshbsjhadbjhasbdhjhbdjahbdjhhbasdjbhabsxbjhsabxssajhbxahbxhbbahxhbjashbxjhasbxjhsaxjhassxhbahbxjahsbxjhbsax",
            author:"Krishna",
            to:"Nel",
            sent:false,
        },
    ]
    return messages;
}
const Messages=()=>{
    const messages = []
    const messagesData = getMessages();
    messagesData.forEach(message => {
     messages.push(<Message author={message.author} text={message.text} sent={message.sent} /> );
    });
    useEffect(()=>{
        let node  = document.getElementById("focus");
        let e= ReactDOM.findDOMNode(node);
        // e.focus(); only works for 
        e.scrollIntoView()    
    });
    return (
        <div className="border p-1" style={{height:'90%', overflowY:'scroll', overflowX:'hidden'}}> 
            {messages}
            {/* empty div used to keep the lastest message in view when opening app*/}
           <div id="focus"></div>
        </div>
    );
}
export default Messages;