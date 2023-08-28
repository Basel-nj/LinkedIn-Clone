import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";
const Home = () => {
   return (
      <div className="pt-[70px] max-w-full">
         <section className="min-h-[50px] py-[15px] px-[5px] md:px-0 md:py-[16px] box-content	 text-center flex justify-center flex-col md:flex-row ">
            <h5 className="text-[#0a66c2] text-[14px]">
               <a href="#" className="font-bold">
                  Hiring in a hurry? -{" "}
               </a>
            </h5>
            <p className="text-[14px] text-[#434649] font-semibold ">
               Find talented pros in record time with Upwork and keep business
               moving.
            </p>
         </section>
         <div className="specialGrid px-[10px]">
            <Leftside />
            <Main />
            <Rightside />
         </div>
      </div>
   );
};
export default Home;
