import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";


describe("Contact Us page test case ", () =>{
  test("should load contact us componenet", () => {
    render(<Contact />);
  
    const heading = screen.getByRole("heading");
  
    //Assertions
    expect(heading).toBeInTheDocument();
  
  })
  
  test("should load button inside contact componenet", () => {
      render(<Contact />);
    
      const button = screen.getByText("Submit");
    
      //Assertions
      expect(button).toBeInTheDocument();
    
    })
})

