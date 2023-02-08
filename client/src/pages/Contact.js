import React from 'react';

export default function Contact(){
    const contactContent = "Thank you for visiting our blog! We value your feedback and would love to hear from you. Whether you have a question, comment, or just want to say hello, please don't hesitate to reach out. You can contact us by email at rishikeshcsk@gmail.com , or by filling out the form below. We will respond as soon as possible. Thank you for your support and we look forward to hearing from you!";
    return(
        <div className='basicbox'>
            <h1>Contact Page</h1>
            <p className='content'>{contactContent}</p>
        </div>

    );
}