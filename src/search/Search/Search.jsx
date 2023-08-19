import { Link, useSearchParams } from "react-router-dom";
import gmailImg from "./../../assets/search/gmail.png";
import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
   const [searchParams] = useSearchParams();
   const text = searchParams.get("text");
   const category = searchParams.get("category");
   const [result, setResult] = useState([]);
   useEffect(() => {
      axios
         .get(`https://sponskart-hkgd.onrender.com/search?type=${category}&search=${text}`)
         .then((res) => {
            console.log(res.data.data);
            setResult(res.data.data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, [category, text]);

   return (
      <section>
         <div className="container mx-auto grid grid-cols-4 gap-24 my-10 ">
            <div>
               <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="collapse-title  bg-[#5252523D] text-xl font-medium">
                     Filter{" "}
                     {category === "user"
                        ? "Content Creator"
                        : category === "brands"
                        ? "Brands"
                        : "Event Organization"}{" "}
                     By
                  </div>
                  <div className="collapse-content">
                     <p>hello</p>
                  </div>
               </div>
               <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title bg-[#5252523D] text-xl font-medium">
                     {category === "user"
                        ? "Content Creator"
                        : category === "brands"
                        ? "Brands"
                        : "Event Organization"}{" "}
                     Type
                  </div>
                  <div className="collapse-content">
                     <p>hello</p>
                  </div>
               </div>
               <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title bg-[#5252523D] text-xl font-medium">Hourly Rate</div>
                  <div className="collapse-content">
                     <p>hello</p>
                  </div>
               </div>
               <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title bg-[#5252523D] text-xl font-medium">Experience</div>
                  <div className="collapse-content">
                     <p>hello</p>
                  </div>
               </div>
               <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title bg-[#5252523D] text-xl font-medium">Specialization</div>
                  <div className="collapse-content">
                     <p>hello</p>
                  </div>
               </div>
               <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title bg-[#5252523D] text-xl font-medium">Skills</div>
                  <div className="collapse-content">
                     <p>hello</p>
                  </div>
               </div>
            </div>
            <div className="col-span-3">
               <button className="btn rounded-full normal-case">Sort A-Z</button>
               <div className="my-12 grid grid-cols-2 justify-around items-center">
                  {result.map((data) => (
                     <Link to={`/brands/${data._id}`} key={data._id}>
                        <div
                           className="card max-w-[420px] bg-base-100 rounded-2xl"
                           style={{ boxShadow: "0px 4px 25px 13px #525252" }}
                        >
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
                                 <p>nazmulhasanshanto13@gmail.com</p>
                              </div>
                              <p className="text-4xl">SEO Consultants</p>
                              <div className="text-black flex mt-10">
                                 <p>View</p>
                                 <div className="h-6 w-[2px] bg-gray-500"></div>
                                 <p>Job Profile</p>
                                 <div className="h-6 w-[2px] bg-gray-500"></div> <p>Follow</p>
                              </div>
                           </div>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Search;
