import { Navbar } from "@/app/(root)/_components/navbar";
import React from "react";

const LandingLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-40">
        {children}
      </main>
    </div>
  );
}
 
export default LandingLayout;