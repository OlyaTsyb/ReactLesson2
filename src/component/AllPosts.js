import React, {Component} from "react";
import Post from "../post/Post";



class AllPosts extends Component {

   state = {posts :[],chose : null};

    constructor(){
        super()
        }

    selectPost = (id) =>{
        let {posts} = this.state;
        let find = posts.find(value => value.id === id);
        this.setState({chose : find})

    }
     render(){
         let {posts,chose} = this.state;
         return(
            <div>
                {
                    posts.map(post => <Post item = {post} key = {post.id} selectPost = {this.selectPost}/>)
                }
                {
                    chose && <h2>{chose.id} - {chose.title} </h2>

                }

            </div>
         )
     }
componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(value => value.json())
    .then(posts => {
        this.setState({posts})
    })
    }
}

export default AllPosts;