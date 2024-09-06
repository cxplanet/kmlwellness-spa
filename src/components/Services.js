import React, {useState} from 'react';
import './Services.css'; // Import your CSS file
import './Yoga.css';

function Services() {
    const classes = [
        {
            title: 'Health Coaching',
            image: 'https://static.wixstatic.com/media/7214ea_f8e7d95d5beb41e4bdbdcfec29ee0acf~mv2.jpg/v1/fill/w_580,h_388,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/7214ea_f8e7d95d5beb41e4bdbdcfec29ee0acf~mv2.jpg', // Replace with your actual image path or URL
            description: 'Personalized coaching to help you achieve optimal health and wellness through sustainable lifestyle changes.'
        },
        {
            title: 'Yoga for Menopause',
            image: 'https://static.wixstatic.com/media/11062b_fe29cf52c2e44b24879be7e0282b98ea~mv2.jpg/v1/fill/w_406,h_272,fp_0.50_0.50,lg_1,q_80,enc_auto/11062b_fe29cf52c2e44b24879be7e0282b98ea~mv2.jpg', // Replace with your actual image path or URL
            description: 'Tailored yoga sessions designed to alleviate symptoms of menopause and promote overall well-being.'
        },
        {
            title: 'Yoga for Osteoporosis',
            image: 'https://static.wixstatic.com/media/7214ea_8c1fa92c078746ef8f32fa4e2e5479e1~mv2.jpg/v1/fill/w_580,h_388,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/7214ea_8c1fa92c078746ef8f32fa4e2e5479e1~mv2.jpg', // Replace with your actual image path or URL
            description: 'Safe and effective yoga practices aimed at improving bone health and reducing the risk of osteoporosis.'
        },
        {
            title: 'Strong Core, Strong You',
            image: 'https://static.wixstatic.com/media/11062b_fe29cf52c2e44b24879be7e0282b98ea~mv2.jpg/v1/fill/w_406,h_272,fp_0.50_0.50,lg_1,q_80,enc_auto/11062b_fe29cf52c2e44b24879be7e0282b98ea~mv2.jpg', // Replace with your actual image path or URL
            description: 'Strengthen your core with focused exercises that enhance stability, posture, and overall strength.'
        }
    ];

    const [showInfo, setShowInfo] = useState("Show Info");

    return (
        <div className="services">
            <h1>Our Services</h1>
            <div className="class-list">
                {classes.map((cls, index) => (
                    <div key={index} className="class-box">
                        <img src={cls.image} alt={cls.title} className="class-image" />
                        <div className="class-description">
                            <h2>{cls.title}</h2>
                            <p>{cls.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='coaching'>
                <h1>Health Coaching</h1>
                <h3>Six sessions:</h3>
                <ul>
                <li>One 1-hour initial session covering current situation, goal-setting & planning</li>
                <li>Five 45-minute bi-weekly follow-up sessions</li>
                <li>Unlimited email or text support</li>
                </ul>
                <p>Sessions conducted in-person, via Zoom, FaceTime or telephone per client’s preference.</p>
                <h3>Pricing:</h3>
                <ul>
                <li>$425.00</li>
                <li>Additional sessions available upon completion of package at $85.00 per 45-minute session</li>
                <li>Payment options include credit card via Square, check or cash</li>
                </ul>
                <h1>Yoga for Menopause</h1>
                <p>Explore restorative and supportive poses to improve common symptoms of menopause such as hot flashes, insomnia, mood swings, brain fog and more.</p>
                <p>Class meets weekly.</p>
                <p>$20.00 per class. Class passes available.</p>
                <h1>Yoga for Osteoporosis</h1>
                <p>Learn and practice the twelve poses found to be most beneficial for bone health. Improve posture, balance, coordination, strength and mobility to help prevent the likelihood of falls.</p> 
                <p>4-week series. Appropriate for all ages and abilities.</p>
                <p>Cost: $75.00</p>
                <h1>Strong Core. Strong You.</h1>
                <p>The core is the basis of all movement and every asana. Learn the basics of core engagement to start to build a strong core.</p>
                <p>4-week series. Appropriate for all ages and abilities.</p>
                <p>Cost $75.00</p>
                <h1>All classes located at TajMotion, 9250 14th Ave NW, Seattle, WA 98117. TajMotion is a secure building. Entry code sent upon registration.</h1>
            </div>
        </div>
    );
}

export default Services;
