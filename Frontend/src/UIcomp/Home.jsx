import React , { useState , useEffect } from "react";
import { FaBars , FaFilter , FaTimes  } from "react-icons/fa";
import { LikeComponent1 , LikeComponent2 } from './Components.jsx'
import Navbar from './Navigation.jsx'
import Filter from "./Filter.jsx";
import { useMediaQuery } from "react-responsive";

const Home = () => {


    const isTab = useMediaQuery({ minWidth: 992 });
    const [yes , setYes] = useState(true);
    const [Item , setItem] = useState(false);
    useEffect(() => {
        
            setYes(!isTab);
     
        // const handleResize = () => setYes(window.innerWidth < 992);
        // window.addEventListener("resize", handleResize);
        // return () => window.removeEventListener("resize", handleResize);
      }, [isTab]);
    return (
        <>
           <Navbar show={`${yes ? "hidden" :''}`} />
          <div className="bg-slate-300 ">
           

            <div className="text-2xl bg-slate-300 p-3 font-bold flex justify-between sticky top-0">
                <h2>
                    DeveloperUi.in
                </h2>
                <button onClick={() => {setItem(!Item)}} className={`relative `}>
                    <FaFilter size={30} />

                </button>
            
                <button onClick={() => {setYes(!yes)}} className="transition transform duration-200 tab:hidden">
                    
                    {yes ? <FaBars size={32}/> :<FaTimes size={32}/>}
                    
                </button>
            </div>

           

              <Filter/>
         

            {Item && (
                        <div className="pl-[55%] absolute glassyEffect w-full text-lg font-[500]">
                            <div>
                                <input type="radio" name="codeType" id="React" />
                                <label htmlFor="React" className="px-4">React</label>
                            </div>
                            <div>
                                <input type="radio" name="codeType" id="Non_React" />
                                <label htmlFor="Non_React" className="px-4">NonReact</label>
                            </div>
                            <div>
                                <input type="radio" name="codeType" id="Non_React_Tailwind" />
                                <label htmlFor="Non_React_Tailwind" className="px-4">NoReactTailwind</label>
                            </div>
                        </div>
                    )}

            <div className="my-6 flex flex-col tab:ml-[180px]  tab: gap-y-6 tab:w-[calc(100vw-220px)] ">
                {/*Cards goes here */}

                <LikeComponent2/>
                <LikeComponent1/>
                <LikeComponent2/>
                <LikeComponent2/>
            </div>
          </div>
        </>
    )
}


export{
    Home,
}