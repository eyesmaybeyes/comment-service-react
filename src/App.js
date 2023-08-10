import React, { useState } from 'react';
import './App.css';
import Swal from 'sweetalert2'
import { Message } from './components/Message/Message.jsx';
function App() {
  const [comment, setComment] = useState('');
  const [username, setUsername] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  let [imgLink, setImgLink] = useState('');

  const [isCheckedYes, setIsCheckedYes] = useState(false);
  const [isCheckedNo, setIsCheckedNo] = useState(false);

  let a = new Date();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let day = days[a.getDay()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();
  let sec = a.getSeconds();
  let currentDate =
    day +
    ", " +
    date +
    " " +
    month +
    " " +
    year +
    " at " +
    hour +
    ":" +
    min +
    ":" +
    sec;

  const getRandomImage = () => {
    const imgArray = [
      "https://abrakadabra.fun/uploads/posts/2022-03/1646406414_4-abrakadabra-fun-p-ikonki-dlya-diskorda-anime-9.jpg",
      "https://img.freepik.com/premium-vector/anime-manga-avatar-schoolgirl_146706-382.jpg?w=2000",
      "https://img.pikbest.com/png-images/qiantu/cute-bear-girl-anime-avatar-illustration_2529739.png!bwr800",
      "https://pngicon.ru/file/uploads/anime-girls.png",
      "https://otkritkis.com/wp-content/uploads/2022/06/rovzi.jpg",
    ];
    const randomIndex = Math.floor(Math.random() * imgArray.length);
    return imgArray[randomIndex];
  };

  const handleAddComment = () => {
    if (comment.trim() === '' || username.trim() === '') {
      Swal.fire('Пожалуйста, заполните все поля');
      return;
    }

    if (imgLink === '') {
      imgLink = getRandomImage();
    }

    const correctComment = comment.replace(/viagra|xxx/gi, '***');
    setCommentsList(prevComments => [...prevComments, {
      username,
      currentDate,
      correctComment, imgLink, isCheckedYes
    }]);
    setComment('');
    setUsername('');
    setImgLink('');
  }

  const handleCheckboxYesChange = () => {
    setIsCheckedYes(!isCheckedYes);
    setIsCheckedNo(false);
  };

  const handleCheckboxNoChange = () => {
    setIsCheckedNo(!isCheckedNo);
    setIsCheckedYes(false);
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
              <label for="username" className="row__text"
              >Введите ваше <span className="comment__word">ФИО:</span></label>
              <input type="text" id="fullName" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="form-row">
              <label for="link" className="row__text"
              >Введите ссылку <span className="comment__word">вашего аватара:</span></label>
              <input type="text" id="link" value={imgLink} onChange={e => setImgLink(e.target.value)} />
            </div>
            <div className="form-row">
              <p>
                <label for="comments" className="row__text"
                >Оставьте комментарий:</label>
              </p>
              <textarea name="comments" id="comments" value={comment} onChange={e => setComment(e.target.value)} ></textarea>
            </div>
            <div className="comment__btn">
              <button type="button" className="btn" onClick={handleAddComment}>Отправить</button>
            </div>
          </form>
        </div>
        <div className="container">
          <h2 className="chat__title">Чат</h2>
          {[...commentsList].reverse().map((commentItem, index) =>
            <Message
              commentText={commentItem.correctComment}
              chatUserName={commentItem.username}
              currentDate={commentItem.currentDate}
              chatImage={commentItem.imgLink}
              isCheckedYes={commentItem.isCheckedYes}
              isFirstMessage={index === 0}
            />
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
