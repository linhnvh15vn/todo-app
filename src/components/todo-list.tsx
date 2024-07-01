import { type Todo } from '../types';
import TodoItem from './todo-item';

interface Props {
  todoList: Todo[];
}

export default function TodoList({ todoList }: Props) {
  return (
    <div className="shadow-lg">
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <div className="flex justify-between items-center pt-4 pb-5 px-5 text-xs lg:px-6 lg:py-4">
        <p>5 items left</p>
        <button>Clear completed</button>
      </div>
    </div>
  );
}
