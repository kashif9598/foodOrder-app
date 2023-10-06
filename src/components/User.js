import React from "react";
import UserContext from "../utils/UserContext";

class User extends React.Component {
  constructor(props) {
    console.log("constructor called");
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/kashif9598");
    const users = await data.json();
    this.setState({
      userInfo: users,
    });
    console.log("users", users);
    console.log("component did mount called");
  }

  componentDidUpdate() {
    console.log("component did update called");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    const { id, name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="about-us-container">
        <img src={avatar_url} alt="avatar" />
        <h2>ID: {id}</h2>
        <h3>Name: {name}</h3>
        <h5>Counrty:{location} </h5>
        <UserContext.Consumer>
          {({loggedInUser}) => <h1 className="p-2 text-xl font-bold">{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default User;
