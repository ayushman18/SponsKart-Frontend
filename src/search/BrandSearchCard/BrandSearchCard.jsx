import { Link } from "react-router-dom";
import gmailImg from "./../../assets/search/gmail.png";
import { Rating } from "@smastrom/react-rating";

const BrandSearchCard = ({ data }) => {
   return (
      <div className="card max-w-[420px] hover:shadow-2xl bg-base-100 rounded-2xl shadow-md">
         <figure>
            <img
               src="https://s3-alpha-sig.figma.com/img/5019/134f/fc5d161b743d666bba24e209447e186b?Expires=1693180800&Signature=eOjjukpIZKVUD-IBgPMo6YRvbn~oGO4o-S2zUcpfjv8dH~JF-bg-NYfkwALXMEny3hbsBCpfYRNgh2pXQxfu1Y6nliV8h7wW8F0R~JKu3TLzVEKOQekvBgwWDJJ7M7hCxwqOzN3tlGV2fJvjrST5YWQ7sDVwt5AXeT4enzCTLRrttI4EWDWMvgEqxTaX2HGVgeX220~aHeAwIzpNy7BBNS46TjuSIDDYkK5islCJlwNKyUjx0zVqb1s20PlMAOKHM22Yw65kJzKLobtChcN9DXGnCVCXh~EC5h5qokaXskDfX-IV5Ia5TXrFF5McKuE8phdgSgHuVq35TkexBwRxLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
               alt="Shoes"
               className="h-48 object-fill w-full object-center"
            />
         </figure>
         <div className="card-body relative rounded-b-2xl bg-[#B9DE6A] text-white text-center">
            <img src={gmailImg} alt="" className="w-32 bg-white px-2 -mt-20 mx-auto z-50" />
            <div className="absolute right-3 top-4">
               <Rating style={{ maxWidth: 120 }} value={3} readOnly />
            </div>
            <div className="flex justify-center items-center gap-4 mx-auto">
               <img src={gmailImg} alt="" className="w-6" />
               <p>{data.email}</p>
            </div>
            <Link to={`/brand/${data._id}`}>
               <h2 className="text-4xl hover:text-orange-400">{data.brandName}</h2>
            </Link>
            <div className="text-black flex justify-around items-center mt-10">
               <Link className=" hover:text-white">View</Link>
               <div className="h-6 w-[2px] bg-gray-500"></div>
               <Link className=" hover:text-white">Job Profile</Link>
               <div className="h-6 w-[2px] bg-gray-500"></div>{" "}
               <Link className=" hover:text-white">Follow</Link>
            </div>
         </div>
      </div>
   );
};

export default BrandSearchCard;
