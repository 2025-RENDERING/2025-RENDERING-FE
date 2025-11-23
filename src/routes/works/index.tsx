import { useState } from "react";
import WorksList from "./components/works-list/WorksList";
import SearchBar from "./components/works-list/SearchBar";

const WorksPage = () => {
  const [searchText, setSearchText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  return (
    <section className="w-full mt-[36px] mb-[14px] flex flex-col items-end gap-[36px]">
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        setSubmittedText={setSubmittedText}
      />
      <WorksList submittedText={submittedText} />
    </section>
  );
};

export default WorksPage;
