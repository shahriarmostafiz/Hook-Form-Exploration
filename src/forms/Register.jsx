import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import FieldSet from '../components/FieldSet';
import Field from '../components/Field';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, setError, control } = useForm()
    // const { append, fields, remove } = useFieldArray({
    //     control,
    //     name: "socials"
    // })

    const { append, fields, remove } = useFieldArray({
        control,
        name: "socials"
    })
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
                <FieldSet label={"Enter your Details"} >
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
                    <Field label={"Full Name: "} error={errors.fName}>
                        <input
                            {...register("fName", {
                                required: "Full Name is required",
                            })}
                            type="text" name="fName" id="fName" className={`w-80 border box-border border-gray-300  rounded-md p-2 ${errors.fName && "border-red-600 outline-red-600"}`} placeholder='Enter Full Name' />
                    </Field>
                    <Field label={"Age: "} error={errors.age}>
                        <input
                            {...register("age", {
                                required: "Age is required",
                                max: {
                                    value: 150,
                                    message: "Enter a Valid Age"
                                },
                                min: {
                                    value: 18,
                                    message: "Minimum user age is 18"
                                }
                            })}
                            type="number" name="age" id="age" className={`w-80 border box-border border-gray-300  rounded-md p-2 ${errors.age && "border-red-600 outline-red-600"}`} placeholder='Enter Age' />
                    </Field>
                </FieldSet>
                <FieldSet label={"Social Details"}>
                    <button
                        onClick={() => append({
                            name: "",
                            url: ""
                        })}
                        className='rounded-full bg-purple-600 text-white font-medium w-6 h-6 p-1 hover:bg-purple-700  flex justify-center items-center'>+</button>

                    {fields.map((field, idx) => (
                        <div key={field.id} className='flex justify-between items-center w-max'>
                            <Field label={"Social Name "} >
                                <input
                                    {...register(`socials[${idx}].name`)}
                                    id={`socials[${idx}].name`}
                                    type="text" name={`socials[${idx}].name`} className={`p-2 border box-border border-gray-300  rounded-md w-full `} placeholder='Name' />
                            </Field>
                            <Field label={"Social URL "} >
                                <input
                                    {...register(`socials[${idx}].url`)}
                                    id={`socials[${idx}].url`}
                                    type="text" name={`socials[${idx}].url`} className={`p-2 border box-border border-gray-300  rounded-md w-full `} placeholder='URL' />
                            </Field>
                            <button
                                className='rounded-full bg-red-400 text-white  w-6 h-6 mt-8 mr-2  p-1 text-2xl font-bold hover:bg-red-500  flex justify-center items-center'
                                onClick={() => remove(idx)}>
                                -
                            </button>
                        </div>
                    ))}

                </FieldSet>
                <div>
                    {errors?.random?.message ? errors?.random?.message : ""}
                </div>
                <button type="submit" className='rounded-lg m-auto bg-purple-500 cursor-pointer px-4 py-2 text-lg text-white hover:bg-purple-700'>Submit</button>
            </form>
        </div>
    );
};

export default Register;