
import Navbar from "./navbar/Navbar";
import { ProSidebarProvider } from "react-pro-sidebar";
export const ContentLayout = ({ children }) => {
    return (
      
      <div className="flex">
        <ProSidebarProvider>
        <Navbar />
          { children }
          </ProSidebarProvider>
      </div>
    );
}
