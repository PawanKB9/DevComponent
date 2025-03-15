import React , { useState } from "react";
import THEMES from "./Theme.jsx";
import useTheme from "./Context.jsx"

const LoginSignupForm = ({navigate}) => {

    const {theme} = useTheme()
    
        function changeForm() {
            document.getElementById("signUp").classList.toggle("hidden");
            document.getElementById("logIn").classList.toggle("hidden");
        }
    
      return (
        <div id="loginSignupForm" className={`${THEMES[theme].outerContainer} min-h-screen`}>
          
    
           
    
          <div id="signUp" className="flex flex-col items-center justify-center">
            <form action="#" className="w-[93vw]  max-w-[430px] mobilePhone:w-[90vw] mobilePhone:max-w-[658px] largePhone:max-w-[850px] largePhone:w-[85vw]">
              <label htmlFor="userid" className={`${THEMES[theme].labels} my-4 block text-lg largePhone:text-xl tab:text-2xl font-bold`}>
                Enter Unique User-Name / User ID
              </label>
              <input type="text" id="userid" name="userid" placeholder="Enter User ID" required className={`${THEMES[theme].input1} capsuleInputBar`} />
              <input type="text" id="name" name="name" placeholder="Full Name" required className={`${THEMES[theme].input1} capsuleInputBar`} />
              <input type="text" id="name" name="name" placeholder="Collage Name" required className={`${THEMES[theme].input1} capsuleInputBar`} />
             
              <input type="password" name="password" id="password" placeholder="Enter Strong Password" required className={`${THEMES[theme].input1} capsuleInputBar`} />
              <button type="submit" onClick={() => navigate(1)} className={`${THEMES[theme].buttons} w-[50vw] max-w-[425px] mx-auto block rounded-full p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl`}>Sign Up</button>
              <p className="largePhone:text-lg mx-4">
                Already have an account? 
                <button type="button" onClick={changeForm} className={`${THEMES[theme].labels} underline  block text-lg largePhone:text-xl tab:text-2xl font-bold my-6`}>Log In</button>
              </p>
            </form>
          </div>
          <div id="logIn" className="hidden">
            <div className="flex flex-col items-center justify-center my-12">
              <form action="#">
                <input type="text" id="loginUserid" name="userid" placeholder="Enter User ID" required className={`${THEMES[theme].input1} capsuleInputBar`} />
                <input type="password" name="password" id="loginPassword" placeholder="Enter Password" required className={`${THEMES[theme].input1} capsuleInputBar`} />
                <button type="submit" onClick={() => navigate(1)} className={`${THEMES[theme].buttons} w-[50vw] max-w-[425px] mx-auto block rounded-full p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl`}>Login</button>
                <p className="largePhone:text-lg ">
                  Create an account! 
                  <button type="button" onClick={changeForm} className={`${THEMES[theme].labels}  block text-lg largePhone:text-xl tab:text-2xl font-bold my-6 underline`}>Sign Up</button>
                </p>
                {/* <div className="flex justify-between  my-6 mx-[5vw]">
                  <p className="largePhone:text-lg">Or log in via:</p>
                  <i className="fa-solid fa-g text-3xl tab:text-4xl text-violet-700"></i>
                  <i className="fa-solid fa-envelope text-3xl tab:text-4xl text-blue-800"></i>
                </div> */}
               
              </form>
            </div>
          </div>
        </div>
      );
    };
    
const VerifyPassword = ({navigate}) => {

      const {theme} = useTheme()
    
        const validateInput = (event) => {
          event.preventDefault();
          
        };
      
        return (
          <div className={`${THEMES[theme].outerContainer} min-h-screen`}>
            <div className="flex justify-center p-[3vw] pt-[10vh]  rounded-lg shadow-lg">
    
    
              <form onSubmit={validateInput}>
                <label htmlFor="userInput" className={`${THEMES[theme].labels} my-4 block text-lg largePhone:text-xl tab:text-2xl font-bold`}>
                  Verify Your Email or Mobile Number
                </label>
                <input
                  type="text"
                  id="userInput"
                  name="userInput"
                  placeholder="Enter your Mob or Gmail"
                  required
                  className={`${THEMES[theme].input1} capsuleInputBar`}
                />
                <button type="submit" onClick={() => navigate(2)} className={`${THEMES[theme].buttons} w-[50vw] max-w-[425px] mx-auto block rounded-full p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl`} >
                  Verify
                </button>
              </form>
            </div>
      
            <div id="popUpOTPform" className="flex justify-center p-[3vw] mt-[10vh]  rounded-lg shadow-lg">
              <form className="flex-col justify-center items-center">
                <label htmlFor="otp" className={`${THEMES[theme].labels} my-4 block text-lg largePhone:text-xl tab:text-2xl font-bold`}>
                  Enter OTP
                </label>
                <input
                  type="tel"
                  id="otp"
                  name="otp"
                  maxLength="6"
                  minLength="6"
                  placeholder=" 0 0 - 0 0 - 0 0"
                  className={`${THEMES[theme].input1} capsuleInputBar`}
                  required
                />
                <button type="submit" onClick={() => navigate(2)} className={`${THEMES[theme].buttons} w-[50vw] max-w-[425px] mx-auto block rounded-full p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl`}>
                  Verify
                </button>
              </form>
            </div>
          </div>
        );
    };

const CodingLanguage = ({navigate}) => {
      
      const {theme} = useTheme()
      

      
        return (
          <div id="loginSignupForm" className={`${THEMES[theme].outerContainer} min-h-screen`}>
            
      
             
      
            <div id="signUp" className="flex flex-col items-center justify-center">
              <form action="#" className="w-[93vw]  max-w-[430px] mobilePhone:w-[90vw] mobilePhone:max-w-[658px] largePhone:max-w-[850px] largePhone:w-[85vw]">
                <label htmlFor="userid" className={`${THEMES[theme].labels} my-4 block text-lg largePhone:text-xl tab:text-2xl font-bold`}>
                  Select Your Coding Language
                </label>
                <div className="my-4">
                  <input type="radio" id="React" name="CodingLanguage"  required />
                  <label htmlFor="React" className={`${THEMES[theme].labels}  my-4 px-6 text-lg largePhone:text-xl tab:text-2xl font-bold`}>React</label>
                </div>
                <div className="my-4">
                <input type="radio" id="Non-react-tailwind" name="CodingLanguage" required  />
                <label htmlFor="Non-react-tailwind" className={`${THEMES[theme].labels} my-4 px-6 text-lg largePhone:text-xl tab:text-2xl font-bold`}>Non-React with Tailwind</label>

                </div>
                <div className="my-4">
                <input type="radio" id="Non-React" name="CodingLanguage" required  />
                <label htmlFor="Non-React" className={`${THEMES[theme].labels} my-4 px-6 text-lg largePhone:text-xl tab:text-2xl font-bold`}>Non-React</label>

                </div>
               
                <button type="submit" onClick={() => navigate(3)} className={`${THEMES[theme].buttons} w-[50vw] max-w-[425px] mx-auto block rounded-full p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl`}>Next</button>
             
              </form>
            </div>

          </div>
        );
    };

const ReactCode = ({navigate}) => {
      
      const {theme} = useTheme()

        return (
          <div id="loginSignupForm" className={`${THEMES[theme].outerContainer} min-h-screen`}>
          
            <div id="signUp" className="flex flex-col items-center justify-center">
              <form action="#" className="w-[93vw]  max-w-[430px] mobilePhone:w-[90vw] mobilePhone:max-w-[658px] largePhone:max-w-[850px] largePhone:w-[85vw]">
                <label htmlFor="userid" className={`${THEMES[theme].labels} my-4 block text-lg largePhone:text-xl tab:text-2xl font-bold`}>
                  Post Your Code
                </label> 
                <input type="text" id="name" name="name" placeholder="Title / Component Name" required className={`${THEMES[theme].input1} capsuleInputBar`} />
                <input type="text" id="name" name="name" placeholder="Description about code..." required className={`${THEMES[theme].input1} capsuleInputBar`} />
                <textarea placeholder="Your code goes here..." className={`${THEMES[theme].input1} codeArea `}></textarea>
               
                <button type="submit" onClick={() => navigate(4)} className={`${THEMES[theme].buttons} w-[50vw] max-w-[425px] mx-auto block rounded-full p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl`}>Next</button>
             
              </form>
            </div>
            
          </div>
        );
    };

const NonReactCode = ({navigate}) => {
      
      const {theme} = useTheme()

      
        return (
          <div id="loginSignupForm" className={`${THEMES[theme].outerContainer} min-h-screen`}>
            
      
             
      
            <div id="signUp" className="flex flex-col items-center justify-center">
              <form action="#" className="w-[93vw]  max-w-[430px] mobilePhone:w-[90vw] mobilePhone:max-w-[658px] largePhone:max-w-[850px] largePhone:w-[85vw]">
              <label htmlFor="userid" className={`${THEMES[theme].labels} my-4 block text-lg largePhone:text-xl tab:text-2xl font-bold`}>
                  Post Your Code
                </label>
                <input type="text" id="name" name="name" placeholder="Title / Component Name" required className={`${THEMES[theme].input1} capsuleInputBar`} />
                <input type="text" id="name" name="name" placeholder="Description about code..." required className={`${THEMES[theme].input1} capsuleInputBar`} />
                <textarea placeholder="HTML code" className={`${THEMES[theme].input1} codeArea `}></textarea>
                <textarea placeholder="CSS code" className={`${THEMES[theme].input1} codeArea `}></textarea>
                <textarea placeholder="JS code" className={`${THEMES[theme].input1} codeArea `}></textarea>

               
                <button type="submit" onClick={() => navigate(0)} className={`${THEMES[theme].buttons} w-[50vw] max-w-[425px] mx-auto block rounded-full p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl`}>Next</button>
             
              </form>
            </div>
            
          </div>
        );
    };

    const allForms = [
      LoginSignupForm,
      VerifyPassword,
      CodingLanguage,
      ReactCode,
      NonReactCode,
    ];
  
  
    const FormSwitcher = () => {
      const [currentFormIndex, setCurrentFormIndex] = useState(0);
    
      const navigate = (index) => {
        setCurrentFormIndex(index);
      };
    
      const SelectedForm = allForms[currentFormIndex];
    
      return (
        <div>
          <SelectedForm navigate={navigate} />
        </div>
      );
    };
    
    export default FormSwitcher;