// import React , { useState , useEffect ,useRef } from "react";
// import { FaBars , FaFilter , FaTimes  } from "react-icons/fa";
// import { LikeComponent1 , LikeComponent2 ,CardComponent } from './Components.jsx'
// import Navbar from './Navigation.jsx'
// // import Filter from "./Filter.jsx";
// import { useMediaQuery } from "react-responsive";
// import THEMES from "./Theme.jsx";
// import useTheme from "./Context.jsx"
// import { useGetFilterPostsQuery,useLazyGetFilterPostsQuery } from '../RTK/PostApi';
// // import { selectGetUserPost } from '../RTK/Selectors.jsx'
// import { useNavigate } from "react-router-dom";// to navigate on "other-user" profile by props profileData and otherUserPosts
// import { useSelector } from "react-redux";
// import { selectGetFilterPostsResult } from "../RTK/Selectors.jsx";


// const Home = () => {
//     // fetch otherUser's posts and his personal data and navigate to his profile and pass it via props

//     const {theme} = useTheme()
//     const isTab = useMediaQuery({ minWidth: 992 });
//     const [yes , setYes] = useState(true);
//     const [Item , setItem] = useState(false);
//     const filterArray = ['Navbar','Footer', 'Sidebar', 'Search Bar', 'Forms', 'Buttons', 'About Us', 'Cards', 'Sliders', 'Popover', 'Radio Buttons', 'Ratings', 'Loader', 'Spinner', 'Tags', 'Dashboard', 'Accordion', 'Timer', 'Dropdown', 'Table', 'List', 'Toast', 'Grid']
//     useEffect(() => {       
//         setYes(!isTab);
//       }, [isTab]);

//       const [page, setPage] = useState(1);
//       const [allPosts, setAllPosts] = useState([]);// all posts are inside this use it in components
//       const [filter, setFilter] = useState('all');
//       const [code, setCode] = useState(null);
//       const loaderRef = useRef();
    
//       // const { data, isFetching, isError, error } = useGetFilterPostsQuery({filter , code , page});
 
//       const [trigger ,{data:lazyData , isLoading ,isError ,error ,isFetching}] = useLazyGetFilterPostsQuery();

//         const posts = useSelector((state) =>
//           selectGetFilterPostsResult(state)?.data
//       );
//       useEffect(() => {
//         if( !posts ){
//           trigger({filter , code , page});
//         }
//       } ,[])
//       const data = posts || lazyData;

//       // Append or reset posts when new data comes
//       useEffect(() => {
//         if (page === 1) {
//           setAllPosts(data || []);
//         } else if (data?.length) {
//           setAllPosts(prev => [...prev, ...data]);
//         }
//       }, [data, page]);
    
//       // Observe scroll to load next page
//       useEffect(() => {
//         let timeout;
//         const observer = new IntersectionObserver(
//           entries => {
//             if (entries[0].isIntersecting && !isFetching) {
//               timeout = setTimeout(() => setPage(prev => prev + 1), 500);
//             }
//           },
//           { threshold: 0.1 }
//         );
      
//         const target = loaderRef.current;
//         if (target) observer.observe(target);
      
//         return () => {
//           if (target) observer.unobserve(target);
//           clearTimeout(timeout);
//         };
//       }, [isFetching]);
    
//       // Reset posts if filter or code changes
//       // useEffect(() => {
//       //   setPage(1);
//       //   setAllPosts([]);
//       // }, [filter, code]);
    
//     return (
//         <>
//            <Navbar show={`${yes ? "hidden" :''}`} />
//           <div className={`${THEMES[theme].page1} `}>
           

//             <div className={`text-2xl ${THEMES[theme].frame} p-3 font-bold flex justify-between sticky top-0`}>
//                 <h2>
//                     DeveloperUi.in
//                 </h2>
//                 <button onClick={() => {setItem(!Item)}} className={`relative ${THEMES[theme].icons}`}>
//                     <FaFilter size={30} />

//                 </button>
            
//                 <button onClick={() => {setYes(!yes)}} className={`${THEMES[theme].icons} transition transform duration-200 tab:hidden`}>
                    
//                     {yes ? <FaBars size={32}/> :<FaTimes size={32}/>}
                    
//                 </button>
//             </div>

//             <div id="filter" className={`${THEMES[theme].card1} sticky top-12 inset-0 overflow-auto scrollbar-hide flex space-x-4 p-4 `}>
//                 {filterArray.map((category) => (
//                 <button key={category} onClick={() => {setFilter(category)}} className={`${THEMES[theme].bar} text-nowrap px-4 py-2 rounded-full  `}>
//                     {category}
//                 </button>
//                 ))}
//             </div>

//             {Item && (
//                         <div className={`${THEMES[theme].card1} pl-[55%] absolute  w-full text-lg font-[500]`}>
//                             <div>
//                                 <input type="radio" onClick={() => {setCode(1)}} name="codeType" id="React" />
//                                 <label htmlFor="React" className="px-4">React</label>
//                             </div>
//                             <div>
//                                 <input type="radio" onClick={() => {setCode(2)}} name="codeType" id="Non_React" />
//                                 <label htmlFor="Non_React" className="px-4">NonReact</label>
//                             </div>
//                             <div>
//                                 <input type="radio" onClick={() => {setCode(3)}}  name="codeType" id="Non_React_Tailwind" />
//                                 <label htmlFor="Non_React_Tailwind" className="px-4">NoReactTailwind</label>
//                             </div>
//                         </div>
//                     )}

//             <div className="flex flex-col tab:ml-[180px]  tab: gap-y-6 tab:w-[calc(100vw-220px)] ">
//                 {/*Cards goes here */}
//               {
//                 allPosts?.map((post) => (
//                   <div key={post.postId}>
//                     <CardComponent {...post} />
//                   </div>
//                 ))
//               }
//                 {/* <CardComponent/> */}
                
//             </div>
//           </div>
//         </>
//     )
// }

// export{
//     Home,
// }


import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaFilter, FaTimes } from "react-icons/fa";
import { LikeComponent1, LikeComponent2, CardComponent } from "./Components.jsx";
import Navbar from "./Navigation.jsx";
import { useMediaQuery } from "react-responsive";
import THEMES from "./Theme.jsx";
import useTheme from "./Context.jsx";
import { useLazyGetFilterPostsQuery } from "../RTK/PostApi";
import { useSelector } from "react-redux";
import { selectGetFilterPostsResult } from "../RTK/Selectors.jsx";

const Home = () => {
  const { theme } = useTheme();
  const isTab = useMediaQuery({ minWidth: 992 });
  const [yes, setYes] = useState(true);
  const [Item, setItem] = useState(false);
  const filterArray = [
    "Navbar",
    "Footer",
    "Sidebar",
    "Search Bar",
    "Forms",
    "Buttons",
    "About Us",
    "Cards",
    "Sliders",
    "Popover",
    "Radio Buttons",
    "Ratings",
    "Loader",
    "Spinner",
    "Tags",
    "Dashboard",
    "Accordion",
    "Timer",
    "Dropdown",
    "Table",
    "List",
    "Toast",
    "Grid",
  ];

  useEffect(() => {
    setYes(!isTab);
  }, [isTab]);

  const [page, setPage] = useState(1);
  const [allPosts, setAllPosts] = useState([]); // all posts are inside this use it in components
  const [filter, setFilter] = useState("all");
  const [code, setCode] = useState(null);
  const loaderRef = useRef();
  const isFetchingRef = useRef(false); // Ref for isFetching to avoid stale closures

  const [trigger, { data: lazyData, isLoading, isError, error, isFetching }] =
    useLazyGetFilterPostsQuery();

  const posts = useSelector((state) =>
    selectGetFilterPostsResult(state)?.data
  );

  useEffect(() => {
    console.log(page);
    trigger({ filter, code, page });
  }, [trigger]);

  const data = posts || lazyData;

  // Update ref for isFetching
  useEffect(() => {
    isFetchingRef.current = isFetching;
  }, [isFetching]);

  // Append or reset posts when new data comes
  useEffect(() => {
    if (page === 1) {
      setAllPosts(data || []);
    } else if (data?.length) {
      setAllPosts((prev) =>[...data , ...prev]);
    }
  }, [data, page]);

  // Observe scroll to load next page
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetchingRef.current) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the loader is visible
    );

    const target = loaderRef.current;
    if (target) observer.observe(target);
    return () => target && observer.unobserve(target);
  }, []);

  // Reset posts if filter or code changes
  useEffect(() => {
    setPage(1);
    setAllPosts([]);
  }, [filter, code]);

  return (
    <>
      <Navbar show={`${yes ? "hidden" : ""}`} />
      <div className={`${THEMES[theme].page1} `}>
        <div
          className={`text-2xl ${THEMES[theme].frame} p-3 font-bold flex justify-between sticky top-0`}
        >
          <h2>DeveloperUi.in</h2>
          <button
            onClick={() => {
              setItem(!Item);
            }}
            className={`relative ${THEMES[theme].icons}`}
          >
            <FaFilter size={30} />
          </button>

          <button
            onClick={() => {
              setYes(!yes);
            }}
            className={`${THEMES[theme].icons} transition transform duration-200 tab:hidden`}
          >
            {yes ? <FaBars size={32} /> : <FaTimes size={32} />}
          </button>
        </div>

        <div
          id="filter"
          className={`${THEMES[theme].card1} sticky top-12 inset-0 overflow-auto scrollbar-hide flex space-x-4 p-4 `}
        >
          {filterArray.map((category) => (
            <button
              key={category}
              onClick={() => {
                setFilter(category);
              }}
              className={`${THEMES[theme].bar} text-nowrap px-4 py-2 rounded-full  `}
            >
              {category}
            </button>
          ))}
        </div>

        {Item && (
          <div
            className={`${THEMES[theme].card1} pl-[55%] absolute  w-full text-lg font-[500]`}
          >
            <div>
              <input
                type="radio"
                onClick={() => {
                  setCode(1);
                }}
                name="codeType"
                id="React"
              />
              <label htmlFor="React" className="px-4">
                React
              </label>
            </div>
            <div>
              <input
                type="radio"
                onClick={() => {
                  setCode(2);
                }}
                name="codeType"
                id="Non_React"
              />
              <label htmlFor="Non_React" className="px-4">
                NonReact
              </label>
            </div>
            <div>
              <input
                type="radio"
                onClick={() => {
                  setCode(3);
                }}
                name="codeType"
                id="Non_React_Tailwind"
              />
              <label htmlFor="Non_React_Tailwind" className="px-4">
                NoReactTailwind
              </label>
            </div>
          </div>
        )}

        <div className="flex flex-col tab:ml-[180px] tab: gap-y-6 tab:w-[calc(100vw-220px)] ">
          {/*Cards goes here */}
          {allPosts?.map((post) => (
            <div key={post.postId}>
              <CardComponent {...post} />
            </div>
          ))}
          {/* Loader */}
          <div
            ref={loaderRef}
            style={{
              height: "50px",
              backgroundColor: "lightgray",
              display: "block",
            }}
          />
        </div>
      </div>
    </>
  );
};

export { Home };