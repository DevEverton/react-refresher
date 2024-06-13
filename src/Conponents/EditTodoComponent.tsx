import { useState } from "react";
import { Todo } from "../types/todo";

interface EditItemProps {
  todo: Todo | null;
  onSave: (id: number, newTitle: string) => void;
  onClose: () => void;
}

const EditTodoComponent: React.FC<EditItemProps> = ({
  todo,
  onSave,
  onClose,
}) => {
  const [updatedTodo, setUpdatedTodo] = useState<string>(todo?.title ?? "");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTodo(e.target.value);
  };

  const handleSave = () => {
    onSave(todo?.id ?? 1, updatedTodo);
    onClose();
  };

  return (
    <div className=" flex items-center justify-center">
      <div>
        <h2 className="text-center">Edit Todo</h2>
        <input
          type="text"
          value={updatedTodo}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodoComponent;
