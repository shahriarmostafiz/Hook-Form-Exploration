/* eslint-disable react/prop-types */
import React from 'react';

const Field = ({ label, htmlFor, error, children }) => {
    const id = htmlFor || getChildId(children)
    return (
        <div className='flex flex-col items-start justify-start p-0 mt-2 mr-2'>
            {label && <label htmlFor={htmlFor} className='mb-1'>{label}</label>}
            {children}
            {error && <div className='text-red-500'>{error.message}</div>}
        </div>
    );
};
const getChildId = (children) => {
    const child = React.Children.only(children)
    if ("id" in child.props) {
        return child.props.id
    }
}
export default Field;