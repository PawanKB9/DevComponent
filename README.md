# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.







css - tailwind code :
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

@layer utilities {
  .scrollbar-hide {
    scrollbar-width: none; /* For Firefox */
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
  }

  .red{
    background: #bb0808;
  }


input:checked + .toggleLabel .toggleDiv {
  transform: translateX(160%);
}
input:checked + .toggleLabel  {
  background-color: blue;
}
  
} 

@layer base {
  /* Capsule Styling */
  .capsule {
    @apply w-full p-2 m-2 bg-red-600 rounded-full text-[20px] 
           mobilePhone:p-[14px] mobilePhone:m-[10px] 
           largePhone:p-[16px] largePhone:m-[12px] largePhone:text-[24px] largePhone:max-w-[700px] 
           tab:max-w-[800px] tab:text-[28px];
  }

  /* Screen Padding */
  .screenPadding {
    @apply p-2 bg-sky-50
           mobilePhone:p-2 
           largePhone:p-6 
           tab:p-8 
           largeTab:p-10 
           laptop:p-12 
           largeLaptop:p-14;
  }

  /* Input Bar Styles */
  .capsuleInputBar {
    @apply  block  mb-6 border largePhone:mb-8 text-lg w-[93vw] p-2 max-w-[430px] mobilePhone:w-[90vw] 
           mobilePhone:max-w-[658px] mobilePhone:text-xl 
           largePhone:max-w-[850px] largePhone:text-2xl largePhone:w-[85vw] rounded-full;
  }

  .formLabel{
    @apply my-4 block text-lg largePhone:text-xl tab:text-2xl font-bold;
  }

  .capsuleTwoInOne {
    @apply border text-lg p-2 w-[93vw] mb-6 max-w-[430px] mobilePhone:max-w-[658px] 
           mobilePhone:text-xl mobilePhone:w-[90vw] 
           largePhone:max-w-[850px] largePhone:text-2xl largePhone:w-[85vw] 
           tab:max-w-[410px] rounded-full;
  }

  .formDimention {
    @apply w-[93vw] max-w-[430px] mobilePhone:w-[90vw] mobilePhone:max-w-[658px] largePhone:max-w-[850px] largePhone:w-[85vw];
  }

  .oneCapsuleButton{
    @apply   w-[50vw] max-w-[425px] mx-auto block rounded-full p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl;
  }

  .twoCapsuleButton{
    @apply w-[40%] bg-blue-600 text-white rounded-full  p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl;
  }

  .threeButtonInOneRow{
    @apply  w-[31%] mx-auto rounded-full p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl;
  }

  .lowerWordTypo{
    @apply text-sm mobilePhone:text-base font-semibold
  }

  .upperWordTypo{
    @apply mobilePhone:text-lg largePhone:text-xl tab:text-2xl font-semibold
  }

  .glassEffect{
    @apply bg-white bg-opacity-30 backdrop-blur-md border border-white border-opacity-20 rounded-lg p-4
  }
  .glassyEffect{
    @apply bg-white  bg-opacity-20 backdrop-blur-sm border border-white border-opacity-20 rounded-lg
  }

  table , tbody, thead,tfoot,tr,td,th {
    @apply border bg-fuchsia-200 border-zinc-800 w-full px-1 py-2 mobilePhone:text-lg  text-center border-collapse mobilePhone:px-[2vw] ;
  }
  tr td button {
    @apply  p-[6px] px-[2vw] rounded text-white font-bold active:bg-red-500 cursor-pointer bg-blue-500;
  }
  /* tr td:last-child {
    @apply bg-red-500;
  } */

.navBarItems{
  @apply w-[45px] h-[45px] flex justify-center items-center mobilePhone:h-[50px] mobilePhone:w-[50px] largePhone:h-[55px] largePhone:w-[55px]   text-3xl  shadow-lg shadow-neutral-700 bg-neutral-50 rounded-full;
}

.navBarLarge{
  @apply bg-gray-200 py-1 px-2 w-[145px] rounded hover:shadow-lg hover:shadow-blue-500 hover:bg-zinc-300;
}



  /* Changing Circle Border */
  .changingCircleBorder {
    @apply inline-block p-1 rounded-full bg-red-800 
           mobilePhone:p-2 
           largePhone:p-2 
           tab:p-3 
           largeTab:p-4 
           laptop:p-5 
           largeLaptop:p-6;
  }

  /* Dynamic Circle */
  .dynamicCircle {
    @apply bg-yellow-400 overflow-hidden rounded-full 
           w-[calc(2vw+36px)] h-[calc(2vw+36px)] 
           mobilePhone:w-[calc(5vw+36px)] mobilePhone:h-[calc(5vw+36px)] 
           largePhone:w-[calc(8vw+36px)] largePhone:h-[calc(8vw+36px)] 
           tab:w-[calc(8vw+36px)] tab:h-[calc(8vw+36px)];
  }

  /* Accordion FAQ */
  .accordion {
    @apply m-2 p-3 bg-slate-100 rounded-xl max-w-[800px] cursor-pointer;
  }

  .openOptions {
    @apply overflow-hidden max-h-0 transform transition-all duration-[200ms];
  }

  .openOptions.active {
    @apply max-h-screen; /* Dynamic height for better flexibility */
  }

  .icon {
    @apply transform transition-transform duration-[200ms];
  }

  .iconActive {
    @apply rotate-180;
  }

  .multiButtons{
    @apply bg-red-300  rounded-md p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl;
  }
  .multiCapsuleButtons{
    @apply bg-teal-300  rounded-full p-[4px] font-semibold mobilePhone:text-lg largeTab:text-2xl;
  }

  .FourOrFiveBtns{
    @apply bg-purple-300 rounded-md  p-[4px] text-sm font-semibold mobilePhone:text-base tab:text-lg largeTab:text-xl laptop:text-2xl  ;
  }
  .FourOrFiveCapsuleBtns{
    @apply bg-green-300 rounded-full  p-[4px] text-sm font-semibold mobilePhone:text-base tab:text-lg largeTab:text-xl laptop:text-2xl  ;
  }

  /* Task List */
  .taskList li::before {
    content: "\f252";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #02d722;
    margin-left: 8px;
    margin-right: 8px;
    cursor: pointer;
  }

  .taskList li.done::before {
    content: "\f058";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #01ba0b;
    margin-left: 8px;
    margin-right: 8px;
    cursor: pointer;
  }
}

