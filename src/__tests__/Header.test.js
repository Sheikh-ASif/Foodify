import { fireEvent ,render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render the Header component with a login button", () => {

    render(
        <BrowserRouter>
        <Provider store = {appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
);
     const loginButton = screen.getByRole("button", {name: "Login"});
    // const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();
} )


it("should render the Header component with a Cart item ", () => {
    render(
        <BrowserRouter>
        <Provider store = {appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
);
     const cartItems = screen.getByText(/items.*🛒/i);


    expect(cartItems).toBeInTheDocument();
} )

it("should change loggin button to loggout on click", () => {

    render(
        <BrowserRouter>
        <Provider store = {appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
);
     const loginButton = screen.getByRole("button", {name: "Login"});
    
     fireEvent.click(loginButton);

     const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
} )