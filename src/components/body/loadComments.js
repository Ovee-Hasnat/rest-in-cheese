import React from "react";
import Loading from "./loading";

const LoadComments = (props) => {
    if (props.commentIsLoading) {
        return <Loading />
    }
    else {
        return (
            props.comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <em>{comment.comment}</em>
                        <p style={{ textAlign: 'right', fontSize: '14px', margin: '1px' }}>{comment.author}</p>
                        <p style={{ textAlign: 'right', fontSize: '14px' }}>{comment.date}</p>
                        <hr />
                    </div>
                );
            })
        );
    }
}

export default LoadComments;