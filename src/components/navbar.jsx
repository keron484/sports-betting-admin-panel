import { Icon } from "@iconify/react";
function Navbar(){
    return(
        <>
        <header className="navbar sticky-top  flex-md-nowrap py-2">
  <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 fw-bolder  theme-color" href="#">STRATOBET ADMIN</a>
  <div className="d-flex flex-row align-items-center col-lg-10 justify-content-between px-2">
    <div className="input w-50 d-flex align-items-center">
      <Icon icon="ic:baseline-search" className="search-icon mt-2 mx-1 color-grey fs-5" />
      <input type="text" name="search" id className=" w-100 search-input pb-0" placeholder="search here" />
    </div>
    <div className="d-flex flex-row">
      <div className=" d-flex flex-row align-items-center justify-content-center mx-3">
        <div className="top-badge">
          <img src="image/image-one.jpg" alt className="profile-pic-sm" />
        </div>
        <div>
          <p className="fs-12 fw-bold my-0 mx-2">Username</p>
        </div>
      </div>
      <div className=" d-flex flex-row align-items-center justify-content-center mx-4">
       <Icon icon="octicon:bell-16" className="fs-5 icon-color"  />
        <span className="noti-pill" />
      </div>
      <div className=" d-flex flex-row align-items-center justify-content-center mx-4">
       <Icon icon="wpf:message-outline" className="fs-4 icon-color" />
        <span className="noti-pill" />
      </div>
    </div>
  </div>
</header>
        </>
    )
}
export default Navbar;