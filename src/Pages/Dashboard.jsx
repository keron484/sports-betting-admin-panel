import { Icon } from "@iconify/react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
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
function Dashboard(){
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
    
   {/*body begins here*/}
   <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 pb-xl">
  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3  mb-3 border-bottom">
    <div className="d-flex flex-row align-items-center">
      <span className="icon-badge"> <Icon icon="fluent:home-24-filled" /> </span>
      <h1 className="fs-6 fw-bold">Dashboard</h1>
    </div>
    <div className="d-flex mb-1">
      <button className="btn btn-success fs-12">
        Create Task/ todo list
      </button>
    </div>
  </div>
  <div className="col-12 mt-3">
    <div className="row flex-row  justify-content-center">
      <div className="col-lg-4 card border-none bg-white rounded-2 px-3 py-2 mx-1 gradient-one text-white">
        <div className="d-flex flex-row align-items-center justify-content-between mt-2">
          <p className="my-0 fs-12">Account Balance</p>
          <p className="my-0"><Icon icon="game-icons:wallet" className="fs-4" /></p>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between mt-5">
          <h1 className="fs-2 fw-bolder my-0">100M</h1>
          <p className="my-0">+2%</p>
        </div>
      </div>
      <div className="col-lg-4 card border-none bg-white rounded-2 px-3 py-2 mx-1 gradient-three text-white">
        <div className="d-flex flex-row align-items-center justify-content-between mt-2">
          <p className="my-0 fs-12">Number of Bets placed</p>
          <p className="my-0">
          <Icon icon="dashicons:tickets-alt" className="fs-4"/>
          </p>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between mt-5">
          <h1 className="fs-2 fw-bolder my-0">200M</h1>
          <p className="my-0">+5%</p>
        </div>
      </div>
      <div className="col-lg-3 card border-none bg-white rounded-2 px-3 py-2 mx-1 gradient-four text-white">
        <div className="d-flex flex-row align-items-center justify-content-between mt-2">
          <p className="my-0 fs-12">New Users</p>
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
  </div>
  <div className="col-12 mt-3">
    <div className="row d-flex align-items-center">
      <div className="col-lg-8">
        <div className="card  w-100 border-none shadow-sm py-4 px-2">
          <h1 className="fs-6 fw-bold text-center my-2">Monthly Account Deposites</h1>
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
      <div className="col-lg-4">
        <div className="card w-100 border-none my-3 py-5 px-2">
          <h1 className="text-center fs-6 fw-bold">Favourite Payment Methods</h1>
          <div className="pie-chart d-flex justify-content-center align-items-center">
            <Doughnut 
              data={{
                labels: [ 'MTN', 'ORANGE'],
                 datasets: [{
                 label: 'PREFERED DEPOSITE METHOD',
                 data: [50, 60],
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
    </div>
  </div>
  <div className="col-12 mt-3">
    <div className="row d-flex align-items-center">
      <div className="col-lg-6">
        <div className="card border-none shadow-sm px-2">
          <div className="my-1">
            <h1 className="fs-6 fw-bold text-center my-2">Admins</h1>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Avatar</th>
                <th scope="col">Username</th>
                <th scope="col">Position</th>
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
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card border-none">
          <h1 className="text-center fs-6 fw-bold my-2">Affiliates Stats</h1>
          <Line
            data={{
              labels: ['Jan', 'Feb', 'MAR', 'APR', 'MAY', 'JUN'],
              datasets: [{
              label: 'Number of affilaites',
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
    <div className="col-lg-12 h-50 pb-5 my-3">
      <div className="card border-none shadow-sm px-2">
        <h1 className="fs-6 fw-bold my-2 text-center">Visits Statistics</h1>
         <Bar 
            data={{
              labels:['Jan', 'Feb', 'MAR', 'APR', 'MAY', 'JUN'],
              datasets: [
                {
                  lable:'Page Visits',
                  data: [3000, 3700, 6500, 2500, 6000, 1000],
                  fill:true,
                  backgroundColor:'rgb(255, 99, 132)',
                  hoverOffset: 4
                }
              ]
            }}
         />
      </div>
    </div>
  </div>
    </main>
   {/*body ends here*/}
   </div>
   </div>
        </>
    )
}
export default Dashboard;