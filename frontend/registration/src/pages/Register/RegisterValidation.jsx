export default function validation(values) {
  let err = {};
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const namePattern = /^[a-zA-Z0-9]{6,}$/;

  if (values.name == "") {
    err.name = "Name should not be empty";
  } else if (!namePattern.test(values.name)) {
    err.name = "Password not matching the requirments";
  } else {
    err.emnameail = "";
  }

  if (values.email == "") {
    err.email = "Email should not be empty";
  } else if (!emailPattern.test(values.email)) {
    err.email = "Password not matching the requirments";
  } else {
    err.email = "";
  }

  if (values.password == "") {
    err.password = "Password should not be empty";
  } else if (!passwordPattern.test(values.password)) {
    err.password = "Password not matching the requirments";
  } else {
    err.password = "";
  }
  return err;
}
