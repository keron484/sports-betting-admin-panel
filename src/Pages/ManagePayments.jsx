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
function ManagePayments(){
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
       <span className="icon-badge"> <Icon icon="ion:wallet"  className="mt-1"/> </span>
       <h1 className="fs-6 fw-bold">Manage Payments</h1>
    </div>
    <div className="d-flex mb-1">
      <button className="btn btn-warning mx-2 fs-12">
        Filter By
      </button>
    </div>
   </div>
    <div className="row align-items-center d-flex justify-content-center">
      <div className="col-lg-5 w-50">
        <div className="card border-none w-100 gradient-one px-3 py-3 text-white shadow-sm rounded-3 my-1 ">
        <div className="d-flex flex-row align-items-center justify-content-between mt-2">
          <p className="my-0 fs-12">MTN MOBILE MONEY</p>
          <p className="my-0">
          <Icon icon="ion:wallet" className="fs-4" />
          </p>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between mt-5">
          <h1 className="fs-2 fw-bolder my-0">250K</h1>
          <p className="my-0">+5%</p>
        </div>
        </div>
      </div>
      <div className="col-lg-5 w-50">
        <div className="card border-none w-100 gradient-three px-3 py-3 text-white shadow-sm rounded-3 my-1 ">
        <div className="d-flex flex-row align-items-center justify-content-between mt-2">
          <p className="my-0 fs-12">ORANGE MOBILE MONEY</p>
          <p className="my-0">
          <Icon icon="ion:wallet" className="fs-4" />
          </p>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between mt-5">
          <h1 className="fs-2 fw-bolder my-0">250K</h1>
          <p className="my-0">+5%</p>
        </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card w-100 rounded-3 shadow-sm w-100 p-3 my-1 border-none shadow-sm">
          <h1 className="fs-6 fw-bold text-center">Prefered Payment Method</h1>
        <Doughnut 
              data={{
                labels: [ 'MTN', 'ORANGE'],
                 datasets: [
                  {
                 label: 'PREFERED DEPOSITE METHOD',
                 data: [5000, 200],
                 backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)'
                  ],
                 hoverOffset: 4
                  }
                ]
              }}
            />
        </div>
      </div>
      <div className="col-lg-8">
       <div className="card w-100 rounded-3 shadow-sm w-100 p-3 border-none my-1">
        <h1 className="fs-6 fw-bold text-center">Performance Stats of Payment Methods</h1>
        <Line  
            data={{
              labels: ['Jan', 'Feb', 'MAR', 'APR', 'MAY', 'JUN'],
              datasets: [{
                label: 'ORANGE DEPOSIT',
                data: [65957689, 59237468237, 8023979328, 810000000, 569999999, 55000000, 4000000],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
              },
              {
                label: 'MTN DEPOSIT',
                data: [65999999, 590000, 80000000000, 8100000, 5600000, 5500000, 400090099],
                fill: false,
                borderColor: 'rgb(255, 205, 86)',
                tension: 0.1
              }
            ]
            }}
           />
        </div>
      </div>
      <div className="col-lg-12 my-2">
         <div className="card border-none shadow-sm my-2 px-2 py-3">
           <h1 className="text-center my-2 fs-6 fw-bold">Active/Inactive Payment Methods List</h1>
           <table class="table">
  <thead className="table-primary text-white">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Payment Method</th>
      <th scope="col">Account Number</th>
      <th scope="col">Country</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>MTN MOBILE MONEY</td>
      <td>679681896</td>
      <td>Cameroon</td>
      <td>
      <span class="badge text-bg-success">Active</span>
      </td>
      <td>
        <button className="btn btn-primary w-100 fs-12">Update</button>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>MTN MOBILE MONEY</td>
      <td>4567890876</td>
      <td>Nigeria</td>
      <td>
      <span class="badge text-bg-danger">Inactive</span>
      </td>
      <td>
      <button className="btn btn-primary w-100 fs-12">Update</button>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>ORANGE MOBILE MONEY</td>
      <td>4567890876</td>
      <td>Nigeria</td>
      <td>
      <span class="badge text-bg-warning">On hold</span>
      </td>
      <td>
      <button className="btn btn-primary w-100 fs-12">Update</button>
      </td>
    </tr>
  </tbody>
</table>                                              
         </div>
      </div>
    </div>
    </main>
  </div>
</div>
   </>
    )
}
export default ManagePayments;