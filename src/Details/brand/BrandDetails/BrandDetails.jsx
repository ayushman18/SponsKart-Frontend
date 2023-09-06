import { useParams } from "react-router-dom";
import img from "./../../../assets/search/gmail.png";
import facebook from "./../../../assets/socialIcon/facebook.png";
import instagram from "./../../../assets/socialIcon/instagram.png";
import linkedin from "./../../../assets/socialIcon/linkedin.png";
import twitter from "./../../../assets/socialIcon/twitter.png";
import { Rating } from "@smastrom/react-rating";

const BrandDetails = () => {
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
                        <img src={facebook} alt="" className="w-14 h-14" />
                        <p>facebook page name</p>
                     </div>
                     <div className="flex gap-4 items-center mb-16">
                        <img src={twitter} alt="" className="w-14 h-14" />
                        <p>twitter page name</p>
                     </div>
                     <div className="flex gap-4 items-center mb-16">
                        <img src={linkedin} alt="" className="w-14 h-14" />
                        <p>linkedin page name</p>
                     </div>
                     <div className="flex gap-4 items-center mb-16">
                        <img src={instagram} alt="" className="w-14 h-14" />
                        <p>instagram page name</p>
                     </div>
                  </div>
                  <div className="text-center">
                     <Rating style={{ maxWidth: 120 }} value={3} readOnly className="mx-auto" />
                     <p className="text-xl mt-6">Rate Us</p>
                  </div>
               </div>
               <div className="py-8 border-b border-[#5252526E]">
                  <p className="text-xl text-center my-8">Report Employer </p>
                  <select className="select font-thin select-bordered w-full h-20 text-xl" name="category">
                     <option value="brand" selected disabled>
                        Select reason
                     </option>
                     <option value="brand">Brands</option>
                     <option value="Organizer">Event-Organization</option>
                     <option value="user">Content-Creator</option>
                  </select>
                  <textarea
                     placeholder="Description"
                     className="textarea rounded-none textarea-bordered bg-gray-100 h-96 textarea-lg w-full mt-6"
                  ></textarea>
               </div>
            </div>
            <div className="col-span-2 relative">
               <button className="py-3 text-white px-6 rounded-lg bg-green-500 hover:bg-green-700 absolute top-0 right-0">
                  Send Proposal
               </button>
               <div className="text-xl mt-9">
                  <p>About “Levi Lee”</p>
                  <p>
                     Excepteur sint occaecat cupidatat non proident, saeunt in culpa qui officia deserunt
                     mollit anim laborum. Seden utem perspiciatis undesieu omnis voluptatem accusantium doque
                     laudantium, totam rem aiam eaqueiu ipsa quae ab illoion inventore veritatisetm quasitea
                     architecto beataea dictaed quia couuntur magni dolores eos aquist ratione vtatem seque
                     nesnt. Neque porro quamest quioremas ipsum quiatem dolor sitem ameteism conctetur
                     adipisci velit sedate quianon. Laborum sed ut perspiciatis unde omnis iste natus error
                     sitems voluptatem accusantium doloremque laudantium, totam rem aiam eaque ipsa quae ab
                     illo inventore veritatis etna quasi architecto beatae vitae dictation explicabo. nemo
                     enim ipsam fugit.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default BrandDetails;
