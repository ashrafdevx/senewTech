import { useCallback, useMemo, useState } from "react";

export const useTableSelection = (totalRows) => {
  const [selectedRows, setSelectedRows] = useState(new Set());
  const selectAll = useMemo(
    () => selectedRows.size === totalRows,
    [selectedRows.size, totalRows]
  );

  const handleSelectAll = useCallback(() => {
    setSelectedRows((prevSelected) =>
      prevSelected.size === totalRows
        ? new Set()
        : new Set(Array.from({ length: totalRows }, (_, i) => i))
    );
  }, [totalRows]);

  const handleRowSelect = useCallback((index) => {
    setSelectedRows((prevSelected) => {
      const newSelected = new Set(prevSelected);
      newSelected.has(index)
        ? newSelected.delete(index)
        : newSelected.add(index);
      return newSelected;
    });
  }, []);

  return { selectedRows, selectAll, handleSelectAll, handleRowSelect };
};
