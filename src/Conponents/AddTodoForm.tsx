import React, { useState } from "react";

interface AddTodoFormProps {
  onSubimit: (title: string) => void;
}

export default function AddTodoform({ onSubimit }: AddTodoFormProps) {
  const [input, setInput] = useState("");

  function handleSubimit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;
    onSubimit(input);
    setInput("");
  }

  return (
    <form className="flex" onSubmit={handleSubimit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="border rounded-s-md grow p-2 border-gray-400"
        placeholder="What's need to be done?"
      />
      <button
        type="submit"
        className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
      >
        Add
      </button>
    </form>
  );
}
