import React from "react";

const LoadComments = (props) => {
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

export default LoadComments;