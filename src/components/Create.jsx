import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/UserSlice";
import { Form, useNavigate } from "react-router-dom";

function Create() {
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const users = useSelector((state)=> state.users)
    const dispatch =  useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addUser({id:users[users.length - 1  ].id+1 ,name,email}))
        navigate('/')
    }
    return(
    <div className="flex justify-center items-center w-[100] h-[100]">
        <div className="w-[50] border bg-secondary text-white p-5">
<h2>Add New user</h2>
        <form className="form-control" onSubmit={handleSubmit}>
            <div>
                <label  className="label">Name:</label>
                <input 
                type="text"
                 name="name" 
                 className="input"
                 onChange={(e)=> setName(e.target.value)} />
            </div>
            <div>
                <label  className="label">Email</label>
                <input
                 type="text"
                 name="name"
                 className="input"
                 onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <br />
            <button className="btn-info">
                Submit
            </button>
        </form>

        </div>

    </div>
  )
}

export default Create;
