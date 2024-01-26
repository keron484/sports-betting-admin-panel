import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { Icon } from "@iconify/react";
function UserDetails(){
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
      <h1 className="fs-6 fw-bold">User Details</h1>
    </div>
    <div className="d-flex">
      <button className="btn btn-success fs-12">
        Go Back
      </button>
    </div>
  </div>
  <div className="col-12 mt-3">
    <div className="row d-flex align-items-center">
      <div className="col-lg-4">
        <div className="card w-100 border-none bg-white px-3 py-2 shadow-sm">
          <h2 className="fs-6 fw-bold">User Profile</h2>
          <div className="col-12">
            <div className="row">
              <div className="col-lg-6">
                <div className="img-area">
                  <img src="../images/image-one.jpg" alt className="profile-image" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-block">
                  <p className="my-0 fs-12 fw-bold text-end">Username</p>
                  <p className="my-0 fs-12 text-end">Chongong</p>
                </div>
                <div className="d-block">
                  <p className="my-0 fs-12 fw-bold text-end">Date of creation</p>
                  <p className="my-0 fs-12 text-end">12/09/2025 18:45 PM</p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="fs-14 fw-3 mt-2 ml-2">User Details</h1>
          <div className="d-flex flex-row justify-content-between align-items-center border-bottom py-2">
            <p className="fs-12 my-0">Full Names</p>
            <p className="fs-12 my-0">Chongong Precious Gemuh</p>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center border-bottom py-2">
            <p className="fs-12 my-0">Email</p>
            <p className="fs-12 my-0">@gmail.com</p>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center border-bottom py-2">
            <p className="fs-12 my-0">Age</p>
            <p className="fs-12 my-0">Null</p>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center py-2 border-bottom">
            <p className="fs-12 my-0">Origin</p>
            <p className="fs-12 my-0">Cameroon</p>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center py-2">
            <p className="fs-12 my-0">Tel</p>
            <p className="fs-12 my-0">+237 *** *** ***</p>
          </div>
          <div className="btn-area mt-3 d-flex flex-row align-items-center justify-content-center">
            <button className="w-50 fs-12 rounded-2 btn btn-primary">
              Flag
            </button>
            <button className="w-50 fs-12 rounded-2 btn btn-danger mx-1">
              Deactivate
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="row flex-row align-items-center justify-content-center">
          <div className="col-lg-5 card border-none bg-white rounded-2 px-3 py-2 mx-2 gradient-one text-white">
            <div className="d-flex flex-row align-items-center justify-content-between mt-2">
              <p className="my-0 fs-12">Bonus Account Balance</p>
              <p className="my-0"><Icon icon="game-icons:two-coins" className="fs-4" /></p>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between mt-5">
              <h1 className="fs-2 fw-bolder my-0">1000$</h1>
              <p className="my-0">+2%</p>
            </div>
          </div>
          <div className="col-lg-6 card border-none bg-white rounded-2 px-3 py-2 mx-2 gradient-two text-white">
            <div className="d-flex flex-row align-items-center justify-content-between mt-2">
              <p className="my-0 fs-12">Current Account Balance</p>
              <p className="my-0">
                <Icon icon="game-icons:wallet" className="fs-4" />
              </p>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between mt-5">
              <h1 className="fs-2 fw-bolder my-0">1000$</h1>
              <p className="my-0">+5%</p>
            </div>
          </div>
        </div>
        <div className="row flex-row align-items-center justify-content-center mt-2">
          <div className="col-lg-5 card border-none bg-white rounded-2 px-3 py-2 mx-2 gradient-three text-white">
            <div className="d-flex flex-row align-items-center justify-content-between mt-2">
              <p className="my-0 fs-12">Number of Losses</p>
              <p className="my-0">
                <Icon icon="eos-icons:counting" className="fs-4" />
              </p>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between mt-5">
              <h1 className="fs-2 fw-bolder my-0">100</h1>
              <p className="my-0">+2%</p>
            </div>
          </div>
          <div className="col-lg-6 card border-none bg-white rounded-2 px-3 py-2 mx-2 gradient-three text-white">
            <div className="d-flex flex-row align-items-center justify-content-between mt-2">
              <p className="my-0 fs-12">Numbet of Wins</p>
              <p className="my-0 fs-12">
                <Icon icon="eos-icons:counting" className="fs-4" />
              </p>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between mt-5">
              <h1 className="fs-2 fw-bolder my-0">50</h1>
              <p className="my-0">+5%</p>
            </div>
          </div>
        </div>
        <div className="row flex-row align-items-center justify-content-center mt-2">
          <div className="col-lg-5 card border-none bg-white rounded-2 px-3 py-2 mx-2 gradient-four text-white">
            <div className="d-flex flex-row align-items-center justify-content-between mt-2">
              <p className="my-0 fs-12">Number of Active Promo Codes</p>
              <p className="my-0">
                <Icon icon="icon-park-solid:ticket" className="fs-4" />
              </p>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between mt-5">
              <h1 className="fs-2 fw-bolder my-0">100</h1>
              <p className="my-0">+2%</p>
            </div>
          </div>
          <div className="col-lg-6 card border-none bg-white rounded-2 px-3 py-2 mx-2 gradient-four text-white">
            <div className="d-flex flex-row align-items-center justify-content-between mt-2">
              <p className="my-0 fs-12">Numbet of expired Promo Codes</p>
              <p className="my-0">
                <Icon icon="icon-park-solid:ticket" className="fs-4" />
              </p>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between mt-5">
              <h1 className="fs-2 fw-bolder my-0">50</h1>
              <p className="my-0">+5%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-12 mt-3">
    <div className="row d-flex align-items-center">
      <div className="col-lg-4">
        <div className="card w-100 border-none  py-2 px-2">
          <h1 className="text-center fs-6 fw-bold">Betting Trends</h1>
          <div className="pie-chart">
            <canvas id="myChart" />
          </div>
          <div className="d-flex flex-row justify-content-between mt-3">
            <p className="fs-12 fw-4">Number of Accumulator Bets : <span className="fw-bolder">100</span></p>
            <p className="fs-12 fw-bolder">+5%</p>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <p className="fs-12 fw-4">Number of Single Bets : <span className="fw-bolder">100</span></p>
            <p className="fs-12 fw-4 fw-bolder">+5%</p>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="card border-none w-100 border-none py-4 px-2">
          <h1 className="fs-6 fw-bold text-center my-2">Monthly Account Deposites</h1>
          <canvas id="barChart" />
        </div>
      </div>
    </div>
  </div>
  <div className="col-12 mt-3">
    <div className="row">
      <div className="col-lg-12">
        <div className="card w-100 border-none py-4 px-2">
          <h1 className="fs-5 fw-bold text-center">Favourite Betting Games</h1>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <div className="w-50 piechart-two">
              <canvas id="pieChartone" />
            </div>
            <div className="w-50 piechart-two">
              <canvas id="pieCharttwo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

         </div>
         </div>
        </>
    )
}
export default UserDetails;
