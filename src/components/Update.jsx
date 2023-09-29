import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/UserSlice";

function Update() {
    const {id} = useParams()
    const users = useSelector((state)=> state.users)
    const existingUser = users.filter(f => f.id === +id )
    const {name,email} = existingUser[0]
    const [uname,setName ] = useState(name)
    const [uemail,setEmail] = useState(email)
    const dispatch = useDispatch()
    const navigate = useNavigate()  
    const handleUpdate = (event) => {
        event.preventDefault()
        dispatch(updateUser({
            id: id,
            name: uname,
            email:uemail
        }))
        navigate('/')
    }
  return     <form  className="form-control"
  onSubmit={handleUpdate}>
  <div>
      <label  className="label">Name:</label>
      <input 
      type="text"
       name="name" 
       className="input"
       value={uname}
       onChange={(e)=> setName(e.target.value)}
        />
  </div>
  <div>
      <label  className="label">Email</label>
      <input
       type="text"
       name="name"
       className="input"
       value={uemail}
       onChange={(e)=> setEmail(e.target.value)}
        />
  </div>
  <br />
  <button className="btn-info">
      Update
  </button>
</form>;
}

export default Update;
