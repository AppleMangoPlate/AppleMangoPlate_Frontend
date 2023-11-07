import React from "react";
import CategoryButton from "./CategoryButton";

interface props {
  clickedCategory: string;
  categoryList: string[];
  changeCategory: (category: string) => void;
}

export default function CategoryBar({
  categoryList,
  changeCategory,
  clickedCategory,
}: props) {
  return (
    <div className="categorybar-container">
      <div className="categorybar-background" />
      {categoryList.map((category_name, key) => (
        <CategoryButton
          key={key}
          category_name={category_name}
          changeCategory={changeCategory}
          clickedCategory={clickedCategory}
        />
      ))}
    </div>
  );
}
