import React, { useState, useRef } from 'react';
import { jsPDF } from 'jspdf';
import './MenoQuiz.css';

const quizData = [
  {
    context: "Most women enter perimenopause between their early 40s and mid-50s.",
    question: "1. How old are you?",
    type: "radio",
    options: [
      { text: "Under 40", value: 0 },
      { text: "40–45", value: 1 },
      { text: "46–51", value: 2 },
      { text: "Over 51", value: 3 }
    ]
  },
  {
    context: "Cycle irregularity is often one of the first noticeable signs of perimenopause.",
    question: "2. How regular are your menstrual cycles?",
    type: "radio",
    options: [
      { text: "Very regular (28–35 days apart)", value: 0 },
      { text: "Sometimes irregular", value: 2 },
      { text: "Haven't had a period in 12+ months", value: 4 },
      { text: "No periods for years", value: 5 }
    ]
  },
  {
    context: "Twelve months without a period is the clinical marker for menopause.",
    question: "3. Have your periods completely stopped for at least a year?",
    type: "radio",
    options: [
      { text: "No", value: 0 },
      { text: "Yes", value: 5 }
    ]
  },
  {
    context: "These are some common symptoms triggered by shifting hormone levels, especially estrogen decline.",
    question: "4. Are you experiencing any of the following symptoms? (Select all that apply)",
    type: "checkbox",
    options: [
      { text: "Hot flashes", value: 1 },
      { text: "Night sweats", value: 1 },
      { text: "Vaginal dryness", value: 1 },
      { text: "Mood swings", value: 1 },
      { text: "Brain fog", value: 1 },
      { text: "Sleep disturbances", value: 1 },
      { text: "Digestive Issues", value: 1 },
      { text: "Joint or muscle pain", value: 1 },
      { text: "Loss of libido", value: 1 }
    ]
  },
  {
    context: "Hormonal changes often lead to fat redistribution, especially around the midsection.",
    question: "5. Have you noticed an increase in belly fat that's hard to lose?",
    type: "radio",
    options: [
      { text: "No", value: 0 },
      { text: "A little, but manageable", value: 1 },
      { text: "Yes, and it's been difficult to reduce", value: 2 },
      { text: "Yes, and it feels like it came out of nowhere", value: 3 }
    ]
  },
  {
    context: "Current HRT use may affect symptom perception and hormone balance.",
    question: "6. Are you currently using hormone replacement therapy (HRT)?",
    type: "radio",
    options: [
      { text: "No, never", value: 0 },
      { text: "I've tried it in the past but stopped", value: 1 },
      { text: "Yes, currently using", value: 2 }
    ]
  },
  {
    context: "Estrogen helps maintain bone density, and its loss increases fracture risk postmenopause.",
    question: "7. Have you ever been diagnosed with osteopenia or osteoporosis?",
    type: "radio",
    options: [
      { text: "No", value: 0 },
      { text: "Yes, osteopenia", value: 2 },
      { text: "Yes, osteoporosis", value: 3 }
    ]
  },
  {
    context: "Exercise supports hormone balance, bone health, and weight management.",
    question: "8. How often do you engage in moderate to intense physical activity?",
    type: "radio",
    options: [
      { text: "Almost never", value: 3 },
      { text: "1–2 times per week", value: 2 },
      { text: "3–4 times per week", value: 1 },
      { text: "5+ times per week", value: 0 }
    ]
  },
  {
    context: "Fruits and vegetables are anti-inflammatory and support hormonal detoxification.",
    question: "9. How many servings of fresh fruits and vegetables do you eat daily?",
    type: "radio",
    options: [
      { text: "0–1 servings", value: 3 },
      { text: "2–3 servings", value: 2 },
      { text: "4–5 servings", value: 1 },
      { text: "6+ servings", value: 0 }
    ]
  },
  {
    context: "Alcohol can worsen symptoms like hot flashes, sleep issues, and belly fat.",
    question: "10. How often do you consume alcoholic beverages?",
    type: "radio",
    options: [
      { text: "Daily or almost daily", value: 3 },
      { text: "A few times per week", value: 2 },
      { text: "Occasionally", value: 1 },
      { text: "Rarely or never", value: 0 }
    ]
  },
  {
    context: "Protein supports muscle mass, metabolism, and stable blood sugar during hormonal changes.",
    question: "11. How often do you eat lean meats or fish?",
    type: "radio",
    options: [
      { text: "Rarely or never", value: 3 },
      { text: "1–2 times per week", value: 2 },
      { text: "3–4 times per week", value: 1 },
      { text: "5+ times per week", value: 0 }
    ]
  },
  {
    context: "Past HRT use may signal a more intense symptom history or medical recommendation.",
    question: "12. Have you ever used hormone replacement therapy (HRT)?",
    type: "radio",
    options: [
      { text: "Never", value: 0 },
      { text: "Yes, briefly in the past", value: 1 },
      { text: "Yes, for a year or more", value: 2 }
    ]
  }
];

const Results = ({ result, messageRef }) => {
  if (!result) return null;

  const { score, stage, answers } = result;

  const saveQuizResultsAsPDF = () => {
    const doc = new jsPDF();
    const date = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    let yPos = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const maxWidth = pageWidth - (margin * 2);
    
    doc.setFontSize(16);
    doc.setFont(undefined, 'bold');
    doc.text('MENOPAUSE QUIZ RESULTS', margin, yPos);
    yPos += 10;
    
    doc.setFontSize(11);
    doc.setFont(undefined, 'normal');
    doc.text(`Date: ${date}`, margin, yPos);
    yPos += 7;
    doc.text(`Total Score: ${score}`, margin, yPos);
    yPos += 7;
    doc.text(`Stage: ${stage.replace(/\*\*/g, '')}`, margin, yPos);
    yPos += 12;
    
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    const titleLines = doc.splitTextToSize('What Stage of Menopause Are You In — And What Your Body Might Be Telling You', maxWidth);
    doc.text(titleLines, margin, yPos);
    yPos += (titleLines.length * 7) + 10;
    
    doc.setFontSize(10);
    quizData.forEach((q, idx) => {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }
      
      doc.setFont(undefined, 'bold');
      doc.text(`QUESTION ${idx + 1}`, margin, yPos);
      yPos += 7;
      
      doc.setFont(undefined, 'italic');
      const contextLines = doc.splitTextToSize(`Context: ${q.context}`, maxWidth);
      doc.text(contextLines, margin, yPos);
      yPos += (contextLines.length * 5) + 3;
      
      doc.setFont(undefined, 'bold');
      const questionLines = doc.splitTextToSize(q.question, maxWidth);
      doc.text(questionLines, margin, yPos);
      yPos += (questionLines.length * 5) + 5;
      
      doc.setFont(undefined, 'normal');
      q.options.forEach(opt => {
        const isSelected = answers[idx] && (q.type === 'checkbox' ? answers[idx].includes(opt.text) : answers[idx].includes(String(opt.value)));
        const marker = isSelected ? '[✓]' : '[ ]';
        const optionText = `${marker} ${opt.text}`;
        const optionLines = doc.splitTextToSize(optionText, maxWidth - 5);
        doc.text(optionLines, margin + 5, yPos);
        yPos += (optionLines.length * 5);
      });
      
      yPos += 8;
    });
    
    doc.addPage();
    yPos = 20;
    
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('RESULTS INTERPRETATION', margin, yPos);
    yPos += 10;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    
    let interpretation = '';
    if (stage.includes('Perimenopause')) {
      interpretation = `You may be in Perimenopause – Hormonal changes are starting or underway.\n\nPerimenopause is the transitional phase before menopause when hormone levels begin to fluctuate. This stage can last several years and is characterized by irregular periods and various symptoms as your body adjusts to changing estrogen and progesterone levels.`;
    } else if (stage.includes('Menopause')) {
      interpretation = `You may be in Menopause – No periods for 12+ months, symptoms may peak.\n\nMenopause is officially diagnosed after 12 consecutive months without a period. This marks the end of your reproductive years. Symptoms may be at their peak during this time as your body continues to adjust to lower hormone levels.`;
    } else {
      interpretation = `You may be in Postmenopause – Time to focus on long-term support for bones, metabolism, and mood.\n\nPostmenopause refers to the years after menopause. While some symptoms may ease, it's important to focus on long-term health, including bone density, cardiovascular health, and maintaining a healthy weight.`;
    }
    
    interpretation.split('\n\n').forEach(paragraph => {
      const lines = doc.splitTextToSize(paragraph, maxWidth);
      doc.text(lines, margin, yPos);
      yPos += (lines.length * 5) + 5; // Add space between paragraphs
    });
    
    const fileName = `menopause-quiz-results-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
  };

  const saveQuizResultsAsText = () => {
    const date = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    let resultsText = `MENOPAUSE QUIZ RESULTS\n`;
    resultsText += `${'='.repeat(70)}\n\n`;
    resultsText += `Date: ${date}\n`;
    resultsText += `Total Score: ${score}\n`;
    resultsText += `Stage: ${stage.replace(/\*\*/g, '')}\n\n`;
    resultsText += `${'='.repeat(70)}\n\n`;
    
    resultsText += `What Stage of Menopause Are You In — And What Your Body Might Be Telling You\n\n`;
    resultsText += `${'='.repeat(70)}\n\n`;
    
    quizData.forEach((q, idx) => {
      resultsText += `QUESTION ${idx + 1}\n`;
      resultsText += `${'-'.repeat(70)}\n`;
      resultsText += `Context: ${q.context}\n\n`;
      resultsText += `${q.question}\n\n`;
      
      q.options.forEach(opt => {
        const isSelected = answers[idx] && (quizData[idx].type === 'checkbox' ? answers[idx].includes(opt.text) : answers[idx].includes(String(opt.value)));
        const marker = isSelected ? '✓' : ' ';
        resultsText += `  [${marker}] ${opt.text}\n`;
      });
      
      resultsText += `\n`;
    });
    
    resultsText += `${'='.repeat(70)}\n\n`;
    resultsText += `RESULTS INTERPRETATION\n`;
    resultsText += `${'='.repeat(70)}\n\n`;
    if (stage.includes('Perimenopause')) {
      resultsText += `You may be in Perimenopause – Hormonal changes are starting or underway.\n\n`;
      resultsText += `Perimenopause is the transitional phase before menopause when hormone levels\n`;
      resultsText += `begin to fluctuate. This stage can last several years and is characterized by\n`;
      resultsText += `irregular periods and various symptoms as your body adjusts to changing\n`;
      resultsText += `estrogen and progesterone levels.\n`;
    } else if (stage.includes('Menopause')) {
      resultsText += `You may be in Menopause – No periods for 12+ months, symptoms may peak.\n\n`;
      resultsText += `Menopause is officially diagnosed after 12 consecutive months without a period.\n`;
      resultsText += `This marks the end of your reproductive years. Symptoms may be at their peak\n`;
      resultsText += `during this time as your body continues to adjust to lower hormone levels.\n`;
    } else {
      resultsText += `You may be in Postmenopause – Time to focus on long-term support for bones,\n`;
      resultsText += `metabolism, and mood.\n\n`;
      resultsText += `Postmenopause refers to the years after menopause. While some symptoms may\n`;
      resultsText += `ease, it's important to focus on long-term health, including bone density,\n`;
      resultsText += `cardiovascular health, and maintaining a healthy weight.\n`;
    }

    const fileName = `menopause-quiz-results-${new Date().toISOString().split('T')[0]}.txt`;
    const blob = new Blob([resultsText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const StageDisplay = ({ stage }) => {
    console.log('Stage variable:', stage);
    const boldRegex = /\*\*(.*?)\*\*/g;
    const parts = stage.split(boldRegex);

    return (
      <p>
        {parts.map((part, index) => {
          if (index % 2 === 1) {
            return <strong key={index}>{part}</strong>;
          }
          return part;
        })}
      </p>
    );
  };

  return (
    <div 
      ref={messageRef}
      className="result"
    >
      <p><strong>Your Total Score: {score}</strong></p>
      <StageDisplay stage={stage} />
      <div style={{ marginTop: '1rem' }}>
        <button onClick={saveQuizResultsAsPDF} style={{ marginRight: '1rem' }}>Save as PDF</button>
        <button onClick={saveQuizResultsAsText}>Save as Text</button>
      </div>
    </div>
  );
};

export default function MenoQuiz() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [unansweredQuestions, setUnansweredQuestions] = useState(new Set());
  const messageRef = useRef(null);

  const handleChange = (questionIndex, value, type, text) => {
    setError("");
    setUnansweredQuestions(prev => {
      const updated = new Set(prev);
      updated.delete(questionIndex);
      return updated;
    });
    setAnswers(prev => {
      if (type === "checkbox") {
        const current = prev[questionIndex] || [];
        const key = text; // Use text as the unique identifier for checkboxes
        const valueExists = current.includes(key);
        const updated = valueExists
          ? current.filter(v => v !== key)
          : [...current, key];
        return { ...prev, [questionIndex]: updated };
      } else {
        return { ...prev, [questionIndex]: [value] }; // Radio buttons use value
      }
    });
  };

  const calculateScore = () => {
    let score = 0;
    
    // Validate that all questions are answered
    const unanswered = new Set();
    quizData.forEach((_, idx) => {
      if (!Array.isArray(answers[idx]) || answers[idx].length === 0) {
        unanswered.add(idx);
      }
    });
    
    if (unanswered.size > 0) {
      setUnansweredQuestions(unanswered);
      setError("Please answer all questions before submitting.");
      setResult(null);
      setTimeout(() => {
        if (messageRef.current) {
          messageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      return;
    }

    // Calculate score
    quizData.forEach((q, i) => {
      if (answers[i]) {
        if (q.type === 'checkbox') {
          // For checkboxes, find the option by text and add its value
          answers[i].forEach(answerText => {
            const selectedOption = q.options.find(opt => opt.text === answerText);
            if (selectedOption) {
              score += selectedOption.value;
            }
          });
        } else {
          // For radio buttons, the value is stored directly
          answers[i].forEach(v => (score += parseInt(v)));
        }
      }
    });

    let stage = "";
    if (score <= 17) {
      stage = "You may be in **Perimenopause** – Hormonal changes are starting or underway.";
    } else if (score <= 26) {
      stage = "You may be in **Menopause** – No periods for 12+ months, symptoms may peak.";
    } else {
      stage = "You may be in **Postmenopause** – Time to focus on long-term support for bones, metabolism, and mood.";
    }
    
    setError("");
    setUnansweredQuestions(new Set());
    setResult({ score, stage, answers });
    
    // Scroll to results after a short delay to ensure state has updated
    setTimeout(() => {
      if (messageRef.current) {
        messageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <div className="quiz-container">
      <h1>What Stage of Menopause Are You In — And What Your Body Might Be Telling You</h1>
      <p>Take this quiz to discover where you may be in your menopause journey — and what your body is trying to tell you.</p>
      <p><strong>Instructions:</strong></p>
      <ul>
        <li>Answer all 12 questions.</li>
        <li>Each answer has an assigned point value.</li>
        <li>Your total score will determine your stage.</li>
      </ul>

      <form onSubmit={e => e.preventDefault()}>
        {quizData.map((q, i) => {
          const isUnanswered = unansweredQuestions.has(i);
          return (
          <div 
            className="question" 
            key={i}
          >
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
                      q.type === 'checkbox'
                        ? (answers[i] || []).includes(opt.text) // Check against text for checkboxes
                        : (answers[i] || []).includes(String(opt.value)) // Check against value for radio buttons
                    }
                    onChange={() => handleChange(i, String(opt.value), q.type, opt.text)}
                  />
                  {opt.text}
                </label>
              ))}
            </div>
            {isUnanswered && (
              <p style={{ color: '#f44336', fontWeight: 'bold', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                ⚠ Please answer this question
              </p>
            )}
          </div>
          );
        })}
        <button type="button" onClick={calculateScore}>Submit</button>
      </form>

      {error ? (
        <div 
          ref={messageRef}
          className="error"
          style={{ marginTop: "2rem", fontWeight: "bold", padding: "1rem" }}
        >
          <p>{error}</p>
        </div>
      ) : result ? (
        <Results 
          result={result} 
          messageRef={messageRef} 
        />
      ) : null}
    </div>
  );
}
