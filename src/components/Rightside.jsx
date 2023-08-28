const Right = () => {
   return (
      <div style={{ gridArea: "rightside" }}>
         <div className="text-center overflow-hidden mb-[8px] bg-[#fff] rounded-[5px] relative border-none shadow-[0px_0px_0px_1px_#00000026,0px_0px_0px_#00000033] p-[12px]">
            <div className="inline-flex items-center justify-between text-[16px] w-full text-[#0009]">
               <h2>Add to your feed</h2>
               <img src="/images/feed-icon.svg" alt="" />
            </div>
            <ul className="mt-[16px]">
               <li className="feedList">
                  <a>
                     <div></div>
                  </a>
                  <div>
                     <span>#Linkedin</span>
                     <button>Follow</button>
                  </div>
               </li>
               <li className="feedList">
                  <a>
                     <div></div>
                  </a>
                  <div>
                     <span>#Video</span>
                     <button>Follow</button>
                  </div>
               </li>
            </ul>
            <a className="text-[#0a66c2] flex items-center text-[14px]">
               View all recommendations
               <img src="/images/right-icon.svg" alt="" />
            </a>
         </div>
         <div>
            <img
               src="/images/banner-image.jpg"
               alt=""
               className="w-full h-full"
            />
         </div>
      </div>
   );
};
export default Right;
