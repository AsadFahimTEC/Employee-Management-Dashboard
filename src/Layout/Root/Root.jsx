
import {Toaster} from "react-hot-toast";

import { Outlet } from "react-router-dom";
import EmployeeDashboard from "../../EmployeeDashboard/EmployeeDashboard";


const Root = () => {
  return (
    <div>
      
      <EmployeeDashboard></EmployeeDashboard>
      <Toaster />
      <Outlet></Outlet>
     
    </div>
  );
};

export default Root;
