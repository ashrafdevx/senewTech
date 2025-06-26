import React from "react";
import { TABLE_CONFIG } from "../Constants/TableConstant";
export const StatusBadge = React.memo(() => (
  <span className={TABLE_CONFIG.styles.statusBadge}>
    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
    Status
  </span>
));
