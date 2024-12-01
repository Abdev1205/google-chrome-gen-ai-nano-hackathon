import Nav from "@/components/custom/navbar/Nav";
import React from "react";

interface ExtensionLayoutProps {
  children: React.ReactNode;
}

const ExtensionLayout: React.FC<ExtensionLayoutProps> = ({ children }) => {
  return (
    <div className=" bg-gray-900 text-white  w-[30rem] p-4 ">
      <Nav />
      {children}
    </div>
  );
};

export default ExtensionLayout;
