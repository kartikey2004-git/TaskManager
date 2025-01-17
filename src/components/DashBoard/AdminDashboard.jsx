/* eslint-disable react/prop-types */
import Header from "../Other/Header.jsx";
import CreateTask from "../Other/CreateTask.jsx";
import AllTask from "../Other/AllTask.jsx";

const AdminDashboard = (props) => {

  // Yes, in React, props is typically an object. It stands for "properties" and is used to pass data from a parent component to a child component. The props object contains key-value pairs where the key is the name of the prop, and the value is the data being passed.

  
  console.log(props);
  // props is basically a object containing a function changeUser

  return (
    <div className="h-screen w-full p-10 bg-gray-900 text-white">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
