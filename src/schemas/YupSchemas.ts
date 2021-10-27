import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Password is required"),
});

export const SearchingSchema = Yup.object().shape({
  search: Yup.string()
    .required("Seach something...")
    .min(3, "Too short.")
    .max(50, "Too long.")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed."),
});
