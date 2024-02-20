/* eslint-disable react/prop-types */

const FieldSet = ({ label, children }) => {
    return (
        <fieldset className='m-2 p-0 border-none'>
            {
                label && <legend className='text-md font-semibold mb-2'>{label}</legend>
            }
            <div className='flex flex-col justify-between self-start'>
                {children}
            </div>
        </fieldset>
    );
};

export default FieldSet;