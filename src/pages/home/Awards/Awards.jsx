import conversation from "./../../../assets/conversation.png";
import icon2 from "./../../../assets/home/content-creator.png";
import icon1 from "./../../../assets/home/brand-image.png";
import icon3 from "./../../../assets/home/planner.png";
import { Link } from "react-router-dom";

const Awards = () => {
   return (
      <section className="lg:flex bg-gray-100 items-center">
         <div className="lg:w-1/3 bg-no-repeat bg-cover flex justify-center items-center lg:h-[650px] h-[300px] cursor-pointer bg-center">
            <img src="./sponskart.png" alt="" />
         </div>
         <div className="lg:p-12 p-6 lg:w-2/3">
            <div className="space-y-3">
               <img src={conversation} alt="" className="w-20" />
               <h2 className="text-3xl font-semibold">Your Bridge to Dynamic Collaborations</h2>
               <p className="text-gray-500">
                  Sponskart is your premier platform, seamlessly connecting brands, content creators,
                  influencer, and event organizers within the college landscape. Unlock powerful engagement
                  opportunities with targeted audiences.
               </p>
               <h3 className="text-2xl font-semibold">Your Ultimate Collaboration Hub</h3>
               <div className="flex gap-10">
                  <div>
                     <img src={icon1} alt="" className="w-32" />
                  </div>
                  <div>
                     <h3 className="text-xl">Are you a brand?</h3>
                     <ol className="list-outside list-decimal">
                        <li>
                           <span className="font-bold">Tailored Partnerships:</span> Connect with college
                           influencers for precisely targeted brand promotions.
                        </li>
                        <li>
                           <span className="font-bold">Amplified Reach:</span> Access a vast and engaged
                           college audience, enhancing brand visibility.
                        </li>
                        <li>
                           <span className="font-bold"> Innovative Campaigns:</span> Explore creative
                           marketing opportunities to resonate with young consumers.
                        </li>
                     </ol>
                  </div>
               </div>
               <div className="flex gap-10">
                  <div>
                     <img src={icon2} alt="" className="w-32" />
                  </div>
                  <div>
                     <h3 className="text-xl">Want to join as Content Creator?</h3>
                     <ol className="list-outside list-decimal">
                        <li>
                           <span className="font-bold">Showcasing Talent:</span> Collaborate with brands to
                           showcase your skills and gain recognition.
                        </li>
                        <li>
                           <span className="font-bold">Authentic Campaigns:</span> Create genuine content that
                           resonates with your audience and brand values.
                        </li>
                        <li>
                           <span className="font-bold">Amplified Reach:</span> Engage with a broader college
                           community and expand your influence.
                        </li>
                     </ol>
                  </div>
               </div>
               <div className="flex gap-10">
                  <div>
                     <img src={icon3} alt="" className="w-32" />
                  </div>
                  <div>
                     <h3 className="text-xl">Organizing an Event?</h3>
                     <ol className="list-outside list-decimal">
                        <li>
                           <span className="font-bold">Sponsorship Avenues:</span> Unlock sponsorship
                           opportunities to enhance your event&lsquo;s impact.
                        </li>
                        <li>
                           <span className="font-bold">Tailored Collaborations:</span>
                           Partner with brands and content creators to elevate event experiences.
                        </li>
                        <li>
                           <span className="font-bold">Targeted Exposure:</span> Leverage our network to
                           attract a dedicated college audience to your events.
                        </li>
                     </ol>
                  </div>
               </div>
               <div className="flex justify-between items-center">
                  <Link to="/register">
                     <button className="btn btn-success text-white normal-case"> Join Now</button>
                  </Link>
                  <Link to="/contact-us">
                     <button className="btn btn-warning normal-case"> Contact Us</button>
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Awards;
