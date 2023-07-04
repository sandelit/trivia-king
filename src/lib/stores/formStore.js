import { writable } from "svelte/store";

export const parameters = writable({
  difficulty: "",
  type: "",
  selectedCategory: '',
  numberOfQuestions: 0,
});
