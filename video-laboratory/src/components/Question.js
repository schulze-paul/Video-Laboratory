import QuestionAnswerButton from "./QuestionAnswerButton"

const Question = ({question, onAnswerButtonPressed}) => {
  console.log(question)
    if (question.typingInput) {
        return (
            
          <article className="type-article" data-key={question.formId}>
          <p class="question">{question.question}</p>
          <input
            type={question.type}
            name={"input" + question.formId}
            value=""
            id={"input" + question.formId}
            className="type_input"
          />
        </article>
        )
    }
    if (!question.typingInput) {
        return (
          <article className="button-article" id="article${formId}">
            <p class="question">{question.question}</p>
            <div class="buttonContainer">
              {
                question.buttons.buttonIndeces.map((index) => (
                  <QuestionAnswerButton 
                    className='buttonOpen' 
                    key={index}
                    formId={question.formId}
                    index={index}
                    question={question}
                    onAnswerButtonPressed={onAnswerButtonPressed}
                  />
                ))
              }
            </div>
          </article>
        )
    }
}


export default Question