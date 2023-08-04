import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import "../styles/Home.css";

export const ShowAllCategories = () => {
  return (
    <div className="all-categories">
      <div class="form-group">
        <label className="text-center mb-2">
          <strong>Bir kategori seçiniz</strong>
        </label>
        <input class="form-control" placeholder="Bir kategori giriniz" />
      </div>
    </div>
  );
};
