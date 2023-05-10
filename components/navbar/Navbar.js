import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from "react-pro-sidebar";

import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'
import { item } from '../../public/json/nav'
import Image from 'next/image'
import { useRouter } from "next/router";
import Link from 'next/Link';
import logo from '../../public/img/logo.png'
import {AiOutlineImport} from "react-icons/ai"
import styles from './navbar.module.css'
import { useState } from "react";
function Navbar() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
const [val,setval]=useState(false)


  const router = useRouter();
  const currentPath = router?.pathname;
  
  const navButtons =(items)=>{
    const div =items.map((item, index) => {

    if (item.type === 1)
      return (
        <Link key={index}
          href={item.href}>
          <MenuItem
            icon={item.icon}
            style={{
              color: currentPath === item.href ? 'red' : 'green'
            }}
            key={index}>
            {item.label}
          </MenuItem>
        </Link>
      );

    if (item.type === 2)
      return (
        <SubMenu style={{ color: 'green' }} icon={item.icon} label={item.label}>
          {item.dropdown.map((item2, index) => (

            <Link key={index}
              href={item2.href}>
              <MenuItem
                icon={item.icon}
                style={{
                  color: currentPath === item2.href ? 'red' : 'green'
                }}
                key={index}>
                {item2.label}
              </MenuItem>
            </Link>
          ))}
        </SubMenu>
      );

  
  })
 return div
}

  return (
    <>
  
    <div style={{height:'100%' }} >
      <Sidebar
       style={{height:'100vh'}} 
       defaultCollapsed={true}
        transitionDuration={1000}>
        <Menu style={{ height:'100%' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
           
          }}>
            {collapsed === false && <Image
              src={logo}
              width='65'
              height='50' />}
            {collapsed ? <GiHamburgerMenu
              style={{
                marginTop: '15px',
                fontSize: "20px",
                cursor: 'pointer'
              }}
              onClick={() => {
                collapseSidebar();
              } } /> :
              <RxCross1 style={{
                marginTop: '15px',
                fontSize: "20px",
                cursor: 'pointer'
              }}
                onClick={() => {
                  collapseSidebar();
                } }></RxCross1>}


          </div>

          <div >
            <div>
              {navButtons(item)}
            </div>

            <MenuItem style={{
              marginTop:'50vh',
            }}
            icon={RxCross1}
            >
              Logout
            </MenuItem>

          </div>
        </Menu>
      </Sidebar>
    </div>
   <div onClick={collapseSidebar}  className={ collapsed ?  '':styles.modalBackdrop }></div> 
    </>
   
  );
}

export default Navbar;
