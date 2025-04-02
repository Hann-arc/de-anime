import { useState } from "react";

export const Synopsis = ({ paragraphs }) => {
  const [showMore, setShowMore] = useState(false);
  const fullSynopsis = paragraphs.join(" ");
  const words = fullSynopsis.split(" ");

  const displayedText = showMore
    ? fullSynopsis
    : words.slice(0, 20).join(" ") + " ...";

  return (
    <div className="flex md:ml-72 mx-7 text-white">
      <p>
        {displayedText}
        {!showMore && words.length > 50 && (
          <span
            className="text-orange-400 cursor-pointer hover:underline"
            onClick={() => setShowMore(true)}
          >
            Tampilkan lebih banyak
          </span>
        )}
        {showMore && (
          <span
            className="text-orange-400  cursor-pointer hover:underline"
            onClick={() => setShowMore(false)}
          >
            {" "}
            Tampilkan lebih sedikit
          </span>
        )}
      </p>
    </div>
  );
};

