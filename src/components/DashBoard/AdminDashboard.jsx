/* eslint-disable react/prop-types */
import Header from "../Other/Header.jsx";
import CreateTask from "../Other/CreateTask.jsx";
import AllTask from "../Other/AllTask.jsx";

const AdminDashboard = (props) => {
  console.log(props);
  // props is basically a object containing a function changeUser 
  
  return (
    <div className="h-screen w-full p-10 bg-gray-900 text-white">
      <Header changeUser={props.changeUser}/>
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
