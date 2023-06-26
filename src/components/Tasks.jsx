import PropTypes from "prop-types";
import { XCircle } from "lucide-react";

const Tasks = ({ todos, deleteTodoMutation }) => {
  return (
    <>
      {todos?.data?.map((task) => {
        return (
          <section
            className="relative h-56 bg-task dark:bg-task_dark rounded-lg shadow-md px-6 py-2 transition ease-in-out duration-100 hover:scale-95 cursor-pointer"
            key={task.id}
          >
            <section className="relative h-full">
              <div className=" flex items-center bg-semi mt-2 min-h-fit">
                <h1 className="font-noto-sans font-semibold text-text_light dark:text-primary xs:text-md sm:text-base lg:text-lg ">
                  {task.title}
                </h1>
              </div>
              <div className="h-fit mt-2 overflow-hidden">
                <p className=" text-secondary dark:text-semi_dark tracking-wide text-sm break-words overflow-hidden">
                  {task.description}
                </p>
              </div>
              <div className="absolute bottom-4 w-full flex items-center justify-between mt-7 md:mt-5">
                <p className="w-max text-xs font-bold px-2 py-1 rounded-full text-secondary bg-highlight dark:bg-priority">
                  {task.priority}
                </p>
                <button
                  onClick={() => deleteTodoMutation.mutate(task.id)}
                  className="xs:p-1 md:p-1.2 rounded-md transition-colors duration-100 bg-pink_primary hover:bg-pink_secondary active:bg-pink_primary"
                >
                  <span>
                    <XCircle size={16} />
                  </span>
                </button>
              </div>
            </section>
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
