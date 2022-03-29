import React from "react";
import "./reviews.scss";

function Reviews() {
  return (
    <div className="reviews">
      <div className="reviews__wrapper">
        <ul className="reviews__list">
          <li className="reviews__item">
            <div className="reviews__item-name"><p>Владимир</p><p>Потанин</p></div>
            <div className="reviews__item-position">Директор департамента молодежи и спорта</div>
            <div className="reviews__item-text">Я занимаюсь благотворительностью больше 20 лет. Это - важная часть моей жизни. В 1999 году я создал Благотворительный фонд, чтобы сделатьпроектыв сферах лет. Это - важная часть моей жизни. В 1999 году я создал Благотворительный фонд, чтобы сделатьпроектыв сферах</div>
            <div className="reviews__item-frame">
              <img alt="Рамка" title="Рамка" src={require("../img/reviews/reviews_item_frame.png")} />
            </div>
            <img alt="Аватар" title="Аватар" className="reviews__item-photo" src={require("../img/reviews/reviews_item_photo_1.jpg")} />
          </li>
          <li className="reviews__item">
            <div className="reviews__item-name"><p>Мария</p><p>Павловская</p></div>
            <div className="reviews__item-position">Директор департамента молодежи и спорта</div>
            <div className="reviews__item-text">Я занимаюсь благотворительностью больше 20 лет.  Это - важная часть моей жизни. В 1999 году я создал Благотворительный фонд, чтобы сделатьпроектыв сферах лет. Это - важная часть моей жизни. В 1999 году я создал Благотворительный фонд, чтобы сделатьпроектыв сферах </div>
            <div className="reviews__item-frame">
              <img alt="Рамка" title="Рамка" src={require("../img/reviews/reviews_item_frame.png")} />
            </div>
            <img alt="Аватар" title="Аватар" className="reviews__item-photo" src={require("../img/reviews/reviews_item_photo_2.jpg")} />
          </li>
          <li className="reviews__item">
            <div className="reviews__item-name"><p>Федор</p><p>Емельяненко</p></div>
            <div className="reviews__item-position">Директор департамента молодежи и спорта</div>
            <div className="reviews__item-text">Я занимаюсь благотворительностью больше 20 лет. Это - важная часть моей жизни. В 1999 году я создал Благотворительный фонд, чтобы сделатьпроектыв сферах лет. Это - важная часть моей жизни. </div>
            <div className="reviews__item-frame">
              <img alt="Рамка" title="Рамка" src={require("../img/reviews/reviews_item_frame.png")} />
            </div>
              <img alt="Аватар" title="Аватар" className="reviews__item-photo" src={require("../img/reviews/reviews_item_photo_1.jpg")} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Reviews;
