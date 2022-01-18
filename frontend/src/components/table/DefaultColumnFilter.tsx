const DefaultColumnFilter = ({
    column: {
        filterValue,
        setFilter,
        preFilteredRows: { length },
    },
}: any) => {
    return (
        <input
            className="table-input-filter"
            value={filterValue || ""}
            onChange={(e) => {
                setFilter(e.target.value || undefined);
            }}
            placeholder={`search (${length}) ...`}
        />
    );
};

export default DefaultColumnFilter;
