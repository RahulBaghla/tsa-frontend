import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../Constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (formData) => {
    try {
      const res = await axios.post(API + "/api/auth", formData);
      if (res.data.token) {
        localStorage.setItem("authToken", res.data.token);
        localStorage.setItem("userName", res.data.user.name);
        window.location.href = "/Index";
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      window.location.href = "/Index";
    }
  });

  return (
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-stretch auth auth-img-bg">
          <div class="row flex-grow">
            <div class="col-lg-6 d-flex align-items-center justify-content-center">
              <div class="auth-form-transparent text-left p-3">
                <div class="brand-logo">
                  {/* <img src="../../../../images/logo.svg" alt="logo" /> */}
                  <h3 style={{ color: "purple" }}>
                    Twitter Sentimental Analysis
                  </h3>
                </div>
                <h4>Welcome back!</h4>
                <h6 class="font-weight-light">Happy to see you again!</h6>
                <form class="pt-3">
                  <div class="form-group">
                    <label for="exampleInputEmail">Username</label>
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span class="input-group-text bg-transparent border-right-0">
                          <i class="mdi mdi-account-outline text-primary"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        class="form-control form-control-lg border-left-0"
                        id="exampleInputEmail"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword">Password</label>
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span class="input-group-text bg-transparent border-right-0">
                          <i class="mdi mdi-lock-outline text-primary"></i>
                        </span>
                      </div>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        class="form-control form-control-lg border-left-0"
                        id="exampleInputPassword"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  {/* <div class="my-2 d-flex justify-content-between align-items-center">
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input" />
                        Keep me signed in
                      </label>
                    </div>
                    <a href="#" class="auth-link text-black">
                      Forgot password?
                    </a>
                  </div> */}
                  <div class="my-3">
                    <button
                      class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        loginUser({ email, password });
                      }}
                    >
                      LOGIN
                    </button>
                  </div>
                  <div class="text-center mt-4 font-weight-light">
                    Don't have an account?{" "}
                    <a href="/Register" class="text-primary">
                      Create
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6 login-half-bg d-flex flex-row">
              <p class="text-white font-weight-medium text-center flex-grow align-self-end">
                Copyright &copy; 2021 All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
