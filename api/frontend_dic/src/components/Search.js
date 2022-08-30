import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import React, {   useState } from 'react';
import uuid from 'react-uuid';


const GridBasicExample=()=> {
     
    const [words, setWord] = useState('');
    const [definitionss, setdefinitions] = useState([  ]);


    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    
    const Go = (e) => {
        e.preventDefault();
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7dcdcb8e1fmsh835a5f5401e2edap1c490bjsnacdb30c85de0',
                'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
            }
        };
        
        fetch('https://wordsapiv1.p.rapidapi.com/words/'+words+'/definitions', options)
            .then(response => response.json())
            .then(response => {
                setdefinitions([...response.definitions])
                // if(localStorage.getItem('searched')) {
                //     let searched = JSON.parse(localStorage.getItem('searched'));
                // } else {
                     
                // }
                
            })
            .catch(err => console.error(err));
            console.log(definitionss);
    }
    // add to favorite DB
    const Fav = (e) => {
       
        e.preventDefault();
    function addFavourites(endpoint, user_id) {
         
        fetch(`${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
            },
            body: JSON.stringify({
                user_id: user_id,
                word: words
            })
        }).then((res) =>{
            return res.json()
        }).then(data => {
 
            console.log(data)
            alert(data.message)
        })
      
    }   

    const tokenId=localStorage.getItem('token')
    alert(tokenId)
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
        if(data.id){
                    console.log(data.id)
                  
        addFavourites('http://127.0.0.1:8000/api/add', data.id) 
        }

    })}else{
        alert('you must be logged in to\n this operation')
    }

    }
   
   //get users favourites
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
        console.log(data.id)
        getFavourites('http://127.0.0.1:8000/api/data', data.id) 
    })
}

  return (
    <div>
  <Stack gap={3}>  <Container>

    <Form>
      <Row>

        <Col>
          <Form.Control
           value={words}
           required
           onChange={(e) => setWord(e.target.value)}
           placeholder="Search" />
        </Col>
        <Col>
        <Button variant="btn btn-success" onClick={Go}>Go</Button>        </Col>
      </Row>
    </Form>
 <Row>

    <Card style={{ width: '408rem' }}>
      <Card.Body>
        <Card.Title>
       Search results...
        </Card.Title>{
        words &&   <div><Button variant="btn btn-light btn-lg" onClick={Fav}>Add to favorite</Button>
         </div>}
        <Card.Text>
     
            {
                definitionss.map(definitions =>
                     
                 <ul key={uuid()}><li >{definitions.definition}<br></br></li> {definitions.partOfSpeech}</ul>)       
            }
        
            

        </Card.Text>


      </Card.Body>
    </Card>
</Row>
    </Container>
    </Stack>
    </div>
  );
}

export default GridBasicExample;
