import PropTypes from "prop-types";
import { Trash } from "lucide-react";

const Tasks = ({ todos, deleteTodoMutation }) => {
  return (
    <>
      {todos?.data?.map((task) => {
        return (
          <section
            className="h-52 bg-task dark:bg-task_dark rounded-lg shadow-md px-6 py-2 transition ease-in-out duration-100 hover:scale-95 cursor-pointer"
            key={task.id}
          >
            <div className=" flex items-center bg-semi mt-2">
              <h1 className="font-noto-sans font-semibold text-text_light dark:text-primary xs:text-md sm:text-base lg:text-lg ">
                {task.title}
              </h1>
            </div>
            <div className="h-24 mt-3">
              <p className="text-sm text-secondary font-semibold break-words overflow-hidden">
                {task.description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-3 ">
                <p className="w-max text-xs font-bold px-2 py-1 rounded-full text-secondary bg-highlight dark:bg-priority">
                  {task.priority}
                </p>
                <button
                  onClick={() => deleteTodoMutation.mutate(task.id)}
                  className="p-1.5 rounded-lg bg-highlight transition-colors duration-100 hover:bg-pink_primary"
                >
                  <span>
                    <Trash size={14} color="#6D6D72" />
                  </span>
                </button>
              </div>
          </section>
        );
      })}
    </>
  );
};

export default Tasks;

Tasks.propTypes = {
  todos: PropTypes.object,
  deleteTodoMutation: PropTypes.object,
};
