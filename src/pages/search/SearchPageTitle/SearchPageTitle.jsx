const SearchPageTitle = ({ category }) => {
   return (
      <div className="w-full text-center bg-[#BADE6A] lg:py-14 text-white py-4">
         <p className="text-5xl font-semibold">
            Search{" "}
            {category === "organizer"
               ? "Event Organizer"
               : category === "brand"
               ? "Brand"
               : "Content Creator"}
         </p>
         <p className="text-2xl">
            Find{" "}
            {category === "organizer"
               ? "an event organizer for your event"
               : category === "brand"
               ? "a brand for you."
               : "a Content Creator for your content."}
         </p>
      </div>
   );
};

export default SearchPageTitle;
