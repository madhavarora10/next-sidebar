import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from "react-pro-sidebar";
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'
import { item } from '../../public/json/nav'
import { ActiveLink } from "../ActiveLinks/ActiveLink";

function Navbar() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();

  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar defaultCollapsed={true} transitionDuration={500} style={{ height: "100vh" }}>
        <Menu >
          <div style={{
            display: 'flex',
            justifyContent: 'right',
            padding: '20px'
          }}>
            {collapsed ? <GiHamburgerMenu
              style={{
                fontSize: "20px",
                cursor: 'pointer'
              }}
              onClick={() => {
                collapseSidebar();
              }}

            /> :
              <RxCross1 style={{
                fontSize: "20px",
                cursor: 'pointer'
              }}
                onClick={() => {
                  collapseSidebar();
                }}></RxCross1>
            }
          </div>

          <h2>Admin</h2>

          {item.map((item, index) => {

            if (item.type === 2)
              return (
                <SubMenu style={{color:'green'}} icon={item.icon} label={item.label}>
                  {item.dropdown.map((item2, index) => (
                    <ActiveLink href={item2.href}>
                      <MenuItem key={index} >

                        {item2.label}
                      </MenuItem>
                    </ActiveLink>

                  ))}
                </SubMenu>
              )


            if (item.type === 1)
              return (
                <ActiveLink href={item.href}>
                  <MenuItem icon={item.icon} key={index}>{item.label}</MenuItem>
                </ActiveLink>
              )

            return 0;
          })}

        </Menu>
      </Sidebar>
    </div>
  );
}

export default Navbar;
