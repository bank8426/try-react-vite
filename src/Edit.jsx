import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const BASE_URL = import.meta.env.VITE_MOCKAPI_BASE_URL

const Edit = () => {
  let { id } = useParams();
  let [todo, setTodo] = useState({
    name: "",
    status: ""
  });
  let [name, setName] = useState("");
  let [status, setStatus] = useState("");

  const getTodo = async () => {
    try {
      let result = await axios.get(`${BASE_URL}/todos/${id}`);
      console.log("result");
      console.log(result);

      if (result?.status === 200) {
        setTodo(result.data);
        setName(result.data.name)
        setStatus(result.data.status)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeName = (event) => {
    setTodo((previousState) => ({
      ...previousState,
      name: event.target.value
    }))

    // console.log(event.target.value);
    // setName(event.target.value)
  }

  const handleChangeStatus = (event) => {
    setTodo((previousState) => ({
      ...previousState,
      status: event.target.value
    }))

    // console.log(event.target.value);
    // setStatus(event.target.value)
  }

  const editTodo = async () => {
    try {
      let result = await axios.put(`${BASE_URL}/todos/${id}`, {
        ...todo
      });
      console.log("result");
      console.log(result);

      if (result?.status === 200) {
        // setTodo(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <>
      <Link to="/">Back to Main page</Link>
      <div>Edit Todo #{todo.id}
        <div>
          Name :
          <input type="text" onChange={handleChangeName} value={todo.name} />
        </div>
        <div>
          Status :
          <input type="text" onChange={handleChangeStatus} value={todo.status} />
        </div>

        <button onClick={editTodo}>Update</button></div>

    </>
  );
};

export default Edit;
