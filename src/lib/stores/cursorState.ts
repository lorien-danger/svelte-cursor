import { writable, type Writable } from 'svelte/store';

export const cursorState: Writable<null> | Writable<string> = writable(null);
