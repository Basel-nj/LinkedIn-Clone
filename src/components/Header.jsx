// import styled from "styled-components";
import { connect } from "react-redux";
import { signOutAPI } from "../redux/actions";

const Header = (props) => {
   return (
      <div className="bg-[white] border-b-[1px] border-[#00000014] fixed top-0 left-0 p-[15px] pb-0 md:px-[24px] w-[100vw] z-[100]">
         <div className="flex items-center my-0 mx-auto min-h-full max-w-[1128px]">
            <span className="mr-[8px]">
               <a href="/home">
                  <img src="/images/home-logo.svg" alt="" />
               </a>
            </span>
            <div className="opacity-[1] flex-grow relative">
               <div className="max-w-[280px]">
                  <input
                     type="text"
                     placeholder="Search"
                     className="border-none shadow-none bg-[#eef3f8] rounded-[2px] font-[#000000e6] w-[218px] py-0 pr-[8px] pl-[40px] leading-[1.75] font-normal text-[14px] h-[34px] border-[#dce6f1] align-text-top"
                  />
                  <div className="w-[40px] absolute z-[1] top-[10px] left-[2px] rounded-[0px_2px_2px_0px] m-0 pointer-events-none flex justify-center items-center">
                     <img src="/images/search-icon.svg" alt="" />
                  </div>
               </div>
            </div>
            <nav className="ml-auto px-[10px] fixed left-0 bottom-0 w-full block bg-[#e4e4e4;] lg:bg-transparent lg:static lg:w-[inherit]">
               <ul className="flex justify-evenly items-center flex-nowrap">
                  <li className="active flex items-center">
                     <a className="navbarAnchor">
                        <img src="/images/nav-home.svg" alt="" />
                        <span>Home</span>
                     </a>
                  </li>
                  <li className="flex items-center">
                     <a className="navbarAnchor">
                        <img src="/images/nav-network.svg" alt="" />

                        <span>My Network</span>
                     </a>
                  </li>
                  <li className="flex items-center">
                     <a className="navbarAnchor">
                        <img src="/images/nav-jobs.svg" alt="" />

                        <span>Jobs</span>
                     </a>
                  </li>
                  <li className="flex items-center">
                     <a className="navbarAnchor">
                        <img src="/images/nav-messaging.svg" alt="" />

                        <span>Messaging</span>
                     </a>
                  </li>
                  <li className="flex items-center">
                     <a className="navbarAnchor">
                        <img src="/images/nav-notifications.svg" alt="" />
                        <span>Notifications</span>
                     </a>
                  </li>
                  <li className="group flex items-center">
                     <a className="navbarAnchor">
                        {props.user && props.user.photoURL ? (
                           <img
                              src={props.user.photoURL}
                              className="w-[24px] h-[24px] rounded-[50%]"
                           />
                        ) : (
                           <img
                              src="/images/user.svg"
                              alt=""
                              className="w-[24px] rounded-[50%]"
                           />
                        )}

                        <span className="flex items-center">
                           Me
                           <img src="/images/down-icon.svg" alt="" />
                        </span>
                     </a>

                     <div
                        onClick={() => props.signOut()}
                        className="absolute lg:top-[60px] bg-[white] lg:rounded-[0_0_5px_5px] w-[100px] h-[40px] text-[16px] duration-[0.2s] text-center hidden cursor-pointer md:absolute right-[15px] top-[-40px] md:rounded-[5px_5px_0_0] md:bg-[#eee] group-hover:flex group-hover:items-center group-hover:justify-center"
                     >
                        <a>Sign Out</a>
                     </div>
                  </li>
                  <li className="flex items-center">
                     <a className="navbarAnchor">
                        <img src="/images/nav-work.svg" alt="" />
                        <span>
                           Work
                           <img
                              src="/images/down-icon.svg"
                              alt=""
                              className="inline"
                           />
                        </span>
                     </a>
                  </li>
               </ul>
            </nav>
         </div>
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      user: state.userState.user,
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      signOut: () => dispatch(signOutAPI()),
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
