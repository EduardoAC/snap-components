import { createContext, useMemo, useState } from "react";
import { StyledLayout } from "./Layout.style";

interface LayoutContextProps {
  addSider?: (id: string) => void;
  removeSider?: (id: string) => void;
}
const LayoutContext = createContext<LayoutContextProps>({});

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  hasSider?: boolean;
  direction?: "ltr" | "rtl";
}

export function Layout({
  children,
  hasSider,
  direction,
  ...rest
}: LayoutProps) {
  const [siders, setSiders] = useState<string[]>([]);
  const contextValue = useMemo(
    () => ({
      addSider: (id: string) => setSiders((prev) => [...prev, id]),
      removeSider: (id: string) =>
        setSiders((prev) => prev.filter((sid) => sid !== id)),
    }),
    []
  );

  return (
    <LayoutContext.Provider value={contextValue}>
      <StyledLayout
        hasSider={hasSider || siders.length > 0}
        direction={direction}
        {...rest}
      >
        {children}
      </StyledLayout>
    </LayoutContext.Provider>
  );
}
