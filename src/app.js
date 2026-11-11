import tasks from "./tasks.js";

console.log("My Tasks:");





const getAllTasks = (tasks)=>
{
	return tasks;
}

console.log(getAllTasks(tasks));

const addTask =(tasks,newTask)=>{
	tasks.push(newTask);
	return tasks;

}

console.log(addTask(tasks,{id:3,title:"Learn Express.js",completed:false}));