import React, { useEffect, useState}  from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Home(){
    
    //axios get function
    const [data, setData] = React.useState([]);
    let get_url = 'http://localhost:3001/compose';

   //get function but calls axios only on page refresh - Highly Important
    useEffect(() => {
    axios.get(get_url).then((res) => {setData(res.data)});
    }, []);
    const homeStartingContent = "Welcome to our blog! Here, you will find a diverse array of articles covering a variety of topics, including lifestyle, wellness, news, and current events. Our team of passionate writers and content creators strive to bring you fresh and engaging content that will inspire and inform. You can also check out our latest posts, or browse by category to find something that interests you. Thanks for visiting, and happy reading!";
    return(
            <div>
                <div className='basicbox'>
                    <h1>Home Page</h1>
                    <p className='content'>{homeStartingContent}</p>
                </div>
                <div class="row">
                    {data.map((p,i) => ( 
                    <div class="col-sm-4">
                        <Card bg="dark" border = "light" style={{ width: '18rem' }} className = "cards h-100" >
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body >
                                <div key = {i} className='item'>
                                    <Card.Title id = "cardtitle">{p.title}</Card.Title>
                                    <Card.Text>{p.post}</Card.Text>
                                    
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <Button className='readmore' variant="outline-light">Read More</Button>
                            </Card.Footer>
                        </Card>
                    </div>
                    ))}
                </div>
            </div>
        );
}


{/* <div>
                    {data.map((p,i) => (
                        <div key = {i} className='item'>
                            <h1>{p.title}</h1>
                            <p>{p.post}</p>
                        </div>
                    ))}
                </div> */}