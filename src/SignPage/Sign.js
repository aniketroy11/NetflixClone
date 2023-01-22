import React from "react";
import "./sign.css";
export default function Sign() {
  return (
    <>
      <div className="sign">
        <img src="./NetflixLog.png" alt="" />
        <div className="signpage">
          <div className="wrapper">
            <h1 className="signtitle">Sign In</h1>
            <div className="signconatainer">
              <input
                className="signdemail"
                type="email"
                name=""
                id=""
                placeholder="Email or phone number"
              />
              <br className="linebreak" />
              <input
                className="signpass"
                type="password"
                name=""
                id=""
                placeholder="Password"
              />
            </div>
            <button className="signbtn">Sign In</button>
            <div className="signdisc">
              <label htmlFor="">
                <input type="checkbox" name="" id="" />
                Remember me
              </label>
              <span>Need help?</span>
            </div>
            <div className="discription">
              <span className="discriptiontitle">
                New to Netflix?
                <a className="link1" href="#">
                  Sign up now
                </a>
              </span>
              <span className="discriptioncontent">
                This page is protected by Google reCAPTCHA to ensure you'r not a
                bot.{" "}
                <a className="link2" href="">
                  learn more
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
