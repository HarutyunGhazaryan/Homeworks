function Pagination(array, pageSize) {
  let currentPage = 1;
  const totalPages = Math.ceil(array.length / pageSize);

  function getPageRange() {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return { start, end };
  }

  return {
    prevPage() {
      if (currentPage > 1) {
        currentPage--;
      }
      return this;
    },

    nextPage() {
      if (currentPage < totalPages) {
        currentPage++;
      }
      return this;
    },

    firstPage() {
      currentPage = 1;
      return this;
    },

    lastPage() {
      currentPage = totalPages;
      return this;
    },

    goToPage(page) {
      if (page >= 1 && page <= totalPages) {
        currentPage = page;
      }
      return this;
    },

    getPageItems() {
      const { start, end } = getPageRange();
      return array.slice(start, end);
    },
  };
}

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const PaginationObj = Pagination(alphabetArray, 4);
console.log(PaginationObj.getPageItems()); // ["a", "b", "c", "d"]
PaginationObj.nextPage(); // add the current page by one
console.log(PaginationObj.getPageItems()); // ["e", "f", "g", "h"]
PaginationObj.nextPage().nextPage(); // the ability to call chainable
console.log(PaginationObj.getPageItems());
PaginationObj.goToPage(3); // current page must be set to 3
console.log(PaginationObj.getPageItems());
