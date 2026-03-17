import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
const API_URL = import.meta.env.VITE_API_BASE_URL;

type InitialStateProp = {
  title: string;
  content: string;
};

const TodoApp = () => {
  const [todo, setTodo] = useState<InitialStateProp>({
    title: "",
    content: "",
  });
  console.log(import.meta.env.VITE_API_BASE_URL);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setTodo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(todo);

  const handleAddTask = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", todo);
    try {
      const res = await fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      const data = await res.json();
      console.log("Success:", data);

      // reset form
      setTodo({ title: "", content: "" });
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const isFormEmpty = (obj: InitialStateProp) => {
    return Object.values(obj).some((value) => value.trim() === "");
  };

  return (
    <div className="bg-sky-200 flex flex-col  items-center min-h-screen w-full rounded-xl">
      <div>
        <h1 className="flex justify-center font-bold">Todo List</h1>
      </div>
      {/* todo card */}
      <form onSubmit={handleAddTask}>
        <div className="bg-amber-50  m-2 p-4 w-lg h-full justify-center border-8 border-amber-400 ">
          <div>
            <label htmlFor="Title">Title</label>
            <Input
              type="text"
              value={todo.title}
              placeholder="Title"
              onChange={handleChange}
              className="w-full"
              name="title"
            />
            {/* border-2 border-gray-300 rounded-md p-2 w-24 m-2  */}
          </div>
          <div>
            <label htmlFor="Description">Description</label>
            <textarea
              id="content"
              className="w-full border-2 border-gray-300 rounded-md p-2 m-2"
              placeholder="write you todo description"
              value={todo.content}
              name="content"
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <Button
              type="submit"
              label="Add Task"
              className=""
              disabled={isFormEmpty(todo)}
            />
          </div>
        </div>
      </form>

      {/* todo list */}
      <div>
        <p>list</p>
      </div>
    </div>
  );
};

export default TodoApp;
