import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import DashboardNavbar from "../Shared/DashboardNavbar/DashboardNavbar";
import DashboardTopBar from "../Shared/DashboardTopBar/DashboardTopBar";
import Loading from "../components/Loading/Loading";

const DashboardLayout = () => {
   const { user, loading } = useAuth();

   const arr = [1, 2, 3, 4, 5, 6, 7, 8];
   const percent = (Object.keys(user.data).length / 20) * 100;
   const number = Math.round(percent / (100 / 8));

   if (loading) {
      return <Loading />;
   }

   return (
      <section className="bg-base-300">
         <div className="grid lg:grid-cols-3 justify-center container mx-auto">
            <div className="relative">
               <div className="drawer lg:drawer-open z-50">
                  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content flex flex-col items-center justify-center">
                     <label
                        htmlFor="my-drawer-2"
                        className="btn bg-green-500 text-white border-0 px-2 drawer-button lg:hidden fixed -left-2 top-80"
                     >
                        {">"}
                     </label>
                  </div>
                  <div className="drawer-side lg:h-auto">
                     <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                     <div className="menu max-w-fit h-full text-base-content">
                        <DashboardNavbar></DashboardNavbar>
                     </div>
                  </div>
               </div>
            </div>
            <div className="md:col-span-2 lg:p-8 p-3">
               <DashboardTopBar></DashboardTopBar>
               <div className="my-8">
                  <div className="mb-4">
                     <h2 className="text-xl">Profile Updated</h2>
                     <div className="flex flex-wrap gap-2 items-center text-xl">
                        {arr.map((element) => (
                           <div
                              key={element}
                              className={`h-4 w-20 ${
                                 element <= number ? "bg-[#B9DE6A]" : "bg-black"
                              } rounded-full`}
                           ></div>
                        ))}
                        <h2 className="text-black">{Math.round(percent)}%</h2>
                     </div>
                  </div>
                  <Outlet></Outlet>
               </div>
            </div>
         </div>
      </section>
   );
};

export default DashboardLayout;
