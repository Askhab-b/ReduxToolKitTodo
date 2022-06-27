import { useDispatch, useSelector } from "react-redux";
import styles from "./app.module.css";
import { dec, inc } from "./features/counterReducer";

function App() {
  const num = useSelector((state) => state.counter);

  const dispatch = useDispatch()

  const handleInc = () => {
  dispatch(inc());
  }

  const handleDec = () => {
  dispatch(dec());
  }

  return <div className={styles.app}>

<div className={styles.container}>{num}
   <button onClick={handleInc}>+</button>
   <button onClick={handleDec}>-</button>
   </div>
    </div>;
}

export default App;
