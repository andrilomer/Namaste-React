import React from "react";

class UserClass extends React.Component{

  constructor(props){
    super(props);

    this.state={
      userInfo:{
        name:"Dummy",
        location:"Default",
      },
    };

    // console.log("Child Constructor");

    // console.log(props);
  }
  
  async componentDidMount(){
    // console.log("Child Component Did Mount ");

    const data = await fetch(" https://api.github.com/users/andrilomer");
    const json=await data.json();

    this.setState({
      userInfo:json,
    });

    console.log(json);
  }
   

  render(){

    // const {name,location}=this.props;

    const {name,location,avatar_url}=this.state.userInfo;

    // console.log("Child Render");


    return (
    <div className="user-card">
    <img src={avatar_url} />
    <h2>Name: {name}</h2>
    <h3>Location:{location}</h3>
    <h4>Contact: andril44</h4>
    </div>
    );

  };
};

export default UserClass;

