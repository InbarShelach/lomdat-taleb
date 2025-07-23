import React from 'react';
import { useState } from 'react';
import "./WelcomePage.css"; // מחובר לקובץ ה־CSS
import instructions from '../../information/instructions.json';

function WelcomePage() {
  const [step, setStep] = useState(1);
 
  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  return(
    <div className="WelcomePage">
     {step === 1 && (
    <div>
      
      <div className="text-box">
        <h1>ברוכים הבאים</h1>
        <p>ללומדת תל"ב של בהל"צ</p>
        <button onClick={nextStep} className="start-button">התחלה</button>
      </div>
      
    </div>
    )}
    {step === 2 && ( 
        <div className="explanation scrollbar" >
            <div className='title'>{instructions.introduction.title}</div>
            <div className='second-title'>{instructions.introduction.text}</div>
            <ul className='explanation-list'>
                <li className='explanation-list-item'>{instructions.introduction.explenation1}</li>
                    <ol className='explanation-list-subjects'>
                        <li>{instructions.mainsubject.subject1}</li>    
                        <li>{instructions.mainsubject.subject2}</li>
                        <li>{instructions.mainsubject.subject3}</li>
                        <li>{instructions.mainsubject.subject4}</li>
                        <li>{instructions.mainsubject.subject5}</li>
                    </ol> 
                <li className='explanation-list-item'>{instructions.introduction.explenation2}</li>
                <li className='explanation-list-item'>{instructions.introduction.explenation3}</li>
                <li className='explanation-list-item'>{instructions.introduction.explenation4}</li>
            </ul>
            <button onClick={nextStep} className="next-button">המשך</button>
        </div>
        
    )}
    {step === 3 && (
        <div className="explanation scrollbar">
            <div className='title'>{instructions.instraction.title}</div>
            <ul className='explanation-list'>
                <li className='explanation-list-item'>{instructions.instraction.first}</li>
                <li className='explanation-list-item'>{instructions.instraction.second}</li>
                <li className='explanation-list-item'>{instructions.instraction.third}</li>
                <li className='explanation-list-item'>{instructions.instraction.forth}</li>
                <li className='explanation-list-item'>{instructions.instraction.fifth}</li>
            </ul>
        </div>
    )}
    </div>
  );
}
export default WelcomePage;