import "@testing-library/jest-dom/vitest";

// jsdom doesn't implement scrollIntoView
Element.prototype.scrollIntoView = () => {};

// jsdom doesn't implement scrollTo on elements
Element.prototype.scrollTo = function () {};

// Provide a working localStorage mock for jsdom environments that lack it
const store: Record<string, string> = {};
const localStorageMock = {
  getItem: (key: string) => store[key] ?? null,
  setItem: (key: string, value: string) => { store[key] = value; },
  removeItem: (key: string) => { delete store[key]; },
  clear: () => { Object.keys(store).forEach((k) => delete store[k]); },
  get length() { return Object.keys(store).length; },
  key: (i: number) => Object.keys(store)[i] ?? null,
};

Object.defineProperty(globalThis, "localStorage", { value: localStorageMock, writable: true });

