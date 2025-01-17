import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext);

  const [taskTitle,setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [taskDate, setTaskDate] = useState("")
  const [assignTo, setAssignTo] = useState("")
  const [category, setCategory] = useState("")

  const [newTask, setNewTask] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(taskTitle,taskDescription,taskDate,assignTo,category);
    // as an object banana hai setTask mein jo value ayegi
    setNewTask({taskTitle,taskDate,taskDescription,category,active:false,newTask:true,failed:false,completed:true})
    // console.log(Task);
    const data = userData.employees
    console.log(data);
    
    if(data){
      data.forEach(function(elem){
        // console.log(elem.firstName);
        if(assignTo == elem.firstName){
          // console.log(elem.tasks);
          elem.tasks.push(newTask)
          elem.taskCounts.newTask = elem.taskCounts.newTask + 1
          // console.log(elem);
        }

      })
    }
    else {
      console.error("No employees data found in localstorage");
    }

    setUserData(data)
    

    setAssignTo("")
    setCategory("")
    setTaskDate("")
    setTaskDescription("")
    setTaskTitle("")
  }

  return (
    <div className="p-6 bg-gray-800 mt-7 rounded-lg shadow-lg">
    <form 
    onSubmit={(e) => {
      submitHandler(e)
    }}

    className="flex flex-wrap w-full items-start justify-between gap-6">
      
      <div className="w-full md:w-1/2">
        <div className="mb-6">
          <h3 className="text-md text-gray-200 font-semibold mb-2">Task Title</h3>
          <input
            value={taskTitle}
            onChange={(e) => {
              setTaskTitle(e.target.value)
            }}
            className="text-base py-2 px-4 w-full md:w-4/5 rounded-lg outline-none bg-gray-800 text-white border border-gray-500 focus:ring-2 focus:ring-cyan-400 transition-all"
            type="text"
            placeholder="Here is your task"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-md text-gray-200 font-semibold mb-2">Date</h3>
          <input
            value={taskDate}
            onChange={(e) => {
              setTaskDate(e.target.value)
            }}
            className="text-base py-2 px-4 w-full md:w-4/5 rounded-lg outline-none bg-gray-800 text-white border border-gray-500 focus:ring-2 focus:ring-cyan-400 transition-all"
            type="date"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-md text-gray-200 font-semibold mb-2">Assign to</h3>
          <input
            value={assignTo}
            onChange={(e) => {
              setAssignTo(e.target.value)
            }}
            className="text-base py-2 px-4 w-full md:w-4/5 rounded-lg outline-none bg-gray-800 text-white border border-gray-500 focus:ring-2 focus:ring-cyan-400 transition-all"
            type="text"
            placeholder="Employee name"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-md text-gray-200 font-semibold mb-2">Category</h3>
          <input
            value={category}
            onChange={(e) => {
              setCategory(e.target.value)
            }}
            className="text-base py-2 px-4 w-full md:w-4/5 rounded-lg outline-none bg-gray-800 text-white border border-gray-500 focus:ring-2 focus:ring-cyan-400 transition-all"
            type="text"
            placeholder="Design, Dev, etc."
          />
        </div>
      </div>

      <div className="w-full md:w-2/5">
        <h3 className="text-md text-gray-200 font-semibold mb-2">Description</h3>
        <textarea
          value={taskDescription}
          onChange={(e) => {
            setTaskDescription(e.target.value)
          }}
          className="w-full h-44 text-base py-3 px-4 rounded-lg outline-none bg-gray-800 text-white border border-gray-500 focus:ring-2 focus:ring-cyan-400 transition-all"
          placeholder="Task description"
        ></textarea>
        <button
          className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg text-base font-semibold mt-6 w-full transition-all duration-200"
        >
          Create task
        </button>
      </div>
      
    </form>
  </div>
  )
}

export default CreateTask