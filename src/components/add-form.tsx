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
      <div className="flex items-center gap-3 rounded-md bg-card px-5 py-3.5 lg:gap-6 lg:px-6 lg:py-5">
        <button
          type="submit"
          className="size-5 rounded-full border lg:size-6"
        ></button>
        <input
          type="text"
          value={title}
          className="flex-1 border-none bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground lg:text-lg"
          placeholder="Create a new todo…"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </form>
  );
}
