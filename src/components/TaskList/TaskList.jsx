/* eslint-disable react/prop-types */
import AcceptTask from "./AcceptTask.jsx"
import CompleteTask from "./CompleteTask.jsx"
import FailedTask from "./FailedTask.jsx"
import NewTask from "./NewTask.jsx"

const TaskList = ({data}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-200">Your Tasks</h2>
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-6 pb-4 min-w-max">
          {data.tasks.map((elem, idx) => {
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
            return null;
          })}
        </div>
      </div>
    </div>
  )
}

export default TaskList