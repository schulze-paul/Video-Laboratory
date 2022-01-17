
const QuestionAnswerButton = ({formId, index, question, onAnswerButtonPressed}) => {
    return (
        <div className="buttonOpen" id={"button" + index + formId} onClick={() => onAnswerButtonPressed(formId, index)}>
            <label className="buttonLabel">
                {question.buttons.buttonLabel[index]}
            </label>
        </div>
    )
}

export default QuestionAnswerButton