import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [comment, setComment] = useState('');
  const [imgLink, setImgLink] = useState('');
  const [userName, setUserName] = useState('');

  const [isCheckedYes, setIsCheckedYes] = useState(false);
  const [isCheckedNo, setIsCheckedNo] = useState(false);
  const chatImageRef = useRef(null);
  const chatDateRef = useRef(null);
  const chatCommentRef = useRef(null);
  const chatUserNameRef = useRef(null);

  const checkSpam = () => {
    let changedComment = comment.replace(/viagra|xxx/gi, '***');
    chatCommentRef.current.textContent = changedComment;

    // console.log(changedComment);
  };

  const getDate = () => {
    let a = new Date();
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let day = days[a.getDay()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = day + ', ' + date + ' ' + month + ' ' + year + ' at ' + hour + ':' + min + ':' + sec;

    chatDateRef.current.textContent = time;
    // console.log(time);
  };
  const imgArray = [
    'https://abrakadabra.fun/uploads/posts/2022-03/1646406414_4-abrakadabra-fun-p-ikonki-dlya-diskorda-anime-9.jpg',
    'https://img.freepik.com/premium-vector/anime-manga-avatar-schoolgirl_146706-382.jpg?w=2000',
    'https://img.pikbest.com/png-images/qiantu/cute-bear-girl-anime-avatar-illustration_2529739.png!bwr800',
    'https://pngicon.ru/file/uploads/anime-girls.png',
    'https://otkritkis.com/wp-content/uploads/2022/06/rovzi.jpg'
  ];

  const sendImg = () => {
    const imgLinkValue = imgLink.trim();
    const newImage = Math.floor(Math.random() * imgArray.length);
    if (imgLinkValue === '') {
      chatImageRef.current.src = imgArray[newImage];
    } else {
      chatImageRef.current.src = imgLinkValue;
    }
    chatImageRef.current.style.display = 'block';
  };

  const handleCheckboxYesChange = () => {
    setIsCheckedYes(!isCheckedYes);
    setIsCheckedNo(false);
  };

  const handleCheckboxNoChange = () => {
    setIsCheckedNo(!isCheckedNo);
    setIsCheckedYes(false);
  };

  const changeUserName = () => {
    const userNameValue = userName.trim();
    if (userNameValue === '') {
      chatUserNameRef.current.textContent = 'Username';
    } else if (isCheckedYes && !isCheckedNo) {
      const fullName = userNameValue.split(/[\s,]+/);
      const correctName = fullName.map((elem) => {
        return elem[0].toUpperCase() + elem.slice(1).toLowerCase();
      });
      const fullCorrectUserName = correctName.join(' ');
      console.log(fullCorrectUserName);
      chatUserNameRef.current.textContent = fullCorrectUserName;
    } else {
      chatUserNameRef.current.textContent = 'Username';
    }
  };

  return (
    <div className="App">
      <h1>Сервис комментариев со спам фильтром</h1>
      <section className="info">
        <div className="info__comment comment">
          <h2 className="comment__title">Оставьте ваш комментарий</h2>
          <form>
            <div className="form-col">
              <p className="row__text">Показывать ваше имя?</p>
              <label for="yes" className="que">Да</label>
              <input
                type="checkbox"
                id="yes"
                checked={isCheckedYes}
                onChange={handleCheckboxYesChange}
              />
              <label for="no" className="que">Нет</label>
              <input
                type="checkbox"
                id="no"
                checked={isCheckedNo}
                onChange={handleCheckboxNoChange}
              />
            </div>
            <div className="form-row">
              <label for="fullName" className="row__text"
              >Введите ваше <span className="comment__word">ФИО:</span></label>
              <input type="text" id="fullName" value={userName}
                onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="form-row">
              <label for="link" className="row__text"
              >Введите ссылку <span className="comment__word">вашего аватара:</span></label>
              <input type="text" id="link" value={imgLink}
                onChange={(e) => setImgLink(e.target.value)} />
            </div>
            <div className="form-row">
              <p>
                <label for="comments" className="row__text"
                >Оставьте комментарий:</label>
              </p>
              <textarea name="comments" id="comments" value={comment}
                onChange={(e) => setComment(e.target.value)}></textarea>
            </div>
            <div className="comment__btn">
              <button type="button" className="btn" onClick={() => {
                sendImg();
                changeUserName();
                checkSpam();
                getDate()
              }}>Отправить</button>
            </div>
          </form>
        </div>
        <div className="info__chat chat">
          <h2 className="chat__title">Чат</h2>
          <div className="chat__container">
            <img id="chatImage" ref={chatImageRef} alt="UserImage" />
            <p id="chatDate" ref={chatDateRef}></p>
          </div>
          <p id="chatUserName" ref={chatUserNameRef}></p>
          <p id="chatComment" ref={chatCommentRef}></p>
        </div>
      </section>
    </div>
  );
}

export default App;
