import { useState } from "react";
import TaskItem from "./TaskItem";

export default function CourseCard({ course, index, onMutateCourse }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  //const [tasks, setTasks] = useState([]);

  function toggleTask(id) {
   
  }

  function deleteTask(id) {
    
  }

  function addTask(e) {

      
      
      

      e.preventDefault();
      
   
  }

  return (
    <article className="course card">
      <header className="cardHeader">
        
        <h2>{course.title}</h2>

        {course.tasks.map(t => t.isDone).every(Boolean) || course.tasks.length === 0 ? (
          <span >All caught up!</span>): <span>Keep going!</span> }
        
 
      </header>
      <section className="tasksSection">


        { course.tasks.length === 0 ?
          (<p>No Tasks yet</p>) : (
        <ul className="tasks" > 

              {course.tasks.map( task=> ( 
          <TaskItem 
            key={task.id} 
            task={task} 
            onToggle={toggleTask} 
            onDelete={deleteTask} 
          />
          

                ))}
      </ul>
          ) }


      </section>
      
      

         
      


      

    
      <form onSubmit={addTask} className="newTask">
        <input
          className="titleField"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Task title"
          aria-label="Task title"
        />


        


        <div className="dateRow">
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            aria-label="Due date"
          />

          
          <button type="submit" className="primary" >Add</button>
          
        </div>

        
      </form>

    </article>
  );
}
