import React from 'react';
import logoBahalaz from "../../assets/images/logo-bahalaz.svg";
import logoPele from "../../assets/images/logo-pele.svg"; // לוגו ימין
import "./Logos.css"; // מחובר לקובץ ה־CSS

//קומפוננטה שמאחסנת את הסמלים של פלא ושל בהלצ ומופיעה על המסך לאורך כל הלומדה

function Logos() {
  return(
    <div className="logos">
        <img src={logoPele} alt="לוגו פלא" className="logo" />
        <img src={logoBahalaz} alt="לוגו בהלצ" className="logo" />
    </div>
  ); 
}
export default Logos;