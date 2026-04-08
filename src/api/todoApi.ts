import axios from "axios";
import type { Todo } from "../types/Todo";

const API_URL = "http://localhost:3000/todos";
//GET
export const getTodos = () =>
  axios.get<Todo[]>(API_URL).then((res) => res.data);
//POST
export const createTodo = (title: string) =>
  axios
    .post<Todo>(API_URL, { title, completed: false })
    .then((res) => res.data);
//PATCH/UPDATE
export const updateTodoStatus = (id: string | number, completed: boolean) =>
  axios.patch(`${API_URL}/${id}`, { completed });

export const deleteTodo = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
