import { useState } from "react";

const Form = () =>{
    const [input, setInput] = useState ("")

    const handleSubmit =(e) =>{
        e.preventDefault()
        console.log(input)
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setInput(e.target.value)}/>
            <button type="submit"> submit</button>

        </form>
    )
}
export default Form