
import Navbar from "./navbar/Navbar";
import { ProSidebarProvider } from "react-pro-sidebar";
export const ContentLayout = ({ children }) => {
    return (
      
      <div style={{height:'100vh', display:'flex',padding:"0",margin:'0'}}>
        <ProSidebarProvider>
        <Navbar />
          { children }
          </ProSidebarProvider>
      </div>
    );
}
