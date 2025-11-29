import { useState } from "react";
import WorksList from "./components/works-list/WorksList";
import SearchBar from "./components/works-list/SearchBar";

const WorksPage = () => {
  const [searchText, setSearchText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  return (
    <section className="w-full min-h-[762px] flex flex-col items-end gap-[36px] pt-20 px-[24px] pb-[24px] md:pt-[24px]">
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
