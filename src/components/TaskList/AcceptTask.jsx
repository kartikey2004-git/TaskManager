/* eslint-disable react/prop-types */
const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[300px] p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-lg hover:shadow-yellow-500/10 transition-all duration-200">
      <div className="flex justify-between items-center">
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-sm px-3 py-1 rounded-full font-medium">
          {data.category}
        </span>
        <span className="text-sm text-gray-400">{data.taskDate}</span>
      </div>

      <h2 className="mt-4 text-xl font-bold text-gray-200">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-gray-400 line-clamp-3">{data.taskDescription}</p>
      <div className="flex gap-4 mt-6">
        <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-2 px-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-green-500/20">
          Complete
        </button>
        <button className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-2 px-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-red-500/20">
          Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
