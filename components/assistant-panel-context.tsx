"use client";

import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { Cross1Icon } from "@radix-ui/react-icons";

type PanelState = "visible" | "hidden";
type ContextValue = {
  panelState: PanelState;
  setPanelState: Dispatch<SetStateAction<PanelState>>;
} | null;

const AssistantPanelContext = createContext<ContextValue>(null);

export function AssistantButton() {
  const { panelState, setPanelState } = useAssistantPanel();
  return (
    <Button
      size="icon"
      variant={panelState === "hidden" ? "default" : "outline"}
      onClick={() =>
        setPanelState((prev) => (prev === "hidden" ? "visible" : "hidden"))
      }
    >
      {panelState === "hidden" ? (
        <Sparkles className="h-4 w-4" />
      ) : (
        <Cross1Icon />
      )}
    </Button>
  );
}

export function useAssistantPanel() {
  const context = useContext(AssistantPanelContext);

  if (!context) {
    throw new Error(
      "useAssistantPanel must be used within a AssistantPanelProvider"
    );
  }

  return context;
}

export function AssistantPanelProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [panelState, setPanelState] = useState<PanelState>("hidden");

  return (
    <AssistantPanelContext.Provider value={{ panelState, setPanelState }}>
      {children}
    </AssistantPanelContext.Provider>
  );
}
