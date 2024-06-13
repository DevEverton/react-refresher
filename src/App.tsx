import { useState } from "react";
import AddTodoForm from "./Conponents/AddTodoForm";
import TodoList from "./Conponents/TodoList";
import TodoSummary from "./Conponents/TodoSummary";
import useTodos from "./hooks/useTodos";
import EditTodoComponent from "./Conponents/EditTodoComponent";
import { Todo } from "./types/todo";

function App() {
  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompleted,
    editTodo,
  } = useTodos();

  const [showEdit, setShowEdit] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const handleEdit = (todo: Todo) => {
    setSelectedTodo(todo);
    setShowEdit(true);
  };

  const handleEditClose = () => {
    setSelectedTodo(null);
    setShowEdit(false);
  };

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded p-5 space-y-6">
        <AddTodoForm onSubimit={addTodo} />
        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
          onEdit={handleEdit}
        />
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompleted} />
      {showEdit && (
        <EditTodoComponent
          todo={selectedTodo}
          onClose={handleEditClose}
          onSave={editTodo}
        />
      )}
    </main>
  );
}
export default App;
