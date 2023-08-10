import React from "react";

const Message = (props) => {
    const messageStyle = {
        color: props.isFirstMessage ? "yellow" : null,
    };

    const formatUsername = (username) => {
        const words = username.split(" ");
        const formattedWords = words.map((word) => {
            const regex = /^[a-zA-Zа-яА-Я]+$/;
            if (regex.test(word)) {
                const firstLetter = word.charAt(0).toUpperCase();
                const restOfWord = word.slice(1).toLowerCase();
                return firstLetter + restOfWord;
            } else {
                return "";
            }
        });
        return formattedWords.join(" ");
    };

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
                <p id="chatDate"> {props.currentDate}</p>
            </div>
            {props.isCheckedYes == true ? (
                <p id="chatUserName">{formatUsername(props.chatUserName)}</p>
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
