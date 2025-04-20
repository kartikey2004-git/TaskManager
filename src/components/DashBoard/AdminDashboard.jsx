/* eslint-disable react/prop-types */
import Header from "../Other/Header.jsx";
import CreateTask from "../Other/CreateTask.jsx";
import AllTask from "../Other/AllTask.jsx";

const AdminDashboard = (props) => {

  // Yes, in React, props is typically an object. It stands for "properties" and is used to pass data from a parent component to a child component. The props object contains key-value pairs where the key is the name of the prop, and the value is the data being passed.

  
  console.log(props);
  // props is basically a object containing a function changeUser

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4 sm:p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        <Header changeUser={props.changeUser} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-700/50 hover:shadow-cyan-500/10 transition-all duration-300">
            <CreateTask />
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-700/50 hover:shadow-cyan-500/10 transition-all duration-300">
            <AllTask />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
