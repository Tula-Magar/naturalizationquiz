import logo from "./logo.svg";
import "./App.css";
import HundredQuestionQuiz from "./HundredQuestionQuiz";
import quizData from "./naturalizationQuizData";

function App() {
  return (
    <div className="App">
      <HundredQuestionQuiz questions={quizData} />
    </div>
  );
}

export default App;
