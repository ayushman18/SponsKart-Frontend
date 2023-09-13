const PageTitle = ({ title }) => {
   return (
      <div className="flex flex-col justify-center items-center h-32">
         <h2 className="text-4xl text-success">{title}</h2>
      </div>
   );
};

export default PageTitle;
