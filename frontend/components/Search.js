import React from "react";
import BenchMap from "./BenchMap";
import BenchIndex from "./bench_index";

const Search = ({ benches, updateBounds, fetchBenches }) => (
  <div>
    <BenchMap benches={benches} updateBounds={updateBounds} />
    <BenchIndex benches={benches} fetchBenches={fetchBenches} />
  </div>
);

export default Search;
