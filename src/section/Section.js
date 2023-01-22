import React, { useState } from "react";
import "./section.css";
import { AiOutlinePlus } from "react-icons/ai";
import { Questions } from "../data";
import Section2 from "../Section2/Section2";
export default function Section() {
  const[selected ,setSelected] = useState(null);
  const toggle =(i)=>{
    if(selected===i){
      return setSelected(null);
    }
    setSelected(i);
  }
  return (
    <div>
      <div class="line"></div>
      <section class="section1">
        <div class="container">
          <div class="section1top">
            <h1 class="section1title">Enjoy on your TV.</h1>
            <div class="section1disc">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV.
              Blu-ray players and more.
            </div>
          </div>
          <div class="section1content">
            <img src="./assets/section1.png" alt="" />
          </div>
        </div>
      </section>
      <div class="line"></div>

      {/* section2 */}
      <Section2/>
      <div class="line"></div>
    </div>
  );
}
