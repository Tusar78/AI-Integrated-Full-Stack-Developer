const initialTasks = [
  {
    id: 1,
    title: "Learn React",
    completed: false,
  },
  {
    id: 2,
    title: "Practice useState",
    completed: true,
  },
  {
    id: 3,
    title: "Build a project",
    completed: false,
  },
];

const Task = () => {
  return (
    <div className="block w-full max-w-md m-14 mx-auto bg-gray-100 py-4 px-6">
      <h1 className="uppercase font-semibold text-center">Task Manager</h1>

      <form action="#" className="flex items-center justify-between mt-6 gap-2">
        <input
          id="task"
          name="task"
          type="text"
          className="task-field border rounded-md border-purple-200 py-2 px-4 w-full"
        />
        <input
          id="submit"
          name="submit"
          type="submit"
          className="submit-btn border rounded-md shadow border-purple-200 py-2 px-4 cursor-pointer"
          value="Add Task"
        />
      </form>

      <div className="mt-4 flex items-center justify-between">
        <h2 className="text-md uppercase">Filter</h2>
        <select
          name="filter"
          id="filter"
          className="border rounded-md border-purple-200 py-2 px-4"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="mt-4 border p-2 border-dashed border-purple-200 rounded-md">
        <h2 className="text-sm uppercase">Statistics</h2>
        <div className="flex items-center gap-2 justify-between mt-2">
          <span className="text-sm">Total: 3</span>
          <span className="text-sm">Completed: 2</span>
          <span className="text-sm">Remaining: 1</span>
        </div>
      </div>

      <div>
        <h2 className="text-md uppercase mt-4">Tasks</h2>
        <div>
          <div className="flex items-center justify-between mt-2 border px-3 py-2 rounded-xl border-purple-200">
            <form action="#" className="flex items-center gap-2">
              <input type="checkbox" name="task1" id="task1" className="w-4 h-4" />
              <label htmlFor="task1">Learn React</label>
            </form>
            <button className="bg-red-500 text-white px-2 py-1 rounded-md ml-2">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
