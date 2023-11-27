import React from "react";
import { useFormik } from "formik";
import { useSearchParams } from "react-router-dom";
import { ChangePasswordSchema } from "../Schemas/userValidationSchema";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import { instance } from "../App";
import { errorToast, toastSuccess } from "../Services/toasts";

const PasswordReset = () => {
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");
  const userId = searchParams.get("userId");
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const navigate = useNavigate();

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: ChangePasswordSchema,
      onSubmit: (values, { resetForm }) => {
        const newPassword = values.password;

        instance
          .post("/reset-password", {
            token,
            userId,
            newPassword,
          })
          .then((response) => {
            const message = response.data.message;
            toastSuccess(message);
            setTimeout(() => {
              navigate("/login");
            }, 1500);
          })
          .catch((error) => {
            const errorMessage = error.response.data.message;
            errorToast(errorMessage);
          });
        resetForm();
      },
    });
  return (
    <>
      <div className="d-flex justify-content-center align-items-center w-100 bg-primary vh-100">
        <div className="bg-white p-3 rounded  w-25 ">
          <h2 className="text-center">Reset Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="m-3">
              <label htmlFor="password">
                <strong>Enter new password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="form-control rounded-1 "
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {touched.password && errors.password ? (
                <p className="text-danger">{errors.password}</p>
              ) : null}
            </div>
            <div className="m-3">
              <label htmlFor="password">
                <strong>Confirm new password</strong>
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="form-control rounded-1 "
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {touched.confirmPassword && errors.confirmPassword ? (
                <p className="text-danger">{errors.confirmPassword}</p>
              ) : null}
            </div>
            <button type="submit" className="btn btn-success w-100 rounded ">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
