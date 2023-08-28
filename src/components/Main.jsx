import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import { getArticlesAPI } from "../redux/actions";
import PostModal from "./PostModal";
const Main = (props) => {
   const [showModal, setShowModal] = useState(false);
   const handleClick = () => {
      setShowModal(!showModal);
   };

   useEffect(() => {
      props.getArticles();
   }, []);

   return (
      <div style={{ gridArea: "main" }}>
         <div className="commonCard flex flex-col texxt-[#958b7b] mt-0 mx-0 mb-[8px] bg-[white]">
            <div className="flex items-center py-[8px] px-[16px]">
               {props.user && props.user.photoURL ? (
                  <img
                     src={props.user.photoURL}
                     alt=""
                     className="w-[48px] rounded-[50%] mr-[8px]"
                  />
               ) : (
                  <img
                     src="/images/user.svg"
                     alt=""
                     className="w-[48px] rounded-[50%] mr-[8px]"
                  />
               )}
               <button
                  onClick={handleClick}
                  disabled={props.loading ? true : false}
                  className="my-[4px] mx-0 flex-grow rounded-[35px] p-[16px] border-[1px] border-[#00000026] bg-[white] text-[#000000b3] font-medium text-[14px] hover:bg-[#00000014] text-left "
               >
                  Start a post
               </button>
            </div>
            <div className="flex flex-wrap justify-around pb-[4px]">
               <button className="shareBoxButton">
                  <img
                     src="/images/photo-icon.svg"
                     alt=""
                     className="my-0 mx-[4px]"
                  />
                  <span className="text-[#70b5f9] mt-[2px]">Photo</span>
               </button>
               <button className="shareBoxButton">
                  <img
                     src="/images/video-icon.svg"
                     alt=""
                     className="my-0 mx-[4px]"
                  />
                  <span className="text-[#70b5f9] mt-[2px]">Video</span>
               </button>
               <button className="shareBoxButton">
                  <img
                     src="/images/event-icon.svg"
                     alt=""
                     className="my-0 mx-[4px]"
                  />
                  <span className="text-[#70b5f9] mt-[2px]">Event</span>
               </button>
               <button className="shareBoxButton">
                  <img
                     src="/images/article-icon.svg"
                     alt=""
                     className="my-0 mx-[4px]"
                  />
                  <span className="text-[#70b5f9] mt-[2px]">Write article</span>
               </button>
            </div>
         </div>

         {props.articles.length === 0 ? (
            <p className="text-center mt-[110px] text-[26px] translate-y-[-50%] text-[black]">
               There Are No Posts ...
            </p>
         ) : (
            <div className="text-center">
               {props.loading && (
                  <img
                     src="images/loader.svg"
                     alt=""
                     className="w-[70px] mx-auto"
                  />
               )}
               {props.articles.length > 0 &&
                  props.articles.map((article, index) => (
                     <div
                        key={index}
                        className="commonCard p-0 m-0 mb-[8px] overflow-visible"
                     >
                        <div className="flex-nowrap pt-[12px] px-[16px] mb-[8px] flex items-center">
                           <a className="mr-[12px] flex-grow overflow-hidden flex no-underline">
                              <img
                                 src={article.actor.image}
                                 className="w-[48px] h-[48px] rounded-[50%]"
                              />
                              <div className="flex flex-col flex-grow basis-0 ml-[8px] overflow-hidden">
                                 <span className="text-left text-[14px] font-bold text-[black]">
                                    {article.actor.title}
                                 </span>
                                 <span className="text-left text-[12px] text-[#00000099]">
                                    {article.actor.description}
                                 </span>
                                 <span className="text-left text-[12px] text-[#00000099]">
                                    {article.actor.date
                                       .toDate()
                                       .toLocaleDateString()}
                                 </span>
                              </div>
                           </a>
                           <button className="absolute right-[12px] top-0 bg-[transparent] border-none outline-none">
                              <img src="/images/ellipsis.svg" alt="" />
                           </button>
                        </div>
                        <div className="py-0 px-[16px] overflow-hidden text-[#000000e6] text-[14px] text-left">
                           {article.description}
                        </div>
                        <div className="mt-[8px] w-full block relative bg-[#f9fafb]">
                           <a>
                              {!article.shareImg && article.video ? (
                                 <ReactPlayer
                                    width="100%"
                                    url={article.video}
                                 />
                              ) : (
                                 article.shareImg && (
                                    <img
                                       src={article.shareImg}
                                       className="object-contain w-full h-full"
                                    />
                                 )
                              )}
                           </a>
                        </div>
                        <ul className="leading-[1.3] flex items-center overflow-auto my-0 mx-[16px] py-[8px] px-0 border-b-[1px_solid_#e9e5df] list-none">
                           <li className="mr-[5px] text-[12px]">
                              <button className="flex items-center border-none bg-[white]">
                                 <img
                                    src="https://static-exp1.licdn.com/sc/h/2uxqgankkcxm505qn812vqyss"
                                    alt=""
                                 />
                                 <img
                                    src="https://static-exp1.licdn.com/sc/h/f58e354mjsjpdd67eq51cuh49"
                                    alt=""
                                 />
                                 <span className="md:ml-[8px] md:mt-[3px] md:font-semibold">
                                    75
                                 </span>
                              </button>
                           </li>
                           <li className="mr-[5px] text-[12px]">
                              <a>{article.comments} comments</a>
                           </li>
                           <li className="mr-[5px] text-[12px]">
                              <a>1 share</a>
                           </li>
                        </ul>
                        <div className="flex items-center justify-start max-w-full flex-wrap m-0 min-h-[40px] py-[4px] px-[8px]">
                           <button className="socialActionsButton">
                              <img src="/images/like-icon.svg" alt="" />
                              <span>Like</span>
                           </button>
                           <button className="socialActionsButton">
                              <img src="/images/comment-icon.svg" alt="" />
                              <span>Comment</span>
                           </button>
                           <button className="socialActionsButton">
                              <img src="/images/share-icon.svg" alt="" />
                              <span>Share</span>
                           </button>
                           <button className="socialActionsButton">
                              <img src="/images/send-icon.svg" alt="" />
                              <span>Send</span>
                           </button>
                        </div>
                     </div>
                  ))}
            </div>
         )}
         <PostModal showModal={showModal} handleClick={handleClick} />
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      loading: state.articleState.loading,
      user: state.userState.user,
      articles: state.articleState.articles,
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      getArticles: () => dispatch(getArticlesAPI()),
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
