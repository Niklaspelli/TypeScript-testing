import type { Todo } from "./types/Todo";
import * as api from "./api/todoApi";
import { createTodoTemplate } from "./components/todoRender";

// State
let todos: Todo[] = [];

// DOM-element
const todosEl = document.querySelector<HTMLUListElement>("#todos")!;
const formEl = document.querySelector<HTMLFormElement>("#new-todo-form")!;
const inputEl = document.querySelector<HTMLInputElement>("#new-todo-title")!;

const render = () => {
  todosEl.innerHTML = todos.map(createTodoTemplate).join("");
  addEventListeners();
};

const addEventListeners = () => {
  document
    .querySelectorAll<HTMLInputElement>(".toggle-todo")
    .forEach((checkbox) => {
      checkbox.addEventListener("change", async () => {
        const id = Number(checkbox.dataset.id);
        try {
          await api.updateTodoStatus(id, checkbox.checked);
          const todo = todos.find((t) => t.id === id);
          if (todo) todo.completed = checkbox.checked;
          render();
        } catch (err) {
          console.error("Fel vid uppdatering:", err);
        }
      });
    });
};

formEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = inputEl.value.trim();
  if (title.length < 3) return alert("För kort!");

  try {
    const newTodo = await api.createTodo(title);
    todos.push(newTodo);
    render();
    inputEl.value = "";
  } catch (err) {
    console.error("Fel vid skapande:", err);
  }
});

// Init
const init = async () => {
  todos = await api.getTodos();
  render();
};

init();

/* import axios from "axios";

const todosEl = document.querySelector<HTMLUListElement>("#todos")!;
const newTodoFormEl =
  document.querySelector<HTMLFormElement>("#new-todo-form")!;
const newTodoTitleEl =
  document.querySelector<HTMLInputElement>("#new-todo-title")!;

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

let todos: Todo[] = [];
const API_URL = "http://localhost:3000/todos";

const fetchTodos = async () => {
  try {
    const response = await axios.get<Todo[]>(API_URL);

    todos = response.data;
    renderTodos();
  } catch (error) {
    console.error("kunde inte hämta todos:", error);
  }
};

newTodoFormEl.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newTodoTitle = newTodoTitleEl.value.trim();

  if (newTodoTitle.length < 3) {
    alert("Titlen måste vara minst 3 tecken lång!");
    return;
  }
  try {
    const response = await axios.post<Todo>(API_URL, {
      title: newTodoTitle,
      completed: false,
    });
    todos.push(response.data);
    renderTodos();
    newTodoTitleEl.value = "";
  } catch (error) {
    console.error("kunde inte skapa todo:", error);
  }
});

const renderTodos = () => {
  todosEl.innerHTML = todos
    .map((todo) => {
      return `
    <li>
    <span>
    <input type="checkbox" class="toggle-todo" data-id="${todo.id}" ${todo.completed ? "checked" : ""}/>
<span class="todo-title ${todo.completed ? "text-decoration-line-through" : ""}">${todo.title}</span>   </span>
    </li>`;
    })
    .join("");
  addEventListeners();
};

const addEventListeners = () => {
  const checkboxes =
    document.querySelectorAll<HTMLInputElement>(".toggle-todo");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", async () => {
      const id = checkbox.dataset.id;
      const isCompleted = checkbox.checked;

      try {
        await axios.patch(`${API_URL}/${id}`, { completed: isCompleted });
        const todo = todos.find((t) => t.id.toString() === id);
        if (todo) {
          todo.completed = isCompleted;
        }
        renderTodos();
      } catch (error) {
        console.error("kunde inte uppdatera todo:", error);
        checkbox.checked = !isCompleted;
      }
    });
  });
};

fetchTodos(); */

/* interface UserData {
  name: string;
  isSubscribed: boolean;
  theme: string;
}

const form = document.getElementById("user-form") as HTMLFormElement;
const dataList = document.getElementById("data-list") as HTMLUListElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  const nameInput = document.getElementById("username") as HTMLInputElement;
  const subscribeCheckbox = document.getElementById(
    "subscribe",
  ) as HTMLInputElement;
  const selectedTheme = document.querySelector(
    'input[name="theme"]:checked',
  ) as HTMLInputElement;

  const formData: UserData = {
    name: nameInput.value,
    isSubscribed: subscribeCheckbox.checked,
    theme: selectedTheme.value,
  };
  console.log("formdata sparad:", formData);

  displayData(formData);
  form.reset();
});

function displayData(data: UserData): void {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
    <strong>Namn:</strong> ${data.name} |
    <strong>Prenumeration:</strong> ${data.theme} |
    <strong>Nyhetsbrev:</strong> ${data.isSubscribed ? "ja" : "nej"}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Ta bort";
  deleteBtn.style.marginLeft = "10px";

  deleteBtn.addEventListener("click", () => {
    listItem.remove();
    console.log(`Tog bort data för ${data.name}`);
  });

  dataList.appendChild(listItem);
  listItem.appendChild(deleteBtn);
}

const clearBtn = document.getElementById("clear-btn") as HTMLButtonElement;
clearBtn.addEventListener("click", () => {
  const confirmDelete = confirm("Vill du radera hela listan?");

  if (confirmDelete) {
    dataList.innerHTML = "";
    console.log("Listan är tom");
  }
});
 */
