import React, {useState} from "react"




function LikeButton ( {upvotes, downvotes} ) {

    const [upLikes, setUpLikes] = useState(0)

    function increment () {
        setUpLikes((upLikes) => upLikes + 1)
    }

    const [downLikes, setDownLikes] = useState(0)

    function increment2 () {
        setDownLikes((downLikes) => downLikes + 1)
    }

   return ( 
     <div>
            <button onClick={increment}>like button {upLikes + upvotes} </button>
            <button onClick={increment2}>dislike button {downLikes + downvotes}  </button>
     </div> 
   )
}


export default LikeButton