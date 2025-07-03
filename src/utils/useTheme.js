import { useState, useEffect } from "react";

const useTheme = () => {
  // Default to light mode
  const [theme, setTheme] = useState("light");

  // Update the class on the body element whenever the theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  // Toggle the theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};

export default useTheme;





















// import { useState, useEffect } from "react";

// const useTheme = () => {
//     const[Theme, setTheme] = useState();

//     useEffect(() => {
//         window.addEventListener("light",() => {
//             setTheme(false);
//         })

//         window.addEventListener("Dark",() => {
//             setTheme(true);
//         })
//     })
//     return Theme;

// }

// export default useTheme;