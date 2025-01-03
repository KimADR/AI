import { Link } from 'react-router-dom';
import './homepage.css'
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';



const Homepage = () => {

    const [typingStatus, setTypingStatus] = useState("human1");
    return (
        <div className="homepage">
            <img src="/orbital.png" alt="" className='orbital'/>
           <div className='left'>
                <h1>AI CHAT</h1>
                <h2>Share your thoughts and ideas with the world</h2>
                <h3> 
                    Our AI learns with every conversation, offering personalized, insightful responses.
                </h3>
               <Link to="/dashboard">Get Started</Link>
           </div>
           <div className='right'>
            <div className='imgContainer'>
               <div className='bgContainer'>
                <div className='bg'></div>
               </div>
                <img src="/bot.png" alt="" className='bot'/>
                <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human:What can you do as an AI chat?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:What would you like to talk about?",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2:Can you help me with coding problems?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:Sure! I can assist with debugging. What are you working on?",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
            </div>
           </div>
           <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
        </div>
    );
};

export default Homepage;