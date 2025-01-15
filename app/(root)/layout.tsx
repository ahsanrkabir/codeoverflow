import { ReactNode } from "react";

import Navbar from "@/components/navigation/navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      {children}
    </main>
  );
};

export default RootLayout;
