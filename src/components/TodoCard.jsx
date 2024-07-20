import styleBackground from '../hoc/styleBackground';
import TodoList from './TodoList';

const TodoCard = () => {
  return (
    <div className="gap-5 grid grid-cols-2 sm:grid-cols-4 p-8">
      <TodoList day="Monday" />
      <TodoList day="Tuesday"/>
      <TodoList day="Wednesday"/>
    </div>
  );
};

export default styleBackground(TodoCard);
