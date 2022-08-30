import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import {Link, NavLink} from 'react-router-dom'
import React, { useEffect, useState } from 'react';

function NavScrollExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [names, setNames] = useState();
 
 const tokenId=localStorage.getItem('token')
 console.log(tokenId);
 if(tokenId)
{  fetch('http://127.0.0.1:8000/api/user', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": "Bearer "+tokenId
        },
    }).then((res) =>{
        return res.json()
    }).then(data => {   
      console.log(data)
        if(data.id) {
          setIsLoggedIn(true)
         setNames(data.name)
        }
    }).catch(e => console.log(e))

  }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Dictionary</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          {isLoggedIn && <Link to='/Favorites'   >favorites</Link> }
            

          </Nav>
          <Form className="d-flex">
          {
           !isLoggedIn &&
            <Stack direction="horizontal" gap={3}>
             <Link to='/signup'  variant="btn btn-primary mr={3}">Sign up</Link>
            <Link to='/signin' variant="btn btn-primary">Login</Link>
          </Stack>
          }
          {
             isLoggedIn &&<div >
               
            <Stack direction="horizontal" gap={3}>
            <Button   variant="btn btn-light" >{names} </Button>

            <Button href='/' variant="btn btn-primary" onClick={()=>localStorage.clear()}>Logout</Button>
          </Stack> </div>
          }
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  ); 
  
}

export default NavScrollExample;


