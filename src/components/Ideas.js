import React from 'react';
import { connect } from 'react-redux';

const Idea = (props)=>(
    <div className="gallery_item">
    </div>
)

const Ideas = (props)=>(
    <div className="content-container">
    <div className="section__title">
        Ideas
    </div>
    <div className="side-menu-layout">
        <div className="side-menu-layout__controls">
            <span></span>
        </div>
        <div className="side-menu-layout__content">
                {props.ideas.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Schedule available</span>
                    </div>
                ) : (
                        props.ideas.map((idea) => {
                            return <div>{idea.title}</div>
                        })
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