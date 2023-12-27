import * as Yup from "yup";

const personSchema = Yup.object().shape({
  id: Yup.number(),
  name: Yup.string().required("Name is a required field"),
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  phone: Yup.string()
    .required("Phone is a required field")
    .matches(
      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      "Invalid phone number format"
    ),
});

export default personSchema;
