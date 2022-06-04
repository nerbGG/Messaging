const FormContent=(props)=> {
  return (
    <div className="w-100 p-2 border">
        <label className="border" name="props.name">{props.name}</label>
        <input className="" type="text" placeholder="Enter Message"/>
    </div> 
);
}

export default FormContent;