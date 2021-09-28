import { useState } from "react";
import axios from 'axios'

const PostApi = () =>{
    
    const [data,setData] = useState({userID:"",
                                    title:"",
                                    body:""})

    const handleForm = (e) => {
        let new_form = {...data}
        new_form[e.target.id] = e.target.value
        console.log(new_form)
        setData(new_form)
    }

    const PostFormData = async() => {
        await axios.post("https://jsonplaceholder.typicode.com/posts" , {data})
    }
    
    return(
        <div className="form">
            <input onChange={(e)=>handleForm(e)} id="userID" placeholder="ID"></input>
            <br></br>
            <input onChange={(e)=>handleForm(e)} id="title" placeholder="title"></input>
            <br></br>
            <input onChange={(e)=>handleForm(e)} id="body" placeholder="body"></input>
            <br></br>
            <button type="submit" onClick={PostFormData}> POST </button>
        </div>
    )
} 

export default PostApi