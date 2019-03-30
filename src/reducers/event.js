import * as ActionTypes from '../constants/ActionTypes';
import moment from 'moment';

const scheduleReducerDefaultState = [
    {
        id:1,
        datetime: '2019-03-25T07:00:00Z',
        title: "Check in",
        place: "Extra Miler Room"
    },
    {
        id:2,
        datetime: '2019-03-25T07:00:00Z',
        title: "Opening ceremony",
        place: "Extra Miler Room"
    },
    {
        id:3,
        datetime: '2019-03-27T07:00:00Z',
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