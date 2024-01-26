import Navbar from "../components/navbar";
import { Icon } from "@iconify/react";
import Sidebar from "../components/sidebar";
function AccountSettings(){
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
  <div className="w-100">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Userame</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Account ID</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
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
</main>

    </div>
    </div>
        </>
    )
}
export default AccountSettings;