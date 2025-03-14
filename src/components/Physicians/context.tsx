"use client";
import React, { createContext, useMemo, useState } from "react";
import useContextWrapper from "../Core/ContextWrapper";
import { PhysicianStateType } from "./types";
import { Default_PhysicianState } from "./defentions";

interface IPageContext {
  pageState: PhysicianStateType;
  setPageState: React.Dispatch<React.SetStateAction<IPageContext["pageState"]>>;
}

export const PageContext = createContext<IPageContext | null>(null);

export const usePhysiciansPageContext = () =>
  useContextWrapper(PageContext, {
    contextName: usePhysiciansPageContext.name,
    providerName: PhysiciansPageContextProvider.name,
  });

export function PhysiciansPageContextProvider({
  children,
}: React.PropsWithChildren<object>) {
  const [pageState, setPageState] = useState<IPageContext["pageState"]>(
    Default_PhysicianState
  );

  const value = useMemo(() => ({ pageState, setPageState }), [pageState]);
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}
