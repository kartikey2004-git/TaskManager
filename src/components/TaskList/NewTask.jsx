/* eslint-disable react/prop-types */
const NewTask = ({data}) => {
  // console.log(data);
  
  return (
    <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-gray-800 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-cyan-600 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>

      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">
      {data.taskDescription}
      </p>
      <div className="mt-4">
        <button>Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
