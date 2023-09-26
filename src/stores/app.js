import { writable, readable, derived } from "svelte/store";
import { persist, createLocalStorage } from "@macfja/svelte-persistent-store";

export const token = persist(writable(""), createLocalStorage(), "token");

export const lists = persist(writable([]), createLocalStorage(), "lists");
