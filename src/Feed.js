import React,{useEffect,useState} from 'react'
import "./Feed.css"
import Tweetbox from './Tweetbox'
import db from "./firebase";
import FlipMove from "react-flip-move";
import Post from "./Post"
function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      db.collection("posts").onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
    }, []);
    return (
        <div className="feed">
           <div className="feed_header">
               <h1>Home</h1>
           </div> 
           <Tweetbox/>
           <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
        </div>

    )
}

export default Feed
