import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';

function DefaultExample3() {
  const [favorites, setfavorites] = useState([]);
  function getFavourites(endpoint, user_id) {
    fetch(`${endpoint}/${user_id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
    }).then((res) =>{
        return res.json()
    }).then(data => {
        setfavorites([...data])
        console.log(favorites)
    })
  }

  function del(id) {
    fetch(`http://127.0.0.1:8000/api/favorite/delete/${id}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          
      },
  }).then((res) =>{
      return res.json()
  }).then(data => {
      // setMessage([data])
      alert(data.message)
      console.log(data)

     
  })
  }
  const tokenId=localStorage.getItem('token')
  console.log(tokenId);
  if(tokenId){
  fetch('http://127.0.0.1:8000/api/user', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": "Bearer "+tokenId
        },
    }).then((res) =>{
        return res.json()
    }).then(data => {
        if(data.id) {
         
          getFavourites('http://127.0.0.1:8000/api/data', data.id) 
        }
    }).catch(e => console.log(e))

  }
  return (
    <Container>
    <Row>
      <Col sm={8}>
      <ListGroup as="ol" variant="flush">
      { favorites.map(favorite => 
        <ListGroup.Item
        key={uuid()}
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{ favorite.word }</div>
        </div>
        <Badge bg="danger" className='point' pill  onClick={() => del(favorite.id)}>
          X
        </Badge>
      </ListGroup.Item>
      )}
    </ListGroup>
     </Col>

    </Row>

  </Container>


  );

}

export default DefaultExample3;
