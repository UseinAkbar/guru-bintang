import React from "react";
import people1 from '../../asset/images/people1.png';
import people2 from '../../asset/images/people2.png';
import people3 from '../../asset/images/people3.png';

const Form = ({children}) => {
    return (
        <div className="userForm">
            <img src={people1} alt="" className="people people-1"/>
            <img src={people2} alt="" className="people people-2"/>
            <img src={people3} alt="" className="people people-3"/>
            {children}
        </div>
    )
}

export default Form