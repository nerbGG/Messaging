import React, {useEffect} from 'react' 

const handleSubmit = (event)=>{
    event.preventDefault();
    const url = 'http://127.0.0.1:8000/api/api-token-auth/'
    fetch(url,
        {
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(
            { 
                username: 'nerb',
                password:1234,
            })
        }).then(response => response.json())
        .then(data => console.log(data));
}
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(
    //         { 
    //             username: 'nerb',
    //             password:1234,
    //         })
    // };
    // fetch('http://127.0.0.1:8000/api/api-auth/login/', requestOptions)
    //     .then(response => response.json())
    //     .then(data => console.log(data));

const LoginForm = ()=>{
    // useEffect(()=>{
    //     document.getElementById("")
    // });
    return ( 
        <div className="w-100 h-50 border-lg d-flex flex-column justify-content-center align-items-center">
            <div className=" border w-25 d-flex flex-column justify-content-center align-items-center">
                <h2>Login</h2>
                <form className="w-100" onSubmit={handleSubmit}>
                    <div className="p-2 form-group d-flex flex-row">
                        <label className="w-25 text-center">User Name</label>
                        <input type="text" placeholder="Enter UserName" className="w-75 form-control" />
                    </div>
                    <div className="p-2 form-group d-flex flex-row">
                        <label className="w-25">Password</label>
                        <input type="password" placeholder="Enter Password" className="w-75 form-control"/>
                    </div>
                    <div className="p-2 form-group d-flex flex-row">
                        <label>Show Password</label>
                        <input type="checkbox" className="m-2"/>
                    </div>
                    <div className="p-2 d-flex w-100 justify-content-end">
                        <input type="submit" id="" value="Login"/>
                    </div>
                </form>
            </div>
        </div> );
}

const Login = () =>{
    return (
        <LoginForm/>
    )
}
export default Login;