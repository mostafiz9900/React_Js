import React, {Component} from 'react';

class Page1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            country: []
        }
    }

    async componentDidMount() {
        try{
            const url = "https://restcountries.eu/rest/v2/all";
            const response = await fetch(url);
            const data = await response.json();
            this.setState({country: data, isLoading: false});
        }catch (e) {
            alert(e);
        }


    }

    render() {
        var mydata = this.state.country;
        var countryName = mydata.map((dataList => {
            return <li>{dataList.name}</li>;
        }))
        return (
            <div>
                <h1>Page 1</h1>
                {this.state.isLoading || !this.state.country ? (
                        <div>Loading.....</div>
                    )
                    : (
                        <div>
                            <div>{countryName}</div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Page1;