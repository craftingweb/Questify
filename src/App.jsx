import { useState } from "react";
import data from "./data";
import { Questions } from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <>
      <article>
        <Questions questions={questions} />
      </article>
    </>
  );
};
export default App;
