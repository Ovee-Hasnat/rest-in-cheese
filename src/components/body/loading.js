import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
    return (
        <div className="col-12" style={{ padding: '60px' }}>
            <FontAwesomeIcon className="fa-4x" icon={faSpinner} spin />

        </div>
    )
}

export default Loading;