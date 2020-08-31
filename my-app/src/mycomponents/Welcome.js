
import React, {Component} from 'react';


class Welcome extends Component{
    DoThisClass(c){
        alert(c)
    }
render(){
return <div>
    <h1>I am from {this.props.name}</h1>
    <button onClick={this.DoThisClass.bind(this,"this is para form class...")}>Click class button</button>
</div>;
}
} 
export default Welcome;