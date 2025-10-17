import React from 'react';
import { Link } from 'react-router-dom';
import './Coaching.css';
import './Services.css';
import './HomeGrid.css';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import CoachingInfo from './CoachingInfo';

function Coaching() {
    const classes = [
        {
            title: 'Health Coaching',
            image: 'https://static.wixstatic.com/media/7214ea_f8e7d95d5beb41e4bdbdcfec29ee0acf~mv2.jpg/v1/fill/w_580,h_388,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/7214ea_f8e7d95d5beb41e4bdbdcfec29ee0acf~mv2.jpg', // Replace with your actual image path or URL
            description: 'Personalized coaching to help you achieve optimal health and wellness through sustainable lifestyle changes.',
            moreInfo: {
                title: 'Health Coaching',
                listTitle: 'Six Sessions',
                list: ['One 1-hour initial session covering current situation, goal-setting & planning','Five 45-minute bi-weekly follow-up sessions','Unlimited email or text support'],
                price: '$425',
                moreInfo: 'coaching'
            }
        }
    ];
const [showInfo, setShowInfo] = useState(false);

const showInfoPage = () => [
    setShowInfo(!showInfo)
];

//button that will link to a url
function ButtonLink({ to, children }) {
    return <Link to={to} style={{ textDecoration: 'none' }}><button>{children}</button></Link>;
  }

    return (
        <div>
            <div className="home-grid-container">
                <div className="grid-item">
                    <div className="grid-image">
                        <img src="/lets-talk/1.png" alt="Placeholder" />
                    </div>
                    <div className="grid-text">
                        <h3>Discovery Call</h3>
                        <p>
                            If you’re feeling overwhelmed by all the expert advise and not sure how to start relieving your symptoms let’s talk. We’ll connect over a free 30-minute Discovery Session to determine how a personalized coaching approach can help you cut through the noise, find the solutions that resonate with you and start working toward your goals.
                        </p>
                        <div className="button-wrapper">
                            <button onClick={() => {
                                const recipient = 'kathleen.meehanlorenzo@gmail.com';
                                const subject = 'Inquiry about Discovery Call';
                                window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;
                            }} className="cta-button">Book Now</button>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="grid-image">
                        <img src="/lets-talk/2.png" alt="Placeholder" />
                    </div>
                    <div className="grid-text">
                        <h3>Thriving or Surviving: Your Midlife Wellness Check-in</h3>
                        <p>
                            A longer discovery session where we spend 90 minutes building a road map for your Menopause Journey. Together we’ll explore your health history, the symptoms you’re experiencing (and those you didn’t know could be menopause-related) and your treatment options. We’ll prioritize your symptoms and create goals to reduce or relieve them. <br />*Required to establish our coaching relationship and lays a foundation for our work together. Credit given if you sign up for a personalized menopause offer.
                        </p>
                        <div className="button-wrapper">
                            <button onClick={() => {
                                const recipient = 'kathleen.meehanlorenzo@gmail.com';
                                const subject = 'Inquiry about Thriving or Surviving';
                                window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;
                            }} className="cta-button">Book Now</button>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="grid-image">
                        <img src="/lets-talk/3.png" alt="Placeholder" />
                    </div>
                    <div className="grid-text">
                        <h3>Personalized Menopause Reset</h3>
                        <p>
                            Building on the work we started in the Midlife Wellness Check-in, you’ll choose a particular symptom that’s causing you the most difficulty. We’ll discuss lifestyle changes and treatment options. Together we’ll put together a plan with specific, achievable goals. At the end of the six weeks we’ll celebrate your successes and make a plan to maintain the changes you’ve made.
                        </p>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="grid-image">
                        <img src="/lets-talk/4.png" alt="Placeholder" />
                    </div>
                    <div className="grid-text">
                        <h3>Personalized Menopause Deep Dive</h3>
                        <p>
                        Over the course of 3 months we’ll take a deeper dive into exploring your menopause symptoms and your options for relieving them. We’ll explore the other aspects of your health that predict a vibrant future. We’ll discuss how sustainable lifestyle changes in the areas of nutrition, movement, stress reduction, sleep, etc can affect the next chapter of your life. And contribute to keeping you empowered, confident and vibrant for the rest of your life.                        </p>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="grid-image">
                        <img src="/lets-talk/5.png" alt="Placeholder" />
                    </div>
                    <div className="grid-text">
                        <h3>Menopause Support Group: From Surviving Alone to Thriving Together</h3>
                        <p>
                            An opportunity to experience coaching in a group setting. You are invited to share your experiences and the solutions that have worked 
                            for you as well as learn the same from other group members. 
                            For many of us Menopause was never discussed, but just something you “got through”. 
                            For others there may have been nobody to ask in the first place. Let’s create the community we wish we had.   
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Coaching;
