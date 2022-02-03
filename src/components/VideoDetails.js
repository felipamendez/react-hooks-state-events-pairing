import React from "react"
import LikeButton from "./LikeButton"
import { HideCommentsButton } from "./HideCommentsButton"


function VideoDetails ( {title, views, createdAt, downvotes, upvotes, comments } ) {
   return ( 
        <>
        <h1> {title} </h1>
        <div> {views} </div>
        <div> {createdAt} </div>

        <LikeButton downvotes={downvotes} upvotes={upvotes}/>
        <HideCommentsButton comments={comments}/>
       
        
        </>
   )
}

export default VideoDetails;