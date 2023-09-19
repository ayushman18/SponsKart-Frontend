import PageTitle from "../../components/PageTitle/PageTitle";

const TrustAndSafety = () => {
   return (
      <section className="container mx-auto my-10">
         <PageTitle title={"Trust And Safety"}></PageTitle>
         <div>
            <h4 className="text-xl">
               Sponskart is committed to providing a safe and secure environment for our clients. We have
               implemented a number of trust and safety features to protect our users from fraud, abuse, and
               other harmful behavior. These features include:
            </h4>
            <ol className="list-decimal list-inside">
               <li className="my-4 text-gray-700">
                  Identity verification: We require all users to verify their identity before they can create
                  a profile on Sponskart. This helps to ensure that our users are real people and not bots or
                  scammers.
               </li>
               <li className="my-4 text-gray-700">
                  Content moderation: We have a team of moderators who review all sponsorship profiles and
                  proposals to ensure that they comply with our community guidelines. We also have a system in
                  place for users to report suspicious activity.
               </li>
               <li className="my-4 text-gray-700">
                  Transparency: We are committed to being transparent about our trust and safety measures. We
                  publish our community guidelines and dispute resolution process on our website. We also
                  provide regular updates on our trust and safety efforts.
               </li>
            </ol>
            <p className="text-xl font-bold">Our Believe</p>
            <p className="text-gray-700">
               We believe that trust and safety are essential for a successful sponsorship marketplace. We are
               committed to providing a safe and secure environment for our clients. We believe that our trust
               and safety features will help to protect our users and build trust in the Sponskart platform.
            </p>
            <br />
            <p className="text-gray-700">
               We are constantly evaluating our trust and safety measures and making improvements as needed.
               We are committed to providing our clients with the highest level of protection. We believe that
               trust and safety are essential for a successful sponsorship marketplace.
            </p>
         </div>
      </section>
   );
};

export default TrustAndSafety;
