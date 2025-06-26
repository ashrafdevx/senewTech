import { useMemo } from "react";
import { useTableSelection } from "../hook/useTable";
import { TABLE_CONFIG } from "../Constants/TableConstant";
import { TableHeader } from "../components/TableHeader";
import { TableRow } from "../components/TableRow";

export default function Table() {
  const createInitialRows = (count) =>
    Array.from({ length: count }, (_, index) => ({
      id: index,
      name: "Table Cell",
      status: "Status",
      avatar: "assets/avatar.svg",
    }));
  const rowsData = useMemo(() => createInitialRows(TABLE_CONFIG.rowCount), []);
  const { selectedRows, selectAll, handleSelectAll, handleRowSelect } =
    useTableSelection(TABLE_CONFIG?.rowCount);

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <TableHeader selectAll={selectAll} onSelectAll={handleSelectAll} />
          <tbody className="bg-white divide-y divide-gray-200">
            {rowsData.map((rowData) => (
              <TableRow
                key={rowData.id}
                rowData={rowData}
                isSelected={selectedRows.has(rowData.id)}
                onSelectChange={() => handleRowSelect(rowData.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
