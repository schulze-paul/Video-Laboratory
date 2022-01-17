
const QuestionAnswerButton = ({formId, index, question}) => {
    console.log(question)
    return (
        <div className="buttonOpen" id={"button" + index + formId}>
            <label>
                {question.buttons.buttonLabel[index]}
            </label>
        </div>
    )
}


export default QuestionAnswerButton