import FormContent from "./FormContent";

const Form = ()=> {
    return (
    <form>
        {/* <FormContent name="name"/> */}
        <FormContent name="message"/>
        <input type="submit" value ="Send"/>
    </form>
  );
}

export default Form;
