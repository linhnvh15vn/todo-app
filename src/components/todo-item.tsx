import { useTodoStore } from '../store/use-todo-store';
import { Checkbox } from './checkbox';
import { type Todo } from '../types';

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const { update, remove } = useTodoStore();

  return (
    <div className="flex items-center gap-3 border-b border-border bg-card px-5 py-4 first:rounded-t-md lg:gap-6 lg:px-6 lg:py-5">
      <Checkbox
        id={todo.id}
        checked={todo.isCompleted}
        onCheckedChange={() => update(todo.id)}
      />
      <label
        htmlFor={todo.id}
        className={`flex-1 cursor-pointer text-xs lg:text-lg ${
          todo.isCompleted
            ? 'text-[#d1d2da] line-through dark:text-[#4d5067]'
            : 'text-foreground'
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
