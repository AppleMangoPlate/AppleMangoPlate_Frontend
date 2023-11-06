import { useGetKeywordSearch } from "@/apis/search/search";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import SearchThumbnail from "./SearchThumbnail";
import { Store } from "@/types/store.dto";
import CategoryBar from "./category/CategoryBar";
import SearchBar from "./SearchBar";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
import { useSearch } from "@/hooks/search/useSearch";

export default function Search() {
  const router = useRouter();
  const { keyword } = router.query;
  const {
    data,
    isLoading,
    page,
    category,
    categoryList,
    searchKeyword,
    handlePrevPage,
    handleNextPage,
    handleChangeCategory,
    handleSearch,
  } = useSearch(keyword as string);

  /*
   * 로딩 스켈레톤 추가하기..
   * 검색결과 없을 때 보여줄 페이지.. 만들기..
   */

  return (
    <div className="search-container">
      <SearchBar handleSearch={handleSearch} searchKeyword={searchKeyword} />
      <CategoryBar
        categoryList={categoryList}
        changeCategory={handleChangeCategory}
        clickedCategory={category}
      />
      <section className="search-wrapper">
        {data?.map((item: Store, key: number) => (
          <SearchThumbnail key={key} {...item} />
        ))}
      </section>
      <div className="search-pagenation-btn-container">
        {page !== 1 && <PrevButton onClick={handlePrevPage} />}
        {data?.length == 10 && <NextButton onClick={handleNextPage} />}
      </div>
    </div>
  );
}
