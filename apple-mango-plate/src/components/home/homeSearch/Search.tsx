import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchInputModal from "./SearchInputModal";

export default function Search() {
  const [searchInputModal, setSearchInputModal] = useState(false);

  return (
    <div className="flex w-full">
      <SearchBar setModal={setSearchInputModal} modal={searchInputModal} />
      {searchInputModal && <SearchInputModal setModal={setSearchInputModal} />}
    </div>
  );
}
