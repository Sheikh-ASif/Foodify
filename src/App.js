import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About"; using the lazy loading
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"; 
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";

// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Sheikh Asif",
    };
    setUserName(data.name);
  },[]);


  return (
    <Provider store = {appStore }>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
    <div className="app">
      <Header />
      <Outlet /> {/* This is necessary for nested routes */}
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <Suspense fallback = {<h1>Loading...</h1>}>
          <About />
        </Suspense>,
      },

      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/profile",
        element: <Profile />,
      },

      {
        path: "/signup",
        element: <SignUp />,
      },


      {
        path: "/grocery",
        element: (
          <Suspense fallback=<h1>Loading....</h1>>
            <Grocery />
          </Suspense>
        ),
      },

      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
