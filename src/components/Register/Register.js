import React from "react";

const Register = () => {
  return (
    <div>
      <h2>Please Register</h2>
      <form>
        <input type="text" placeholder="Enter Your Name" />
        <br />
        <input type="email" placeholder="Enter Your Email" />
        <br />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
