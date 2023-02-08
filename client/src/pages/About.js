import React from 'react';

export default function About(){
    const aboutContent = "Welcome to our blog page! We are a team of passionate writers and content creators dedicated to bringing you fresh and engaging content on a variety of topics. From lifestyle and wellness to news and current events, we strive to provide a platform for diverse perspectives and open dialogue. Join us on our journey of self-expression and discovery as we navigate the world together. Happy reading!";

    return(
        <div className='basicbox'>
            <h1>About Us</h1>
            <p className='content'>{aboutContent}</p>
        </div>
    );
}