import { useState } from "react";

export default function Inputemail(props) {
  const [userData, setUserData] = useState({
    email: "",
  });

  const [errors, setError] = useState({
    emailErr: "",
  });

  const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  const changeData = (e) => {
    if (e.target.name === "email") {
      setUserData({
        ...userData,
        email: e.target.value,
      });
      setError({
        ...errors,
        emailErr:
          e.target.value.length === 0
            ? "email ie required"
            : e.target.value.length < 5
            ? "email  is 5 char."
            : !emailregex.test(e.target.value)
            ? "unvalid unvalid"
            : null,
      });
    }
  };
  return (
    <>
      <input
      placeholder="Email"
        type="email"
        className={` ${errors.emailErr ? "border-danger" : ""}`}
        id="exampleInputemail"
        value={userData.email}
        onChange={(e) => changeData(e)}
        name="email"
      />
      <div className="text-danger">{errors.emailErr}</div>

      {/* <input className="" type="email" placeholder="Email" /> */}
    </>

    // <div className="mb-3">
    //     <label htmlFor="exampleInputemail" className="form-label">email</label>
    //     <input
    //         type="text"
    //         className={`form-control ${errors.emailErr ? "border-danger" : ""}`}
    //         id="exampleInputemail"
    //         value={userData.email}
    //         onChange={(e) => changeData(e)}
    //         name="email"
    //     />
    //     <div className="text-danger">
    //         {errors.emailErr}
    //     </div>
    // </div>
  );
}
