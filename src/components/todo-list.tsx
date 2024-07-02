import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';

import { useTodoStore } from '../store/use-todo-store';
import { type Todo } from '../types';
import TodoItem from './todo-item';

interface Props {
  todoList: Todo[];
}

export default function TodoList({ todoList }: Props) {
  const { set, removeCompleted } = useTodoStore();

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
    <div className="shadow-lg bg-card rounded-md">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todoList">
          {(provider) => (
            <div {...provider.droppableProps} ref={provider.innerRef}>
              {todoList.map((todo, index) => (
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

      <div className="bg-card flex justify-between items-center pt-4 pb-5 px-5 text-xs lg:px-6 lg:text-sm lg:py-4 text-muted-foreground rounded-b-md">
        <p>{todoList.length} items left</p>
        <button type="button" onClick={removeCompleted}>
          Clear completed
        </button>
      </div>
    </div>
  );
}
