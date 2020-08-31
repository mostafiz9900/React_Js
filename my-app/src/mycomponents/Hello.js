import React from 'react';

function Hello(props){
    function DoThis(a){
        alert(a)
    }
    return(
    <div>
        <h1> Name: {props.name} And Age:{props.age}</h1>
        <button onClick={DoThis.bind(this,"this is pass value for function.....")}>Click Me</button>
    </div>
    );
}
export default Hello;