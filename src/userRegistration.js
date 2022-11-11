import React, { useState } from 'react';
import {database} from './firebase';
import {ref,push,child,update} from "firebase/database";
import Form from 'react-bootstrap/Form';


function UserRegistrationForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

   

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



    const handleSubmit = () =>{
        let obj = {
                firstName : firstName,
                lastName:lastName,
                email:email,
                password:password,
                confirmPassword:confirmPassword,
            }     
        console.log({obj});  
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj
        window.alert('Submitted!');
        return update(ref(database), updates);
    }

    return (
        <div className="">
            <Form>
                <Form.Group className="mb-3 width" controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="firstname" id="firstName" placeholder="Enter your first name" value={firstName} onChange={(e) => handleInputChange(e)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="lastname" id="lastName" placeholder="Enter your last name" value={lastName} onChange={(e) => handleInputChange(e)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => handleInputChange(e)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => handleInputChange(e)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" id="confirmPassword" placeholder="Enter your password again to confirm"  value={confirmPassword} onChange={(e) => handleInputChange(e)}/>
                    <Form.Text className="text-muted">
                        We'll never share your password with anyone else.
                    </Form.Text>
                </Form.Group>
                
            </Form>
            <div className="footer">
                <button type="submit" className="btn" onClick={() => handleSubmit()}>Register</button>
            </div>
        </div>
    )
}

export default UserRegistrationForm;