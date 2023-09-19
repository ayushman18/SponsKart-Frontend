import PageTitle from "../../components/PageTitle/PageTitle";

const HowItWorks = () => {
   return (
      <section className="container mx-auto my-10">
         <PageTitle title={"How It Works!"}></PageTitle>
         <div>
            <h4 className="text-xl">
               Sponskart works by connecting brands, events, and influencers together. The process is as
               follows:
            </h4>
            <ol className="list-decimal list-inside">
               <li className="my-4 text-gray-700">
                  Brands, Events and influencers create a sponsorship profile on Sponskart. This profile
                  includes information about their project, their target audience, and their sponsorship
                  goals.
               </li>
               <li className="my-4 text-gray-700">
                  Brands, events and browse through the sponsorship profiles to find events and influencers
                  that are good fit for their sponsorship and goal. They can also use the Sponskart search
                  filters to find specific types of events or influencers.
               </li>
               <li className="my-4 text-gray-700">
                  Events send sponsorship proposals to brands and influencers. These proposals outline the
                  terms of the sponsorship, such as the amount of money being offered, the deliverables, and
                  the branding guidelines.
               </li>
               <li className="my-4 text-gray-700">
                  Brands and influencers review the sponsorship proposals and negotiate. They may also
                  counter-offer with different terms.
               </li>
               <li className="my-4 text-gray-700">
                  Once an agreement is reached, the sponsorship is finalized. Sponskart helps to manage the
                  sponsorship process from start to finish, ensuring that all parties are satisfied.
               </li>
            </ol>
            <p className="text-gray-700">
               Sponskart is committed to making the sponsorship process as transparent and efficient as
               possible. We believe that sponsorships should be a mutually beneficial relationship. We work
               hard to connect brands with events and influencers that are a good fit for each other. We also
               provide the tools and resources that our clients need to manage their sponsorships effectively.
            </p>
         </div>
      </section>
   );
};

export default HowItWorks;
