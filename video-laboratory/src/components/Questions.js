import PropTypes from 'prop-types'
import Question from './Question'

const Questions = ({questions}) => {
    if (!questions) {
        return (
            <div></div>
        )
    }
    else {
        console.log(questions)
        return (
            <div className='questions-display'>
                {questions.map((question) => (<Question className='question-display' key={question.formId} question={question}/>))}    
            </div>
        )
    }
}


Questions.propTypes = {
    questions: PropTypes.array
}

export default Questions