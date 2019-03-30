import * as ActionTypes from '../constants/ActionTypes';

const faqReducerDefaultState = [
    {
        id:1,
        question: "What is a Hackathon?",
        answer: "A hackathon is an event where people from all different backgrounds work together to learn new skills and develop innovative solutions to real problems."
    }, {
        id:19,
        question: "D​o I have to be technical?",
        answer: "No. Anyone can participate and have fun at the Hackathon. You can be an innovator creating the product vision, you can be a designer building the product interface, you can be a manager running the team, or you can be a tester making sure the solution is bullet proof. "
    }, {
        id:2,
        question: "Do I have to be there the entire time? ",
        answer: "We understand that you have family and other activities on the weekend, you can feel free to come/go throughout the weekend. However we encourage you attend on Friday to join a team and workout your schedule with your partners. "
    }, {
        id:3,
        question: "Can I create something with AutoZone in mind, knowing that AutoZone will never implement it?",
        answer: "All software created during the hackathon is owned by the creator, however the creator grants AutoZone an unlimited right to use the software. For further details please see the terms and conditions."
    }, {
        id:4,
        question: "How do I get my idea accepted/selected? ",
        answer: "Submit properly formed ideas here. Then right before the event, a polling will be sent out for people to vote on their favorite idea. For an idea to be popular, it's important for others to see the value in the way that you do. To gain visibility and traction, fill out the submission form as fully as possible and demonstrate why it's important."
    }, {
        id:5,
        question: "How do I know if this is not just more work?",
        answer: "You do not need to spend time at the Hackathon working! You can participate in a team competing to solve a problem, spend time on your personal projects, or even float around and help a number of teams as work to solve their problems. There is no requirement for how you participate or what you work on."
    }, {
        id:6,
        question: "What software do I have to use? Will there be any restrictions?",
        answer: "You can use any software you like as long as you are licensed to use it.  While most of our development will target free and open source platforms, you are free to use a proprietary application container or library if you can secure the licensing to use it.  You may also use evaluation versions of enterprise software packages if the license permits use for development purposes."
    }, {
        id:7,
        question: "How to form my team, or how do I find a team?",
        answer: "You will get to pitch your idea at the beginning of the event, then there will be time for people to freely form teams based on interests."
    }
    , {
        id:8,
        question: "Can I have non AutoZoner participants?",
        answer: "The 2018 summer Hackathon is for AutoZoner and AutoZone interns only to participate."
    }
    , {
        id:9,
        question: "Can I bring my kids during the event?",
        answer: "Yes, you are free to bring your kids to the event; however you will need to make sure they are signed in with security. You will also need to escort your child the entire time while they are in the building."
    }
    , {
        id:10,
        question: "How many people per team?",
        answer: "There’s no limit, but most team will probably be around 3-5 people."
    }
    , {
        id:11,
        question: "What’s the sleeping arrangement?",
        answer: "There’s no special arrangement. You are welcome to leave for home when you need,​ or stay in the office as you please."
    }
    , {
        id:12,
        question: "Can AutoZoner participate remotely?",
        answer: "No,  we are not setting up remote technologies to allow remote participants for this Hackathon."
    }
    , {
        id:13,
        question: "What types of hardware can I use?",
        answer: "Anything you like such as Virtual reality, personal laptop, drones, arduino, or raspberry pi."
    }
    , {
        id:14,
        question: "Can people bring in projects that they’ve been working on?",
        answer: "Yes. Personal projects which have hit roadblocks or are in need of a second (or third, or fourth?) opinion are welcome at the AutoZone Hackathon."
    }
    , {
        id:15,
        question: "Who owns the Intellectual property?",
        answer: "his information is described in detail in the participation agreement​."
    }
    , {
        id:16,
        question: "Will there be dress code requirement?",
        answer: "Non-offensive casual"
    }, {
        id:17,
        question: "Will I get feedback? ",
        answer: "There will be a sunday peer review and a chance to present to executives who attend the final presentation "
    }
    , {
        id:18,
        question: "When does the event start and end?",
        answer: "The event starts at 5pm Friday and ends at 2pm on Sunday​"
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