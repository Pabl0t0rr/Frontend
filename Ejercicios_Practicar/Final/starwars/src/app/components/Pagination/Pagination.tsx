import "./styles.css";

const Pagination = ({
  next,
  prev,
  page,
  setPage,
}: {
  next: boolean;
  prev: boolean;
  page: number;
  setPage: (page: number) => void;
}) => {
  return (
    <div className="pagContainer">
      {prev && (
        <div className="pagPrev" onClick={() => setPage(page - 1)}>
          <p> {"<"} </p>
        </div>
      )}

      <h1>{page}</h1>

      {next && (
        <div className="pagNext" onClick={() => setPage(page + 1)}>
          {">"}
        </div>
      )}
    </div>
  );
};

export default Pagination;
