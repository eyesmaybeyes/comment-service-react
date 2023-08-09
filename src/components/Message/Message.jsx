import React from "react";

const Message = (props) => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    var minute = date.getMinutes();
    var hour = date.getHours();

    const messageStyle = {
        color: props.isFirstMessage ? "yellow" : null,
    };

    let currentDate = `${day}-${month}-${year}`;

    return (
        <div className="info__chat chat">
            <div className="chat__container">
                {props.chatImage && (
                    <img
                        style={{
                            width: "150px",
                            height: "auto",
                        }}
                        src={props.chatImage}
                        alt="userImage"
                    />
                )}
                <p id="chatDate">
                    {" "}
                    {hour}:{minute}
                </p>
                <p id="chatDate"> {currentDate}</p>
            </div>
            {props.isCheckedYes == true ? (
                <p id="chatUserName">{props.chatUserName}</p>
            ) : (
                <p id="chatUserName">Username</p>
            )}
            <p id="chatComment" style={messageStyle}>
                {props.commentText}
            </p>
        </div>
    );
};

export { Message };
