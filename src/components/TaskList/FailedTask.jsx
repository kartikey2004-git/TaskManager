/* eslint-disable react/prop-types */
const FailedTask = ({data}) => {
  return (
    <div className="flex-shrink-0 w-[300px] p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-lg hover:shadow-red-500/10 transition-all duration-200">
      <div className="flex justify-between items-center">
        <span className="bg-gradient-to-r from-red-500 to-red-600 text-sm px-3 py-1 rounded-full font-medium">
          {data.category}
        </span>
        <span className="text-sm text-gray-400">{data.taskDate}</span>
      </div>

      <h2 className="mt-4 text-xl font-bold text-gray-200">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-gray-400 line-clamp-3">
        {data.taskDescription}
      </p>
      <div className="mt-6">
        <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-medium py-2 px-4 rounded-xl opacity-75 cursor-not-allowed">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
