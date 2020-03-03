import React from "react";
import "./pagination.style.css"

const Pagination = ({ pages, nextPage, currentPage }) => {
  const pageLinks = [];

  for (let i = 1; i <= pages + 1; i++) {
    let active = currentPage === i ? "active-btn" : "";
    pageLinks.push(
      <li
        className={`waves-effect ${active}`}
        key={i}
        onClick={() => nextPage(i)}
      >
        <a href="#">{i}</a>
      </li>
    );
  }
  return (
    <div className="page-container">
      <div className="page-row">
        <ul className="pagination">
          {currentPage > 1 ? (
            <li
              className={`waves-effect`}
              onClick={() => nextPage(currentPage - 1)}
            >
              <a href="#"><span>Prev</span></a>
            </li>
          ) : (
            ""
          )}
          {pageLinks}
          {currentPage < pages + 1 ? (
            <li
              className={`waves-effect`}
              onClick={() => nextPage(currentPage + 1)}
            >
              <a href="#"><span>Next</span></a>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
