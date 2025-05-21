import Header from "./components/Header"
import MyImage from "./components/MyImage"
import Checkbox from "./components/Checkbox"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router"

const BASE_URL = import.meta.env.VITE_MOCKAPI_BASE_URL
console.log(BASE_URL);

function App() {
  let [todoList, setTodoList] = useState([])
  const getTodoList = async () => {
    try {
      let result = await axios.get(`${BASE_URL}/todos`)
      console.log("result");
      console.log(result);

      if (result?.status === 200) {

        setTodoList(result.data)
      }
    }
    catch (error) {
      console.log(error);

    }

  }

  const deleteTodo = async (id) => {
    try {
      let result = await axios.delete(`${BASE_URL}/todos/${id}`)
      console.log("result");
      console.log(result);

      if (result?.status === 200) {
        getTodoList()

      }
    }
    catch (error) {
      console.log(error);

    }
  }


  useEffect(() => {
    getTodoList()

  }, [])
  return (
    <>
      {/* <Header />
      <div>Yo
      </div>
      <MyImage imgUrl="https://fastly.picsum.photos/id/467/200/200.jpg?hmac=1DxsR7q_iuL1x5DGvv6KSaWR1rN1aawK2Iz0mZx40Mk" /> */}

      {
        todoList.map((item, index) => (
          <div key={`todo-${index}`}>
            {item.id} {item.name} {item.status}

            <Link to={`edit/${item.id}`}><button>Edit</button></Link>


            <button onClick={() => deleteTodo(item.id)}>Delete</button>

          </div >

        )
        )
      }

    </>
  )
}

export default App
