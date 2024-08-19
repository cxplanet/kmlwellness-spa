import React from 'react';
import './Yoga.css';
import './Services.css';

function Yoga() {
    const classes = [
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
        <div className="yoga">
        <div>
            <h1>Teaching Philosophy</h1>
            <p>My yoga teaching is rooted in my belief that anyone can do yoga and all bodies are yoga bodies. I help my students meet themselves where they are in the present moment and encourage them to employ safe movement and awareness.</p>
            <p>I invite my students to include a sense of physical and mental challenge in their practice. My focus on anatomy, alignment, and functional movement is motivated by my continued curiosity about the human body and how it works.</p>
            <p>I am fascinated by the inherent connection between the body and the mind and how the practice of yoga strengthens that connection. I am a graduate of the Pacific Yoga 500-hour Advanced Studies and Curvy Yoga programs.</p>
        </div>
        <div className="services">
        <h2>Classes</h2>
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
    </div>
    );
}

export default Yoga;
