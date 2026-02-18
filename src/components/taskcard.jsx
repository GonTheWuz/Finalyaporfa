import { useTasks } from "../context/TaskContext";

const TaskCard = ({ task }) => {
  const { deleteTask, moveTask } = useTasks();

  const nextStatus = {
    todo: "in-progress",
    "in-progress": "done",
  };

  const prevStatus = {
    done: "in-progress",
    "in-progress": "todo",
  };

  const priorityStyle =
    task.priority === "Alta" ? { border: "2px solid red" } : {};

  return (
    <div className="task-card" style={priorityStyle}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>Prioridad: {task.priority}</p>

      <div className="buttons">
        {prevStatus[task.status] && (
          <button onClick={() => moveTask(task.id, prevStatus[task.status])}>
            ←
          </button>
        )}

        {nextStatus[task.status] && (
          <button onClick={() => moveTask(task.id, nextStatus[task.status])}>
            →
          </button>
        )}

        <button onClick={() => deleteTask(task.id)}>🗑</button>
      </div>
    </div>
  );
};

export default TaskCard;
