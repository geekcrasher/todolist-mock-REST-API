import { Plus } from "lucide-react";

const AddTask = () => {
  return (
    <section className="mt-8 flex justify-end">
      <button
        type="submit"
        className="flex justify-center items-center w-24 md:w-28 h-8 text-xs md:text-sm font-medium cursor-pointer text-gray-50 rounded-md bg-pink_primary transition ease-out duration-150 hover:bg-pink_secondary active:bg-pink_primary"
      >
        <span className="mr-1">
          <Plus size={16} color="#fff" />
        </span>
        <span>Add Task</span>
      </button>
    </section>
  );
};

export default AddTask;
