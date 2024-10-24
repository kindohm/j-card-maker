import { AppContextType, initialContext } from "../AppContext";

const KEY = "j-card-maker";

export const read = (): AppContextType => {
  const item = localStorage.getItem(KEY);
  return item ? JSON.parse(item) : initialContext;
};

export const write = (patch: Partial<AppContextType>) => {
  const current = read();
  const target = JSON.stringify({ ...current, ...patch });
  localStorage.setItem(KEY, target);
};
