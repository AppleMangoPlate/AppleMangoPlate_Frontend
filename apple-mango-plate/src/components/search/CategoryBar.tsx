import React from "react";

function CategoryButton({ category_name }: { category_name: string }) {
  return <div className="w-14 bg-slate-300 mx-2">{category_name} /</div>;
}

export default function CategoryBar() {
  const categoryList = ["한식", "양식", "중식", "일식", "분식", "카페", "기타"];

  return (
    <div className="flex bg-red-200 w-[50vw]">
      {categoryList.map((category_name, key) => (
        <CategoryButton key={key} category_name={category_name} />
      ))}
    </div>
  );
}
