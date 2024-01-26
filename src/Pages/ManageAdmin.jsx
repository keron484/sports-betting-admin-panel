import { Icon } from "@iconify/react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
function ManageAdmin(){
    return(
        <>
             {/*rendering the imported Navbar*/}
     <Navbar />
    {/*rendering the imported Navbar component from components */}
    <div className="container-fluid bg-lighter">
  <div className="row">
    {/*rendering the imported side bar*/}
    <Sidebar />
    {/*rendering the imported side bar component from components */}

    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 pb-xl">
  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3  mb-3 border-bottom">
    <div className="d-flex flex-row align-items-center">
      <span className="icon-badge"> <Icon icon="heroicons:users-solid" className="mt-1 fs-14" /> </span>
      <h1 className="fs-6 fw-bold">Manage Admin</h1>
    </div>
    <div className="d-flex mb-1">
      <button className="btn btn-warning mx-2 fs-12">
        Filter By
      </button>
      <button className="btn btn-success fs-12">
        Go Back
      </button>
    </div>
  </div>
  <div className="row d-flex align-items-center">
    <div className="col-lg-6 w-50 my-2">
      <div className="card border-none shadow-sm gradient-one mx-1 w-100 py-2 px-3 text-white">
      <div className="d-flex flex-row align-items-center justify-content-between mt-2">
          <p className="my-0 fs-12">Number Of Workers</p>
          <p className="my-0">
          <Icon icon="gis:map-users" className="fs-4"/>
          </p>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between mt-5">
          <h1 className="fs-2 fw-bolder my-0">250</h1>
          <p className="my-0">+5%</p>
        </div>
      </div>
    </div>
    <div className="col-lg-6 w-50 my-2">
      <div className="card border-none shadow-sm gradient-four mx-1 w-100 py-2 px-3 text-white">
      <div className="d-flex flex-row align-items-center justify-content-between mt-2">
          <p className="my-0 fs-12">Number Of Admins</p>
          <p className="my-0">
          <Icon icon="fa-solid:users-cog" className="fs-4" />
          </p>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between mt-5">
          <h1 className="fs-2 fw-bolder my-0">250</h1>
          <p className="my-0">+5%</p>
        </div>
      </div>
    </div>
  <div className=" card border-none shadow-sm rounded-3 w-100 my-2 px-2">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Account ID</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Position</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Chongong@example.com</td>
          <td>
            +233 78890
          </td>
          <td>
            Customer Service
          </td>
          <td>
          <span class="badge text-bg-success">Active</span>
          </td>
          <td>
            <button className="btn btn-sm fs-12 btn-primary">Take Action</button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</main>

    </div>
    </div>
        </>
    )
}
export default ManageAdmin