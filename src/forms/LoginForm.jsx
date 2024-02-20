import React from 'react';
import FieldSet from '../components/FieldSet';
import Field from '../components/Field';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm()
    const handleForm = (data) => {
        console.log(data);
        // const email = "x@abc.com"
        // const found = data.email === email
        // if (!found) {
        //     setError("random", {
        //         message: `${data.email} is not found on the server`
        //     })
        // }

    }
    return (
        <div className='flex flex-col justify-center items-center'>
            {/* LoginForm */}
            <form onSubmit={handleSubmit(handleForm)}>
                <FieldSet label={"Enter Login Details"} >
                    <Field label={"Email "} error={errors.email}>
                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email" name="email" id="email" className={`w-80 border box-border border-gray-300  rounded-md p-2 ${errors.email && "border-red-600 outline-red-600"}`} placeholder='Enter Email' />
                    </Field>
                    <Field label={"Password "} error={errors.password}>
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "password must be at least 8 characters"
                                }
                            })}
                            type="password" name="password" id="password" className={`w-80 border box-border border-gray-300  rounded-md p-2 ${errors.password && "border-red-600 outline-red-600"}`} placeholder='Enter password' />
                    </Field>
                </FieldSet>
                <div>
                    {errors?.random?.message ? errors?.random?.message : ""}
                </div>
                <button type="submit" className='rounded-lg m-auto bg-purple-500 cursor-pointer px-4 py-2 text-lg text-white hover:bg-purple-700'>Submit</button>
            </form>
        </div>
    );
};

export default LoginForm;