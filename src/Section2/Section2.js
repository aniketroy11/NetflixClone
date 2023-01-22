import React, { useState } from "react";
import "./section2.css";

function Section2() {

    const [selected,setSelected] = useState(null);
    const toggle = (i)=>{
        if(selected===i){
            return setSelected(null);
        }
        setSelected(i);
    }
  return (
    <section className="QandA">
      <h1 className="Faqtitle">Frequently Asked Questions</h1>
      <div className="Faqwrapper">
        <div className="FAQ">
          {Questions.map((item, i) => (
            <div className="Faqitem">
              <div onClick={()=>toggle(i)} className="itemtitle">
                <span>{item.question}</span>
                <span className="Faqicon">{selected===i?'-':'+'}</span>
              </div>
              <div className={selected===i?'itemanswer show':'itemanswer'}>{item.ans}</div>
            </div>
          ))}
        </div>
      </div>
      <div class="section2content">
        <span class="section2contentdisc2">
          Ready to watch?Enter your email to create or restart your membership
        </span>
        <div class="inputs">
          <input class="email" type="email" placeholder="Email address" />
          <button class="showcontentbtn">Get Started </button>
        </div>
      </div>
    </section>
  );
}

const Questions = [
  {
    id: 1,
    question: "What is Netflix?",
    btn: "+",
    ans: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more  on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
  },
  {
    id: 2,
    question: "How much does Netflix cost?",
    btn: "+",
    ans: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
  },
  {
    id: 3,
    question: "Where can I watch?",
    btn: "+",
    ans: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
  },
  {
    id: 4,
    question: "How do I cancel?",
    btn: "+",
    ans: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    id: 5,
    question: "What can I watch on Netflix?",
    btn: "+",
    ans: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
];

export default Section2;
