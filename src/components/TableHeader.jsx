import React from "react";
import { TABLE_CONFIG } from "../Constants/TableConstant";

export const TableHeader = React.memo(({ selectAll, onSelectAll }) => (
  <thead className="bg-gray-50">
    <tr>
      {TABLE_CONFIG.headers.map((header) => (
        <th
          key={header.key}
          className={`${header.width} ${TABLE_CONFIG.styles.headerText}`}
        >
          {header.key === "select" ? (
            <input
              type="checkbox"
              checked={selectAll}
              onChange={onSelectAll}
              className={TABLE_CONFIG.styles.checkbox}
              aria-label="Select all rows"
            />
          ) : (
            header.label
          )}
        </th>
      ))}
    </tr>
  </thead>
));
