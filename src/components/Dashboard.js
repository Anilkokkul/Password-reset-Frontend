import React from "react";

function Dashboard() {
  return (
    <div className=" py-5 text-center d-flex flex-column justify-content-center vh-100">
      <h1 className=" text-info">Congratulations 🎉</h1>
      <h5 className=" my-2 fw-bold ">You Have Logged in Successfully</h5>
      <p className="my-2">
        You can now access all the features of our platform.
      </p>
    </div>
  );
}

export default Dashboard;
