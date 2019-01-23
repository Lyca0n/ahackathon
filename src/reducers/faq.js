import * as ActionTypes from '../constants/ActionTypes';

const faqReducerDefaultState = [
    {
        question: "What is a Hackathon?",
        answer:"A hackathon is an event where people from all different backgrounds work together to learn new skills and develop innovative solutions to real problems."
    },    {
        question: "D​o I have to be technical?",
        answer:"No. Anyone can participate and have fun at the Hackathon. You can be an innovator creating the product vision, you can be a designer building the product interface, you can be a manager running the team, or you can be a tester making sure the solution is bullet proof. "
    },    {
        question: "Do I have to be there the entire time? ",
        answer:"We understand that you have family and other activities on the weekend, you can feel free to come/go throughout the weekend. However we encourage you attend on Friday to join a team and workout your schedule with your partners. "
    },    {
        question: "What is a Hackathon?",
        answer:"A hackathon is an event where people from all different backgrounds work together to learn new skills and develop innovative solutions to real problems."
    },    {
        question: "What is a Hackathon?",
        answer:"A hackathon is an event where people from all different backgrounds work together to learn new skills and develop innovative solutions to real problems."
    },    {
        question: "What is a Hackathon?",
        answer:"A hackathon is an event where people from all different backgrounds work together to learn new skills and develop innovative solutions to real problems."
    },    {
        question: "What is a Hackathon?",
        answer:"A hackathon is an event where people from all different backgrounds work together to learn new skills and develop innovative solutions to real problems."
    },    {
        question: "What is a Hackathon?",
        answer:"A hackathon is an event where people from all different backgrounds work together to learn new skills and develop innovative solutions to real problems."
    }
];

export default (state = faqReducerDefaultState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PINS:
            return action.pins;
        default:
            return state;
    }

}