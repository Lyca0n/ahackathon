import * as ActionTypes from '../constants/ActionTypes';

const aboutReducerDefaultState = [
    {
        title: "The AutoZoner Hackathon",
        text: "is an initiative with the purpose to create an open platform for AutoZoners to invest in their personal and professional growth and development. Throughout a weekend, attendees will explore new technologies, work on innovative ideas, and build lasting relationships."
    },{
        title: "Our vision",
        text: " AutoZone Hackathon builds enthusiasm and pride amongst employees. We encourage a culture of openness, innovation, and diversity by creating an environment for exploration and collaboration."
    }
];

export default (state = aboutReducerDefaultState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ABOUT:
            return action.about;
        default:
            return state;
    }

}