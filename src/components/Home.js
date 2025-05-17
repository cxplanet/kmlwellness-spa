import React, { useState } from 'react';
import './Home.css';
import { post } from 'aws-amplify/api';

// Helper function to make API calls
async function postToApi(path, data) {
  try {
    const baseUrl = process.env.REACT_APP_API_ENDPOINT || 'https://b7voft2xt2.execute-api.us-west-2.amazonaws.com/prod';
    const url = `${baseUrl}${path}`;
    
    console.log('Making request to:', url);
    console.log('Request data:', data);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data)
    });

    let responseData;
    const responseText = await response.text();
    
    console.log('API Response Status:', response.status);
    console.log('API Response Text:', responseText);

    try {
      responseData = responseText ? JSON.parse(responseText) : {};
    } catch (e) {
      console.error('Failed to parse JSON response:', responseText);
      throw new Error('Invalid JSON response from server');
    }

    if (!response.ok) {
      throw new Error(responseData.message || `API request failed with status ${response.status}`);
    }

    return responseData;
  } catch (error) {
    console.error('API call failed:', error);
    if (error.message.includes('404')) {
      throw new Error('The requested endpoint was not found. Please check if the API is properly deployed.');
    }
    throw error;
  }
}

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
                    <p>Want to gain insight into your journey? Take our free quiz to learn what stage of menopause you are in.</p>
                    <div className="form-container">
                        <form onSubmit={async (e) => {
                            e.preventDefault();
                            const email = e.target.email.value.trim();
                            
                            if (!email) return;
                            
                            try {
                                // Save email to DynamoDB via API Gateway
                                await postToApi('/emails', { email });
                                
                                // Store email in localStorage
                                localStorage.setItem('quizEmail', email);
                                
                                // Redirect to quiz
                                window.location.href = '/menopause_quiz.html';
                            } catch (error) {
                                console.error('Error saving email:', error);
                                alert('Failed to save your email. Please try again.');
                            }
                        }} className="quiz-form">
                            <div className="form-row">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email address"
                                    required
                                    className="email-input"
                                    onInvalid={(e) => {
                                        e.target.setCustomValidity('Please enter your email');
                                    }}
                                    onInput={(e) => {
                                        e.target.setCustomValidity('');
                                    }}
                                />
                                <button type="submit" className="button-link">Take the Quiz</button>
                            </div>
                        </form>
                    </div>                    
                </div>
                <div className="home-image">
                    <img src="https://static.wixstatic.com/media/7214ea_27722b57d82f41df8ca48d442550db23~mv2.jpg/v1/crop/x_790,y_0,w_749,h_1400/fill/w_741,h_1400,al_c,q_85,enc_auto/stones-color_edited.jpg" alt="Wellness" />
                </div>
            </div>
        </div>
    );
}

export default Home;
