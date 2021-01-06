import React, {Component} from "react";
import PostStyle from "./PostStyle.css"
class Post extends Component{

render(){
let {item,selectPost} = this.props;
    return(
        <div className = "blue">
            id: {item.id},
            title: {item.title} -
            <button onClick = {() => selectPost(item.id)} className = "pink">chose</button>
        </div>
      )
   }
}
export default Post;