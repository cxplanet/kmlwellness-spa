import React, { useEffect } from 'react';

const QuizRedirect = () => {
  useEffect(() => {
    // Redirect to the static HTML page
    window.location.href = '/menopause_quiz.html';
  }, []);

  return (
    <div>
      <p>Redirecting to quiz...</p>
    </div>
  );
};

export default QuizRedirect;
