

import { Link } from "react-router";
import SignInForm from "../components/SignInForm";

const SigninPage = () => {
  return (
    <div className="signin-page  lg:h-screen p-0 lg:p-5 flex  items-center">
      <main className="main-container  w-full h-full p-10">
        <section className="card flex lg:flex-row bg-base-100 w-full h-full border">
          <div className="first card lg:w-1/2  lg:p-5 bg-base-200 items-center justify-center pb-5">
            <div>
              <div className="mb-5">
                <h2 className=" text-4xl font-bold ">Hi Welcome Back</h2>
                <p className=" text-sm lg:text-md"> More effectively with optimized workflows.</p>
              </div>
              <div className=" w- lg:w-85 h-30 lg:h-80  rounded-2xl overflow-hidden flex items-center bg-amber-200">
                <img src='https://static.vecteezy.com/system/resources/previews/009/228/869/large_2x/protect-forgot-password-icon-illustration-for-website-mobile-app-concept-hand-poked-security-icon-perfect-for-ui-ux-project-landing-page-web-brochure-advertising-flayer-vector.jpg' className=" w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="second-card p-5 flex items-center justify-center lg:w-1/2">
            <div>
              <h2 className="text-3xl font-bold mb-4">Sign in to your account</h2>
              <p className="">
                {/* Dynamic text*/}
                Don't have an account?<Link to='/signup'> Get started</Link>
              </p>

              <div className="mt-5">
                {/* Signin Form */}
                <SignInForm />
              </div>

            </div>
          </div>

        </section>
      </main>
    </div>
  );
};

export default SigninPage;
