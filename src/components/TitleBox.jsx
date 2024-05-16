import React from "react";

const TitleBox = ({ firstname }) => {

    return (
        <div className="container-roundup">
          <h1 className="name">Hello {firstname}</h1>
          <span className="paragraph">Any update?</span>
        </div>
    )
}
export default TitleBox;