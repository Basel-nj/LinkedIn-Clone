import { connect } from "react-redux";
import styled from "styled-components";

const Leftside = (props) => {
   return (
      <div style={{ gridArea: "leftside" }}>
         <div className="artCard">
            <div className="border-b-[1px_solid_#00000026] px-[12px] pt-[12px] pb-[16px] break-words">
               <div className="bg-special bg-[url(/public/images/card-bg.svg)] bg-center h-[54px] mx-[-12px] mt-[-12px] mb-0"></div>
               <a>
                  <div className="shadow-none bg-[url(/public/images/photo.svg)] w-[72px] h-[72px] box-border bg-clip-content bg-center bg-[white] bg-special2 bg-no-repeat border-[2px_solid_white] mx-auto mt-[-38px] mb-[12px] rounded-[50%]"></div>
                  <div className="text-[16px] leading-[1.5] text-[#000000e6] font-semibold">
                     Welcome, {props.user ? props.user.displayName : "there!"}
                  </div>
               </a>
               <a>
                  <div className="text-[#0a66c2] mt-[4px] text-[12px] leading-[1.33] font-normal">
                     Add a photo
                  </div>
               </a>
            </div>
            <div className="border-[1px_solid_#00000026] py-[12px] font-semibold">
               <a className="no-underline flex justify-between items-center py-[4px] px-[12px] hover:bg-[#00000014]">
                  <div className="flex flex-col text-left">
                     <span className="text-[12px] leading-[1.33] text-[#0009]">
                        Connections
                     </span>
                     <span className="text-[12px] leading-[1.33] text-[black]">
                        Grow your network
                     </span>
                  </div>
                  <img src="/images/widget-icon.svg" alt="" />
               </a>
            </div>
            <a className="text-[#000000cc] text-left p-[12px] font-semibold text-[12px] block">
               <span className="flex items-center text-[black]">
                  <img src="/images/item-icon.svg" alt="" />
                  My Items
               </span>
            </a>
         </div>
         <div className="artCard font-semibold pt-[8px] px-0 pb-0 flex flex-col text-left">
            <a className="text-[black] px-[12px] py-[4px] text-[12px] hover:text-[#0a66c2]">
               <span className="flex items-center justify-between">Groups</span>
            </a>
            <a className="text-[black] px-[12px] py-[4px] text-[12px] hover:text-[#0a66c2]">
               <span className="flex justify-between items-center">
                  Events
                  <img src="images/plus-icon.svg" alt="" />
               </span>
            </a>
            <a className="text-[black] px-[12px] py-[4px] text-[12px] hover:text-[#0a66c2]">
               <span className="flex justify-between items-center">
                  Follows Hashtags
               </span>
            </a>
            <a className="text-[#00000099] no-underline border-t-[1px_solid_ #d6cec2] p-[12px] text-[12px] hover:bg-[#00000014]">
               <span className="flex justify-between items-center">
                  Discover more
               </span>
            </a>
         </div>
      </div>
   );
};
const Container = styled.div`
   grid-area: leftside;
`;
const ArtCard = styled.div`
   text-align: center;
   overflow: hidden;
   margin-bottom: 8px;
   background-color: #fff;
   border-radius: 5px;
   transition: box-shadow 83ms;
   position: relative;
   border: none;
   box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const UserInfo = styled.div`
   border-bottom: 1px solid rgba(0, 0, 0, 0.15);
   padding: 12px 12px 16px;
   word-wrap: break-word;
   word-break: break-word;
`;
const CardBackground = styled.div`
   background: url("/images/card-bg.svg");
   background-position: center;
   background-size: 462px;
   height: 54px;
   margin: -12px -12px 0;
`;
const Photo = styled.div`
   box-shadow: none;
   background-image: url("/images/photo.svg");
   width: 72px;
   height: 72px;
   box-sizing: border-box;
   background-clip: content-box;
   background-color: white;
   background-position: center;
   background-size: 60%;
   background-repeat: no-repeat;
   border: 2px solid white;
   margin: -38px auto 12px;
   border-radius: 50%;
`;
const Link = styled.div`
   font-size: 16px;
   line-height: 1.5;
   color: rgba(0, 0, 0, 0.9);
   font-weight: 600;
`;
const AddPhotoText = styled.div`
   color: #0a66c2;
   margin-top: 4px;
   font-size: 12px;
   line-height: 1.33;
   font-weight: 400;
`;
const Widget = styled.div`
   border-bottom: 1px solid rgba(0, 0, 0, 0.15);
   padding-top: 12px;
   font-weight: 600;
   padding-bottom: 12px;
   & > a {
      text-decoration: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 4px 12px;

      &:hover {
         background-color: rgba(0, 0, 0, 0.08);
      }

      div {
         display: flex;
         flex-direction: column;
         text-align: left;
         span {
            font-size: 12px;
            line-height: 1.333;
            &:first-child {
               color: rgba(0, 0, 0, 0.6);
            }
            &:nth-child(2) {
               color: rgba(0, 0, 0, 1);
            }
         }
      }
   }

   svg {
      color: rgba(0, 0, 0, 1);
   }
`;
const Item = styled.a`
   border-color: rgba(0, 0, 0, 0.8);
   text-align: left;
   padding: 12px;
   font-weight: 600;
   font-size: 12px;
   display: block;
   span {
      display: flex;
      align-items: center;
      color: rgba(0, 0, 0, 1);
      svg {
         color: rgba(0, 0, 0, 0.6);
      }
   }

   &:hover {
      background-color: rgba(0, 0, 0, 0.08);
   }
`;
const CommunityCard = styled(ArtCard)`
   font-weight: 600;
   padding: 8px 0 0;
   text-align: left;
   display: flex;
   flex-direction: column;
   a {
      color: black;
      padding: 4px 12px 4px 12px;
      font-size: 12px;

      &:hover {
         color: #0a66c2;
      }

      span {
         display: flex;
         align-items: center;
         justify-content: space-between;
      }

      &:last-child {
         color: rgba(0, 0, 0, 0.6);
         text-decoration: none;
         border-top: 1px solid #d6cec2;
         padding: 12px;
         &:hover {
            background-color: rgba(0, 0, 0, 0.08);
         }
      }
   }
`;

const mapStateToProps = (state) => {
   return {
      user: state.userState.user,
   };
};
export default connect(mapStateToProps)(Leftside);
