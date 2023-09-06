import React from "react";

const Sorting = () => {
  return (
    <div className="badge bg-secondary m-5 p-3 d-flex justify-content-end">
      <select className="bg-light py-1 px-3" id="">
        <option disabled value="">
          SEÇİNİZ
        </option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
};

export default Sorting;
