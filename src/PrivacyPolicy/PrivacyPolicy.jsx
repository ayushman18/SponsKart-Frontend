import PageTitle from "../components/PageTitle/PageTitle";

const PrivacyPolicy = () => {
   return (
      <section className="container mx-auto my-10">
         <PageTitle title={"Privacy Policy"}></PageTitle>
         <div>
            <h4 className="text-xl font-semibold">
               Sponskart respects your privacy and is committed to protecting your personal information. This
               privacy policy explains how we collect, use, and share your personal information.
            </h4>
            <br />
            <p className="text-xl font-bold">What personal information do we collect?</p>
            <p className="text-gray-700">
               We collect personal information that you provide to us when you create an account, use our
               services, or contact us. This information may include your name, email address, phone number,
               and other contact information. We may also collect information about your activities on our
               website, such as the pages you visit and the links you click.
            </p>
            <br />
            <p className="text-xl font-bold">How do we use your personal information?</p>
            <p className="text-gray-700">
               We use your personal information to provide you with our services, to communicate with you, and
               to improve our services. We may also use your personal information to send you marketing
               messages, but you can opt out of receiving these messages at any time.
            </p>

            <br />
            <p className="text-xl font-bold">Your rights</p>
            <p className="text-gray-700">
               You have the right to access your personal information, to request that we correct any
               inaccuracies, and to request that we delete your personal information. You can exercise these
               rights by contacting us at [email protected]
            </p>
            <br />
            <p className="text-xl font-bold">Changes to this privacy policy</p>
            <p className="text-gray-700">
               We may update this privacy policy from time to time. If we make any changes, we will post the
               changes on our website and update the &rdquo;last updated&rdquo; date at the top of this
               privacy policy.
            </p>
         </div>
      </section>
   );
};

export default PrivacyPolicy;
