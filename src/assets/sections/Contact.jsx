import React from 'react'
import GithubIcon from '../images/githubicon.svg'
import LinkedinIcon from '../images/linkedinlogo.svg'
import PhoneIcon from '../images/phoneicon.svg'
import '../styles/css/contact.css'

function Contact() {

    return (
        <div className='Contact-Section'>
            <h3>contact me</h3>
            <form
                action="https://formsubmit.co/josue_mar@protonmail.com"
                method="POST"
            >
                <div className='form'>
                    <div className='form-group name'>
                        <label>full name</label>
                        <input type='text' placeholder='Your Name' id='fullName' name="name" required></input>
                    </div>
                    <div className='form-group email'>
                        <label>email</label>
                        <input type='email' placeholder='Email' id='email' name="email" required></input>
                    </div>
                    <div className='form-group message'>
                        <label>message</label>
                        <textarea className='message-text' placeholder='Hello Dev!' id='message' name='message'></textarea>
                    </div>
                </div>
                <input type="hidden" name="_captcha" value="false"></input>
                <input type="hidden" name="_next" value="https://joshuaemartinez.netlify.app/"></input>

                <div className='buttons-container'>
                    <div className='links'>
                        <a href='https://github.com/Malal0' target='_blank'><img src={GithubIcon} className="logo-link" alt="Github link" /></a>
                        <a href='https://www.linkedin.com/in/joshua-martinez-web-developer/' target='_blank'><img src={LinkedinIcon} className="logo-link" alt="LinkedIn link" /></a>
                        <a href='tel:+19037170495'><img src={PhoneIcon} className="logo-link" alt="Phone link" /></a>
                    </div>
                    <button type="submit">send</button>
                </div>
            </form>
        </div>
    )
}

export default Contact