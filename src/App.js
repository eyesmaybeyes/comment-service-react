import React, { useState } from 'react';
import './App.css';
import { Message } from './components/Message/Message.jsx';
function App() {
  const [comment, setComment] = useState('');
  const [username, setUsername] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const [imgLink, setImgLink] = useState('');

  const [isCheckedYes, setIsCheckedYes] = useState(true);
  const [isCheckedNo, setIsCheckedNo] = useState(false);

  const handleAddComment = () => {
    const correctComment = comment.replace(/viagra|xxx/gi, '***');
    setCommentsList(prevComments => [...prevComments, {
      username,
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
        <div class="container">
          <h2 className="chat__title">Чат</h2>
          <div class="chat">
            {[...commentsList].reverse().map((commentItem, index) =>
              <Message
                commentText={commentItem.correctComment}
                chatUserName={commentItem.username}
                chatImage={commentItem.imgLink}
                isCheckedYes={commentItem.isCheckedYes}
                isFirstMessage={index === 0}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
