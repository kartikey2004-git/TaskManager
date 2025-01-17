/* eslint-disable react/prop-types */
import AcceptTask from "./AcceptTask.jsx"
import CompleteTask from "./CompleteTask.jsx"
import FailedTask from "./FailedTask.jsx"
import NewTask from "./NewTask.jsx"

const TaskList = ({data}) => {
  console.log(data);
  return (
    <div id="tasklist" className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 w-full flex-nowrap py-5 mt-10'>
      {data.tasks.map((elem,idx) => {
        console.log(elem);
        if(elem.active){
          return <AcceptTask key={idx} data={elem}/>
        }
        if(elem.newTask){
          return <NewTask key={idx} data={elem}/>
        }
        if(elem.completed){
          return <CompleteTask key={idx} data={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={idx} data={elem}/>
        }
      })}
    </div>
  )
}

export default TaskList