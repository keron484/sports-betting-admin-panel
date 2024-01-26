import {Icon} from '@iconify/react';
import { NavLink } from 'react-router-dom';
function Sidebar(){
    return(
        <>
<div className="sidebar   col-md-3 col-lg-2 p-0">
  <div className="offcanvas-md offcanvas-end" tabIndex={-1} id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
    </div>
    <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
      <ul className="nav flex-column">
        <div className="d-flex align-items-center justify-content-center px-1 mt-4">
          <div className="d-block">
            <div className="circle d-flex flex-row align-items-center justify-content-center">
              <img src="image/image-one.jpg" alt className="profile-image" />
              <span className="active-badge" />
            </div>
          </div>
          <div className="d-block mx-3">
            <p className="fs-12 my-0 fw-bold">Username</p>
            <p className="fs-12 my-0">Position</p>
          </div>
          <div className="d-block mx-4">
            <p className="fs-12 my-0">
              <Icon icon="subway:mark-3"  className="theme-color-darker"/>
            </p>
          </div>
        </div>
        <NavLink to='/' className={({isActive}) => isActive ? "active-link" : "inactive-link"}>
        <div className="d-flex flex-row justify-content-between px-3 my-3">
          <p className="fw-5 fs-14">Dashboard</p>
          <p>
            <Icon icon="fluent:home-12-filled" className=" fs-14" />
          </p>
        </div>
        </NavLink>
       <NavLink to='/manage-users' className={({isActive}) => isActive ? "active-link" : "inactive-link"}>
       <div className="d-flex flex-row justify-content-between px-3 my-3">  
          <p className="fw-5 fs-14 ">Manage Users</p>
          <p>
            <Icon icon="fa6-solid:users" className=" fs-14"/>
          </p>
        </div>
       </NavLink>
        <NavLink to='/manage-admin' className={({isActive}) => isActive ? "active-link" : "inactive-link"}>
        <div className="d-flex flex-row justify-content-between px-3 my-3">
          <p className="fw-5 fs-14 ">Manage Admins</p>
          <p>
            <Icon icon="ri:admin-fill" className=" fs-14"/>
          </p>
        </div>
        </NavLink>
        <NavLink to='/manage-payments' className={({isActive}) => isActive ? "active-link" : "inactive-link"}>
        <div className="d-flex flex-row justify-content-between px-3 my-3">
          <p className="fs-14">Manage Payments</p>
          <p>
            <Icon icon="game-icons:wallet" className=" fs-14"/>
          </p>
        </div>
        </NavLink>
        <NavLink to='/manage-events' className={({isActive}) => isActive ? "active-link" : "inactive-link"}>
        <div className="d-flex flex-row justify-content-between px-3 my-3">
          <p className="fs-14">Manage Matches</p>
          <p>
            <Icon icon="mdi:football-pitch" className=" fs-14"/>
          </p>
        </div>
        </NavLink>
        <NavLink to='/manage-bets' className={({isActive}) => isActive ? "active-link" : "inactive-link"}>
        <div className="d-flex flex-row justify-content-between px-3 my-3">
          <p className="fs-14">Manage Bets</p>
          <p>
            <Icon icon="streamline:tickets-solid" className=" fs-14"/>
          </p>
        </div>
        </NavLink>
        <NavLink to='/stats' className={({isActive}) => isActive ? "active-link" : "inactive-link"}>
        <div className="d-flex flex-row justify-content-between px-3 my-3">
          <p className="fs-14">General Stats</p>
          <p>
            <Icon icon="ic:baseline-query-stats" className=" fs-14"/>
          </p>
        </div>
        </NavLink>
        <NavLink to='/manage-affilate' className={({isActive}) => isActive ? "active-link" : "inactive-link"}>
        <div className="d-flex flex-row justify-content-between px-3 my-3">
          <p className="fs-14">Manage Affiliates</p>
          <p>
            <Icon icon="solar:settings-bold" className=" fs-14"/>
          </p>
        </div>
        </NavLink>
        <NavLink to='/manage-content' className={({isActive}) => isActive ? "active-link" : "inactive-link"}>
        <div className="d-flex flex-row justify-content-between px-3 my-3">
          <p className="fs-14">Manage Content</p>
          <p>
            <Icon icon="solar:settings-bold" className=" fs-14"/>
          </p>
        </div>
        </NavLink>
        <NavLink to='/account-settings' className={({isActive}) => isActive ? "active-link" : "inactive-link"}>
        <div className="d-flex flex-row justify-content-between px-3 my-3">
          <p className="fs-14">Account Settings</p>
          <p>
            <Icon icon="solar:settings-bold" className=" fs-14"/>
          </p>
        </div>
        </NavLink>
      </ul>
    </div>
  </div>
</div>

        </>
    )
}
export default Sidebar;