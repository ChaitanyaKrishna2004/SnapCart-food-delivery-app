import react from "react";

class UserClass extends react.Component {
  //*here we need use the constructure and use the super props.
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/ChaitanyaKrishna2004"
    );

    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    const { name } = this.state.userInfo;

    return (
      //? when their are the
      <div className="user-card">
        <h2>Name:- {name}</h2>
        <h3>Location:- Bengaluru</h3>
        <h3>Contact:- paruchurichaitanyakrishna6@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
