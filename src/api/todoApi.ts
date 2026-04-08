import axios from "axios";
import type { Todo } from "../types/Todo";

const API_URL = "http://localhost:3000/todos";

export const getTodos = () =>
  axios.get<Todo[]>(API_URL).then((res) => res.data);

export const createTodo = (title: string) =>
  axios
    .post<Todo>(API_URL, { title, completed: false })
    .then((res) => res.data);

export const updateTodoStatus = (id: number, completed: boolean) =>
  axios.patch(`${API_URL}/${id}`, { completed });
