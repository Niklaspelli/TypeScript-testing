import { type Todo } from "../types/Todo";

export const createTodoTemplate = (todo: Todo) => {
  return `
    <li>
      <span>
        <input type="checkbox" class="toggle-todo" data-id="${todo.id}" ${todo.completed ? "checked" : ""}/>
        <span class="todo-title ${todo.completed ? "text-decoration-line-through" : ""}">
          ${todo.title}
        </span>
        
      </span>
    </li>`;
};
