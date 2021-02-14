import React from "react";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";

// import * as yup from "yup";

// //
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// //Schema:
// let schema = yup.object().shape({
//   fname: yup.string().required().max(12),
//   //lname: yup.string().required().max(12),
//   age: yup.number().required().positive().integer(),
//   phone: yup.string().matches(phoneRegExp, "Phone number is invalid!"),
// });
const Form = () => {
  const { register, handleSubmit, errors } = useForm({});
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    // {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label htmlFor="fname">First Name: </label>
      <input
        name="fname"
        defaultValue="Ezreal"
        ref={register({ required: true })}
      />
      <label htmlFor="lname">Last Name: </label>
      <input name="lname" ref={register({ required: true })} />
      {errors.lname && <span>error is {errors.lname.message}</span>}
      <br />
      <label htmlFor="age">Age: </label>
      <input name="age" ref={register} />
      <label htmlFor="phone">Phone:</label>
      <input name="phone" ref={register} />
      {errors.phone && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default Form;
