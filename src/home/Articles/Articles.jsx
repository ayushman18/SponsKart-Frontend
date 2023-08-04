const Articles = () => {
   const arr = [1, 2, 3];
   return (
      <div className="my-24">
         <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl">Latest Articles</h2>
            <p className="text-xl text-gray-500">Stay Update with our news</p>
            <div className="w-40 h-1 mt-5 bg-orange-400"></div>
            <p className="w-1/2 my-10">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ipsam, laborum nulla commodi
               voluptatem itaque sint minima blanditiis sunt ullam debitis maiores vitae, error ex sapiente
               laudantium perspiciatis! Eos, nobis.
            </p>
         </div>
         <div className="w-[1040px] mx-auto grid grid-cols-3 gap-6">
            {arr.map((num) => (
               <div
                  key={num}
                  className="card group w-auto duration-300 bg-base-100 rounded-none border hover:shadow-xl"
               >
                  <figure className="relative">
                     <img
                        src="https://amentotech.com/projects/workreap/wp-content/uploads/2019/03/3-3-352x200.jpg"
                        alt="Shoes"
                     />
                     <div className="w-full h-full absolute bg-black top-0 opacity-0 group-hover:opacity-30 duration-500"></div>
                  </figure>
                  <div className="card-body px-3">
                     <h2 className="card-title">Shoes!</h2>
                     <p>If a dog chews shoes whose shoes does he choose?</p>
                  </div>
                  <div className="border-t p-3">
                     <p>This is card footer</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Articles;
