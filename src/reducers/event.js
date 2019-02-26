import * as ActionTypes from '../constants/ActionTypes';
import moment from 'moment';

const scheduleReducerDefaultState = [
    {
        datetime: moment(),
        title: "Check in",
        place: "Extra Miler Room"
    },
    {
        datetime: moment().add(2,'hours'),
        title: "Opening ceremony",
        place: "Extra Miler Room"
    },
    {
        datetime: moment().add(2,'hours'),
        title: "Domain Driven Design Workshop",
        place: "Extra Miler Room"
    }
];

export default (state = scheduleReducerDefaultState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_EVENT:
            return action.event;
        default:
            return state;
    }

}