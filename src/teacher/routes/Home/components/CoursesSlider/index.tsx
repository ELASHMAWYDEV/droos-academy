import React, { useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

//Styles
import styles from "./index.module.scss";

//Components
import { CourseItem } from "..";

const CoursesSlider = () => {
  const [activeYear, setActiveYear] = useState(0);

  //Temp
  const years = [
    {
      name: "الاول الثانوي",
    },
    {
      name: "الثاني الثانوي",
    },
    {
      name: "الثالث الثانوي",
    },
  ];

  return (
    <div className={styles.coursesSliderContainer}>
      <h2>اختر السنة الدراسية</h2>
      <div className={styles.yearButtons}>
        {years &&
          years.map((year, i) => (
            <button
              key={i}
              className={i === activeYear ? `${styles.activeStyle}` : ""}
              onClick={() => {
                setActiveYear(i);
                console.log(activeYear);
              }}
            >
              {year.name}
            </button>
          ))}
      </div>
      <div className={styles.coursesContainer}>
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </div>
      <div className={styles.paginationButtons}>
        <button>
          <BsArrowRight />
          <p>التالي</p>
        </button>
        <button className={styles.notActive}>
          <p>السابق</p>
          <BsArrowLeft />
        </button>
      </div>
    </div>
  );
};

export default CoursesSlider;
