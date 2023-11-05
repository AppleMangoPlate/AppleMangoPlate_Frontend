import React from "react";
import CategoryButton from "./CategoryButton";

interface props {
  clickedCategory: string;
  categoryList: string[];
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function CategoryBar({
  categoryList,
  setCategory,
  clickedCategory,
}: props) {
  return (
    <div className="categorybar-container">
      <div className="categorybar-background" />
      {categoryList.map((category_name, key) => (
        <CategoryButton
          key={key}
          category_name={category_name}
          setCategory={setCategory}
          clickedCategory={clickedCategory}
        />
      ))}
    </div>
  );
}
