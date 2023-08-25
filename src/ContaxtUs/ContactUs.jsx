import background from "./../assets/register/background.png";

const ContactUs = () => {
   return (
      <div className="min-h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url('${background}')` }}>
         <div className="min-h-screen bg-opacity-50 flex justify-center items-center bg-black">
            <div className="lg:w-3/4 bg-white py-11 rounded-3xl lg:pl-20 px-14 relative">
               <img src="./logo.png" alt="" className="w-72 mx-auto" />

               <p className="text-2xl font-semibold px-16 text-green-500">Having Issues? Contact Us.</p>

               <div className="lg:px-16">
                  <form>
                     <div className="lg:flex justify-between items-center my-6 gap-10">
                        <input
                           type="text"
                           placeholder="Type Your Name"
                           className="input input-bordered w-full"
                           required
                        />
                        <input
                           type="email"
                           placeholder="Type Your Email"
                           className="input input-bordered w-full"
                           required
                        />
                     </div>
                     <div className="lg:flex justify-between items-center my-6 gap-10">
                        <input
                           type="text"
                           placeholder="Type Your Number"
                           className="input input-bordered w-full"
                           required
                        />
                        <input
                           type="text"
                           placeholder="Why you want to Contact Us"
                           className="input input-bordered w-full"
                           required
                        />
                     </div>
                     <textarea
                        type="text"
                        placeholder="Write your message in details"
                        className="textarea textarea-bordered textarea-lg w-full p-4 mb-5"
                        required
                     />
                     <div className="flex justify-center items-center">
                        <button className="btn btn-success text-white hover:bg-green-700" type="submit">
                           Submit
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactUs;
