

import { Link } from "react-router";
import SignInForm from "../components/SignInForm";

const SigninPage = () => {
  return (
    <div className="signin-page min-h-screen p-4 lg:p-8 flex items-center justify-center bg-base-100">
      <main className="main-container w-full max-w-5xl">
        <section className="card flex lg:flex-row bg-base-100 w-full shadow-xl rounded-3xl overflow-hidden border border-slate-200">
          <div className="first card lg:w-1/2 bg-base-200 items-center justify-center p-8 lg:p-12 hidden lg:flex">
            <div className="text-center">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Hi Welcome Back</h2>
                <p className="text-base opacity-70">More effectively with optimized workflows.</p>
              </div>
              <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-lg">
                <img
                  src='https://static.vecteezy.com/system/resources/previews/009/228/869/large_2x/protect-forgot-password-icon-illustration-for-website-mobile-app-concept-hand-poked-security-icon-perfect-for-ui-ux-project-landing-page-web-brochure-advertising-flayer-vector.jpg'
                  className="w-full h-full object-cover"
                  alt="Login illustration"
                />
              </div>
            </div>
          </div>

          <div className="second-card p-8 lg:p-12 flex items-center justify-center lg:w-1/2 w-full">
            <div className="w-full max-w-md">
              <h2 className="text-3xl font-bold mb-2">Sign in</h2>
              <p className="mb-8 text-base opacity-70">
                Don't have an account? <Link to='/signup' className="link link-primary">Get started</Link>
              </p>

              <div className="mt-5">
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
