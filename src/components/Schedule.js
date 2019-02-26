import React from 'react';
import { connect } from 'react-redux';

export const ScheduleItem = ({ time, title, place }) => (
    <div className="list-item" >
        <div>
            {time && <h3 className="list-item__title">{time}</h3>}
            {title && <span className="list-item__sub-title">{title}</span>}
            {place && <small className="list-item__sub-title">{place}</small>}
        </div>
    </div>
);

export const ScheduleList = (props) => (
    <div className="section">
        <div className="content-container">
            <div className="section__title">
                Schedule
        </div>
        <div className="list-header">
            {props.events[0].datetime.format('YYYY-MM-DD')}
        </div>
            <div className="list-body">
                {props.events.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Schedule available</span>
                    </div>
                ) : (
                        props.events.map((event) => {
                            return <ScheduleItem key={event.indexOf} {...event} />
                        })
                    )}
            </div>
        </div>
    </div>
);

//map function
const mapStateToProps = (state) => {
    return {
        events: state.events
    };
};

export default connect(mapStateToProps)(ScheduleList);
