import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { Icon } from "@iconify/react";
import { Link, NavLink } from "react-router-dom";
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, 
   LineController, 
   LineElement,
   PointElement, 
   LinearScale, 
   Title,
   DoughnutController,
   ArcElement,
   BarController,
   BarElement,
   Tooltip,
   Legend,
   Decimation,
   CategoryScale
   } from 'chart.js';
ChartJS.register(LineController, LineElement, PointElement, CategoryScale,  Decimation,  LinearScale, Legend, Title, DoughnutController, ArcElement, BarController, BarElement, Tooltip);
function ManageUser(){
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
      <span className="icon-badge"> <Icon icon="heroicons:users-solid" className="mt-1" /> </span>
      <h1 className="fs-6 fw-bold">Manage Users</h1>
    </div>
    <div className="d-flex">
      <button className="btn btn-warning mx-2 fs-12">
        Filter By
      </button>
      <button className="btn btn-success fs-12">
        Go Back
      </button>
    </div>
  </div>
  <div className="row d-flex align-items-center">
    <div className="col-lg-6 my-3">
      <div className="card border-none w-100 gradient-three px-3 py-3 text-white ">
      <div className="d-flex flex-row align-items-center justify-content-between mt-2">
          <p className="my-0 fs-12">Total Number of Users</p>
          <p className="my-0">
          <Icon icon="heroicons:users-solid"  className="fs-4"/>
          </p>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between mt-5">
          <h1 className="fs-2 fw-bolder my-0">100M</h1>
          <p className="my-0">+2%</p>
        </div>
      </div>
    </div>
    <div className="col-lg-6 my-3">
      <div className="card border-none w-100 gradient-one px-3 py-3 text-white">
      <div className="d-flex flex-row align-items-center justify-content-between mt-2">
          <p className="my-0 fs-12">Total Number of New Users</p>
          <p className="my-0">
          <Icon icon="heroicons:users-solid"  className="fs-4"/>
          </p>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between mt-5">
          <h1 className="fs-2 fw-bolder my-0">100M</h1>
          <p className="my-0">+2%</p>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="card border-none shadow-none w-100 my-2 py-3">
      <Doughnut 
              data={{
                labels: [ 'Cameroon', 'Nigeria', 'Kenya'],
                 datasets: [{
                 label: 'Number of users',
                 data: [50, 60, 90],
                 backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)'
                  ],
                 hoverOffset: 4
                  }]
              }}
            />
      </div>
    </div>
    <div className="col-lg-8">
      <div className="card border-none shadow-none w-100 my-2 px-2 py-3">
         <h1 className="text-center fw-bold fs-6 my-1">User Growth stats</h1>
         <Line  
            data={{
              labels: ['Jan', 'Feb', 'MAR', 'APR', 'MAY', 'JUN'],
              datasets: [{
                label: 'Nigeria',
                data: [65, 57, 80, 81, 59, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
              },
              {
                label: 'Cameroon',
                data: [69, 59, 80, 81, 56, 55, 46],
                fill: false,
                borderColor: 'rgb(255, 205, 86)',
                tension: 0.1
              },
              {
                label: 'Somalia',
                data: [69, 59, 80, 81, 100, 558, 46],
                fill: false,
                borderColor: 'rgb(255, 205, 86)',
                tension: 0.1
              }
            ]
            }}
           />
      </div>
    </div>
  </div>
  <div className="w-100 card border-none shadow-sm px-3 py-3">
    <h1 className="text-center fs-6 fw-bold">List of Users </h1>
    <table className="table">
      <thead className="table-primary">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Userame</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Country</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>@example.com</td>
          <td>+54930847</td>
          <td>Cameroon</td>
          <td>
          <span class="badge text-bg-success">Active</span>
          </td>
          <td>
          <button className="fs-12 btn btn-primary w-75 rounded-3">
            Take Action
          </button>
          </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>@example.com</td>
          <td>+54930847</td>
          <td>Cameroon</td>
          <td>
          <span class="badge text-bg-success">Active</span>
          </td>
          <td>
          <button className="fs-12 btn btn-primary w-75 rounded-3">
            Take Action
          </button>
          </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>@example.com</td>
          <td>+54930847</td>
          <td>Cameroon</td>
          <td>
          <span class="badge text-bg-danger">Inactive</span>
          </td>
          <td>
          <button className="fs-12 btn btn-primary w-75 rounded-3">
            Take Action
          </button>
          </td>
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
export default ManageUser;
