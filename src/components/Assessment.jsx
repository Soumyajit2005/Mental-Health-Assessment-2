import React, { useState } from 'react';

import '../styles/Assessment.css';

const Assessment = () => {
  const questionTexts = [
    {
      questionText: 'How would you rate your overall mental health today?',
      answerOptions: ['Excellent', 'Good', 'Fair', 'Poor'],
    },
    {
      questionText: 'Have you been experiencing increased stress or anxiety recently?',
      answerOptions: ['Yes', 'No'],
    },
    {
      questionText: 'Do you have trouble sleeping at night?',
      answerOptions: ['Yes', 'No'],
    },
    {
      questionText: 'Are you able to concentrate on tasks effectively?',
      answerOptions: ['Yes', 'No'],
    },
    {
      questionText: "How have you been feeling lately?",
      answerOptions: ["Great", "Okay", "Not so good", "Terrible"],
    },
    {
      questionText: "Are there specific situations or events that have been causing you stress or anxiety recently?",
      answerOptions: ["Yes", "No"],
    },
    {
      questionText: "Have you experienced any major life changes recently, such as a job loss, relationship breakup, or the loss of a loved one?",
      answerOptions: ["Yes", "No"],
    },
    {
      questionText: "Do you find it difficult to concentrate or make decisions?",
      answerOptions: ["Yes", "No"],
    },
    {
      questionText: "Have you noticed any changes in your sleeping patterns, such as difficulty falling asleep or sleeping too much?",
      answerOptions: ["Yes", "No"],
    },
    {
      questionText: "Are you experiencing a loss of interest or pleasure in activities you used to enjoy?",
      answerOptions: ["Yes", "No"],
    },
    {
      questionText: "Do you ever have thoughts of harming yourself or ending your life?",
      answerOptions: ["Yes", "No"],
    },
  
    // Add more questionTexts as needed
  ];

  const [currentquestionText, setCurrentquestionText] = useState(0);
  const [responses, setResponses] = useState([]);

  const handleAnswerClick = (answer) => {
    setResponses([...responses, answer]);

    const nextquestionText = currentquestionText + 1;
    if (nextquestionText < questionTexts.length) {
      setCurrentquestionText(nextquestionText);
    } else {
      // All questionTexts answered, you can handle the end of the assessment here
      console.log('Assessment completed. Responses:', responses);
    }
  };

  const currentquestionTextData = questionTexts[currentquestionText];

  return (
    <div>
      <div className='questionText-section'>
        <div className='questionText-count'>
          <span>questionText {currentquestionText + 1}</span>/{questionTexts.length}
        </div>
        <div className='questionText-text'>{currentquestionTextData.questionText}</div>
      </div>
      <div className='answer-section'>
        {currentquestionTextData.answerOptions.map((option, index) => (
          <button key={index} onClick={() => handleAnswerClick(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Assessment;
