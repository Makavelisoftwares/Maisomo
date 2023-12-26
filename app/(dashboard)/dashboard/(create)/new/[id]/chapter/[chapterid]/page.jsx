import React from "react";
import { ChapterInfoCard } from "../../../../_components/Chapter-Info-Card";

function ChapterPage({ params }) {

  const chapterId = params?.chapterid;

  return(
    <div>
      <ChapterInfoCard id={chapterId}/>
    </div>
  )
}

export default ChapterPage;
