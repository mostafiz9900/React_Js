import React, {Component} from 'react';
import axios from 'axios';

class Post extends Component {
    constructor() {
        super();
        this.state={
            postData:"",
            postResult:""
        }
    }
    onChangehendelar=(event)=>{
      var myData=  event.target.value;
      this.setState({
          postData:myData
      })
    }
    onClickHendelar=()=>{
        axios.post('http://ss.rabbil.com/test.php',this.state.postData)
            .then(response=>{
                this.setState({postResult:response})
                alert(this.state.postResult);
            })
            .catch(error=>{
                alert("something is wrong ");
            })
    }
    render() {
        return (
            <div>
                <input onChange={this.onChangehendelar} type="text" /><br/>
                <button onClick={this.onClickHendelar}>Send</button>
            </div>
        );
    }
}

export default Post;