import useTheme from "./Context.jsx";

export const ChangeTheme = () => {
   
    const {setTheme} = useTheme()
   

    return (
        <select
        name="themes"
        id="ChangeTheme"
        onChange={(e)=>(setTheme(e.target.value))}
        className="p-2 border-2 w-[160px] rounded bg-white text-black">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="developer">Dev</option>
      </select>
    )
}

const THEMES = {
    light: {
        
        buttons: "bg-green-500 text-white",
        card1: "shadow-lg shadow-green-500",
        card2: "border-orange-300",
        
        frame: "border-orange-300",
        innerContainer: "text-black",
        input1: " border-orange-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent",
        input2: "border-orange-500 bg-orange-100",
        labels: "text-orange-400",
        page1: "border-orange-300",
        page2: "border-orange-300",
        outerContainer: "bg-slate-50 text-green-500",
        shadows: "shadow-md shadow-orange-300",
        
    },
    dark: {
        buttons: "bg-orange-400 text-white",
        card1: "shadow-lg shadow-orange-500",
        card2: "border-orange-300",
        
        frame: "border-orange-300",
        innerContainer: "text-black",
        input1: " border-orange-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
        input2: "border-orange-500 bg-orange-100",
        labels: "text-blue-500",
        page1: "border-orange-300",
        page2: "border-orange-300",
        outerContainer: "bg-orange-100 text-cyan-500",
        shadows: "shadow-md shadow-orange-300",
    },
    developer: {
        buttons: "bg-green-500 text-white",
        card1: "shadow-lg shadow-green-500",
        card2: "border-orange-300",
        
        frame: "border-orange-300",
        innerContainer: "text-black",
        input1: " border-orange-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent",
        input2: "border-orange-500 bg-orange-100",
        labels: "text-orange-400",
        page1: "border-orange-300",
        page2: "border-orange-300",
        outerContainer: "bg-slate-50 text-green-500",
        shadows: "shadow-md shadow-orange-300",
    }
  };
  

  export default THEMES;
