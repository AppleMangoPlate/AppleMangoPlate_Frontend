import React from "react";

interface props {
  category_name: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  clickedCategory: string;
}

export default function CategoryButton({
  category_name,
  setCategory,
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
        onClick={() => setCategory(category_name)}
      >
        {category_name}
      </span>
      <span className="categorybar-slice">/</span>
    </button>
  );
}
