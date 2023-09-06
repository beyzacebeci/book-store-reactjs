import React from "react";

const BookSort = () => {
  return (
    <div className="book-sort">
      <select className="bg-light py-1 px-4" id="">
        <option disabled value="">
          SEÇİNİZ
        </option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
};

export default BookSort;
