import React from 'react';

interface Props {
  // Add your component props here
}

export default function AddForm(props: Props) {
  return (
    <div className="container">
      <form>
        <div className="px-5 py-2.5 bg-white rounded-md flex gap-3 items-center">
          <button type="submit" className="size-5 rounded-full border"></button>
          <input
            type="text"
            name=""
            className="flex-1 bg-transparent outline-none border-none"
            placeholder="Create a new todo…"
          />
        </div>
      </form>
    </div>
  );
}
