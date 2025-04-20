/* eslint-disable react/prop-types */

const TaskListNumber = ({data}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/20 transition-all duration-200">
        <h2 className="text-4xl font-bold mb-2">{data.taskCounts.newTask}</h2>
        <h3 className="text-lg font-medium text-purple-100">New Tasks</h3>
      </div>

      <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-6 shadow-lg hover:shadow-orange-500/20 transition-all duration-200">
        <h2 className="text-4xl font-bold mb-2">{data.taskCounts.completed}</h2>
        <h3 className="text-lg font-medium text-orange-100">Completed Tasks</h3>
      </div>

      <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-2xl p-6 shadow-lg hover:shadow-yellow-500/20 transition-all duration-200">
        <h2 className="text-4xl font-bold mb-2">{data.taskCounts.active}</h2>
        <h3 className="text-lg font-medium text-yellow-100">Active Tasks</h3>
      </div>

      <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 transition-all duration-200">
        <h2 className="text-4xl font-bold mb-2">{data.taskCounts.failed}</h2>
        <h3 className="text-lg font-medium text-cyan-100">Failed Tasks</h3>
      </div>
    </div>
  )
}

export default TaskListNumber