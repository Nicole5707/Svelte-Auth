// src/stores/auth.js

import { writable } from 'svelte/store';

export const isAuthenticated = writable(false); // Initialize as false, user is not authenticated