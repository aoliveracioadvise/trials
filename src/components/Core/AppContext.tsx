"use client";
import React, { createContext, useMemo, useState } from "react";
import { AppStateType } from "./types";
import useContextWrapper from "./ContextWrapper";
import { Default_AppState } from "./defenitions";

interface IPageContext {
  pageState: AppStateType;
  setPageState: React.Dispatch<React.SetStateAction<IPageContext["pageState"]>>;
}

export const PageContext = createContext<IPageContext | null>(null);

export const useAppContext = () =>
  useContextWrapper(PageContext, {
    contextName: useAppContext.name,
    providerName: AppContextProvider.name,
  });

export function AppContextProvider({
  children,
}: React.PropsWithChildren<object>) {
  const [pageState, setPageState] =
    useState<IPageContext["pageState"]>(Default_AppState);

  const value = useMemo(() => ({ pageState, setPageState }), [pageState]);
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}
