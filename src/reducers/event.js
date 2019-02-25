import * as ActionTypes from '../constants/ActionTypes';

const scheduleReducerDefaultState = [
    {
        time: "0900",
        title: "Opening ceremony",
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