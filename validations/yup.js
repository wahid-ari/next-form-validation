import * as yup from "yup";

const formSchema = yup.object({
  name: yup
    .string("Name must be string")
    .required("Name is required")
    .matches(/^[a-zA-Z ]*$/, "Name must be alphabet"),
  username: yup
    .string("Username must be string")
    .required("Username is required")
    .matches(/^[a-z0-9]*$/, "Username must be alphanumeric, without space")
    .length(5, "Username length must be 5"),
  email: yup
    .string("Email must be string")
    .required("Email is required")
    .email("Email must be valid"),
  password: yup
    .string("Password must be string")
    .required("Password is required")
    .min(5, "Password length min 5")
    .max(10, "Password length max 10"),
  bio: yup
    .string("Bio must be string")
    .required("Bio is required")
    .max(10, "Bio length max 10"),
  gender: yup
    .string("Gender must be string")
    .required("Gender is required"),
  web: yup
    .string("Web must be string")
    .required("Web is required")
    .url("Web must be valid"),
  fruit: yup
    .string("Fruit must be string")
    .required("Fruit is required"),
  rating: yup
    .number("Rating must be a number")
    .required("Rating is required")
    .min(1, "Rating must be more than 1")
    .max(10, "Rating must be less than 10"),
  age: yup
    .number("Age must be a number")
    .required("Age is required")
    .positive("Age must be a positive number")
    .integer("Age must be a integer number"),
  subscribe: yup
    .boolean()
    .required("Subscribe is required")
    .typeError("Subscribe must be boolean"),
  red: yup
    .boolean()
    .required("Red is required")
    .typeError("Red must be boolean"),
  blue: yup
    .boolean()
    .required("Blue is required")
    .typeError("Blue must be boolean"),
  dob: yup
    .date()
    .required("DOB is required")
    .typeError("DOB must be date")
});

export async function validateForm(data) {
  try {
    await formSchema.validate(data, { abortEarly: false });
    return { valid: true, errors: [] };
  } catch (err) {
    return { valid: false, errors: err.errors };
  }
};