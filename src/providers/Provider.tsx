import Cursor from "@/components/ui/Cursor";
import ScrollBar from "@/components/ui/ScrollBar";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <ScrollBar />
      <Cursor />
    </>
  );
};

export default Provider;
