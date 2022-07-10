import { createContext, ReactNode, useState } from "react";
import { createPortal } from "react-dom";
export const PortalContext = createContext<HTMLElement | null>(null);

export function PortalProvider({ children }: { children: ReactNode }) {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  return (
    <PortalContext.Provider value={container}>
      {children}
      <div ref={(domEle) => (domEle ? setContainer(domEle) : undefined)}></div>
    </PortalContext.Provider>
  );
}

export function PortalConsumer({ children }: { children: ReactNode }) {
  return (
    <PortalContext.Consumer>
      {(container) => (container ? createPortal(children, container) : null)}
    </PortalContext.Consumer>
  );
}
