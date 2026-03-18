type Column<T> = {
  key: keyof T;
  header: string;
  render?: (row: T) => React.ReactNode;
};

type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
};

const Table = <T,>({ columns, data }: TableProps<T>) => {
  return (
  
    <div className="border border-gray-200 rounded-lg">
      {/* Scroll container */}
      <div className="max-h-75 overflow-y-auto">
        <table className="min-w-full text-left text-sm text-gray-800">
          {/* Sticky Header */}
          <thead className="bg-gray-50 text-gray-700 sticky top-0 z-10">
            <tr>
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className="px-4 py-3 font-semibold bg-gray-50"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {data.map((row, idx) => (
              <tr key={idx} className="bg-white hover:bg-gray-50">
                {columns.map((col) => (
                  <td key={String(col.key)} className="px-4 py-3">
                    {col.render ? col.render(row) : String(row[col.key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
