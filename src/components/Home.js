import React, { useEffect } from "react";
import { toastSuccess } from "../Services/toasts";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    toastSuccess();
  }, []);

  return (
    <>
      <div className="  d-flex flex-column align-content-center justify-content-center vh-100">
        <h1 className=" text-center">Welcome to</h1>
        <h2 className="text-center">Password Reset Flow App</h2>
        <p className=" container w-50 my-3 px-4 py-1 bg-light border rounded shadow-sm">
          Welcome to Password Reset Flow App! This application provides a
          user-friendly interface for managing the password reset flow, ensuring
          a secure and efficient experience for our users.
        </p>
        <div className=" align-self-center">
          <Link to={"/signup"}>
            <Button
              variant="outline-primary"
              className=" mx-2 text font-weight-bold"
            >
              Register
            </Button>
          </Link>
          <Link to={"/login"}>
            <Button className=" mx-2" variant="outline-success">
              Login
            </Button>
          </Link>
          <Link to={"/reset"}>
            <Button className=" mx-2" variant="outline-danger">
              Forgot Password
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
