import { useState, useEffect } from "react";
import AuthLayout from "@/components/AuthLayout/AuthLayout";
import { Alert, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

export default function Login() {
  const [loginError, setLoginError] = useState("");
  const [isLoginStarted, setIsLoginStarted] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    setIsLoginStarted(true);
    signIn("credentials", {
      email: formData.email,
      password: formData.password,
      callbackUrl: `${window.location.origin}/`,
    });
  };

  useEffect(() => {
    if (router.query.error) {
      setLoginError(router.query.error);
      setValue("email", router.query.email);
    }
  }, [router]);

  return (
    <div className="auth-content my-auto">
      <div className="text-center">
        <h5 className="mb-0">Welcome Back !</h5>
        <p className="text-muted mt-2">Sign in to continue to Demo.</p>
      </div>
      <form className="mt-4 pt-2" onSubmit={handleSubmit(onSubmit)}>
        {loginError && <Alert variant="danger">{loginError}</Alert>}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="mail"
            className="form-control"
            id="email"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="required">Email is required</span>}
        </div>
        <div className="mb-3">
          <div className="d-flex align-items-start">
            <div className="flex-grow-1">
              <label className="form-label">Password</label>
            </div>
            <div className="flex-shrink-0">
              <div className="">
                <a href="#" className="text-muted">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
          <div className="input-group auth-pass-inputgroup">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              aria-label="Password"
              aria-describedby="password-addon"
              {...register("password", { required: true })}
            />
            <button
              className="btn btn-light shadow-none ms-0"
              type="button"
              id="password-addon"
            >
              <i className="mdi mdi-eye-outline"></i>
            </button>
          </div>
          {errors.password && (
            <span className="required">Password is required</span>
          )}
        </div>
        <div className="row mb-4">
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="remember-check"
                defaultValue={0}
                {...register("remember", { required: false })}
              />
              <label className="form-check-label" htmlFor="remember-check">
                Remember me
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <button
            className={
              isLoginStarted
                ? "btn btn-primary w-100 waves-effect waves-light disabled"
                : "btn btn-primary w-100 waves-effect waves-light"
            }
            type="submit"
          >
            {isLoginStarted && (
              <Spinner animation="border" variant="light" size="sm" />
            )}
            Log In
          </button>
        </div>
      </form>
      <div className="mt-4 pt-2 text-center">
        <div className="signin-other-title">
          <h5 className="font-size-14 mb-3 text-muted fw-medium">
            - Sign in with -
          </h5>
        </div>
        <ul className="list-inline mb-0">
          <li className="list-inline-item">
            <a
              href="#"
              className="social-list-item bg-primary text-white border-primary"
            >
              <i className="mdi mdi-facebook"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="#"
              className="social-list-item bg-info text-white border-info"
            >
              <i className="mdi mdi-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="#"
              className="social-list-item bg-danger text-white border-danger"
            >
              <i className="mdi mdi-google"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-5 text-center">
        <p className="text-muted mb-0">
          Don't have an account ?{" "}
          <a href="register.html" className="text-primary fw-semibold">
            {" "}
            Signup now{" "}
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

Login.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
