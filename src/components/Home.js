import React, { useEffect } from "react";
import { toastSuccess } from "../Services/toasts";

function Home() {
  useEffect(() => {
    toastSuccess();
  }, []);

  return (
    <>
      <h1 className="color">Password flow Reset</h1>
    </>
  );
}

export default Home;
