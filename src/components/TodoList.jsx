import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {useTodoStore} from "../store/useTodoStore";
import axios from "axios";
import { addTodo, deleteTodo } from "../api/todoApi";
import Form from "./Form";
import Loading from "./Loading";
import Error from "./Error";
import EmptyTask from "./EmptyTask";
import Tasks from "./Tasks";

const fetcher = () => {
  return axios.get("http://localhost:4000/todos");
};

const TodoList = () => {
  const queryClient = useQueryClient();

  const title = useTodoStore((state) => state.title);
  const description = useTodoStore((state) => state.description);
  const priority = useTodoStore((state) => state.priority);
  const setTodo = useTodoStore((state) => state.setTodo);
  const setTitle = useTodoStore((state) => state.setTitle);
  const setDescription = useTodoStore((state) => state.setDescription);
  const setPriority = useTodoStore((state) => state.setPriority);

  const taskTitle = (event) => setTitle(event.target.value);
  const taskDescription = (event) => setDescription(event.target.value);
  const priorityLevel = (event) => setPriority(event.target.value);

  const { data: todos, isLoading, isError } = useQuery(["todos"], fetcher);

  //   add data to the api
  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  //   delete data to the api
  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    addTodoMutation.mutate({
      title: title,
      description: description,
      priority: priority,
    });

    setTodo("");
    setTitle("");
    setDescription("");
  };

  return (
    <section className="w-full">
      <section className="w-full absolute top-20 z-10 flex justify-center bg-white dark:bg-main_dark pt-8 pb-4 md:py-8">
        <Form
          onSubmit={handleSubmit}
          title={title}
          taskTitle={taskTitle}
          description={description}
          taskDescription={taskDescription}
          priorityLevel={priorityLevel}
        />
      </section>S
      <section className="w-full p-4 flex justify-center items-center absolute top-80 xs:mt-28 md:mt-14 min-h-60vh rounded-lg">
        <section className="grid w-12/12 xs:w-11/12 md:w-9/12 lg:w-12/12 xl:w-10/12 mxl:w-10/12 xxl:w-9/12 grid-cols-1 lg:grid-cols-2 mxl:grid-cols-3 gap-6">
            <Tasks todos={todos} deleteTodoMutation={deleteTodoMutation}/>   
        </section>
        <section className="flex justify-center items-center absolute top-20">
            <Loading isLoading={isLoading} />
            <EmptyTask todos={todos} />
            <Error isError={isError} />
          </section>
      </section>
    </section>
  );
};

export default TodoList;
