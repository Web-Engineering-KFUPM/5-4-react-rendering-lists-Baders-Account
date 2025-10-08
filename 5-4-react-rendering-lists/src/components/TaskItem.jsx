import DueBadge from "./DueBadge";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task" key={task.id}>
       

      <label className="taskMain">
        {!task.isDone && <DueBadge dueDate={task.dueDate}  />}
       
      </label>

     
      <button className="ghost" aria-label="Delete task" onClick={() => onDelete(task.id)}>
        ✕
      </button>
    </li>
  );
}
