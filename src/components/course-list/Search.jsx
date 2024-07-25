import React, { useState } from "react";

function Search({onSearchResult}) {
  const [search, setSearch] = useState("");
  return (
    <div className="flex gap-2 mt-[32px]">
      <input
        type="text"
        className="border border-[#BEBEBE] w-[332px] px-[13px] rounded-[4px]"
        placeholder="Search by Title (alt+k or cmd+k)"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="bg-[#6C6BAF] text-white text-lg w-[116px] h-[43px] rounded-[4px]"
        style={{ boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.25)" }}
        onClick={() => onSearchResult(search)}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
