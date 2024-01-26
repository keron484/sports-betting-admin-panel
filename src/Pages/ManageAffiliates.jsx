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
function ManageAffiliate(){
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
      <h1 className="fs-6 fw-bold">Manage Affiliates</h1>
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
      <div className="card border-none px-3 py-2 gradient-one text-white w-100 my-2">
      <div className="d-flex flex-row align-items-center justify-content-between mt-2">
          <p className="my-0 fs-12">Number of Affliates</p>
          <p className="my-0">
          <Icon icon="dashicons:tickets-alt" className="fs-4"/>
          </p>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between mt-5">
          <h1 className="fs-2 fw-bolder my-0">200M</h1>
          <p className="my-0">+5%</p>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
    <div className="card border-none px-3 py-2 gradient-three text-white w-100 my-2">
    <div className="d-flex flex-row align-items-center justify-content-between mt-2">
          <p className="my-0 fs-12">Amount Generated</p>
          <p className="my-0">
          <Icon icon="dashicons:tickets-alt" className="fs-4"/>
          </p>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between mt-5">
          <h1 className="fs-2 fw-bolder my-0">200M</h1>
          <p className="my-0">+5%</p>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
    <div className="card border-none px-3 py-2 gradient-four text-white w-100 my-2">
    <div className="d-flex flex-row align-items-center justify-content-between mt-2">
          <p className="my-0 fs-12">Amount Paid Out</p>
          <p className="my-0">
          <Icon icon="dashicons:tickets-alt" className="fs-4"/>
          </p>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between mt-5">
          <h1 className="fs-2 fw-bolder my-0">200M</h1>
          <p className="my-0">+5%</p>
        </div>
      </div>
    </div>
    <div className="col-lg-7">
      <div className="card border-none shadow-sm py-3 px-2 my-2">
        <h1 className="text-center fw-bold fs-6">Number Affilate Statistics</h1>
        <Line 
           data={{
            labels: ['Jan', 'Feb', 'MAR', 'APR', 'MAY', 'JUN'],
            datasets: [{
              label: 'Number of account deposits',
              data: [650, 590, 150, 300, 500, 550, 400],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          }}
        />
      </div>
    </div>
    <div className="col-lg-5">
      <div className="card border-none shadow-sm py-3 px-2 my-2">
        <h1 className="text-center fw-bold fs-6">Funds Generated/Funds Paid Out</h1>
        <Doughnut 
              data={{
                labels: [ 'Amount Generated', 'Amount Paid Out'],
                 datasets: [{
                 label: 'total in cfa',
                 data: [50000000, 6000000],
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
  </div>
  <div className="w-100 card px-2 py-2 my-2 border-none shadow-sm">
    <h1 className="text-center fs-6 fw-bold my-2">Top Affliates</h1>
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
export default ManageAffiliate;