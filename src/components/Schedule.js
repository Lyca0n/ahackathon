import React from 'react';
import { connect } from 'react-redux';

export const ScheduleItem = ({ datetime, title, place }) => (
    <div className="list-item" >
        <div>
            {{title} && <h3 className="list-item__title">{title}</h3>}
            {{place} && <span className="list-item__sub-title">{place}</span>}
            {{datetime} && <span className="list-item__sub-title"> {datetime.format('HH:MM:SS')}</span>}
        </div>
    </div>
);

export const ScheduleList = (props) => (
    <div className="section">
        <div className="content-container">
            <div className="section__title">
                Schedule
            </div>
            <div className="side-menu-layout">
                <div className="side-menu-layout__controls">
                    <span className="side-menu-layout__controls__item side-menu-layout__controls__item--active">{props.events[0].datetime.format('MMM D, YYYY')}</span>                    
                </div>
                <div className="side-menu-layout__content">
                    <div className="list-header">
                        {props.events[0].datetime.format('YYYY-MM-DD HH:MM:SS')}
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
