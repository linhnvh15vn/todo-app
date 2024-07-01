import React from 'react';

import { useState } from 'react';
import { useTodoStore } from '../store/use-todo-store';

export default function AddForm() {
  const [title, setTitle] = useState('');
  const { create } = useTodoStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    create(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="px-5 py-2.5 lg:px-6 lg:py-5 bg-card rounded-md flex gap-3 lg:gap-6 items-center">
        <button
          type="submit"
          className="size-5 lg:size-6 rounded-full border"
        ></button>
        <input
          type="text"
          value={title}
          className="flex-1 bg-transparent outline-none border-none text-xs lg:text-lg"
          placeholder="Create a new todo…"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </form>
  );
}
