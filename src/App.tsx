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
        {todoList.length ? (
          <>
            <TodoList todoList={todoList} />
            <div className="flex h-12 items-center justify-center rounded-md bg-card shadow-md lg:hidden">
              <TodoFilter />
            </div>
            <p className="pt-10 text-center text-sm text-muted-foreground">
              Drag and drop to reorder list
            </p>
          </>
        ) : (
          <p className="text-white">No items. Why not add one above.</p>
        )}
      </div>
    </div>
  );
}
