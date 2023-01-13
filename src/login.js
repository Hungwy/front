import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';

function Login() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    axios.defaults.withCredentials = true;

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "loginEmail") {
            setLoginEmail(value);
        }
        if (id === "loginPassword") {
            setLoginPassword(value);
        }

    }

    const handleLoginSubmit = () => {
        axios.post("http://localhost:3000/api/v1/login", {
            email: loginEmail,
            password: loginPassword
        }).catch(function (error) {
            if (error.response) {
                // https://axios-http.com/docs/handling_errors
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                setLoginStatus(error.response.data.message);
                console.log(error.response.status);
                /* console.log(error.response.headers); */
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.response);
        }).then((response) => {
            setLoginStatus(response.data.message);
            console.log(response.data)
        });

    }
    useEffect(() => {
        axios.get("http://localhost:9000/api/v1/login").then((response) => {
            setLoginStatus(response.data)
        })
    }, [])

    return (
        <>
            <h1>Login</h1><br></br>
            <Form>
                <Form.Group className="mb-3" /* controlId="formBasicEmail" */>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" id="loginEmail" placeholder="Enter your email" value={loginEmail} onChange={(e) => handleInputChange(e)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" /* controlId="formBasicPassword" */>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="loginPassword" placeholder="Enter your password" value={loginPassword} onChange={(e) => handleInputChange(e)} />
                </Form.Group>
            </Form>
            <div className="footer">
                <button type="submit" className="btn" onClick={handleLoginSubmit}>Login</button>
                <h2>{loginStatus}</h2>
            </div></>
    )

}

export default Login;