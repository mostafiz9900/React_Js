import React, { Component } from 'react';

class JsonList extends Component {


    dataChild=()=>{};

    render() {
        const myList=[
{
    city:"Dhaka",
    zip:"552"
},
{
    city:"Rajshahi",
    zip:"477"
},
{
    city:"Rangpur",
    zip:"671"
},
{
    city:"Mirpur",
    zip:"477"
},
        ];
        const dataItems=myList.map((data)=>{
            return <option>{data.city}</option>;
        });
        const dataItemsZip=myList.map((dataZip)=>{
            return <option>{dataZip.zip}</option>;
        });
        return (
            <div>
                <select>
                    {dataItems}
                </select>
                <select>
                    {dataItemsZip}
                </select>
            </div>
        );
    }
}

export default JsonList;