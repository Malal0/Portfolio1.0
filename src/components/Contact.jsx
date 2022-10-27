import React from 'react'
import GithubIcon from '../assets/images/githubicon.svg'
import LinkedinIcon from '../assets/images/linkedinlogo.svg'
import './contact.css'

function Contact() {
    const name = document.getElementById('fullName');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const info = {
        fullName: '',
        email: '',
        message: ''
    }

    const getMessage = () => {
        console.log(name.value, email.value, message.value);
        // name.value = '';
        // email.value = '';
        // message.value = '';
    }

    return (
        <div className='Contact-Section'>
            <h3>contact me</h3>
            <form action="josue_mar@protonmail.com"
                method="POST"
                enctype="multipart/form-data">
                <div className='flex-r'>
                    <div className='flex-c'>
                        <label>full name</label>
                        <input type='text' placeholder='YOUR NAME' id='fullName'></input>
                    </div>
                    <div className='flex-c'>
                        <label>email</label>
                        <input type='email' placeholder='EMAIL' id='email' required></input>
                    </div>
                </div>
                <div className='flex-c'>
                    <label>message</label>
                    <div className='message-container'>
                        <textarea className='message' placeholder='Hello Dev!' id='message'></textarea>
                    </div>
                </div>
            </form>
            <div className='buttons-container'>
                <div className='links'>
                    <a href='https://github.com/Malal0' target='_blank'><img src={GithubIcon} className="logo-link" alt="Github link" /></a>
                    <a href='https://www.linkedin.com/in/josu%C3%A9-martinez-web-developer/' target='_blank'><img src={LinkedinIcon} className="logo-link" alt="LinkedIn link" /></a>
                </div>
                {/* <div> */}
                <button onClick={getMessage} type="submit" value="Submit">send</button>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Contact