import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import './HomeGrid.css';
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
    const navigate = useNavigate();
    return (
        <div>
            <div className="home-grid-container">
                {/* Row 1 */}
                <div className="grid-item">
                    <div className="grid-image">
                        <img src="/kml_mugshot.jpg" alt="Placeholder" />
                    </div>
                    <div className="grid-text">
                        <h3>Welcome</h3>
                        <p>I’m Kathleen, your personal menopause coach. I empower women to cut through the conflicting information to decide 
                          how they will journey through menopause with clarity and confidence so they can feel energized and excited again.</p>
                        <p>
                          As a Certified Functional Medicine Coach, I will work side-by-side with you to make your Menopause Journey easier so you can regain your energy and confidence and chart your course for the next chapter of your life. I do not provide medical advise and will, 
                          when necessary, refer you to your personal medical practitioner.   
                        </p>
                    </div>
                </div>
                <div className="hr-separator">
                    <hr />
                    <div className="hr-separator-text"><h3>The symptoms you experience during menopause aren’t the same as anyone else’s.</h3>
                    <h3>Let’s create your unique path to move from striving to thriving.</h3></div>
                    <hr />
                </div>
                {/* Row 2 */}
                <div className="grid-item">
                    <div className="grid-image">
                        <img src="https://media.istockphoto.com/id/1221871797/photo/fitness-concept.jpg?s=1024x1024&w=is&k=20&c=QcaOZMNI7C4MoOMeiLtvRbDN__mbboAAYUrpsIKJ7k4=" alt="Placeholder" />
                    </div>
                    <div className="grid-text">
                        <h3>Lifestyle</h3>
                        <p>Your nutritional, movement, sleep and stress management needs change as you enter and progress through menopause. We will work together to explore what’s working and what can be modified, added or eliminated.</p>
                    </div>
                </div>
                {/* Row 3 */}
                <div className="grid-item text-right">
                    <div className="grid-image">
                        <img src="https://media.istockphoto.com/id/1337232909/photo/handwritten-word-hormones-on-the-blackboard-and-glasses.jpg?s=1024x1024&w=is&k=20&c=LgQZ43C1uvmBJzvdRgqCEKz6PEpgTDzf3SoIJnFNxsc=" alt="Placeholder" />
                    </div>
                    <div className="grid-text">
                        <h3>Hormone Therapy</h3>
                        <p>As a certified functional medicine coach, I will help you find the latest research about Hormone Replacement Therapy (HRT) to determine if its an option you’d like to explore. I will also help you find resources you can use to advocate for this  choice with your medical practitioner. If HRT is not of interest, we’ll explore other otpions for symptom relief.</p>
                    </div>
                </div>
                {/* Row 4 */}
                <div className="grid-item">
                    <div className="grid-image">
                        <img src="https://media.istockphoto.com/id/1361356256/vector/messy-organization-in-planner-semi-flat-color-vector-object.jpg?s=1024x1024&w=is&k=20&c=RAWPehjV3y2ynlLyrP-YHgJkSZM3fOwmq-hwY-oRnLo=" alt="Placeholder" />
                    </div>
                    <div className="grid-text">
                        <h3>Consistency and Balance</h3>
                        <p>You are ready to stop just surviving in menopause, feeling confused, exhausted and stressed. Together we will build foundational habits to help you feel like you’re building a lifestyle that ensures you will survive through menopause and beyond.</p>
                    </div>
                </div>
                <div className="hr-separator">
              <hr />
              <p>Want to gain insight into your journey? Take our free quiz to learn what stage of menopause you are in.</p>
                    <div className="form-container">
                        <form onSubmit={async (e) => {
                            e.preventDefault();
                            const email = e.target.email.value.trim();
                            
                            if (!email) return;
                            
                            try {
                                // Save email to DynamoDB via API Gateway
                                await postToApi('/emails', { email });
                                
                                // Redirect to quiz
                                navigate('/quiz');
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
        </div>
    </div>
    );
}

export default Home;
