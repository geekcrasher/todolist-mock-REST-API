import PropTypes from 'prop-types';

const Fieldset = ({htmlFor, label, children}) => {
   return ( 
      <fieldset className=' py-2'>
         <label htmlFor={htmlFor} className="block md:inline-block w-24 text-text_light mb-2 dark:text-primary font-noto-sans font-semibold text-sm tracking-wide">
            {label}
         </label>
         <span className="hidden md:inline-block mr-4 text-neutral-500">:</span>
         {children}
      </fieldset>
    );
}
 
export default Fieldset;

Fieldset.propTypes = {
   htmlFor: PropTypes.string,
   label: PropTypes.string,
   children: PropTypes.node
}