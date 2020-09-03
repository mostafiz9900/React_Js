import React, {Component} from 'react';
import axios from 'axios';

class CountryList extends Component {

    constructor() {
        super();
        this.state={
            mydata:[]
        }
    }

    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response=>{
               this.setState({mydata:response.data});
            })
            .catch(error=>{
                console.log(error);
            })
    }

    render() {
        const myList=this.state.mydata;
       const countryName= myList.map((mylist)=>{
            return <li>{mylist.name}</li>;
        })
        return (
            <div>
             <ul>{countryName}</ul>
            </div>
        );
    }
}

export default CountryList;