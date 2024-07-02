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
    <div className="flex flex-col antialiased min-h-screen container">
      <Header />
      <div className="space-y-4">
        <AddForm />
        {todoList.length ? <TodoList todoList={todoList} /> : <div></div>}
        <div className="py-4 bg-card text-center rounded-md shadow-md lg:hidden">
          <TodoFilter />
        </div>
      </div>

      <p className="text-center mt-10 text-sm text-muted-foreground">
        Drag and drop to reorder list
      </p>
    </div>
  );
}
