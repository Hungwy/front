import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap';
import "bulma/css/bulma.css"


const UserList = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
      getUsers();
    }, []);

    const getUsers = async () => {
      const response = await axios.get("http://localhost:3000/api/v1/users/");
      setUser(response.data)
    };


    /* return (
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
          <Link to={`add`} className="button is-success">
            Add New
          </Link>
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>No</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ); */
  };

export default UserList;

