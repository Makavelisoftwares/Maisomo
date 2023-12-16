import { columns } from "./Columns";
import { DataTable } from "./Data-table";

export const MyCourses = () => {
  const payments = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
  ];

  return (
    <div className="mt-2">
      <DataTable columns={columns} data={payments} />
    </div>
  );
};
