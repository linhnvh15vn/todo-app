import AddForm from './components/add-form';
import Header from './components/header';
import TodoFilter from './components/todo-filter';
import TodoList from './components/todo-list';

export default function App() {
  const todoList = [
    { id: '1', title: 'Complete online JavaScript course', isCompleted: true },
    { id: '2', title: 'Jog around the park 3x', isCompleted: false },
    { id: '3', title: '10 minutes meditation', isCompleted: false },
  ];

  return (
    <div className="flex flex-col antialiased min-h-screen container">
      <Header />
      <div className="space-y-4">
        <AddForm />
        <TodoList todoList={todoList} />
        <TodoFilter />
      </div>

      <p className="text-center mt-10 text-sm">Drag and drop to reorder list</p>
    </div>
  );
}
