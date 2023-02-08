import React, { useEffect, useState}  from 'react';
import axios from "axios";
import {Senddata} from './Post';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Home2(){

    const delete_url = "http://localhost:3001/delete";

    //axios get function
    const [data, setData] = React.useState([]);
    let get_url = 'http://localhost:3001/compose';

   //get function but calls axios only on page refresh - Highly Important
    useEffect(() => {
    axios.get(get_url).then((res) => {setData(res.data)});
    }, []);


    function deleteData(delete_id){
        const temp = {
          id: delete_id
        }
        Senddata(temp,delete_url);
    }
    const homeStartingContent = "Welcome to the world of blogging! We are so excited that you have decided to start your own blog and share your thoughts, ideas, and experiences with the world. Blogging can be a rewarding and fulfilling endeavor, and we are here to support you every step of the way. Whether you're new to blogging or a seasoned pro, we hope you find our resources and tips helpful in growing your blog and reaching your audience. Happy blogging!";
    return(
            <div>
                <div className='basicbox'>
                    <h1>Creator's Page</h1>
                    <p className='content'>{homeStartingContent}</p>
                </div>
                <div class="row">
                    {data.map((p,i) => ( 
                    <div class="col-sm-4">
                        <Card bg="dark" border = "light" style={{ width: '18rem' }} className = "cards h-100" >
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <div key = {i} className='item'>
                                <Card.Body >
                                    <Card.Title id = "cardtitle">{p.title}</Card.Title>
                                    <Card.Text>{p.post}</Card.Text>
                                </Card.Body>
                            </div>
                            <Card.Footer>
                                <Button variant="outline-light" className='readmore'>Read More</Button>
                                <Button variant="light" id = "deletebtn" type="submit" onClick={() => deleteData(p._id)}>Delete</Button> 
                            </Card.Footer>
                        </Card>
                    </div>
                    ))}
                </div>
            </div>
        );
}


{/* <Button variant="secondary" type="submit" onClick={() => deleteData(p._id)}>Delete</Button>  */}