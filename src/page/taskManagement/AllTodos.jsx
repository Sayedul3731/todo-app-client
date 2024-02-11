/* eslint-disable react/no-unescaped-entities */
import useTodos from "../../hooks/useTodos";
import { useEffect, useState } from "react";
import Todo from "./Todo";

const AllTodos = () => {

  const [todos, ] = useTodos();
  const [completedTask, setCompletedTask] = useState([]);
  const [highPriorityTasks, setHighPriorityTasks] = useState([]);
  const [mediumPriorityTasks, setMediumPriorityTasks] = useState([]);
  const [lowPriorityTasks, setLowPriorityTasks] = useState([]);
  
  // High Priority Task filter here
  const handleHighPriorityTasks = () => {
    const filteredTasks = todos.filter(todo => todo?.priority?.toLowerCase() === 'high')
    setHighPriorityTasks(filteredTasks);
    setMediumPriorityTasks([])
    setLowPriorityTasks([])
  }
  // Medium Priority Task filter here
  const handleMediumPriorityTasks = () => {
    const filteredTasks = todos.filter(todo => todo?.priority?.toLowerCase() === 'medium')
    setMediumPriorityTasks(filteredTasks)
    setHighPriorityTasks([])
    setLowPriorityTasks([])
  }
  // Low Priority Task filter here
  const handleLowPriorityTasks = () => {
    const filteredTasks = todos.filter(todo => todo?.priority?.toLowerCase() === 'low')
    setLowPriorityTasks(filteredTasks);
    setHighPriorityTasks([])
    setMediumPriorityTasks([])
  }
  // completed Task filter here
  useEffect(() => {
    const totalCompletedTask = todos.filter(todo => todo?.status === 'completed')
    setCompletedTask(totalCompletedTask)
  }, [todos])

  return (
    <div>
      <h1 className="text-center mb-3 py-2" style={{backgroundColor: "#FF8604"}}>All Task's</h1>
      <div style={{ display: "flex", justifyContent: "space-between", justifyItems: "center", fontWeight: "bold", fontSize: "20px" }}>
        <p >Total Task: {todos.length}</p>
        <p>Completed Task: {completedTask.length}</p>
      </div>
      <div style={{ display: "flex", gap: "5px" }}>
        <h5>Filtered By</h5>
        {/* Low, Medium, High Priority Task filter here */}
        <div className="mb-2" style={{display: "flex", gap: "5px"}}>
          <div className="form-check">
            <input onClick={handleHighPriorityTasks} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              High
            </label>
          </div>
          <div className="form-check">
            <input onClick={handleMediumPriorityTasks} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Medium
            </label>
          </div>
          <div className="form-check">
            <input onClick={handleLowPriorityTasks} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Low
            </label>
          </div>
        </div>
      </div>
      {/* Low, Medium, High and all Task map here */}
      <div className=" pb-5" style={{ gap: "20px", textAlign: "center", justifyContent: 'center' }}>
        {
         highPriorityTasks?.length > 0 ? highPriorityTasks?.map( todo => <Todo key={todo._id} todo={todo}></Todo>) : mediumPriorityTasks?.length > 0 ? mediumPriorityTasks?.map( todo => <Todo key={todo._id} todo={todo}></Todo>) : lowPriorityTasks?.length > 0 ? lowPriorityTasks?.map( todo => <Todo key={todo._id} todo={todo}></Todo>) : todos?.map( todo => <Todo key={todo._id} todo={todo}></Todo>)
        }
      </div>

     
    </div>
  );
};

export default AllTodos;