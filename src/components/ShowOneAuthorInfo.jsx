import React, { useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthors } from "../store/slices/authorSlice";

function ShowOneAuthorInfo() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAuthors());
  }, [dispatch]);

  const authors = useSelector((state) => state.authorSlice.authorsData);

  return (
    <div className="oneAuthorInfo">
      <div className="back-icon ms-2 fs-2" onClick={() => navigate("/authors")}>
        <ArrowBackIcon />
      </div>

      <div className="books">
        {authors.map((author, index) => {
          return (
            <div key={index}>
              <h6>{author.bookNames}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowOneAuthorInfo;
