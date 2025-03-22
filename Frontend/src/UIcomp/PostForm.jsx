import React , { useState , useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import THEMES from "./Theme.jsx";
import useTheme from "./Context.jsx"


const ReactCode = ({}) => {
    
    const {theme} = useTheme()

    const [titleName ,setTitleName] = useState('')
    const [description , setDescription] = useState('')
    const [reactCode , setReactCode] = useState('')
    const navigate = useNavigate(); 
    const HandlePost = (e) => {
      // e.preventDefault();
      
    }


      return (
        <div id="loginSignupForm" className={`${THEMES[theme].page2} min-h-screen`}>
        
          <div id="signUp" className="flex flex-col items-center justify-center">
            <form action="#" className={` ${THEMES[theme].outerContainer} p-6 my-14 rounded-lg`}>
              <label htmlFor="userid" className={`${THEMES[theme].labels} my-4 block text-lg largePhone:text-xl tab:text-2xl font-bold`}>
                Post Your Code
              </label> 
              <input type="text" id="name" name="name" value={titleName} onChange={(e)=>{setTitleName(e.target.value)}} placeholder="Component Name" required className={`${THEMES[theme].input1} capsuleInputBar`} />
              <input type="text" id="name" name="name" value={description} onChange={(e) => {setDescription(e.target.value)}} placeholder="Description about code..." required className={`${THEMES[theme].input2} capsuleInputBar`} />
              <textarea placeholder="Your code goes here..." value={reactCode} onChange={(e) => {setReactCode(e.target.value)}} className={`${THEMES[theme].input1} codeArea `}></textarea>
              <div className="flex flex-col">
                <button type="" onClick={() => navigate("/")} className={`${THEMES[theme].buttons} cursor-pointer w-[50vw] my-4 mt-6 max-w-[425px] mx-auto block rounded-full p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl`}>
                Skip</button>
                <button type='submit' onClick={HandlePost} className={`${THEMES[theme].buttons} cursor-pointer w-[50vw] max-w-[425px] mx-auto block rounded-full p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl`}>Post</button>
              </div>
              {/* <input 
                type="submit"onClick={HandlePost} className={`${THEMES[theme].buttons} w-[50vw] max-w-[425px] mx-auto block rounded-full p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl`}value="Post" /> */}
            </form>
          </div>
          
        </div>
      );
  };

const NonReactCode = ({showCss}) => {
    
    const {theme} = useTheme()
    const navigate = useNavigate();

    const [titleName ,setTitleName] = useState('')
    const [description , setDescription] = useState('')
    const [htmlCode , setHtmlCode] = useState('')
    const [cssCode , setCssCode] = useState('')
    const [jsCode , setJsCode] = useState('')

    const HandlePost = (e) => {
      e.preventDefault();

    }
    
      return (
        <div id="loginSignupForm" className={`${THEMES[theme].page2} min-h-screen`}>
          
    
           
    
          <div id="signUp" className="flex flex-col items-center justify-center">
            <form action="#" className={` ${THEMES[theme].outerContainer} p-6 my-14 rounded-lg`}>
            <label htmlFor="userid" className={`${THEMES[theme].labels} my-4 block text-lg largePhone:text-xl tab:text-2xl font-bold`}>
                Post Your Code
              </label>
              <input type="text" id="compName" name="name" value={titleName} onChange={(e) => {setTitleName(e.target.value)}} placeholder="Component Name" required className={`${THEMES[theme].input1} capsuleInputBar`} />
              <input type="text" id="Description" name="name" value={description} onChange={(e) => {setDescription(e.target.value)}} placeholder="Description about code..." required className={`${THEMES[theme].input2} capsuleInputBar`} />
              <textarea placeholder="HTML code" value={htmlCode} onChange={(e) => {setHtmlCode(e.target.value)}} className={`${THEMES[theme].input1} codeArea `}></textarea>
              { showCss && 
              <textarea placeholder="CSS code" value={cssCode} onChange={(e) => {setCssCode(e.target.value)}} className={`${THEMES[theme].input2} codeArea `}></textarea>}
              <textarea placeholder="JS code" value={jsCode} onChange={(e) => {setJsCode(e.target.value)}} className={`${THEMES[theme].input1} codeArea `}></textarea>

              <button type="submit" onClick={() => navigate("/")} className={`${THEMES[theme].buttons} w-[50vw] cursor-pointer my-4 mt-6 max-w-[425px] mx-auto block rounded-full p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl`}>
              Skip</button>
              <button type="submit" onClick={HandlePost} className={`${THEMES[theme].buttons} w-[50vw] max-w-[425px] mx-auto block rounded-full p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl`}>Post</button>
           
            </form>
          </div>
          
        </div>
      );
  };

const PostForm = () => {

  const [lang , setLang] = useState(1);
        return (
          <div>
            <select
              name="themes"
              id="ChangeTheme"
              onChange={(e) => setLang(Number(e.target.value))}
              value={lang}
              className={`rectanglInputBar mx-auto `}>
              <option value={1} >React</option>
              <option value={2} >Non-React</option>
              <option value={3}  >Non-React-Tailwind</option>
            </select>
            {lang === 1 && <ReactCode />}
            {lang === 2 && <NonReactCode showCss={true} />}
            {lang === 3 && <NonReactCode showCss={false} />}
          </div>
        )
   
}

  export{
    // CodingLanguage,
    ReactCode,
    NonReactCode,
    PostForm,
  }

  // const CodingLanguage = ({navigate}) => {
      
  //   const { theme } = useTheme()
  //   const [lang , setLang] = useState(0)

  //   const HandleLang = () => {
  //     e.preventDefault();
  //     console.log(lang);
  //     navigate(3)
  //   }
    
  //   return (
  //     <div id="loginSignupForm" className={`${THEMES[theme].page2} min-h-screen`}>
  //       <div id="signUp" className="flex flex-col items-center justify-center">
  //         <form action="#" className={` ${THEMES[theme].outerContainer} p-6 mobilePhone:p-14 my-16 rounded-lg`}>
  //           <label htmlFor="userid" className={`${THEMES[theme].labels} my-4 block text-lg largePhone:text-xl tab:text-2xl font-bold`}>
  //             Select Your Coding Language
  //           </label>
  //           <div className="my-4">
  //             <input type="radio" id="React" checked={lang === value} onChange={() => {setLang(1)}} name="CodingLanguage"  required />
  //             <label htmlFor="React" className={`${THEMES[theme].labels}  my-4 px-6 text-lg largePhone:text-xl tab:text-2xl font-bold`}>React</label>
  //           </div>
  //           <div className="my-4">
  //             <input type="radio" id="Non-React" checked={lang === value} onChange={() => {setLang(2)}} name="CodingLanguage" required  />
  //             <label htmlFor="Non-React" className={`${THEMES[theme].labels} my-4 px-6 text-lg largePhone:text-xl tab:text-2xl font-bold`}>Non-React</label>

  //           </div>
  //           <div className="my-4">
  //             <input type="radio" id="Non-react-tailwind" checked={lang === value} onChange={() => {setLang(3)}} name="CodingLanguage" required  />
  //             <label htmlFor="Non-react-tailwind" className={`${THEMES[theme].labels} my-4 px-6 text-lg largePhone:text-xl tab:text-2xl font-bold`}>Non-React with Tailwind</label>

  //           </div>
            
  //           <button type="submit" onClick={() => navigate(8)} className={`${THEMES[theme].buttons} w-[50vw] my-4 mt-6 max-w-[425px] mx-auto block rounded-full p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl`}>
  //             <Link to="/">Skip</Link></button>
  //           <button type="submit" onClick={HandleLang} className={`${THEMES[theme].buttons} w-[50vw] my-4 max-w-[425px] mx-auto block rounded-full p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl`}>Next</button>
          
  //         </form>
  //       </div>

  //     </div>
  //   );
  // };