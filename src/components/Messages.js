import React, {useEffect, useState} from 'react' 
import Message from "./Message";
import ReactDOM from 'react-dom';
import axios from 'axios';

const token= 'fe3800bbd7b04026ea8e0750babfdb9e784fd7cf'
const current_user = {
    "id":4,
    "username":"nerb",
}
const scrolltoBottom=()=>{
    let node  = document.getElementById("focus");
    let e= ReactDOM.findDOMNode(node);  
    e.scrollIntoView() ;
}
const Messages=()=>{
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [prevValue, setPrevValue] = useState(null);
    const [newMessage, setNewMessage] = useState(false);
    const messagesContainer = []
    // both fetchmessages functions work
    const fetchMessages = ()=> {
        const url = 'http://127.0.0.1:8000/api/room/2/messages/'
        axios.get(url)
            .then(response=>{
                // console.log(response.data);
                setPrevValue(messages.length);
                setMessages(response.data);
                console.log(messages);
                if(prevValue !== messages.length){
                    setNewMessage(true);
                }
                else{
                    setNewMessage(false);
                }
                // setPrevValue(loading);
                setLoading(false);
                // if(prevValue !== loading){
                //     setfirsttimeLoaded(true);
                // }
                // scrolltoBottom();
            })
            .catch(err=>{console.log(err)});
    }
    // const fetchMessages = async() =>{
    //     const url = 'http://127.0.0.1:8000/api/room/2/messages/'
    //     const response = await fetch(url, {
    //         headers: {
    //             'Authorization': `Token ${token}`
    //         }
    //     })
    //     const data  = await response.json();
    //     setMessages(data);
    //     scrolltoBottom();
    // }
    // const fetchMessages = () => {
    //     const url = 'http://127.0.0.1:8000/api/room/2/messages/'
    //     const response = fetch(url, {
    //             headers: {
    //                 'Authorization': `Token ${token}`
    //             }
    //         }).then(response =>response.json())
    //         .then(data=>{
    //             if(data.length >0){
    //                 setMessages(data);
    //                 scrolltoBottom();
    //             }
    //         });
    // }
    useEffect(()=>{
        // scrolltoBottom();
        // const interval = setInterval(function() {
            fetchMessages();
        // }, 2000);
        
        if(newMessage){
            scrolltoBottom();
        }
        //console.log("hello")
        //clearInterval(interval);
    // },[]);
    });
    /* with empty brackets, the use effect will run only after it mounts the first time, 
        but if we add a state, it call useeffect everytime that state changes
        console.log(messages);*/
    if(!loading){
        messages.forEach(message => {
            messagesContainer.push(<Message author={message.author} text={message.text} sent={current_user.id === message.author.id ? true : false} /> );
        });
    }
    
    return (
        <div className="border p-1" style={{height:'90%', overflowY:'scroll', overflowX:'hidden'}}>     
            {loading && (<h5>Fetching Messages...</h5>)}
            {!loading && messagesContainer}
            {/* empty div used to keep the lastest message in view when opening app*/}
           <div id="focus"></div>
            {/* {!loading && scrolltoBottom()} */}
        </div>
    );
}
export default Messages;