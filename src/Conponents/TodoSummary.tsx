import { Todo } from "../types/todo";

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompleted: () => void;
}

export default function TodoSummary({
  todos,
  deleteAllCompleted,
}: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="text-center">
      <p>
        {completedTodos.length} / {todos.length} completed
      </p>
      {completedTodos.length > 0 && (
        <button
          onClick={deleteAllCompleted}
          className="text-red-500 py-1 px-2 rounded hover:underline transition duration-300 ease-in-out"
        >
          Delete all completed
        </button>
      )}
    </div>
  );
}
