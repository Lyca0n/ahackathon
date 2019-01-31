import React from 'react';
import { connect } from 'react-redux';
import FAQItem from './FAQItem';

export const FAQList= (props)=>(
    <div className="content-container">
        <div className="list-header">
            FAQs
        </div>        
        <div className="list-body">
        {props.faqs.length ===0 ? (   
            <div className="list-item list-item--message">
            <span>No FAQs</span>         
            </div>
        ):(
            props.faqs.map((faq)=>{
                return <FAQItem key={faq.indexOf} {...faq}/>
            })
        )}
        </div>
    </div>
);

//map function
const mapStateToProps =(state)=>{
    return {
        faqs: state.faqs
    };
};

export default connect(mapStateToProps)(FAQList)