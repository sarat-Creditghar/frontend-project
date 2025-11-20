


import SignupForm from "../components/SignupForm";

const SignupPage = () => {
  return (
    <div className="signin-page  lg:h-screen p-0 lg:p-5 flex  items-center">
      <main className="main-container  w-full h-full ">
        <section className="card flex lg:flex-row bg-base-100 w-full h-full border">
          <div className="first card lg:w-1/2  lg:p-5 bg-base-200 items-center justify-center pb-5">
            <div>
              <div className="mb-5">
                <h2 className=" text-4xl font-bold mb-2">Welcome!<br />Create your account to continue</h2>
                <p className=" text-sm lg:text-lg"> More effectively with optimized workflows.</p>
              </div>
              <div className="  lg:w-full h-30 lg:h-80  rounded-2xl overflow-hidden flex items-center bg-amber-200">
                <img src='https://static.vecteezy.com/system/resources/previews/009/228/869/large_2x/protect-forgot-password-icon-illustration-for-website-mobile-app-concept-hand-poked-security-icon-perfect-for-ui-ux-project-landing-page-web-brochure-advertising-flayer-vector.jpg' className=" w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="second-card  flex items-center justify-center lg:w-2/3 ">
            <div>
              <h2 className="text-3xl font-bold mb-4">Create a New Account</h2>
              <p className="">
                {/* Dynamic text*/}
                have an account? LogIn
              </p>

              <div className="mt-5  ">
                {/* Signin Form */}
                <SignupForm />
              </div>

            </div>
          </div>

        </section>
      </main>
    </div>
  );
};

export default SignupPage;
