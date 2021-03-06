import React from "react";

import Datetime from "react-datetime";

import { Choice, Navigation } from "./components";

//Styles
import "./style.scss";
import "react-datetime/css/react-datetime.css";

//Assets
import { ReactComponent as Calendar } from "../../../assets/img/calendar.svg";

const NewExam = () => {
  return (
    <div className="new-exam-container">
      <div className="title">
        <h2>اختبار جديد</h2>
      </div>
      <div className="form-container">
        <form>
          <div className="exam-type">
            <span>حالة الاختبار</span>
            <div className="select-item">
              <select>
                <option selected unselectable disabled>
                  حالة الاختبار
                </option>
                <option>مسودة</option>
              </select>
              <span></span>
            </div>
          </div>
          <div className="exam-details">
            <div className="exam-title">
              <label>عنوان الاختبار</label>
              <input
                type="text"
                placeholder="عنوان الاختبار"
                name="examTitle"
              />
            </div>
            <div className="exam-duration">
              <div className="title">
                <h4>زمن الاختبار</h4>
              </div>
              <div className="inputs-container">
                <div className="select-container">
                  <select>
                    <option>1 m</option>
                  </select>
                  <span></span>
                </div>
                <div className="select-container">
                  <select>
                    <option>1 h</option>
                  </select>
                  <span></span>
                </div>
                <div className="select-container">
                  <select>
                    <option>1 d</option>
                  </select>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="exam-date">
              <div className="specific-time">
                <div className="title">وقت بداية الاختبار</div>
                <div className="radio-container">
                  <div className="choices-container">
                    <label className="container">
                      <input type="radio" name="time" />
                      <div>في وقت محدد</div>
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      <input type="radio" name="time" />
                      <div>في أي وقت</div>
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div />
                </div>
                <div className="calender-container">
                  <Datetime />
                  <span>
                    <Calendar />
                  </span>
                </div>
              </div>
            </div>
            <div className="dash-line"></div>
          </div>
          <div className="questions-container">
            <div className="title">
              <h3>الأسئلة</h3>
            </div>
            <div className="question-number">
              <div className="number">سؤال رقم #15</div>
              <div className="delete-question-btn">
                <button type="button">حذف السؤال</button>
              </div>
            </div>
            <div className="type">
              <div className="title">نوع السؤال</div>
              <div className="radio-container">
                <div className="choices-container">
                  <label className="container">
                    <input type="radio" name="type" />
                    <div>اختيار من متعدد</div>
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    <input type="radio" name="type" />
                    <div>مقالي</div>
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div />
              </div>
            </div>
            <div className="question-container">
              <div className="title">السؤال</div>
              <div className="input">
                <input type="text" name="question" placeholder="السؤال" />
              </div>
            </div>
            <div className="choices-container">
              <div className="title">الإختيارات</div>
              <div className="choices">
                {[1, 2, 3, 4].map((item, index) => (
                  <Choice number={index} />
                ))}
              </div>
            </div>
            <Navigation />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewExam;
