import PropTypes from 'prop-types';
import { Plus } from 'lucide-react';
import Fieldset from "./Fieldset";


const Form = ({onSubmit, title, taskTitle, description, taskDescription, priorityLevel}) => {
   
   
   const priorities = ["Low", "Medium", "High"];

   return ( 
      <form onSubmit={onSubmit}>
         <Fieldset 
            htmlFor="title"
            label="Task Title"
         >
          <input
            className="w-64 h-6 p-4 rounded-md text-text_light dark:text-primary text-sm outline-0 bg-task dark:bg-task_dark placeholder:text-light_gray dark:placeholder:text-secondary focus:ring-1 focus:ring-sky-600"
            type="text"
            value={title}
            name="title"
            onChange={taskTitle}
            placeholder='e.g. Do homework'
            maxLength={60}
            required
          />
        </Fieldset>
        <Fieldset
          htmlFor="description"
          label="Description"
        >
          <input
            className="w-64 h-6 p-4 rounded-md text-text_light dark:text-primary text-sm outline-0 bg-task dark:bg-task_dark placeholder:text-light_gray dark:placeholder:text-secondary focus:ring-1 focus:ring-sky-600"
            type="text"
            value={description}
            name="description"
            onChange={taskDescription}
            placeholder='Answer the questions from p.25...'
            maxLength={230}
            required
          />
        </Fieldset>
        <Fieldset 
            htmlFor="priority" 
            label="Priority">
          {priorities.map((value) => (
            <label key={value}>
              <input
                type="radio"
                id={value}
                value={value}
                name="radioValues"
                onChange={priorityLevel}
                required
              />
              <span className="ml-2 mr-4 text-sm text-secondary font-semibold md:text-base">{value}</span>
            </label>
          ))}
        </Fieldset>

        <div className='mt-8 flex justify-end'>
           <button 
             type="submit" 
             className="flex justify-center items-center w-24 md:w-28 h-8 text-xs md:text-sm font-medium cursor-pointer text-gray-50 rounded-md bg-pink_primary transition ease-out duration-150 hover:bg-pink_secondary active:bg-pink_primary"
           >
           <span className='mr-1'>
             <Plus size={16} color='#fff'/>
           </span>
             Add Todo
           </button>
        </div>
      </form>
    );
}
 /*  */
export default Form;


Form.propTypes = {
   title: PropTypes.string,
   taskTitle: PropTypes.func,
   description: PropTypes.string,
   taskDescription: PropTypes.func,
   priorityLevel: PropTypes.func,
   onSubmit: PropTypes.func,

}
