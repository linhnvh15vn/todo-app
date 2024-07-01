import { useTodoStore } from '../store/use-todo-store';
import { type Todo } from '../types';

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const { update, remove } = useTodoStore();

  return (
    <div className="flex items-center gap-3 px-5 py-4 bg-white first:rounded-t-md border-b lg:px-6 lg:py-5 lg:gap-6">
      <input
        type="checkbox"
        id={todo.id}
        className="cursor-pointer"
        checked={todo.isCompleted}
        onChange={() => update(todo.id)}
      />
      <label
        htmlFor={todo.id}
        className={`text-xs flex-1 cursor-pointer lg:text-lg ${
          todo.isCompleted ? 'line-through text-[#d1d2da]' : 'text-[#494c6b]'
        }`}
      >
        {todo.title}
      </label>
      <button type="button" onClick={() => remove(todo.id)}>
        <img
          src="/images/icon-cross.svg"
          alt="remove"
          className="size-3 lg:size-4"
        />
      </button>
    </div>
  );
}
