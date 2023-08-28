import { Fragment, useState } from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import { Timestamp } from "firebase/firestore";
import { postArticleAPI } from "../redux/actions";

const PostModal = (props) => {
   const [editorText, setEditorText] = useState("");
   const [assetArea, setAssetArea] = useState("");
   const [shareImage, setShareImage] = useState("");
   const [videoLink, setVideoLink] = useState("");

   const handleChange = (e) => {
      const image = e.target.files[0];

      if (image === "" || image === undefined) {
         alert(`not an image , the file is a ${typeof image}`);
         return;
      } else {
         setShareImage(image);
      }
   };
   const handlePostArticles = (e) => {
      e.preventDefault();

      if (e.target !== e.currentTarget) {
         return;
      }

      const payload = {
         image: shareImage,
         video: videoLink,
         user: props.user,
         description: editorText,
         timestamp: Timestamp.now(),
      };
      props.postArticles(payload);
      reset(e);
   };
   const switchAssetArea = (area) => {
      setShareImage("");
      setVideoLink("");
      setAssetArea(area);
   };
   const reset = (e) => {
      setEditorText("");
      setShareImage("");
      setVideoLink("");
      setAssetArea("");
      props.handleClick(e);
   };

   return (
      <Fragment>
         {props.showModal && (
            <div className="fixed top-0 left-0 w-full h-full z-[999] text-[black] bg-[#000000cc] animate-fadeIn">
               <div className="w-full max-w-[552px] bg-[white] max-h-[90%] overflow-initial rounded-[5px] relative flex flex-col top-[32px] my-0 mx-auto">
                  <div className="flex justify-between py-[16px] px-[20px] border-b-[1px] border-b-[#00000026] items-center">
                     <h2 className="leading-[1.5] font-normal text-[18px] text-[#00000099]">
                        Create a post
                     </h2>
                     <button
                        onClick={(e) => reset(e)}
                        className="contentButton h-[40px] w-[40px] min-w-auto text-[#00000026] bg-none rounded-[50%] cursor-pointer hover:bg-[#00000014]"
                     >
                        <img
                           src="/images/close-icon.svg"
                           alt=""
                           className="pointer-events-none"
                        />
                     </button>
                  </div>
                  <div className="flex flex-col flex-grow overflow-y-auto align-baseline bg-[transparent] py-[8px] px-[12px]">
                     <div className="flex items-center py-[12px] px-[24px]">
                        {props.user && props.user.photoURL ? (
                           <img
                              src={props.user.photoURL}
                              alt=""
                              className="w-[48px] h-[48px] bg-clip-content rounded-[50%]"
                           />
                        ) : (
                           <img
                              src="/images/user.svg"
                              alt=""
                              className="w-[48px] h-[48px] bg-clip-content rounded-[50%]"
                           />
                        )}
                        <span className="font-semibold leading-[1.5] text-[16px] ml-[10px]">
                           {props.user.displayName}
                        </span>
                     </div>
                     <div className="py-[12px] px-[24px]">
                        <textarea
                           value={editorText}
                           onChange={(e) => setEditorText(e.target.value)}
                           placeholder="What do you want to talk about?"
                           autoFocus={true}
                           className="w-full min-h-[100px] resize-none text-[16px] font-normal outline-none border-noe leading-[1.5]"
                        />
                        {assetArea === "image" ? (
                           <div className="text-center">
                              <input
                                 type="file"
                                 name="image"
                                 id="file"
                                 style={{ display: "none" }}
                                 onChange={handleChange}
                              />
                              <p>
                                 <label
                                    style={{
                                       cursor: "pointer",
                                       display: "block",
                                       marginBottom: "15px",
                                    }}
                                    htmlFor="file"
                                 >
                                    Select an image to share
                                 </label>
                              </p>
                              {shareImage && (
                                 <img
                                    src={URL.createObjectURL(shareImage)}
                                    alt="img"
                                    className="w-full"
                                 />
                              )}
                           </div>
                        ) : (
                           assetArea === "media" && (
                              <Fragment>
                                 <input
                                    style={{ width: "100%", height: "30px" }}
                                    type="text"
                                    value={videoLink}
                                    onChange={(e) =>
                                       setVideoLink(e.target.value)
                                    }
                                    placeholder="Please input a video link"
                                 />
                                 {videoLink && (
                                    <ReactPlayer width="100%" url={videoLink} />
                                 )}
                              </Fragment>
                           )
                        )}
                     </div>
                  </div>
                  <div className="flex justify-between pt-[12px] pr-[24px] pl-[16px] pb-[16px] h-[30px]">
                     <div className="flex items-center pr-[8px]">
                        <button
                           className="contentButton assetButton w-[40px]"
                           onClick={() => switchAssetArea("image")}
                        >
                           <img src="/images/share-image.svg" alt="" />
                        </button>
                        <button
                           className="contentButton assetButton w-[40px]"
                           onClick={() => switchAssetArea("media")}
                        >
                           <img src="/images/share-video.svg" alt="" />
                        </button>
                     </div>
                     <div className="pl-[8px] mr-auto border-l-[1px] border-l-[#00000026] self-center grid place-items-center">
                        <button className="contentButton assetButton p-[10px] h-[30px] rounded-[30px] hover:bg-[#00000014]">
                           <img
                              src="/images/share-comment.svg"
                              alt=""
                              className="mr-[5px]"
                           />
                           Anyone
                        </button>
                     </div>
                     <button
                        className="contentButton min-w-[60px] py-[3px] px-[16px] font-medium text-[16px] rounded-[15px] self-center"
                        onClick={(e) => handlePostArticles(e)}
                        disabled={editorText.length === 0 ? true : false}
                        style={{
                           color: `${
                              !editorText ? "rgb(0,0,0,0.25)" : "white"
                           }`,
                           backgroundColor: `${
                              !editorText ? "rgb(235,235,235)" : "#0a66c2"
                           }`,
                           cursor: `${!editorText ? "not-allowed" : "pointer"}`,
                        }}
                     >
                        Post
                     </button>
                  </div>
               </div>
            </div>
         )}
      </Fragment>
   );
};
const mapStateToProps = (state) => {
   return {
      user: state.userState.user,
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      postArticles: (payload) => dispatch(postArticleAPI(payload)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
