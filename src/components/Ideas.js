import React from 'react';
import { connect } from 'react-redux';

const Idea = (props) => (
    <div className="gallery_item">
    </div>
)

const Ideas = (props) => (
    <div className="section">
        <div className="content-container">
            <div className="section__title">
                Ideas
    </div>
            <div className="side-menu-layout">
                <div className="side-menu-layout__controls">
                    <p>
                    Do you have an awesome idea to revolutionize our business, step forward,
                    meanwhile you can also check some of the other proposals from your peers.</p>
                </div>
                <div className="side-menu-layout__content">
                    {props.ideas.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span><b>No ideas submitted yet, hurry you might be the first! </b></span>
                        </div>
                    ) : (
                            <div className="cards__container">
                                {props.ideas.map((idea) => (
                                <div key={idea.id} className="card card--sliding">
                                    <h3>{idea.title}</h3>
                                    <span>{idea.description}</span>
                                </div>
                                ))}
                            </div>
                        )}
                </div>
            </div>
        </div>
    </div>
);

//map function
const mapStateToProps = (state) => {
    return {
        ideas: state.ideas
    };
};

export default connect(mapStateToProps)(Ideas);