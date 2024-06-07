import { Todo } from "../types/todo";
import { Trash2 } from "lucide-react";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({
  todo,
  onCompletedChange,
  onDelete,
}: TodoItemProps) {
  return (
    <div className="flex items-center gap-1 ">
      <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50 grow">
        <input
          type="checkbox"
          checked={todo.completed}
          className="scale-125 m-2"
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
        />

        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.title}
        </span>
      </label>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-gray-500 py-1 px-2 rounded hover:bg-red-200 transition duration-300 ease-in-out"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}
