interface Props {
  todo: any;
}

export default function TodoItem({ todo }: Props) {
  return (
    <div className="flex items-center gap-3 px-5 py-4 bg-white rounded-md  border-b">
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className="text-xs flex-1">
        {todo.title}
      </label>
      <img src="/images/icon-cross.svg" alt="remove" className="size-3" />
    </div>
  );
}
