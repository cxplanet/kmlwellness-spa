import React from 'react';
import './Services.css'; // Import your CSS file

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
        </div>
    );
}

export default Services;
