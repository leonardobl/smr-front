import { createContext, Dispatch, SetStateAction, useContext } from "react";

type ContextSite = {
  isLoad: boolean;
  setIsLoad: Dispatch<SetStateAction<boolean>>;
};
export const Context = createContext({} as ContextSite);

export const useContextSite = () => {
  const contextSite = useContext(Context);
  return contextSite;
};
