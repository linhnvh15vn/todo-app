import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';

import { useTodoStore } from '../store/use-todo-store';
import { type Todo } from '../types';
import TodoItem from './todo-item';
import TodoFilter from './todo-filter';

interface Props {
  todoList: Todo[];
}

export default function TodoList({ todoList }: Props) {
  const { filter, set, removeCompleted } = useTodoStore();

  const dataByStatus = () => {
    switch (filter) {
      case 'all':
        return todoList;
      case 'active':
        return todoList.filter((todo) => todo.isCompleted === false);
      case 'completed':
        return todoList.filter((todo) => todo.isCompleted === true);
      default:
        return todoList;
    }
  };

  const getQty = () => {
    return todoList.filter((todo) => todo.isCompleted === false).length;
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const newItems = [...todoList];
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    set(newItems);
  };

  return (
    <div className="rounded-md bg-card shadow-lg">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todoList">
          {(provider) => (
            <div
              {...provider.droppableProps}
              ref={provider.innerRef}
              className="max-h-[40vh] overflow-y-auto rounded-t-md"
            >
              {dataByStatus().map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(provider) => (
                    <div
                      ref={provider.innerRef}
                      {...provider.dragHandleProps}
                      {...provider.draggableProps}
                    >
                      <TodoItem key={todo.id} todo={todo} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provider.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className="flex items-center justify-between rounded-b-md bg-card px-5 pb-5 pt-4 text-xs text-muted-foreground lg:px-6 lg:py-4 lg:text-sm">
        <p>{getQty()} items left</p>
        <div className="hidden lg:block">
          <TodoFilter />
        </div>
        <button
          type="button"
          onClick={removeCompleted}
          className="hover:text-foreground"
        >
          Clear completed
        </button>
      </div>
    </div>
  );
}
