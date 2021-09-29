import React, { useState } from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import './Style.css';
import { IconButton } from "@mui/material";

const Pegination = ({ data, dataLimit, Componant, pageLimit }) => {
  const [pages, setPages] = useState(Math.round(data.lenght / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  const onNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const onPrevPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const onChangePage = (event) => {
    const pageNum = Number(event.target.textContent);
    setCurrentPage(pageNum);
  };

  const getPostData = () => {
    const initialIndex = currentPage * dataLimit - dataLimit;
    const lastIndex = initialIndex + dataLimit;

    return data.slice(initialIndex, lastIndex);
  };

  const getPeginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;

    const newArr = new Array(pageLimit)
      .fill()
      .map((_, index) => start + index + 1);
    return newArr;
  };

  return (
    <div className="pegination">
      <div className="pegination_posts">
        {getPostData().map((data, index) => (
          <Componant key={index} data={data} />
        ))}
      </div>

      <div className="peginatio_btns">
        <button onClick={onPrevPage} className={`prev-btn ${currentPage === 1 ? "hide" : " "}`}>
            <ChevronLeftIcon />
        </button>

        {getPeginationGroup().map((item, index) => (
          <button key={index} onClick={onChangePage} className={`btn ${currentPage === item ? "active" : " "}`}>
              {item}
            
          </button>
        ))}

        <button onClick={onNextPage} className="next-btn">
            <ChevronRightIcon/>
        </button>
      </div>
    </div>
  );
};

export default Pegination;
