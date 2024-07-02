import { useEffect } from 'react';
import AddForm from './components/add-form';
import Header from './components/header';
import TodoFilter from './components/todo-filter';
import TodoList from './components/todo-list';
import { useThemeStore } from './store/use-theme-store';
import { useTodoStore } from './store/use-todo-store';

export default function App() {
  const { todoList } = useTodoStore();
  const { theme } = useThemeStore();

  useEffect(() => {
    theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [theme]);

  return (
    <div className="container flex min-h-screen flex-col antialiased">
      <Header />
      <div className="space-y-4">
        <AddForm />
        {todoList.length ? <TodoList todoList={todoList} /> : <div></div>}
        <div className="rounded-md bg-card py-4 text-center shadow-md lg:hidden">
          <TodoFilter />
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Drag and drop to reorder list
      </p>
    </div>
  );
}
