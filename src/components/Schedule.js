import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

export const ScheduleItem = ({ datetime, title, place }) => (
    <div className="list-item" >
        <div>
            {{ title } && <h3 className="list-item__title">{title}</h3>}
            {{ place } && <span className="list-item__sub-title">{place}</span>}
            {{ datetime } && <span className="list-item__sub-title"> {datetime}</span>}
        </div>
    </div>
);

export class ScheduleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: undefined,
            available: undefined
        }
    }

    componentDidMount() {
        if (this.props.events.length > 0) {
            const avails = this.getDates(this.props.events);
            this.setState(() => ({
                available: avails,
                selected: avails[0]
            }))
        }
    }

    getDates = (list) => {
        const dates = new Set(list.map(event => (
            moment(event.datetime).format('YYYY/MM/DD')
        )));        
        return [...dates];
    }

    render() {
        const { events } = this.props;
        const { available, selected } = this.state;
        if(available) {
            console.log(available);
            return (
                <div className="section" id="schedule">
                    <div className="content-container">
                        <div className="section__title">
                            Schedule
                        </div>
                        <div className="side-menu-layout">
                            <div className="side-menu-layout__controls">
                                {available.map(index => (
                                    index === selected ? (
                                        <span key={uuidv4()} className="side-menu-layout__controls__item side-menu-layout__controls__item--active ">
                                            {index}
                                        </span>
                                    ) : (
                                        <span key={uuidv4()} className="side-menu-layout__controls__item ">
                                            {index}
                                        </span>
                                    )
                                ))}

                            </div>
                            <div className="side-menu-layout__content">
                                <div className="list-header">
                                    {events[0].datetime}
                                </div>
                                <div className="list-body">
                                    {events.length === 0 ? (
                                        <div className="list-item list-item--message">
                                            <span>No Schedule available</span>
                                        </div>
                                    ) : (
                                            events.map((event) => {
                                                return <ScheduleItem key={event.id} {...event} />
                                            })
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }
}

//map function
const mapStateToProps = (state) => {
    return {
        events: state.events
    };
};

export default connect(mapStateToProps)(ScheduleList);
