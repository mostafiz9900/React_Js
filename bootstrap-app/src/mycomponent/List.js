import React, { Component } from 'react';

class List extends Component {

    MyDataChild=(data)=>{
    return <option>{data}</option>;
    }
    render() {
     const country=["Bangladesh", "Afganisthan", "Pakisthan ","Chayna"];
      const dataItems =  country.map(this.MyDataChild);
        return (
            <div>
                <select>
                    {dataItems}
                </select>
            </div>
        );
    }
}

export default List;