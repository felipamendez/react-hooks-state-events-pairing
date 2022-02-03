import React, {useState} from "react"


function HideCommentsButton ( {comments} ) {

    const [ isHidden, setIsHidden ] = useState(false)

    const hidden = isHidden ? "none" : "block"

    function handleHide () {
        setIsHidden(isHidden => !isHidden)
    }

    return(
     <>
        <button onClick={handleHide}>HideComments</button>
         <h1>Comments</h1>

        <ul>
          {comments.map((comment) => { 
              return (
              <>
                  <li style={{display: hidden}}> {comment.user}  </li>
                  <li style={{display: hidden}}> {comment.comment} </li>
             </>
             )
            })
            }
        </ul>
     </>
    )
}

export { HideCommentsButton }