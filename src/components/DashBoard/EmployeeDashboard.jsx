/* eslint-disable react/prop-types */
import Header from '../Other/Header.jsx'
import TaskListNumber from '../Other/TaskListNumber.jsx'
import TaskList from '../TaskList/TaskList.jsx'

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        <Header changeUser={props.changeUser} data={props.data} />
        <div className="space-y-8">
          <TaskListNumber data={props.data} />
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700/50">
            <TaskList data={props.data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard