import Questions from "./Questions"

const RightScreen = ({questions, onAnswerButtonPressed}) => {
    return (
        <div>
            <Questions 
                questions={questions}
                onAnswerButtonPressed={onAnswerButtonPressed}
            />
        </div>
    )
}

export default RightScreen
