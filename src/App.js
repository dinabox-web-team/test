import logo from "./logo.svg";
import "./App.css";
import { Posts } from "./Posts";

function App(props) {
  return (
    <>
      <div>
        Teste GraphQL:
        <Posts />
      </div>
    </>
  );
}

export default App;
