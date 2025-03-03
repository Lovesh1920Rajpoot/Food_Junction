import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          UserInfo:{
            name:"dummy",
            location:"default"
          }
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/lovesh1920rajpoot");
        const json = await data.json();
        
        this.setState({
            UserInfo: json,
        });
      }
render(){
    const {name, location, avatar_url} = this.state.UserInfo;
    return(
        
        <div className='user-container'>
            <img src={avatar_url}/>
            <h2>{name}</h2>
            <h2>{location}</h2>
    </div>

)}
}

export default UserClass;