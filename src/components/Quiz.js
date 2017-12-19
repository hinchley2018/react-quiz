import React from 'react';
import Question from "./Question";
import PropTypes from 'prop-types';
import AnswerOption from "./AnswerOption";

function renderAnswerOptions(key) {
    return (
        <AnswerOption
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={props.answer}
            questionId={props.questionId}
            onAnswerSelected={props.onAnswerSelected}
        />
    );
}

const Quiz = (props) => {
    return (
        <div>
            <Question
                counter={props.questionId}
                total={props.questionTotal}
                content={props.question}
            />
            <ul>
                {props.answerOptions.map(renderAnswerOptions)}
            </ul>
        </div>
    );
};
Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};
export default Quiz;