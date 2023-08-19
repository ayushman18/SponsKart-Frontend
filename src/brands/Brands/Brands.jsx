import { useParams } from "react-router-dom";
import img from "./../../assets/search/gmail.png";

const Brands = () => {
   const params = useParams();
   const id = params.id;
   console.log(id);
   return (
      <section>
         <img
            src="https://s3-alpha-sig.figma.com/img/5019/134f/fc5d161b743d666bba24e209447e186b?Expires=1693180800&Signature=eOjjukpIZKVUD-IBgPMo6YRvbn~oGO4o-S2zUcpfjv8dH~JF-bg-NYfkwALXMEny3hbsBCpfYRNgh2pXQxfu1Y6nliV8h7wW8F0R~JKu3TLzVEKOQekvBgwWDJJ7M7hCxwqOzN3tlGV2fJvjrST5YWQ7sDVwt5AXeT4enzCTLRrttI4EWDWMvgEqxTaX2HGVgeX220~aHeAwIzpNy7BBNS46TjuSIDDYkK5islCJlwNKyUjx0zVqb1s20PlMAOKHM22Yw65kJzKLobtChcN9DXGnCVCXh~EC5h5qokaXskDfX-IV5Ia5TXrFF5McKuE8phdgSgHuVq35TkexBwRxLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Shoes"
            className="h-64 object-cover w-full mb-5 shadow-xl"
         />
         <div className="container mx-auto grid grid-cols-3 gap-6">
            <div>
               <div className="text-center py-8 border-b border-[#5252526E]">
                  <img src={img} alt="" className="w-32 bg-gray-300 px-2 mx-auto" />
                  <div className="flex justify-center items-center gap-4 mx-auto">
                     <img src={img} alt="" className="w-6" />
                     <p>nazmulhasanshanto13@gmail.com</p>
                  </div>
                  <p className="text-4xl">SEO Consultants</p>
               </div>
               <div className="py-8 border-b border-[#5252526E]">
                  <p className="text-xl text-center my-8">Company Followers </p>
                  <div>
                     <div className="flex gap-4 items-center mb-16">
                        <div className="w-20 h-20 bg-gray-100 rounded-full"></div>
                        <p>company name</p>
                     </div>
                     <div className="flex gap-4 items-center mb-16">
                        <div className="w-20 h-20 bg-gray-100 rounded-full"></div>
                        <p>company name</p>
                     </div>
                  </div>
               </div>
               <div className="py-8 border-b border-[#5252526E]">
                  <p className="text-xl text-center my-8">Follow Our Company at: </p>
                  <div>
                     <div className="flex gap-4 items-center mb-16">
                        <div className="w-20 h-20 bg-gray-100 rounded-full"></div>
                        <p>company name</p>
                     </div>
                     <div className="flex gap-4 items-center mb-16">
                        <div className="w-20 h-20 bg-gray-100 rounded-full"></div>
                        <p>company name</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Brands;
