import React from "react";
import { TABLE_CONFIG } from "../Constants/TableConstant";
import { Trash2 } from "lucide-react";
import { StatusBadge } from "./StatusBadge";

export const TableRow = React.memo(
  ({ rowData, isSelected, onSelectChange }) => (
    <tr className="border-t border-gray-200 hover:bg-gray-50 transition-colors duration-150">
      <td className="pl-6 py-4">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onSelectChange}
          className={TABLE_CONFIG.styles.checkbox}
          aria-label={`Select row ${rowData.id + 1}`}
        />
      </td>
      <td className="py-4 pr-4">
        <div className="flex items-center gap-3">
          <img
            src={rowData.avatar}
            alt="User avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-900">
            {rowData.name}
          </span>
        </div>
      </td>
      <td className="py-4 pr-4">
        <StatusBadge />
      </td>
      <td className="py-4 pr-4">
        <button className={TABLE_CONFIG.styles.actionButton}>Action</button>
      </td>
      <td className="py-4 pr-6">
        <button
          className={TABLE_CONFIG.styles.deleteButton}
          aria-label={`Delete row ${rowData.id + 1}`}
        >
          <Trash2 className="w-4 h-4 text-gray-500 hover:text-red-500 transition-colors duration-150" />
        </button>
      </td>
    </tr>
  )
);
