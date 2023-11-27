import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { instance } from "../App";
import { toastSuccess, warnToast } from "../Services/toasts";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      instance
        .post("/forgot-password", {
          email,
        })
        .then((response) => {
          const message = response.data.message;
          toastSuccess(message);
          setEmail("");
          setTimeout(() => {
            navigate("/");
          }, 3000);
        })
        .catch((error) => {
          const errorMessage = error.response.data.message;
          warnToast(errorMessage);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center w-100 bg-primary vh-100">
        <div className="bg-white p-3 rounded col-xl-3 col-lg-4 col-md-5 col-sm-6 mobile ">
          <h2 className="text-center">Forgot Password ?</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">
                <p className=" my-1 ">
                  Type your{" "}
                  <b className=" text-decoration-underline">registered</b> email
                  here
                </p>
              </label>
              <p>We will send a password set-up link on your email</p>
              <input
                type="email"
                placeholder="Enter email"
                className="form-control rounded-1 "
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <button type="submit" className="btn btn-success rounded mt-3">
              Send email
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
