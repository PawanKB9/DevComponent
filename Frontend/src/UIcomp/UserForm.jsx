import React , { useState } from "react";
import THEMES from "./Theme.jsx";
import useTheme from "./Context.jsx"

const LoginSignupForm = ({navigate}) => {

    const [userName , setUserName] = useState('');
    const [fullName , setFullName] = useState('')
    const [CollegeName , setCollegeName] = useState('')
    const [password , setPassword] = useState('')

    const {theme} = useTheme()
    
    function changeForm() {
        document.getElementById("signUp").classList.toggle("hidden");
        document.getElementById("logIn").classList.toggle("hidden");
    }

    const handleLogin = (e) => {
        e.preventDefault
        navigate(1)
    }
    const handleSignUp = (e) => {
        e.preventDefault
        navigate(1)
    }
      return (
        <div id="loginSignupForm" className={`${THEMES[theme].page2} min-h-screen`}>
          
    
           
    
          <div id="signUp" className={` flex flex-col items-center justify-center`}>
            <form action="#" className={` ${THEMES[theme].outerContainer} p-6 my-14 rounded-lg`}>
              <label htmlFor="userid" className={`${THEMES[theme].labels} my-4 block text-lg largePhone:text-xl tab:text-2xl font-bold`}>
                Enter Unique User-Name / User ID
              </label>
              
              <input type="text" onChange={(e) => {setUserName(e.target.value)}} value={userName}  id="UserName" name="UserName" placeholder="Enter UserName" required className={`${THEMES[theme].input1} capsuleInputBar`} />
              <input type="text" onChange={(e) => {setFullName(e.target.value)}} value={fullName} id="FullName" name="FullName" placeholder="Full Name" required className={`${THEMES[theme].input2} capsuleInputBar`} />
              <input type="text" onChange={(e) => {setCollegeName(e.target.value)}} value={CollegeName} id="CollegeName" name="CollegeName" placeholder="College Name" required className={`${THEMES[theme].input1} capsuleInputBar`} />
             
              <input type="password" onChange={(e) => {setPassword(e.target.value)}} value={password} name="password" id="password" placeholder="Enter Strong Password" required className={`${THEMES[theme].input2} capsuleInputBar`} />
              <button type="submit" onClick={handleSignUp} className={`${THEMES[theme].buttons} w-[50vw] max-w-[425px] mx-auto block rounded-full p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl`}>Sign Up</button>
              <p className={`largePhone:text-lg mx-4 ${THEMES[theme].text}`}>
                Already have an account? 
                <button type="button" onClick={changeForm} className={`${THEMES[theme].labels} underline  block text-lg largePhone:text-xl tab:text-2xl font-bold my-6`}>Log In</button>
              </p>
            </form>
          </div>
          <div id="logIn" className={`${THEMES[theme].page2} hidden`}>
            <div className="flex flex-col items-center justify-center my-12">
              <form action="#"className={` ${THEMES[theme].outerContainer} p-6 my-14 rounded-lg`} >
              <input type="text" onChange={(e) => {setUserName(e.target.value)}} value={userName}  id="UserName" name="UserName" placeholder="Enter UserName" required className={`${THEMES[theme].input1} capsuleInputBar`} />
              <input type="password" onChange={(e) => {setPassword(e.target.value)}} value={password} name="password" id="password" placeholder="Enter Strong Password" required className={`${THEMES[theme].input2} capsuleInputBar`} />
                
                <button type="submit" onClick={handleLogin} className={`${THEMES[theme].buttons} w-[50vw] max-w-[425px] mx-auto block rounded-full p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl`}
                >Login</button>

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
      const [email , setEmail] = useState('');

      const validateInput = (e) => {
        e.preventDefault();  
        navigate(2)     
      };
      
        return (
          <div className={`${THEMES[theme].page2} min-h-screen`}>
            <div className="flex justify-center p-[3vw] pt-[10vh]  rounded-lg shadow-lg">
    
    
              <form  className={` ${THEMES[theme].outerContainer} p-6 my-14 rounded-lg`}>
                <label htmlFor="userInput" className={`${THEMES[theme].labels} my-4 block text-lg largePhone:text-xl tab:text-2xl font-bold`}>
                  Verify Your Email
                </label>
                <input
                  type="text"
                  id="userInput"
                  name="userInput"
                  value={email}
                  onChange={(e) => {setEmail(e.target.value)}}
                  placeholder="Enter your Mob or Gmail"
                  required
                  className={`${THEMES[theme].input1} capsuleInputBar`}
                />
                <button type="submit" onClick={validateInput} className={`${THEMES[theme].buttons} w-[50vw] max-w-[425px] mx-auto block rounded-full p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl`} >
                  Verify
                </button>
              </form>
            </div>

          </div>
        );
    };

const OtpVerification = ({navigate}) => {
  const { theme } = useTheme();
  const [otp , setOtp] = useState();
  const VerifyOtp = (e) => {
    e.preventDefault();
    navigate(3)
    
  }

  return (
    <div id="popUpOTPform" className="flex justify-center p-[3vw] mt-[10vh]  rounded-lg shadow-lg">
    <form className={` ${THEMES[theme].outerContainer} p-6 my-14 rounded-lg`}>
      <label htmlFor="otp" className={`${THEMES[theme].labels} my-4 block text-lg largePhone:text-xl tab:text-2xl font-bold`}>
        Enter OTP
      </label>
      <input
        type="tel"
        id="otp"
        name="otp"
        maxLength="6"
        minLength="6"
        value={otp}
        onChange={(e) => {setOtp(e.target.value)}}
        placeholder=" 0 0 - 0 0 - 0 0"
        className={`${THEMES[theme].input1} capsuleInputBar`}
        required
      />
      <button type="submit" onClick={VerifyOtp} className={`${THEMES[theme].buttons} w-[50vw] max-w-[425px] mx-auto block rounded-full p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl`}>
        Verify
      </button>
    </form>
  </div>
  )
}



    export{
        LoginSignupForm,
        VerifyPassword,
        OtpVerification,
    }