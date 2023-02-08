import React from 'react';
import axios from "axios";
import { BrowserRouter, Routes, Route, useNavigate, Link} from "react-router-dom";


function Senddata(reactData,path){
    var flag;
    //axios post FUNCTION
    axios.post(path, reactData)
    .then(res => {
        console.log(res);
        flag = res.data;
        if(flag === "registered"){
            console.log("successfully added user");
            window.location.replace("/user");
            
        }
        else if(flag === "logged in"){
            console.log("successfully logged in user");
            window.location.replace("/user");
        }
        else{
            console.log(res.data);
        }
    })
    .catch(err => console.log(err.response.data))
}

function Post(){
    return(
        <h1>Hey</h1>
    )
}

export {Senddata};
export default Post;