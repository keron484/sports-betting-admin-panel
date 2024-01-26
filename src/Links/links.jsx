import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccountSettings from '../Pages/AccountSettings';
import Dashboard from '../Pages/Dashboard';
import ManageContent from '../Pages/ManageContent';
import ManageBets from '../Pages/ManageBets';
import ManageAdmin from '../Pages/ManageAdmin';
import AdminDetails from '../Pages/AdminDetails';
import ManagePayments from '../Pages/ManagePayments';
import UserDetails from '../Pages/UserDetails';
import ManageUser from '../Pages/ManageUser';
import ManageAffiliate from '../Pages/ManageAffiliates';
import ManageEvents from '../Pages/ManageEvents';
function Link(){
    return(
        <BrowserRouter>
        <Routes>
             <Route path='/' element={<Dashboard />}></Route>
             <Route path='/manage-affilate' element={<ManageAffiliate />}></Route>
             <Route path='/manage-users' element={<ManageUser />}></Route>
             <Route path='/manage-bets' element={<ManageBets />}></Route>
             <Route path='/user-details' element={<UserDetails />}></Route>
             <Route path='/account-settings' element={<AccountSettings />}></Route>
             <Route path='/manage-content' element={<ManageContent />}></Route>
             <Route path='/manage-payments' element={<ManagePayments />}></Route>
             <Route path='/manage-admin' element={<ManageAdmin />}></Route>
             <Route path='/manage-events' element={<ManageEvents />}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default Link;