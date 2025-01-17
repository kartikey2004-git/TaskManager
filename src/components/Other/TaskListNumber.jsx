/* eslint-disable react/prop-types */

const TaskListNumber = ({data}) => {
  console.log(data);
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>

      <div className=' rounded-xl w-[45%] px-9 py-6 bg-[#8E44AD]'> 
        <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium'>New task</h3>
      </div>

      <div className=' rounded-xl w-[45%] px-9 py-6 bg-[#E67E22]'> 
        <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl font-medium'>Completed task</h3>
      </div>

      <div className=' rounded-xl w-[45%] px-9 py-6 bg-yellow-500'> 
        <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className='text-xl font-medium'>Accepted task</h3>
      </div>

      <div className=' rounded-xl w-[45%] px-9 py-6 bg-[#00eeff]'> 
        <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className='text-xl font-medium'>Failed task</h3>
      </div>

    </div>
  )
}

export default TaskListNumber