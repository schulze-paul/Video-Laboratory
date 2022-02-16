import PropTypes from 'prop-types'
import Question from './Question'

const Questions = ({questions, onAnswerButtonPressed}) => {

    if (!questions) {
        return (
            <div></div>
        )
    }
    else {
        return (
            <div className='questions-display'>
                {questions
                    .filter(question => question !== null)
                    .map((question) => (
                        <Question 
                            className='question-display' 
                            key={question.formId} 
                            question={question} 
                            onAnswerButtonPressed={onAnswerButtonPressed}
                        />
                    ))
                }    
            </div>
        )
    }
}


Questions.propTypes = {
    questions: PropTypes.array
}

export default Questions