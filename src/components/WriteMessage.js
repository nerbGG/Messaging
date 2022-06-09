import axios from 'axios';
import React, {useState, useEffect} from 'react'

const current_user = {
    "id":4,
    "username":"nerb",
}

const WriteMessage=()=>{
    const [inputValue, setInputValue] = useState(null);
    const current_room = 2;
    const handleChange = (event)=>{
        setInputValue(event.target.value);
    }

    const postMessage = (event) => {
        // {
        //     "author": 4,
        //     "text": "sakndlakndkjnaskdjnkasdkankjdnksadnkjsdakjndskjankdjsjnakjdnknjasndk",
        //     "room": 2
        // }
        event.preventDefault();
        setInputValue("");
        // alert(inputValue);
        const url = 'http://127.0.0.1:8000/api/create-message/'
        axios.post(url,
            {
                "author": current_user.id,
                "text": inputValue,
                "room": current_room
            })
            .then(response=>{
                console.log(response);
            })
            .catch(error=>{
                console.log(error);
            });
    }

    return (
        <form onSubmit={postMessage} className="d-flex flex-row" style={{height:"10%;"}}>
            <input onChange={handleChange} value={inputValue} className="rounded form-control" placeholder="Enter Message" type="text"/>
            <input className="btn btn-primary" type="submit" value="Send"/>
        </form>
    );
}
export default WriteMessage;
