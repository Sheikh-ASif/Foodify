import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      UserInfo:{
        name:"Dummy",
        location:"Default",
        login:"Default",
        avatar_url:"",
      }
    };

    // console.log(this.props.name + "Constructor");
  }

  async componentDidMount(){
    // console.log(this.props.name + "Mounted")

    const data = await fetch("https://api.github.com/users/Sheikh-ASif");
    const json = await data.json();

    this.setState({
      UserInfo:json,
    })

    // console.log(json);
}


  componentDidUpdate(){
    // console.log("Component did Update")
  }

  componentWillUnmount(){
    // console.log("component will unmount")
  }

  render() {


    // console.log(this.props.name + "child-render")
    // //this is the way to destructured the lengthy code like this.props.name and so on
    // const { name, location, contact, address } = this.props;
    // const { count } = this.state;


    const{name,location,login,avatar_url} = this.state.UserInfo;


    return (
      <div className="user-card">
        {/* <h1>count = {count}</h1>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Count increase
        </button> */}
        <img src={avatar_url} />
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Login:{login}</h4>
        
        {/* <h4>Contact:{contact}</h4>
        <h5>Address:{address}</h5> */}

        {/* <h2>Name:{this.props.name}</h2>  this is the second one  */}
        {/* <h2>Name:Sheikh ASif</h2>  // this is the first way to access the the props */}
        {/* <h3>Location:Lucknow</h3> */}
        {/* <h3>Location:{this.props.location}</h3> */}
        {/* <h4>Contact:mdasif74083@gmail.com</h4> */}
        {/* <h4>Contact:{this.props.contact}</h4>
        <h5>Address:{this.props.address}</h5> */}
      </div>
    );
  }
}

export default UserClass;
