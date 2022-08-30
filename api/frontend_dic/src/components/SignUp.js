
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';

function DefaultExample() {
  const [names, setNames] = useState('');
  const [emails, setEmails] = useState('');
    const [passwords, setPasswords] = useState('');

    //method to singn up user
    const Signup = (e) => {
      e.preventDefault();

      fetch("http://127.0.0.1:8000/api/register", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
          },
          body: JSON.stringify({
            name:names,
              email: emails,
              password: passwords,
              device_name: "browser"
          })
      }).then((res) =>{
          return res.json()
      }).then(data => {
        if(data.user){
            alert('Signed in successfully \nPlease on click on dictionary to return home')
// save to localstorage for retrievals
           localStorage.setItem('token',data.token)
           localStorage.setItem('name',data.user.name)
       }else{
           alert(data.message)
       }
      });


}

  return (
    <Container>
       <Row>
      <Col sm={8}>
<Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"
          value={names}
           onChange={(e) => setNames(e.target.value)}
          required
        placeholder="Enter name"
         />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"
          value={emails}

           onChange={(e) => setEmails(e.target.value)}
          required
         placeholder="Enter email" />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
          value={passwords}

           onChange={(e) => setPasswords(e.target.value)}
          required
         placeholder="Password" />
      </Form.Group>

      <Button variant="primary" onClick={Signup}>
        Sign Up
      </Button>
    </Form>
    </Col>
</Row>
  </Container>


  );
}

export default DefaultExample;
