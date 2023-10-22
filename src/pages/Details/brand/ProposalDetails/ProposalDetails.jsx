import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "react-router-dom";
import { api } from "../../../../api/apiInstance";
import Loading from "../../../../components/Loading/Loading";
import { FaArrowAltCircleRight, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const ProposalDetails = () => {
   const location = useLocation();
   const { answers, proposal, proposalSender, questions } = location.state;
   const { data, isLoading } = useQuery(["sender", proposalSender], async () => {
      const res = await api.get(`/creator/get/${proposalSender.creator}`);
      return res.data.data;
   });
   if (isLoading) {
      return <Loading></Loading>;
   }
   return (
      <div className="container mx-auto">
         <div className="flex justify-end">
            <button className="btn btn-info">Send Message</button>
         </div>
         <div className="md:grid grid-cols-3 gap-8">
            <div>
               <h1 className="text-2xl font-semibold">Sender Information:</h1>
               <div className="bg-gray-100 p-5 rounded-md w-fit text-center">
                  <div className="avatar">
                     <div className="w-24 mask mask-squircle">
                        <img src={data.logo.url} />
                     </div>
                  </div>
                  <h2 className="text-xl">{data.name}</h2>
                  <h3> {data.location}, India</h3>
                  <div className="flex gap-3 my-2 items-center justify-center">
                     <Link to={data.linkedin} className="text-xl">
                        <FaLinkedin></FaLinkedin>
                     </Link>
                     <Link to={data.facebook} className="text-xl text-blue-500">
                        <FaFacebook></FaFacebook>
                     </Link>
                     <Link to={data.youtube} className="text-xl text-red-500">
                        <FaYoutube></FaYoutube>
                     </Link>
                  </div>
               </div>
               <div>You can provide some ads here bellow</div>
            </div>
            <div>
               <h2 className="text-xl font-semibold">Proposal:</h2>
               <p className="flex gap-3 items-center">
                  <FaArrowAltCircleRight className="inline-block" />
                  <span>{proposal} </span>
               </p>

               <div className="my-5">
                  <p className="mb-4 text-lg font-semibold">Others Questions</p>
                  {questions.map((question, index) => (
                     <div key={index} className="pl-6">
                        <h2 className="text-lg font-semibold">
                           {index + 1}. {question}
                        </h2>
                        <p className="flex gap-3 items-center">
                           <FaArrowAltCircleRight className="inline-block" />
                           <span>{answers[`answer${index + 1}`]} </span>
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProposalDetails;
