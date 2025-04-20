import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [newTask, setNewTask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setNewTask({
      taskTitle,
      taskDate,
      taskDescription,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: true,
    });

    const data = userData;
    data.forEach(function (elem) {
      if (assignTo == elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
      }
    });

    setUserData(data);
    setAssignTo("");
    setCategory("");
    setTaskDate("");
    setTaskDescription("");
    setTaskTitle("");
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-200">Create New Task</h2>
      <form onSubmit={submitHandler} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-2">
            <label className="text-sm sm:text-base text-gray-300 font-medium">Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all hover:border-cyan-500/50 text-sm sm:text-base"
              type="text"
              placeholder="Enter task title"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm sm:text-base text-gray-300 font-medium">Due Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all hover:border-cyan-500/50 text-sm sm:text-base"
              type="date"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm sm:text-base text-gray-300 font-medium">Assign To</label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all hover:border-cyan-500/50 text-sm sm:text-base"
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm sm:text-base text-gray-300 font-medium">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all hover:border-cyan-500/50 text-sm sm:text-base"
              type="text"
              placeholder="Design, Dev, etc."
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm sm:text-base text-gray-300 font-medium">Task Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all hover:border-cyan-500/50 min-h-[100px] text-sm sm:text-base"
            placeholder="Enter task description"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-cyan-500/20 text-sm sm:text-base"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;