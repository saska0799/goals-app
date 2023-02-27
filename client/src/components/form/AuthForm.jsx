import { Link, useLocation } from "react-router-dom";
import { forwardRef } from "react";
import Form from "./Form";
import Button from "../ui/Button";
import Input from "./Input";

const AuthForm = forwardRef(({ formSubmit, error }, ref) => {
  const location = useLocation();

  return (
    <Form formSubmit={formSubmit}>
      <h3 className="text-3xl">
        {location.pathname === "/login" ? "Login" : "Signup"}
      </h3>
      <div className="flex flex-col my-5">
        {location.pathname === "/signup" && (
          <>
            <label>Username</label>
            <Input
              type="text"
              placeholder="Username"
              ref={ref.usernameRef}
              required
            />
          </>
        )}
        <label>Email</label>
        <Input type="email" placeholder="Email" ref={ref.emailRef} required />
        <label>Password</label>
        <Input
          type="password"
          placeholder="Password"
          ref={ref.passwordRef}
          required
        />
      </div>

      <Button>Submit</Button>
      {error && <p className="text-red-600 my-8 text-sm">{error}</p>}
      {location.pathname === "/login" ? (
        <Link to="/signup" className="text-sm ">
          No accout? Click here to sign up
        </Link>
      ) : (
        <Link to="/login" className="text-sm ">
          Already have an accout? Click here to login
        </Link>
      )}
    </Form>
  );
});

export default AuthForm;
