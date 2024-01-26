import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { Icon } from "@iconify/react";
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
function ManageBets(){
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
      <h1 className="fs-6 fw-bold">Manage Bets</h1>
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
    <div className="col-lg-4">
      <div className="card border-none py-2 px-3 shadow-sm gradient-one w-100 text-white my-3">
      <div className="d-flex flex-row align-items-center justify-content-between mt-2">
          <p className="my-0 fs-12">Number of Bets Placed</p>
          <p className="my-0">
          <Icon icon="heroicons:users-20-solid" className="fs-4" />
          </p>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between mt-5">
          <h1 className="fs-2 fw-bolder my-0">250K</h1>
          <p className="my-0">+5%</p>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="card border-none py-2 px-3 shadow-sm gradient-three w-100 text-white my-3">
      <div className="d-flex flex-row align-items-center justify-content-between mt-2">
          <p className="my-0 fs-12">Number of Wins</p>
          <p className="my-0">
          <Icon icon="heroicons:users-20-solid" className="fs-4" />
          </p>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between mt-5">
          <h1 className="fs-2 fw-bolder my-0">250K</h1>
          <p className="my-0">+5%</p>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="card border-none py-2 px-3 shadow-sm gradient-four w-100 text-white my-3">
      <div className="d-flex flex-row align-items-center justify-content-between mt-2">
          <p className="my-0 fs-12">Number of Losses</p>
          <p className="my-0">
          <Icon icon="heroicons:users-20-solid" className="fs-4" />
          </p>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between mt-5">
          <h1 className="fs-2 fw-bolder my-0">250K</h1>
          <p className="my-0">+5%</p>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="card border-none shadow-sm py-2 px-3 my-2">
        <h1 className="text-center fs-6 fw-bold my-2">Win/Loss stats</h1>
         <Doughnut 
            data={{
              labels: [ 'Losses', 'Wins'],
                 datasets: [{
                 label: 'number of win/losses',
                 data: [500000000, 60000000],
                 backgroundColor: [
                  'rgb(255, 205, 86)',
                  'rgb(54, 162, 235)',
                  ],
                 hoverOffset: 4
                  }]
            }}
         />
      </div>
    </div>
    <div className="col-lg-8">
      <div className="card border-none shadow-sm py-2 px-3 my-2">
        <h1 className="text-center fs-6 fw-bold my-2">Bet Stats</h1>
           <Line 
             data={{
              labels: ['Jan', 'Feb', 'MAR', 'APR', 'MAY', 'JUN'],
              datasets: [{
                label: 'Number of account deposits',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
              }]
            }}
           />
      </div>
    </div>
  </div>
  <div className="w-100 card border-none shadow-sm px-2 py-2">
    <h1 className="fs-6 fw-bold text-center">Top Bets</h1>
    <table className="table">
      <thead className="table-primary">
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
export default ManageBets;