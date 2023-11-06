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
import Loading from "./Loading";

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

  return (
    <div className="search-container">
      <SearchBar handleSearch={handleSearch} searchKeyword={searchKeyword} />
      <CategoryBar
        categoryList={categoryList}
        changeCategory={handleChangeCategory}
        clickedCategory={category}
      />
      {isLoading && <Loading />}
      {data?.length === 0 && (
        <div className="search-no-data-container">
          <h1>{keyword}에 대한 검색 결과가 없습니다.</h1>
        </div>
      )}
      <section className="search-wrapper">
        {!isLoading &&
          data?.map((item: Store, key: number) => (
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
