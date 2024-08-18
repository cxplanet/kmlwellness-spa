import React from 'react';
import './Home.css'; // Import the CSS file for styling

function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-text">
                    <h1>Regain the You</h1>
                    <h2>You Used to Be</h2>
                    <p>Do you struggle with:</p>
                    <ul>
                        <li>Stubborn belly fat</li>
                        <li>Unwanted weight gain</li>
                        <li>Chronic fatigue</li>
                        <li>Insomnia</li>
                        <li>Stress</li>
                        <li>Hot flashes</li>
                        <li>Night Sweats</li>
                    </ul>
                    <p>What if your symptoms could be relieved or even eliminated and you could regain your energy, your confidence, and your joy?</p>
                    <p>I work with women just like you who are trying to navigate menopause with no support, no answers, and no solutions. I'll work with you to create the lifestyle changes you want to make to not only get your old life back but make your next years even better.</p>
                </div>
                <div className="home-image">
                    <img src="https://static.wixstatic.com/media/7214ea_27722b57d82f41df8ca48d442550db23~mv2.jpg/v1/crop/x_790,y_0,w_749,h_1400/fill/w_741,h_1400,al_c,q_85,enc_auto/stones-color_edited.jpg" alt="Wellness" />
                </div>
            </div>
        </div>
    );
}

export default Home;
