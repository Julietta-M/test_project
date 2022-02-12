import { useState } from "react";
import { omit } from "lodash";

const useForm = (callback: () => void) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const validate = (event: any, name: string, value: string) => {
    switch (name) {
      case "firstName":
        if (value.length < 2) {
          setErrors({
            ...errors,
            firstName: true,
          });
        } else {
          let newObj = omit(errors, "firstName");
          setErrors(newObj);
        }
        break;

      case "lastName":
        if (value.length < 2) {
          setErrors({
            ...errors,
            lastName: true,
          });
        } else {
          let newObj = omit(errors, "lastName");
          setErrors(newObj);
        }
        break;

      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: true,
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;

      case "phone":
        if (value.length < 6 || value.length > 12) {
          setErrors({
            ...errors,
            phone: true,
          });
        } else {
          let newObj = omit(errors, "phone");
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  };

  const handleChange = (event: { target: { name: string; value: string } }) => {
    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);

    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = () => {
    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      console.error("There is an Error!");
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
