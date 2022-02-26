import axios from "axios";
import React from "react";

const Temp = () => {
  const [up, setup] = React.useState("");
  const func = (e) => {
    setup(e.target.files[0]);
  };
  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", up);
    formData.append("name", "Abubakar");
    console.log(up);
    axios
      .post("http://localhost:9000/temp", formData)
      // .post("https://httpbin.org/anything", formData)
      .then((res) => {
        console.log("Data sent", res);
      })
      .catch((err) => alert("There was an error"));
  };
  return (
    <form action="" method="post" onSubmit={submitForm}>
      <input type="file" onChange={func} />
      <button type="submit">submit</button>
    </form>
  );
};

export default Temp;
