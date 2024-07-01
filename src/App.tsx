import AddForm from './components/add-form';
import Header from './components/header';
import TodoList from './components/todo-list';

interface Props {
  // Add your component props here
}

export default function App(props: Props) {
  const todoList = [
    { id: 1, title: 'Complete online JavaScript course', isCompleted: true },
    { id: 2, title: 'Jog around the park 3x', isCompleted: false },
    { id: 3, title: '10 minutes meditation', isCompleted: false },
  ];

  return (
    <div className="flex flex-col antialiased min-h-screen bg-mobile-light md:bg-desktop-light bg-no-repeat">
      <Header />
      <div className="space-y-4">
        <AddForm />
        <TodoList todoList={todoList} />
      </div>
    </div>
  );
}
