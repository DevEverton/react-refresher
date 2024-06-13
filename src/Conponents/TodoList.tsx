import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
  onEdit: (todo: Todo) => void;
}

export default function TodoList({
  todos,
  onCompletedChange,
  onDelete,
  onEdit,
}: TodoListProps) {
  const todosSorted = todos.sort((a: Todo, b: Todo) =>
    a.completed === b.completed ? 0 : a.completed ? 1 : -1
  );

  return (
    <>
      <div className="space-y-2">
        {todosSorted.map((todo: Todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompletedChange={onCompletedChange}
            onDelete={onDelete}
            onEdit={(todo: Todo) => onEdit(todo)}
          />
        ))}
      </div>
      {todos.length === 0 && (
        <p className="text-center text-gray-500 text-sm">
          No todos yet. Let's get some work done, add your todos!
        </p>
      )}
    </>
  );
}
