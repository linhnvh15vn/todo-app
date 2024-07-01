import AddForm from './components/add-form';
import Header from './components/header';
import TodoFilter from './components/todo-filter';
import TodoList from './components/todo-list';
import { useTodoStore } from './store/use-todo-store';

export default function App() {
  const { todoList } = useTodoStore();

  return (
    <div className="flex flex-col antialiased min-h-screen container">
      <Header />
      <div className="space-y-4">
        <AddForm />
        {todoList.length ? <TodoList todoList={todoList} /> : <div></div>}
        <TodoFilter />
      </div>

      <p className="text-center mt-10 text-sm">Drag and drop to reorder list</p>
    </div>
  );
}
