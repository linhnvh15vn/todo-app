import TodoItem from './todo-item';

interface Props {
  todoList: any;
}

export default function TodoList({ todoList }: Props) {
  return (
    <div className="container">
      <div className="shadow-lg">
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
        <div className="flex justify-between items-center pt-4 pb-5 px-5 text-xs">
          <p>5 items left</p>
          <button>Clear completed</button>
        </div>
      </div>
    </div>
  );
}
