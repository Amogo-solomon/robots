import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

class App extends Component {
    constructor()  {
        super() /* this calls the constructors of components */
        this.state = {
        robots: [],
        searchfield: ''
    }
}

/* first stage for the mounting component lifecycle */
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({robots: users}));
  /* .then(users => {}); /* returning empty object */
    
}


onSearchChange = (event) => {
    this.setState({searchfield: event.target.value}) /* will filter the robot according to change search field and update to what we have*/
}
    render() {
        const { robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        /* if (robots.length === 0) {  or*/
        if (!robots.length) {
            return <h1>Loading</h1>
        } else { 
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );     
        }
           }
        }
   

export default App;

/* NOTE: Our state is now passed down to cardlist as Props */