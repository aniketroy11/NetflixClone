import React from 'react'
import { MdLanguage } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import Section from '../section/Section';
import './header.css'
export default function Header() {
    const Navigate = useNavigate();
   function HandleClick(){
    Navigate('/Sign')
   }
    return (
        <div className='headerbody'>
            <header class="show">
                <div class="showtop">
                    <img src="assets/NetflixLogo.png" alt="" />

                    <div className="btns">
                        <div className="language">
                            <MdLanguage className="icon" />
                            <select class="btn1" name="" id="">
                                <option className="lang" value="English">English</option>
                                <option className="lang" value="Hindi">Hindi</option>
                            </select>
                        </div>
                        <button className="btn" onClick={HandleClick} >Sign In</button>
                    </div>
                </div>
                <div class="showcontent">
                    <h1 class="showcontenttitle">Unlimited movies,TV shows and more </h1>
                    <p class="showcontentdisc">Watch anywhere. Cancel anytime</p>
                    <span class="showcontentdisc2">
                        Ready to watch?Enter your email to create or restart your membership
                    </span>
                    <div class="inputs">
                        <input class="email" type="email" placeholder="Email address" />
                        <button class="showcontentbtn">Get Started </button>
                    </div>
                </div>
            </header>
            <Section/>
            <Footer/>
        </div>
    )
}
