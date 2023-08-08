import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const onButtonClick = () => {
    // checkSpam();
    // sendImg();
    // changeUserName();
    // getDate();
  };

  return (
    <div classNameName="App">
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
                required
              />
              <label for="no" className="que">Нет</label>
              <input
                type="checkbox"
                id="no"
                required
              />
            </div>
            <div className="form-row">
              <label for="fullName" className="row__text"
              >Введите ваше <span className="comment__word">ФИО:</span></label>
              <input type="text" id="fullName" required />
            </div>
            <div className="form-row">
              <label for="link" className="row__text"
              >Введите ссылку
                <span className="comment__word"
                >вашего аватара:</span></label>
              <input type="text" id="link" required />
            </div>
            <div className="form-row">
              <p>
                <label for="comments" className="row__text"
                >Оставьте комментарий:</label>
              </p>
              <textarea name="comments" id="comments"></textarea>
            </div>
            <div className="comment__btn">
              <button type="button" className="btn" onClick={onButtonClick}>Отправить</button>
            </div>
          </form>
        </div>
        <div className="info__chat chat">
          <h2 className="chat__title">Чат</h2>
          <div className="chat__container">
            <img src="" alt="" id="chatImage" />
            <p id="chatDate"></p>
          </div>
          <p id="chatUserName"></p>
          <p id="chatComment"></p>
        </div>
      </section>
    </div>
  );
}

export default App;
