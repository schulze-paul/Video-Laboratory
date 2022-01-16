
const Question = ({question}) => {
    if (question.typingInput) {
        return (
            
          <article className="typeArticle" data-key={question.formId}>
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
        return <div></div>
    }
}


export default Question