import React, { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';

function Register() {

    const [firstNameReg, setFirstName] = useState("");
    const [lastNameReg, setLastName] = useState("");
    const [emailReg, setEmail] = useState("");
    const [passwordReg, setPassword] = useState("");
    const [confirmPasswordReg, setConfirmPassword] = useState("");

    const [registerStatus, setRegisterStatus] = useState("");

    const handleSubmit = () => {
        axios.post("http://localhost:3000/api/v1/register", {
            firstName: firstNameReg,
            lastName: lastNameReg,
            email: emailReg,
            password: passwordReg
        }).catch(function (error) {
            if (error.response) {
                // https://axios-http.com/docs/handling_errors
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                setRegisterStatus(error.response.data.message);
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
            console.log(error.config);
        }).then((response) => {
            setRegisterStatus(response.data.message);
            console.log(response.data)
        });
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }

    }

    return (
        <>
            <h1>Registration</h1><br></br>
            <div className="">
                <Form>
                    <Form.Group className="mb-3" /* controlId="formBasicFirstName" */>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="firstname" id="firstName" placeholder="Enter your first name" value={firstNameReg} onChange={(e) => handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3" /* controlId="formBasicLastName" */>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="lastname" id="lastName" placeholder="Enter your last name" value={lastNameReg} onChange={(e) => handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3" /* controlId="formBasicEmail" */>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" id="email" placeholder="Enter your email" value={emailReg} onChange={(e) => handleInputChange(e)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" /* controlId="formBasicPassword" */>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" id="password" placeholder="Enter your password" value={passwordReg} onChange={(e) => handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3" /* controlId="formBasicConfirmPassword" */>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" id="confirmPassword" placeholder="Enter your password again to confirm" value={confirmPasswordReg} onChange={(e) => handleInputChange(e)} />
                        <Form.Text className="text-muted">
                            We'll never share your password with anyone else.
                        </Form.Text>
                    </Form.Group>

                </Form>
            </div>
            <div className="footer">
                <button type="submit" className="btn" onClick={handleSubmit}>Register</button>
                <h2>{registerStatus}</h2>
            </div>
        </>

    )

}

export default Register;