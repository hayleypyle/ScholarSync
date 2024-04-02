import React from 'react'
import { Link } from "react-router-dom";  


export default function Question() {
    return (
        <>
        <div>
        <h2>Question and Answers Display</h2>
        <h4>Question title?</h4>
        <p>user on date:
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti corporis corrupti voluptas quas excepturi? Illo non similique exercitationem in natus.</p>
        </p>
        <p>user2 on date2:
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vel.
            </p>
        </p>
        <Link to ="/answer:id">Answer this Question</Link>
        </div>
        <Link to ="/">Back to dashboard</Link>
        </>
    )
}
