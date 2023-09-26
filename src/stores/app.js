import { writable, readable, derived } from "svelte/store";
import { persist, createLocalStorage } from "@macfja/svelte-persistent-store";

export const token = persist(
  writable("dl29jfl2kdbdlr"),
  createLocalStorage(),
  "token",
);
