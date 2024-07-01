import { useTodoStore } from '../store/use-todo-store';
import { type Todo } from '../types';
import TodoItem from './todo-item';

interface Props {
  todoList: Todo[];
}

export default function TodoList({ todoList }: Props) {
  const { removeCompleted } = useTodoStore();

  return (
    <div className="shadow-lg">
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <div className="bg-white flex justify-between items-center pt-4 pb-5 px-5 text-xs lg:px-6 lg:py-4">
        <p>{todoList.length} items left</p>
        <button type="button" onClick={removeCompleted}>
          Clear completed
        </button>
      </div>
    </div>
  );
}
