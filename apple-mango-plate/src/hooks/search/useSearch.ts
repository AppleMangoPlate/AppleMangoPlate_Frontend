import router from "next/router";
import { useState, useEffect, useCallback } from "react";
import { useGetKeywordSearch } from "@/apis/search/keywordSearch";

export const useSearch = (keyword: string | string[] | undefined) => {
  const [page, setPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState(keyword as string);
  const [category, setCategory] = useState("한식");
  const categoryList = ["한식", "양식", "중식", "일식", "분식", "카페", "술집"];
  const { data } = useGetKeywordSearch(searchKeyword, category, page);

  useEffect(() => {
    if (keyword) setSearchKeyword(keyword as string);
  }, [keyword]);

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

  const handleSearch = useCallback(
    (searchKeyword: string) => {
      router.push(`/search/${searchKeyword}`);
    },
    [searchKeyword]
  );

  return {
    data,
    page,
    category,
    categoryList,
    searchKeyword,
    handlePrevPage,
    handleNextPage,
    handleChangeCategory,
    handleSearch,
  };
};
