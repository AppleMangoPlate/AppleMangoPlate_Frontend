import { useGetKeywordSearch } from "@/apis/search/search";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import SearchThumbnail from "./SearchThumbnail";
import { Store } from "@/types/store.dto";
import CategoryBar from "./category/CategoryBar";
import SearchBar from "./SearchBar";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";

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

  const handlePrevPage = useCallback(() => {
    setPage(page - 1);
  }, [page]);

  const handleNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const handleChangeCategory = useCallback(
    (category: string) => {
      setCategory(category);
      setPage(1);
    },
    [category]
  );

  return (
    <div className="flex w-full items-center flex-col py-10">
      <SearchBar />
      <CategoryBar
        categoryList={categoryList}
        changeCategory={handleChangeCategory}
        clickedCategory={category}
      />
      <div className="search-container">
        {data?.map((item: Store, key: number) => (
          <SearchThumbnail key={key} {...item} />
        ))}
      </div>
      <div className="flex flex-row justify-between">
        {page !== 1 && <PrevButton onClick={handlePrevPage} />}
        {data?.length == 10 && <NextButton onClick={handleNextPage} />}
      </div>
    </div>
  );
}
