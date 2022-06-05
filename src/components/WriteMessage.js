
const WriteMessage=()=>{
    return (
        <form className="d-flex flex-row" style={{height:"10%;"}}>
            <input className="rounded form-control" placeholder="Enter Message" type="text"/>
            <input className="btn btn-primary" type="submit" value="Send"/>
        </form>
    );
}
export default WriteMessage;
