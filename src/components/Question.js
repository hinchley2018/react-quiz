import React from 'react';
import PropTypes from 'prop-types';
const Question = (props) => {
    return (
        <div>
            <h2>{props.content}</h2>
            <div className="questionCount">
                <span>{props.counter}</span> of <span>{props.total}</span>
            </div>
        </div>

    );
};
Question.propTypes ={
  content: PropTypes.string,
    counter: PropTypes.number,
    total: PropTypes.number
};

export default Question;