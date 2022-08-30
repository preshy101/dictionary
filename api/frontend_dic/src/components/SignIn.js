
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';

function DefaultExample2() {
    const [emails, setEmails] = useState('');
    const [passwords, setPasswords] = useState('');
    console.log(emails)
   
    const Login = (e) => {
        e.preventDefault();
   
        fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
            },
            body: JSON.stringify({
                email: emails,
                password: passwords,
                device_name: "browser"
            })
        }).then((res) =>{
            return res.json()
        }).then(data => {
             alert('Logined in successfully \nPlease on click on dictionary to return home')
            console.log(data)   
            localStorage.setItem('token',data.token) 
            localStorage.setItem('name',data.user.name) 
        });
      
    
}  
  return (
    <Container>
       <Row>
      <Col sm={8}>
<Form>

      <Form.Group className="mb-3" controlId="formBasicEmailS">
        <Form.Label>Email</Form.Label>
        <Form.Control
         type="email"
          placeholder="Enter email" 
          value={emails}
           
           onChange={(e) => setEmails(e.target.value)}
          required/>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPasswordS">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
         placeholder="Password" 
         value={passwords}
           
           onChange={(e) => setPasswords(e.target.value)}
          required/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={Login}>
        Sign in
      </Button>
      
    </Form>
    </Col> 
</Row>
  </Container>


  );
}

export default DefaultExample2;
