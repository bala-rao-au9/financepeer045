import React from "react";
import { Field, reduxForm } from "redux-form";

const renderInput = ({ input, type }) => {
  const handleInput = (event) => {
    event.preventDefault();
    let JSONFile = event.target.files[0];
  };
  return (
    <div>
      <input name={input.name} type={type} onChange={handleInput} />
    </div>
  );
};

function Fileupload() {
  return (
    <div>
      <h2>File upload Using json</h2>
      <h3>Select File:</h3>
      <Field name="json" type="file" component={renderInput} />
      <button type="submit">Submit</button>
    </div>
  );
}

export default reduxForm({
  form: "myfileupload",
})(Fileupload);
