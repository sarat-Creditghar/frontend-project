import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import invoices from "../data/newInvoices.json";

import { MoreVertical } from "lucide-react";


const StatusBadge = ({ status }) => {
  const variants = {
    Paid: "badge-success",
    "Out of date": "badge-error",
    Progress: "badge-warning"
  };

  return (
    <span className={`badge ${variants[status]} px-3 py-2 rounded`}>
      {status}
    </span>
  );
};




const InvoiceTable = () => {
  const columns = [
  {
    accessorKey: "id",
    header: "Invoice ID",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ getValue }) => `$${getValue().toFixed(2)}`,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => <StatusBadge status={getValue()} />,
  },
  {
    id: "actions",           
    header: "",             
    cell: () => (
      <button className="btn btn-ghost btn-xs">
        <MoreVertical size={16} />
      </button>
    ),
  },
];


  const table = useReactTable({
    data: invoices.rows,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div className="p-6 rounded-xl shadow-sm bg-white w-full">
      <h2 className="text-xl font-semibold mb-4">{invoices.title}</h2>

      <table className="table w-full">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="font-semibold text-gray-600">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="hover:bg-gray-50">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="py-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-3">
        <button className="text-primary flex items-center gap-1">
          View all →
        </button>
      </div>
    </div>
  );
};

export default InvoiceTable;
