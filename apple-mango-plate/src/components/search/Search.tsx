import { useGetKeywordSearch } from "@/apis/search/search";
import { useRouter } from "next/router";
import React, { useState } from "react";
import SearchThumbnail from "./SearchThumbnail";
import { Store } from "@/types/store.dto";
import CategoryBar from "./CategoryBar";

export default function Search() {
  const router = useRouter();
  const { keyword } = router.query;
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetKeywordSearch(
    keyword as string,
    "한식",
    page
  );

  /*
   * 로딩 스켈레톤 추가하기..
   */

  return (
    <div className="flex w-full items-center flex-col">
      <CategoryBar />
      <div className="search-container">
        {data?.map((item: Store, key: number) => (
          <SearchThumbnail key={key} {...item} />
        ))}
      </div>
    </div>
  );
}
