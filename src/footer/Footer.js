import React from "react";
import "./footer.css";
import { MdLanguage } from "react-icons/md";
import { datas } from "../data";
export default function Footer() {
  return (
    <div className="footer">
      <p className="footertitel">Questions? Call 000-888-999</p>
      <div className="footercontainer">
        {datas.map((item)=>{
          return(
            <ul>
            <li>
              <a href="#">{item.link1}</a>
            </li>
            <li>
              <a href="#">{item.link2}</a>
            </li>
            <li>
              <a href="#">{item.link3}</a>
            </li>
            <li>
              <a href="#">{item.link4}</a>
            </li>
          </ul>

          )
        })}
       
      </div>
      <div className="language">
        <MdLanguage className="icon" />
        <select class="btn1" name="" id="">
          <option className="lang" value="English">
            English
          </option>
          <option className="lang" value="Hindi">
            Hindi
          </option>
        </select>
      </div>
      <span className="footerlast">Netflix India</span>
    </div>
  );
}
