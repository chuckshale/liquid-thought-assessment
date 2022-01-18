import { useMemo } from "react";

const SelectColumnFilter = ({
    column: { filterValue, setFilter, preFilteredRows, id },
}: any) => {
    const options = useMemo(() => {
        const options = new Set();
        preFilteredRows.forEach((row: any) => {
            options.add(row.values[id]);
        });
        return [...options.values()];
    }, [id, preFilteredRows]);

    return (
        <select
            id="custom-select"
            className="table-input-filter"
            value={filterValue}
            onChange={(e) => {
                setFilter(e.target.value || undefined);
            }}
        >
            <option value="">All</option>
            {options.map((option: any) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default SelectColumnFilter;
