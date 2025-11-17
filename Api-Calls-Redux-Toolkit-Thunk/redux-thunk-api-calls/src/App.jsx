
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from './redux/slice/todo'

function App() {

  const dispatch = useDispatch();

  const state = useSelector((state)=>state);

  if(state.todo.isLoading){
    return <h2>Loading...</h2>
  }

  if(state.todo.isError){
    return <h2>Something went wrong!</h2>
  }

  return (
    <>
      <button onClick={(e)=> dispatch(fetchTodos())}>Fetch Todos</button>
      {
        state.todo.data && state.todo.data.map((todo)=>{
          return <li key={todo.id}>{todo.title}</li>
        })
      }

    </>
  )
}
export default App
