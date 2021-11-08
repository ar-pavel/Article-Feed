import { useState } from "react";

const usePagination = ({ contentPerPage, contentCount }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPageCount = Math.ceil(contentCount / contentPerPage);
  const endingIndex = currentPage * contentPerPage;
  const startingIndex = endingIndex - contentPerPage;

  const nextPage = () => {
    setCurrentPage(currentPage + (currentPage == totalPageCount ? 0 : 1));
  };

  const prevPage = () => {
    setCurrentPage(currentPage - (currentPage == 1 ? 0 : 1));
  };

  const randPage = (page) => {
    console.log("page set request:", page);
    page = page < 1 ? 1 : page;
    page = page > totalPageCount ? totalPageCount : page;

    setCurrentPage(page);
  };

  return {
    totalPageCount,
    currentPage,
    nextPage: () => nextPage(),
    prevPage: () => prevPage(),
    setPage: (page) => randPage(page),
    startingIndex,
    endingIndex,
  };
};

export default usePagination;
