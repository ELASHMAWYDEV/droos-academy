import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

//Styles
import styles from "./index.module.scss";

const Pagination = ({
  totalQuestions,
  questionsPerPage,
  currentPage,
  setCurrentPage,
}: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalQuestions / questionsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={styles.paginationContainer}>
      <button
        type="button"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === pageNumbers.length ? true : false}
      >
        <BsArrowRight />
        <p>التالي</p>
      </button>
      <span>
        {pageNumbers.length} - {currentPage}
      </span>
      <button
        type="button"
        disabled={currentPage === 1 ? true : false}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <p>
          السابق
        </p>
          <BsArrowLeft />
      </button>
    </div>
  );
};

export default Pagination;
