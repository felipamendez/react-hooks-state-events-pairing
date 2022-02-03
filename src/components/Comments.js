import React from "react"

function Comments ( {comments} ) {
     
    return (
        <>
            <h1>Comments</h1>

             <ul>
                {comments.map((comment) => { 
                  return (
                 <>
                  <li> {comment.user}  </li>
                  <li> {comment.comment} </li>
                 </>
                 )
                 })
                 }
            </ul>
     </>
    
    )

}

export default Comments