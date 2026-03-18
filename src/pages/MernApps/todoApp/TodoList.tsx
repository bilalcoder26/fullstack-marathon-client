import Button from "./Button";
import Table from "./Table";


export type Todo = {
  id: number;
  taskNo: string;
  title: string;
  description: string;
  status: string;
  taskId: string;

};

type Column<T> = {
  key: keyof T;
  header: string;
  render?: (row: T) => React.ReactNode;
};
const TodoList = ({data, deleteTodo}:any) => {
    console.log('todolist', data)

  const columns: Column<Todo>[] = [
  { key: "taskNo", header: "Task No" },
  { key: "title", header: "Title" },
  { key: "description", header: "Description" },
  { key: "status", header: "Status" },
  {
    key: "id",
    header: "Action",
    render: (row) => (
  <>
    <Button type="button" label={`Edit ${row.id}`} onClick={() => deleteTodo(row?.taskId)}/>
    <Button type="button" label="Delete" />
  </>
)
  },
];


  return <Table columns={columns} data={data} />;
};

export default TodoList;