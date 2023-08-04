const PickedCategory = () => {
   const arr = [1, 2, 3, 4, 5, 6, 7, 8];
   return (
      <div className="w-[1040px] mx-auto my-24">
         <h2 className="text-2xl">Top Picked Categories</h2>
         <div className="grid grid-cols-4 gap-6">
            {arr.map((num, index) => (
               <div
                  key={index}
                  className="border hover:bg-gradient-to-t from-gray-900 to-gray-900 hover:text-white duration-1000 p-10 rounded-md group h-64 flex flex-col justify-end"
               >
                  <p>icon</p>
                  <h4>Writing & Translation</h4>
                  <p className="text-xs">3 listing</p>
                  <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <button className="btn btn-warning btn-sm hidden group-hover:translate-y-0 group-hover:block duration-1000">
                     Explore{" "}
                  </button>
               </div>
            ))}
         </div>
      </div>
   );
};

export default PickedCategory;
