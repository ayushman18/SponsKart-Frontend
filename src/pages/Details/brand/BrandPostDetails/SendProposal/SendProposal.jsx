import { useForm } from "react-hook-form";
import useAuth from "../../../../../hooks/useAuth";
// import axios from "axios";
import { apiInstance } from "../../../../../api/apiInstance";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const SendProposal = ({ data, brand }) => {
   const { register, handleSubmit } = useForm();
   const { user } = useAuth();
   console.log(brand, data);
   const handelSendProposal = (info) => {
      const proposalInfo = {};
      proposalInfo.questions = data.questions;
      proposalInfo.proposalSender = user.user;
      proposalInfo.answers = {};
      proposalInfo.proposal = info.proposal;
      proposalInfo.postId = data._id;
      proposalInfo.brandId = data.brandId;

      data.questions.map((questions, index) => {
         proposalInfo.answers[`answer${index + 1}`] = info[`answer${index + 1}`];
      });
      apiInstance
         .post("proposal", proposalInfo)
         .then((res) => {
            if (res) {
               Swal.fire("Proposal Send!", "You proposal send to brand!", "success");
            }
         })
         .catch((err) => {
            console.log(err);
            toast.error("Something went wrong please try again after refresh.");
         });
      console.log(proposalInfo);
      document.getElementById("my_modal_1").close();
   };
   return (
      <>
         <dialog id="my_modal_1" className="modal">
            <div className="modal-box p-0">
               <div className="bg-base-200 p-7 border-b">
                  <h3 className="font-semibold text-2xl">Send Proposal to {brand.brandName}</h3>
                  <h3 className="text-lg">For {data.payType} a product.</h3>
               </div>
               <div className="px-7 py-5">
                  <form onSubmit={handleSubmit(handelSendProposal)}>
                     <div>
                        <p className="text-xl">Your Proposal</p>
                        <div className="form-control w-full max-w-xs">
                           <label className="label">
                              <span className="label-text">Write your proposal.</span>
                           </label>
                           <textarea
                              type="text"
                              placeholder="Your proposal to convince brand."
                              className="textarea textarea-bordered w-full max-w-xs"
                              {...register("proposal")}
                           />
                        </div>
                     </div>
                     <div className="mt-6">
                        <p className="text-xl">Additional Questions</p>
                        {data?.questions.map((question, index) => (
                           <div className="form-control w-full max-w-xs" key={index}>
                              <label className="label">
                                 <span className="label-text">
                                    {index + 1}. {question}
                                 </span>
                              </label>
                              <textarea
                                 type="text"
                                 placeholder="Answer..."
                                 className="textarea textarea-bordered w-full max-w-xs"
                                 {...register(`answer${index + 1}`)}
                              />
                           </div>
                        ))}
                     </div>
                     <div className="mx-auto w-fit">
                        <button type="submit" className="mt-8    btn btn-success rounded-none">
                           Submit
                        </button>
                     </div>
                  </form>
               </div>
               <div className="modal-action fixed top-0 right-0">
                  <form method="dialog">
                     <button className="btn btn-error rounded-none py-1">X</button>
                  </form>
               </div>
            </div>
         </dialog>
      </>
   );
};

export default SendProposal;
