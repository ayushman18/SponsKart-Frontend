import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { useParams } from "react-router-dom";
import BrandSearchCard from "../../../search/BrandSearchCard/BrandSearchCard";

const BrandPostDetails = () => {
   // const { id } = useParams();
   // const { data, isLoading } = useQuery({
   //    queryKey: ["post"],
   //    queryFn: async () => {
   //       const res = await axios.get(`https://sponskart-hkgd.onrender.com/brand/post?postId=${id}`);
   //       return res.data.data;
   //    },
   // });

   // if (isLoading) {
   //    return <>loading...</>;
   // }
   return (
      <div className="mx-auto container">
         <div className="bg-gray-300 p-5 flex justify-between items-center">
            <div>
               <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-white">
                     <FaUser></FaUser>
                  </div>
                  <div>
                     <p>About Us</p>
                     <h2 className="text-2xl">SEO Consultants</h2>
                  </div>
               </div>
               <div className="flex flex-wrap">
                  <p>Sponsor: On-Site</p> <div className="divider-horizontal divider"></div>
                  <p>Duration: 3days</p> <div className="divider-horizontal divider"></div>
                  <p>Venue: Delhi</p>
               </div>
            </div>
            <div>
               <button className="btn btn-success">Send Proposal</button>
            </div>
         </div>
         <div className="my-4 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="col-span-2">
               <p>
                  Project detail: <br /> Excepteur sint occaecat cupidatat non proident, saeunt in culpa qui
                  officia deserunt mollit anim laborum. Seden utem perspiciatis undesieu omnis voluptatem
                  accusantium doque laudantium, totam rem aiam eaqueiu ipsa quae ab illoion inventore
                  veritatisetm quasitea architecto beataea dictaed quia couuntur magni dolores eos aquist
                  ratione vtatem seque nesnt. Neque porro quamest quioremas ipsum quiatem dolor sitem ameteism
                  conctetur adipisci velit sedate quianon. Laborum sed ut perspiciatis unde omnis iste natus
                  error sitems voluptatem accusantium doloremque laudantium, totam rem aiam eaque ipsa quae ab
                  illo inventore veritatis etna quasi architecto beatae vitae dictation explicabo. nemo enim
                  ipsam fugit. Nemo enim ipsam voluptatem quia Adipisci velit, sed quia non numquam eius modi
                  tempora Eaque ipsa quae ab illo inventore veritatis et quasi architecto qui dolorem ipsum
                  quia dolor sit amet Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porrom quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                  adipisci velit, sed quia nonae numquam eius modi tempora incidunt labore. Eomnis iste natus
                  error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                  ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                  ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                  magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt. Adipisci velit, sed quia non numquam eius modi tempora Eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto Qui dolorem ipsum quia dolor sit amet
                  Nemo enim ipsam voluptatem quia Sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porrom quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia nonae numquam eius modi tempora incidunt labore ste
                  natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                  ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porrom quisquam
                  est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia nonae
                  numquam eius modi tempora incidunt labore.
               </p>
            </div>
            <div className="border">
               <div className="">
                  <div className="flex gap-2 items-center border-b p-4">
                     <FaUser></FaUser>
                     <div className="divider divider-horizontal"></div>
                     <div>
                        <p className="text-2xl">30,000</p>
                        <p className="text-xs">cost</p>
                     </div>
                  </div>
                  <div className="flex gap-2 items-center border-b p-4">
                     <FaUser></FaUser>
                     <div className="divider divider-horizontal"></div>
                     <div>
                        <p className="text-2xl">30,000</p>
                        <p className="text-xs">cost</p>
                     </div>
                  </div>
                  <div className="flex gap-2 items-center border-b p-4">
                     <FaUser></FaUser>
                     <div className="divider divider-horizontal"></div>
                     <div>
                        <p className="text-2xl">30,000</p>
                        <p className="text-xs">cost</p>
                     </div>
                  </div>
                  <div className="flex gap-2 items-center border-b p-4">
                     <BrandSearchCard></BrandSearchCard>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BrandPostDetails;
