import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {

    constructor(props){
        super(props);

        // console.log("Parent Constructor");
    }

    componentDidMount(){
        // console.log("parent Component did mount")
    }

  render() {
    // console.log("Parent-render");
    return (
      <div>
        {/* <h1>About Class based ComponentS</h1> */}
        <div className=" flex items-center justify-center font-bold text-lg">
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1>{loggedInUser}</h1>
            )}
     </UserContext.Consumer>
        </div>
        {/* <h2>This is the namste react about page</h2> */}
        {/* <User name = {"Sheikh Asif (function) "}/> */}

        <div className="flex items-center justify-center p-4 m-auto font-bold ">
        <UserClass
          name={"FirstChild(Class)"}
          location={"Lucknow2"}
          contact={"mdasif74083@gmail.comm"}
          address={"Ballia Uttar pradesh"}
        />
        </div>
        {/* <UserClass
          name={"SecondChild (Class)"}
          location={"USA"}
          contact={"mdasif74083@gmail.comm"}
          address={"Ballia Uttar pradesh"}
        /> */}
         </div>
    );
  }
}


/*
-parent constructor
-parent render

 -FirstChild constructor
 -FirstChild render

 -SecondChild constructor
 -SecondChild render

 <Dom Updated - IN SINGLE BATCH>
 -FirstChild componentdidmount
 -SecondChild componentdidmount

-Parent componentdidmount

*/



// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is the namste react about page</h2>
//             {/* <User name = {"Sheikh Asif (function) "}/> */}

//             <UserClass name = {"Sheikh Asif (Class)"} location = {"Lucknow2"} contact = {"mdasif74083@gmail.comm"}  address = {"Ballia Uttar pradesh"}/>
//         </div>
//     )
// }
export default About;
