import React, { useState, useRef } from "react";
import "./Quiz.css"; // You can move styles into a separate file or use inline styles

const quizData = [
  {
    context: "Most women enter perimenopause between their early 40s and mid-50s.",
    question: "1. How old are you?",
    type: "radio",
    options: [
      { text: "Under 40", value: 0 },
      { text: "40–45", value: 1 },
      { text: "46–51", value: 2 },
      { text: "Over 51", value: 3 },
    ],
  },
  {
    context: "Cycle irregularity is often one of the first noticeable signs of perimenopause.",
    question: "2. How regular are your menstrual cycles?",
    type: "radio",
    options: [
      { text: "Very regular (28–35 days apart)", value: 0 },
      { text: "Sometimes irregular", value: 2 },
      { text: "Haven’t had a period in 12+ months", value: 4 },
      { text: "No periods for years", value: 5 },
    ],
  },
  {
    context: "Twelve months without a period is the clinical marker for menopause.",
    question: "3. Have your periods completely stopped for at least a year?",
    type: "radio",
    options: [
      { text: "No", value: 0 },
      { text: "Yes", value: 5 },
    ],
  },
  {
    context: "These are some classic symptoms triggered by shifting hormone levels, especially estrogen decline.",
    question: "4. Are you experiencing any of the following symptoms? (Select all that apply)",
    type: "checkbox",
    options: [
      { text: "Hot flashes", value: 1 },
      { text: "Night sweats", value: 1 },
      { text: "Vaginal dryness", value: 1 },
      { text: "Mood swings", value: 1 },
      { text: "Brain fog", value: 1 },
      { text: "Sleep disturbances", value: 1 },
    ],
  },
  {
    context: "Hormonal changes often lead to fat redistribution, especially around the midsection.",
    question: "5. Have you noticed an increase in belly fat that’s hard to lose?",
    type: "radio",
    options: [
      { text: "No", value: 0 },
      { text: "A little, but manageable", value: 1 },
      { text: "Yes, and it’s been difficult to reduce", value: 2 },
      { text: "Yes, and it feels like it came out of nowhere", value: 3 },
    ],
  },
  {
    context: "Current HRT use may affect symptom perception and hormone balance.",
    question: "6. Are you currently using hormone replacement therapy (HRT)?",
    type: "radio",
    options: [
      { text: "No, never", value: 0 },
      { text: "I’ve tried it in the past but stopped", value: 1 },
      { text: "Yes, currently using", value: 2 },
    ],
  },
  {
    context: "Estrogen helps maintain bone density, and its loss increases fracture risk postmenopause.",
    question: "7. Have you ever been diagnosed with osteopenia or osteoporosis?",
    type: "radio",
    options: [
      { text: "No", value: 0 },
      { text: "Yes, osteopenia", value: 2 },
      { text: "Yes, osteoporosis", value: 3 },
    ],
  },
  {
    context: "Exercise supports hormone balance, bone health, and weight management.",
    question: "8. How often do you engage in moderate to intense physical activity?",
    type: "radio",
    options: [
      { text: "Almost never", value: 3 },
      { text: "1–2 times per week", value: 2 },
      { text: "3–4 times per week", value: 1 },
      { text: "5+ times per week", value: 0 },
    ],
  },
  {
    context: "Fruits and vegetables are anti-inflammatory and support hormonal detoxification.",
    question: "9. How many servings of fresh fruits and vegetables do you eat daily?",
    type: "radio",
    options: [
      { text: "0–1 servings", value: 3 },
      { text: "2–3 servings", value: 2 },
      { text: "4–5 servings", value: 1 },
      { text: "6+ servings", value: 0 },
    ],
  },
  {
    context: "Alcohol can worsen symptoms like hot flashes, sleep issues, and belly fat.",
    question: "10. How often do you consume alcoholic beverages?",
    type: "radio",
    options: [
      { text: "Daily or almost daily", value: 3 },
      { text: "A few times per week", value: 2 },
      { text: "Occasionally", value: 1 },
      { text: "Rarely or never", value: 0 },
    ],
  },
  {
    context: "Protein supports muscle mass, metabolism, and stable blood sugar during hormonal changes.",
    question: "11. How often do you eat lean meats or fish?",
    type: "radio",
    options: [
      { text: "Rarely or never", value: 3 },
      { text: "1–2 times per week", value: 2 },
      { text: "3–4 times per week", value: 1 },
      { text: "5+ times per week", value: 0 },
    ],
  },
  {
    context: "Past HRT use may signal a more intense symptom history or medical recommendation.",
    question: "12. Have you ever used hormone replacement therapy (HRT)?",
    type: "radio",
    options: [
      { text: "Never", value: 0 },
      { text: "Yes, briefly in the past", value: 1 },
      { text: "Yes, for a year or more", value: 2 },
    ],
  },
];

export default function Quiz() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState("");
  const resultRef = useRef(null);

  const handleChange = (questionIndex, optionValue, type) => {
    setAnswers(prev => {
      if (type === "checkbox") {
        // For checkboxes, we need to toggle the specific value
        const current = prev[questionIndex] || [];
        const valueExists = current.includes(optionValue);
        
        // If value exists, remove it; otherwise add it
        const updated = valueExists
          ? current.filter(v => v !== optionValue)
          : [...current, optionValue];
          
        return { ...prev, [questionIndex]: updated };
      } else {
        // For radio buttons, just set the single value
        return { ...prev, [questionIndex]: [optionValue] };
      }
    });
  };

  const calculateScore = () => {
    let score = 0;
    
    // Log the current answers for debugging
    console.log('Current answers:', answers);
    
    // Check if any answers have been selected
    if (Object.keys(answers).length === 0) {
      alert('Please answer at least one question before submitting.');
      return;
    }
    
    Object.entries(answers).forEach(([questionIndex, vals]) => {
      console.log(`Question ${questionIndex} values:`, vals);
      vals.forEach(v => {
        const valueAsNumber = parseInt(v, 10);
        if (!isNaN(valueAsNumber)) {
          score += valueAsNumber;
          console.log(`Adding ${valueAsNumber} to score, new total: ${score}`);
        }
      });
    });

    let stage = "";
    if (score <= 17) {
      stage = "You may be in **Perimenopause** – hormonal changes are underway.";
    } else if (score <= 26) {
      stage = "You may be in **Menopause** – symptoms may be at their peak.";
    } else {
      stage = "You may be in **Postmenopause** – focus on long-term support.";
    }
    
    console.log(`Final score: ${score}, Stage: ${stage}`);
    setResult(`Your Total Score: ${score}\n${stage}`);
    
    // Scroll to results after a short delay to ensure state has updated
    setTimeout(() => {
      if (resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <div className="quiz">
      <h1>What Stage of Menopause Are You In — And What Your Body Might Be Telling You</h1>
      <p>
        Take this quiz to discover where you may be in your menopause journey —
        and what your body is trying to tell you.
      </p>
      <p><strong>Instructions:</strong></p>
      <ul>
        <li>Answer all 12 questions.</li>
        <li>Each answer has an assigned point value.</li>
        <li>Your total score will determine your stage.</li>
      </ul>

      <form onSubmit={e => e.preventDefault()}>
        {quizData.map((q, i) => (
          <div className="question" key={i}>
            <p><em>{q.context}</em></p>
            <strong>{q.question}</strong>
            <div>
              {q.options.map((opt, j) => (
                <label key={j} style={{ display: "block", margin: "0.3rem 0" }}>
                  <input
                    type={q.type}
                    name={`q${i}`}
                    value={opt.value}
                    checked={
                      q.type === "checkbox" 
                        ? (answers[i] || []).includes(String(opt.value))
                        : (answers[i] || [])[0] === String(opt.value)
                    }
                    onChange={() =>
                      handleChange(i, String(opt.value), q.type)
                    }
                  />{" "}
                  {opt.text}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button type="button" onClick={calculateScore}>Submit</button>
      </form>

      {/* Add extra spacing before results */}
      <div style={{ height: "2rem" }}></div>
      
      {result && (
        <div 
          ref={resultRef}
          className="result" 
          style={{ 
            marginTop: "3rem", 
            marginBottom: "3rem",
            padding: "1.5rem", 
            fontWeight: "bold", 
            fontSize: "1.2rem",
            background: "#e9ffe9", 
            borderLeft: "5px solid #4CAF50",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
          }}
        >
          {result.split("\n").map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
}
