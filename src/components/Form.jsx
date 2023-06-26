import PropTypes from 'prop-types';
import Fieldset from "./Fieldset";
import AddTask from './AddTask';


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
            maxLength={270}
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
        
        <AddTask />
        
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
