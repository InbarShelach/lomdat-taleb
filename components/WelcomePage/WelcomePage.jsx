import React from 'react';
import { useState } from 'react';
import "./WelcomePage.css"; // מחובר לקובץ ה־CSS
import instructions from '../../information/instructions.json';

function WelcomePage() {
    const [showFirst, setShowFirst] = useState(true);
    const start = () => {
    setShowFirst(!showFirst); // הופך בין true ל-false
    }
  return(
    <div className="WelcomePage">
     {showFirst ? (
    <div>
      
      <div className="text-box">
        <h1>ברוכים הבאים</h1>
        <p>ללומדת תל"ב של בהל"צ</p>
        <button onClick={start} className="start-button">התחלה</button>
      </div>
      
    </div>
    ) : ( 
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
            <button onClick={start} className="next-button">המשך</button>
        </div>
        
    )}
    </div>
  );
}
export default WelcomePage;