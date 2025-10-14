import clsx from "clsx";
import { useMemo } from "react";

export default function Pagination({
  currentPage,
  totalPages,
  pageSize = 5,
  totalItems = 25,
  limit = 5,
  onPageChange,
}) {
  const slicedPages = useMemo(() => {
    const pages = Array.from({ length: totalPages }, (_, i) => `${i + 1}`);

    if (pages.length <= limit) return pages;

    if (currentPage > limit - 2 && currentPage <= totalPages - (limit - 1)) {
      const start = pages.slice(0, 1);
      const middle = ["..."];
      const rest = pages.slice(currentPage - 2, currentPage + 1);
      const end = pages.slice(-1);
      return [...start, ...middle, ...rest, ...middle, ...end];
    }

    if (currentPage > totalPages - (limit - 1)) {
      const start = pages.slice(0, 1);
      const middle = ["..."];
      const end = pages.slice(totalPages - (limit - 1), totalPages);
      return [...start, ...middle, ...end];
    }

    const start = pages.slice(0, limit - 1);
    const middle = ["..."];
    const end = pages.slice(-1);
    return [...start, ...middle, ...end];
  }, [currentPage, limit, totalPages]);

  const handlePrev = () => {
    if (currentPage > 1)
      onPageChange((prev) => ({
        ...prev,
        currentPage: prev.currentPage - 1,
      }));
  };
  const handleNext = () => {
    if (currentPage < totalPages)
      onPageChange((prev) => ({
        ...prev,
        currentPage: prev.currentPage + 1,
      }));
  };

  return (
    <div className="w-full h-[50px] flex items-center space-x-2">
      <button
        className="w-[calc(100%/3)] h-full px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <div className="w-[calc(100%/3)] h-full flex justify-around items-center gap-2">
        {slicedPages?.length > 0 &&
          slicedPages.map((token, idx) => {
            const page = Number(token);
            if (token === "...") {
              return (
                <span
                  key={`dot-${idx}`}
                  className="w-full h-full px-3 py-1 rounded bg-gray-200 text-xl font-bold flex justify-center items-end"
                >
                  ...
                </span>
              );
            }
            return (
              <button
                key={idx}
                className={clsx(
                  "w-full h-full px-3 py-1 rounded",
                  page === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                )}
                onClick={() =>
                  onPageChange((prev) => ({
                    ...prev,
                    currentPage: page,
                  }))
                }
              >
                {page}
              </button>
            );
          })}
      </div>
      <button
        className="w-[calc(100%/3)] h-full px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
