import React, {Component} from 'react';


async function getUsers() {
    try {
        const url = "https://restcountries.eu/rest/v2/all";
        const getUrl= fetch(url);
        return getUrl;
    } catch (error) {
        console.error(error);
    }
}



class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoading:true,
            countryList:[]
        }

    }


    async  componentDidMount() {
        // const url = "https://restcountries.eu/rest/v2/all";
        // fetch(url)
        getUsers()
            .then(response => response.json())
            .then(myData => {
                this.setState({countryList:myData});
                console.log(myData);
            })
    }

    render() {
        var myData=this.state.countryList;
       var countryName= myData.map((dataMap=>{
            return <li>{dataMap.name}</li>
        }))
        return (
            <div>
                <h1>Home</h1>
                <ul>{countryName}</ul>
            </div>
        );
    }
}

export default Home;

/*

import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

async function getUsers() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

class App extends Component {

    state = {
        users: []
    }

    componentDidMount =()=>{
        getUsers().then(response => {
            this.setState({
                users: response.data
            });
        });
    }

    render() {
        return (
            <div className="App">
                <ul>
                    {this.state.users.map(user=>
                        <li>{user.name}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default App;*/
