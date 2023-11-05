import { useGetKeywordSearch } from "@/apis/search/search";
import { useRouter } from "next/router";
import React, { useState } from "react";
import SearchThumbnail from "./SearchThumbnail";
import { Store } from "@/types/store.dto";
import CategoryBar from "./category/CategoryBar";
import SearchBar from "./SearchBar";

export default function Search() {
  const router = useRouter();
  const { keyword } = router.query;
  const [page, setPage] = useState(1);
  const [category, setCategory] = React.useState("한식");
  const categoryList = ["한식", "양식", "중식", "일식", "분식", "카페", "술집"];
  const { data, isLoading } = useGetKeywordSearch(
    keyword as string,
    category,
    page
  );

  /*
   * 로딩 스켈레톤 추가하기..
   */

  return (
    <div className="flex w-full items-center flex-col">
      <SearchBar />
      <CategoryBar
        categoryList={categoryList}
        setCategory={setCategory}
        clickedCategory={category}
      />
      <div className="search-container">
        {data?.map((item: Store, key: number) => (
          <SearchThumbnail key={key} {...item} />
        ))}
      </div>
    </div>
  );
}
