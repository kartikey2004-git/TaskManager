import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  // eslint-disable-next-line no-unused-vars
  const [userData,setUserData] = useContext(AuthContext);
  
  
    return (
      <div className="bg-gray-800 p-5 rounded mt-5 h-64">
        <div className=" border-2 border-cyan-500  mb-4 py-3 px-4 flex justify-between rounded">
          <h2 className="w-1/5 text-lg font-medium">Geeks</h2>
          <h3 className="w-1/5 text-lg font-medium">New Task</h3>
          <h5 className="w-1/5 text-lg font-medium">Active Task</h5>
          <h5 className="w-1/5 text-lg font-medium">Completed</h5>
          <h5 className="w-1/5 text-lg font-medium">Failed</h5>
        </div>
  
        <div id="alltask" className="h-[80%] overflow-auto">
          { userData.map(function (elem,idx) {
            // console.log(userData);
            return (
              <div key={idx} className=" border-2 border-cyan-500  mb-4 py-3 px-4 flex justify-between rounded">
                <h2 className="w-1/5 text-lg font-medium">{elem.firstName}</h2>
                <h3 className="w-1/5 text-lg font-medium text-blue-600">{elem.taskCounts.newTask}</h3>
                <h5 className="w-1/5 text-lg font-medium text-yellow-400">{elem.taskCounts.active}</h5>
                <h5 className="w-1/5 text-lg font-medium text-white">{elem.taskCounts.completed}</h5>
                <h5 className="w-1/5 text-lg font-medium text-red-600">{elem.taskCounts.failed}</h5>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
export default AllTask;