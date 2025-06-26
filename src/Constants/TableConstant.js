export const TABLE_CONFIG = {
  headers: [
    { key: "select", label: "", width: "pl-6 py-3" },
    { key: "name", label: "Name", width: "py-3 pr-4" },
    { key: "status", label: "Status", width: "py-3 pr-4" },
    { key: "action", label: "Action", width: "py-3 pr-4" },
    { key: "delete", label: "Delete", width: "py-3 pr-6" },
  ],
  rowCount: 5,
  styles: {
    checkbox:
      "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer",
    headerText:
      "text-left text-xs font-semibold text-gray-700 uppercase tracking-wider",
    avatar:
      "w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center",
    statusBadge:
      "inline-flex items-center gap-1 text-xs bg-red-50 text-red-600 px-2.5 py-1 rounded-md border border-red-200",
    actionButton:
      "text-sm font-medium text-cyan-600 hover:text-cyan-700 transition-colors duration-150 cursor-pointer",
    deleteButton:
      "p-1 hover:bg-gray-100 rounded transition-colors duration-150 cursor-pointer",
  },
};
