import React from 'react';

const FAQItem = ({ question, answer }) => (
    <div className="list-item" >
        <div>
            {question && <h3 className="list-item__title">{question}</h3>}
            {answer && <span className="list-item__sub-title">{answer}</span>}
        </div>        
    </div>
);
export default FAQItem;