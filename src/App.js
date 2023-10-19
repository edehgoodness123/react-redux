import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/Counter';
 
const App = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <h2>welcome to redux</h2>
      <button onClick={() => dispatch(increment())}>increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default App;