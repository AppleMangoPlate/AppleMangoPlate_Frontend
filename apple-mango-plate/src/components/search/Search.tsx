import { useGetKeywordSearch } from "@/apis/search/search";
import { useRouter } from "next/router";
import React from "react";
import SearchThumbnail from "./SearchThumbnail";
import { Store } from "@/types/store.dto";

export default function Search() {
  const router = useRouter();
  const { keyword } = router.query;
  const { data, isLoading } = useGetKeywordSearch(keyword as string, "한식", 1);

  return (
    <div className="flex w-full justify-center">
      {isLoading && ( // 스켈레톤 적용 해야됨
        <div className="flex w-full h-full justify-center items-center">
          로딩중
        </div>
      )}
      <div
        className="grid md:grid-cols-2 grid-cols-1 gap-x-20 gap-y-14
                      justify-items-center w-[50vw] min-w-max"
      >
        {data?.map((item: Store, key: number) => (
          <SearchThumbnail key={key} {...item} />
        ))}
      </div>
    </div>
  );
}
