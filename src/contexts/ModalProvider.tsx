import content from "*.png";
import { createContext, ReactNode, useContext, useState } from "react";
import { PortalConsumer } from "./PortalProvider";

interface ModalContextState {
  open: (children: ReactNode) => void;
  close: () => void;
}

export const ModalContext = createContext<ModalContextState | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ReactNode>();
  const value = {
    open: (content: ReactNode) => setContent(content),
    close: () => setContent(null),
  };
  return (
    <ModalContext.Provider value={value}>
      <PortalConsumer>{content}</PortalConsumer>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context == null) {
    throw new Error("모달프로바이더로 감싸주세요");
  }
  return context;
}
