import Button from "./Button";
import Input from "./Input";

const TodoApp = () => {
  return (
    <div className="bg-sky-200 flex flex-col  items-center min-h-screen w-full rounded-xl">
      <div>
        <h1 className="flex justify-center font-bold">Todo List</h1>
      </div>
      {/* todo card */}
      <div className="bg-amber-50  m-2 p-4 w-lg h-full justify-center border-8 border-amber-400 ">
        <div>
          <label htmlFor="Title">Title</label>
          <Input
            type="text"
            value=""
            placeholder="Title"
            onChange={() => {}}
            className="w-full"
          />
          {/* border-2 border-gray-300 rounded-md p-2 w-24 m-2  */}
        </div>
        <div>
          <label htmlFor="Description">Description</label>
          <textarea
            id="message"
            name="message"
            className="w-full border-2 border-gray-300 rounded-md p-2 m-2"
            placeholder="write you todo description"
          ></textarea>
        </div>
        <div>
          <Button
            type="submit"
            label="Add Task"
            className=""
            onClick={() => {}}
          />
        </div>
      </div>
      {/* todo list */}
      <div>
        <p>list</p>
      </div>
    </div>
  );
};

export default TodoApp;
