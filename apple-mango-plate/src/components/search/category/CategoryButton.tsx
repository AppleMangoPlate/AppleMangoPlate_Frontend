import React from "react";

interface props {
  category_name: string;
  clickedCategory: string;
  changeCategory: (category: string) => void;
}

export default function CategoryButton({
  category_name,
  changeCategory,
  clickedCategory,
}: props) {
  return (
    <button className="categorybtn-container">
      <span
        className={`justify-center text-lg hover:text-xl hover:font-bold hover:text-amber-800
        
        ${
          clickedCategory === category_name &&
          "font-bold text-signature_brown text-xl"
        }`}
        onClick={() => changeCategory(category_name)}
      >
        {category_name}
      </span>
      <span className="categorybar-slice">/</span>
    </button>
  );
}
