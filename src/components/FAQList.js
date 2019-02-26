import React from 'react';
import { connect } from 'react-redux';

export const FAQItem = ({ question, answer }) => (
    <div className="card" >
        <div>
            {question && <h3 className="">{question}</h3>}
            {answer && <span className="">{answer}</span>}
        </div>
    </div>
);

export const FAQList = (props) => (
    <div className="section">
        <div className="content-container">
            <div className="section__title">
                FAQs
        </div>
            <div className="cards__container">
                {props.faqs.length === 0 ? (
                    <div className="warning warning--message">
                        <span>No FAQs</span>
                    </div>
                ) : (
                        props.faqs.map((faq) => {
                            return <FAQItem key={faq.indexOf} {...faq} />
                        })
                    )}
            </div>
        </div>
    </div>
);

//map function
const mapStateToProps = (state) => {
    return {
        faqs: state.faqs
    };
};

export default connect(mapStateToProps)(FAQList)