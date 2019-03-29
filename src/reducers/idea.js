import * as ActionTypes from '../constants/ActionTypes';
import moment from 'moment';

const ideasReducerDefaultState = [
    {
        datetime: moment(),
        likes: "80",
        title: "Alexa Skill",
        description: "AZ alexa skill to order parts",
        proposer: "Julio Villalva",
        benefit: "Open new market of digital sales",
        outcome: "Revenue from alexa generated orders",
        status: "New",
        files: "idea.pdf",
        id:2,
        submitter: "JV"
    }, {
        datetime: moment(),
        likes: "80",
        title: "Frequence heatmap",
        description: "AZ alexa skill to order parts",
        proposer: "Julio Villalva",
        benefit: "Open new market of digital sales",
        outcome: "Revenue from alexa generated orders",
        status: "New",
        files: "idea.pdf",
        id:3,
        submitter: "JV"
    }
];

export default (state = ideasReducerDefaultState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_IDEA:
            return action.event;
        default:
            return state;
    }

}