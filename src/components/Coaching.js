import React from 'react';
import './Coaching.css';
import './Services.css';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
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
    return (
        <div>
        <div className="coaching">
            <h1>Coaching for Menopause</h1>
            <p>Navigating the journey of menopause can be challenging. There are so many potential symptoms and every woman experiences this time of life differently. Sometimes you don’t even recognize the person these symptoms have created! Hot flashes, night sweats, poor sleep, the inability to lose weight and increased belly fat even though you’re working out as hard as you ever have, stress, brain fog, and fatigue to name just a few. And then there are the consequences of hormonal imbalance in your overall health. Osteoporosis, heart disease, incontinence, and more.</p>
            <h2>How We Can Help</h2>
            <p>How do you find a way to relieve these symptoms and become the woman you used to be? Or become even better? How do you make this stage of your life and beyond a happy, joyful time?</p>
            <h3>Your Personal Health Coach</h3>
            <p>As a Functional Medicine Health Coach, I specialize in supporting women through this significant life transition. I’ll meet you where you are, help you identify your unique strengths and guide you in making sustainable lifestyle changes that align with your personal vision of optimal health during this stage of life.</p>
            <p>My training at the Functional Medicine Coaching Academy equips me with a systems-based approach, grounded in scientific evidence, to address the unique challenges of perimenopause and menopause. Together, we will leverage your strengths to cultivate a growth mindset, leading to symptom relief and inspiring personal transformation. I am here to empower you to become your own health advocate, helping you understand the potential root causes of your symptoms and guiding you toward a more balanced, vibrant, and joyful life.</p>
        <div className="services">
        <h2>Packages</h2>
        <div className="class-list">
            {classes.map((cls, index) => (
                <div key={index} className="class-box">
                    <img src={cls.image} alt={cls.title} className="class-image" />
                    <div className="class-description">
                        <h2>{cls.title}</h2>
                        <p>{cls.description}</p>
                        {showInfo &&  <div>Show Page</div>}

                        <div onClick = {showInfoPage} className="desc-button">More Info</div>
                        <Dialog open={showInfo}
                        PaperProps={{
                            style: {
                                backgroundColor: 'transparent',
                                boxShadow: 'none'
                            },
                        }}>
                            {/* <p>{cls.moreInfo.listTitle}</p>
                            <ul>
                                {cls.moreInfo.list.map((item, index) =>
                            <li>{item}</li>
                            )}
                            </ul>
                            <p>Price: {cls.moreInfo.price}</p> */}
                            <div className ="dialog-box">
                            <CoachingInfo/>
                            <div onClick = {showInfoPage} className="dismiss-button">Close
                            </div>
                            </div>

                        </Dialog>
                    </div>
                </div>
            ))}
        </div>
    </div>
        </div>
    </div>
    );
}


export default Coaching;
