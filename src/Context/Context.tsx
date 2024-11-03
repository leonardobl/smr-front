import { ReactNode, useState } from "react";
import { Loading } from "../Components/Atoms/Loading";
import { Context } from "../Hooks/useContextSite";

type Props = {
  children: ReactNode;
};

export function ContextProvider({ children }: Props) {
  const [isLoad, setIsLoad] = useState(false);

  return (
    <Context.Provider
      value={{
        isLoad,
        setIsLoad,
      }}
    >
      {children}
      {isLoad && <Loading />}
    </Context.Provider>
  );
}
