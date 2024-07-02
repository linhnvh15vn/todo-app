import { useTodoStore } from '../store/use-todo-store';

export default function TodoFilter() {
  const { filter, setFilter } = useTodoStore();

  const filterList = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
  ];

  return (
    <div className="space-x-5 font-bold">
      {filterList.map((f) => (
        <button
          type="button"
          key={f.value}
          onClick={() => setFilter(f.value)}
          className={`text-sm ${
            filter === f.value
              ? 'text-blue-600 hover:text-blue-500'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
