import QuestionAnswerButton from "./QuestionAnswerButton"

const TopButtons = ({question, onAnswerButtonPressed}) => {
  return (
    <div className="top-buttons">
      <div className="reload-button">
        <p>New Video</p>         
      </div>
      <div className="export-button">
        <p>Export Data</p>         
      </div>

    </div>
  )
}


export default TopButtons