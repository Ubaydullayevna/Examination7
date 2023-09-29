import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../features/UserSlice";
import { useDispatch } from "react-redux";


function Home() {
  const dispatch = useDispatch()
    const users = useSelector((state)=> state.users)
    const handleDelete = (id)=> {
        dispatch(deleteUser({id:id}))
    }
    console.log(users);
  return ( 
<div className="container">
    <h1 className="">Crud App With JSON Server </h1>
    <Link to='/create' className="btn btn-success my-3">Create +</Link>
    <table className="table">
        <thead className="table-header-group">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
          {users ? users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  to={`/edit/${user.id}`}
                  className="btn btn-primary btn-sm "
                >
                  Edit
                </Link>
                <Link
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-secondary ms-2 "
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))  :null}
        </tbody>
    </table>
</div>
  )
}

export default Home;
