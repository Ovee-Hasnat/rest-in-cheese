import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
    return (
        <div className="col-12" style={{ padding: '60px' }}>
            <FontAwesomeIcon className="fa-4x" icon={faBirthdayCake} />

        </div>
    )
}

export default Loading;