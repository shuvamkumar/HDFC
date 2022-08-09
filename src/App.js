import './App.css';
import First from "./components/First.jsx"
import Fifth from "./components/Fifth.jsx"
import Third from "./components/Third.jsx"
import { useEffect, useState } from 'react';
import Questions from './components/Questions';

function App() {
  const [state, setState] = useState(1);
  return (<>
    {/* {state === 1 || state === 2 ? <First setState={setState} state={state} />
      : state === 3 ? <Third setState={setState} /> : state === 4 ? <Questions setState={setState} state={state} /> : <Fifth />} */}
    <Fifth />

  </>)
}

export default App;
