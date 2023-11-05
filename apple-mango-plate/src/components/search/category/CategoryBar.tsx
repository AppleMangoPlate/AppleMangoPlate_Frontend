import React from "react";
import CategoryButton from "./CategoryButton";

export default function CategoryBar() {
  const [category, setCategory] = React.useState("한식");
  const categoryList = ["한식", "양식", "중식", "일식", "분식", "카페", "기타"];

  return (
    <div className="categorybar-container">
      <div className="categorybar-background" />
      {categoryList.map((category_name, key) => (
        <CategoryButton
          key={key}
          category_name={category_name}
          setCategory={setCategory}
          clickedCategory={category}
        />
      ))}
    </div>
  );
}
