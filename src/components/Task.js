const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3>
        {task.text}
        <i
          className="fa fa-times"
          aria-hidden="true"
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        ></i>
      </h3>
      <p>{task.date}</p>
    </div>
  );
};

export default Task;
