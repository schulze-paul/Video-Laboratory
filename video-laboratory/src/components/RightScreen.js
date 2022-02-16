import Questions from "./Questions"
import TopButtons from "./TopButtons"

const RightScreen = ({questions, onAnswerButtonPressed}) => {
    return (
        <div className="right-screen">
            <TopButtons/>
            <Questions 
                questions={questions}
                onAnswerButtonPressed={onAnswerButtonPressed}
            />
        </div>
    )
}

export default RightScreen
