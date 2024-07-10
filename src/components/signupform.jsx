import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import userlogin from "../userinfo";
import  { useMediaQuery } from "react-responsive";

function Example(props) {
  const isDesktop = useMediaQuery({ minWidth: 1000 });
  const { show, onHide, onLogin, getData } = props;
  const { showM, onHideM} = props;
  const [signin, setstatus] = useState(false);
  const handleform = () => setstatus(!signin);
  const [formData, setFormData] = useState({
    avtar: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();

    const user = userlogin.find((user) => {
      return (
        user.email === formData.email && user.password === formData.password
      );
    });

    if (user) {
      console.log("Login successful");
      // You can also store the user data in a state or local storage
      onLogin();
      getData(user);
    } else {
      console.log("Invalid email or password");
    }
  };
  return (
    <>
      {(showM||show) && (
        <div className="model-overlay">
          <div className="model-window">
            {isDesktop && (
              <CancelIcon
                className="close-icon"
                htmlColor="#fff"
                onClick={onHide}
              />
            )}
            <div className="model-content">
              {!isDesktop && (
                <div className="form-title">
                  {signin ? <h3> Welcome Back!</h3> : <h3> Create Account</h3>}
                  
                    <CancelIcon
                      className="close-icon"
                      htmlColor="#212529"
                      onClick={onHideM}
                    />
                 
                </div>
              )}

              <div className="alert-custom ">
                {isDesktop && (
                  <p>
                    Let's learn, share & inspire each other with our passion for
                    computer engineering.
                    {signin ? (
                      <span> Sign in now 🤘🏼</span>
                    ) : (
                      <span> Sign up now 🤘🏼</span>
                    )}
                  </p>
                )}
              </div>
              <div className="form-content">
                <div className="form-left">
                  {isDesktop && (
                    <div className="form-title">
                      {signin ? <h3> Welcome Back!</h3> : <h3> Create Account</h3>}
                    </div>
                  )}
                  <form className="inputmob" onSubmit={handlesubmit} >
                    <div className="inputs">
                      {signin ? (
                        <>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Email"
                            className="form-input"
                            onChange={handleChange}
                          />
                          <input
                            type="password"
                            name="password"
                            value={formData.password}
                            placeholder="Password"
                            className="form-input"
                            onChange={handleChange}
                          />
                        </>
                      ) : (
                        <>
                          <>
                            <input
                              type="text"
                              placeholder="First Name"
                              name="fname"
                              value={formData.fname}
                              className="form-input1"
                              onChange={handleChange}
                            />
                            <input
                              type="text"
                              name="lname"
                              value={formData.lname}
                              placeholder="Last Name"
                              className="form-input1"
                              onChange={handleChange}
                            />
                          </>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Email"
                            className="form-input"
                            onChange={handleChange}
                          />
                          <input
                            type="password"
                            name="password"
                            value={formData.password}
                            placeholder="Password"
                            className="form-input"
                            onChange={handleChange}
                          />
                          <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            placeholder="Confirm Password"
                            className="form-input"
                            onChange={handleChange}
                          />
                        </>
                      )}
                    </div>

                    <div className="cenbtn">
                      {signin ? (<>
                        <button
                          className="btdn-form"
                          type="submit"
                          name="signInBtn"
                        >
                          Sign In
                        </button>
                         {!isDesktop&&<span onClick={handleform} className="blue underline">
                        or, Create Account
                      </span>}</>
                      ) : (<>
                        <button
                          className="btdn-form"
                          type="submit"
                          name="signUpBtn"
                        >
                          Create Account
                        </button>
                        {!isDesktop&&<span onClick={handleform} className="blue underline">
                        or, Sign in
                      </span>}</>
                      )}
                     
                    </div>
                  </form>
                  <div className="socialbtn">
                    <div className="social-share">
                      <img src="facebook.png" style={{ width: 16 }} />
                      <span className="social-text">Sign in with Facebook</span>
                    </div>
                    <div className="social-share">
                      <img src="google.png" style={{ width: 16 }} />
                      <span className="social-text">Sign in with Google</span>
                    </div>
                    {signin && (
                      <div className="forgotPass">Forgot Password?</div>
                    )}
                  </div>
                </div>
                <div className="form-right">
               
                  {signin ? isDesktop&&(
                    <p style={{ fontSize: 14 }}>
                      Don’t have an account yet?
                      <span onClick={handleform} className="blue">
                        Create new for free!
                      </span>
                    </p>
                  ) : isDesktop&&(
                    <p style={{ fontSize: 14 }}>
                      Already have an account?
                      <span onClick={handleform} className="blue">
                        Sign in
                      </span>
                    </p>
                  )}

                  {isDesktop && (
                    <img
                      src="formimg.png"
                      style={{ width: 250, alignSelf: "flex-start" }}
                    />
                  )}
                  {!signin && (
                    <p style={{ fontSize: 11 }}>
                      By signing up, you agree to our Terms & conditions,
                      Privacy policy
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Example;
