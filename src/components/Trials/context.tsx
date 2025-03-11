"use client";
import React, { createContext, useMemo, useState } from "react";
import useContextWrapper from "../Core/ContextWrapper";
import { TrialStateType } from "./types";
import { Default_TrialState } from "./defentions";

interface IPageContext {
  pageState: TrialStateType;
  setPageState: React.Dispatch<React.SetStateAction<IPageContext["pageState"]>>;
}

export const PageContext = createContext<IPageContext | null>(null);

export const useTrialsPageContext = () =>
  useContextWrapper(PageContext, {
    contextName: useTrialsPageContext.name,
    providerName: TrialsPageContextProvider.name,
  });

export function TrialsPageContextProvider({
  children,
}: React.PropsWithChildren<object>) {
  const [pageState, setPageState] =
    useState<IPageContext["pageState"]>(Default_TrialState);

  const value = useMemo(() => ({ pageState, setPageState }), [pageState]);
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}
