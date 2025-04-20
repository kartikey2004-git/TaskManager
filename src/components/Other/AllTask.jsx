import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);
  
  return (
    <div className="space-y-4 sm:space-y-6">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-200">All Tasks Overview</h2>
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-700/50">
        <div className="grid grid-cols-5 gap-2 sm:gap-4 mb-4 sm:mb-6 py-2 sm:py-3 px-3 sm:px-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
          <h2 className="text-sm sm:text-base font-medium text-gray-300 truncate">Employee</h2>
          <h3 className="text-sm sm:text-base font-medium text-gray-300 truncate">New</h3>
          <h5 className="text-sm sm:text-base font-medium text-gray-300 truncate">Active</h5>
          <h5 className="text-sm sm:text-base font-medium text-gray-300 truncate">Done</h5>
          <h5 className="text-sm sm:text-base font-medium text-gray-300 truncate">Failed</h5>
        </div>

        <div id="alltask" className="space-y-2 sm:space-y-4 max-h-[300px] sm:max-h-[400px] overflow-auto pr-2">
          {userData.map((elem, idx) => (
            <div 
              key={idx} 
              className="grid grid-cols-5 gap-2 sm:gap-4 py-2 sm:py-3 px-3 sm:px-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-200"
            >
              <h3 className="text-sm sm:text-base font-medium text-cyan-400 truncate">{elem.firstName}</h3>
              <h3 className="text-sm sm:text-base font-medium text-blue-500">{elem.taskCounts.newTask}</h3>
              <h5 className="text-sm sm:text-base font-medium text-yellow-400">{elem.taskCounts.active}</h5>
              <h5 className="text-sm sm:text-base font-medium text-green-500">{elem.taskCounts.completed}</h5>
              <h5 className="text-sm sm:text-base font-medium text-red-500">{elem.taskCounts.failed}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTask;