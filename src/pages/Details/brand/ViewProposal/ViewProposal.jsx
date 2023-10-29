import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { apiInstance } from "../../../../api/apiInstance";
import Loading from "../../../../components/Loading/Loading";
import useAuth from "../../../../hooks/useAuth";

const ViewProposal = () => {
   const { user } = useAuth();
   const { id } = useParams();

   const { data, isLoading } = useQuery(["proposal", id], async () => {
      try {
         const res = await apiInstance.get(`proposal/${id}?brandId=${user.data._id}`);
         return res.data;
      } catch (error) {
         console.log(error);
      }
   });
   console.log(data);

   if (isLoading) {
      return <Loading></Loading>;
   }

   return (
      <div className="container mx-auto my-5">
         <Link to={`/post/brand/${id}`}>
            <button className="btn btn-link normal-case "> View Post</button>
         </Link>
         <div>
            {data?.length === 0 ? (
               <p>No proposal Found</p>
            ) : (
               <div className="overflow-x-auto">
                  <table className="table">
                     <thead>
                        <tr>
                           <th></th>
                           <th>Name</th>
                           <th>Proposal</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {data?.map((proposal, index) => (
                           <tr className="bg-base-200" key={proposal._id}>
                              <th>{index + 1}</th>
                              <td>{proposal.proposalSender.name}</td>
                              <td>{proposal.proposal.slice(0, 30) + "..."}</td>
                              <td>
                                 <Link
                                    to={`/proposal-details`}
                                    className="btn btn-success btn-sm normal-case mr-4"
                                    state={proposal}
                                 >
                                    View Details
                                 </Link>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            )}
         </div>
      </div>
   );
};

export default ViewProposal;
