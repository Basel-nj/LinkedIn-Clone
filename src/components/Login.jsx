import { useEffect } from "react";
import { signInAPI } from "../redux/actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
   const navigate = useNavigate();

   useEffect(() => {
      props.user && navigate("/home");
   }, [props.user]);

   return (
      <div className="">
         <nav className="max-w-[1128px] mx-auto px-[50px] pt-[30px] pb-[16px] flex items-center flex-wrap justify-center sm:justify-between">
            <a href="#" className="w-[135px] h-[34px] px-[5px] md:px-0">
               <img src="/images/login-logo.svg" alt="" />
            </a>
            <div className="mt-[20px] sm:mt-0">
               <a
                  href="#"
                  className="text-[16px] py-[10px] px-[12px] no-underline rounded-[4px] text-[#00000099] mr-[12px] hover:bg-[#00000014] hover:text-[#000000e6]"
               >
                  Join now
               </a>
               <a className="text-[#0a66c2] rounded-[24px] duration-[0.2s] text-[16px] font-bold px-[24px] py-[10px] text-center bg-[#00000000] shadow-[inset_0px_0px_0px_1px_#0a66c2] leading-[40px] hover:bg-[#70b5f926] hover:text-[#0a66c2] no-underline cursor-pointer">
                  Sign in
               </a>
            </div>
         </nav>
         <section className="m-auto px-[50px] min-h-[700px] md:min-h-0 md:pt-[60px] lg:pt-[40px] ">
            <div className="w-full flex justify-between items-center md:text-center md:flex-col lg:flex-row">
               <div className="pt-[40px] md:mb-[40px] lg:self-start lg:mb-0">
                  <h1 className="pb-0 text-[38px] text-[#2977c9] self-start font-normal leading-[70px] md:text-left text-center md:text-[46px] lg:text-[56px]">
                     Welcome to your professional community
                  </h1>
                  <div className="w-full mt-[100px] mx-auto sm:w-[400px] md:mt-[30px] lg:mt-[100px]">
                     <button
                        onClick={() => props.signIn()}
                        className="flex items-center justify-center mx-auto h-[65px] w-full bg-[#fff]  rounded-[28px] shadow-[inset_0_0_0_1px_#002] duration-[0.2s] text-[20px] text-[#00000099] hover:bg-[#cfcfcf40] hover:text-[#000000bf]"
                     >
                        <img
                           src="/images/google.svg"
                           alt=""
                           className="mr-[10px]"
                        />
                        Sign in with Google
                     </button>
                  </div>
               </div>

               <img
                  src="/images/login-hero.svg"
                  alt=""
                  className="w-[40%] h-[40%] hidden md:block"
               />
            </div>
         </section>
      </div>
   );
};

// const Container = styled.div`
//   padding: 0px;
// `;

// const Nav = styled.nav`
//    max-width: 1128px;
//    padding: 12px 0 16px;
//    display: flex;
//    align-items: center;
//    position: relative;
//    justify-content: space-between;
//    flex-wrap: nowrap;
//    & > a {
//       width: 135px;
//       height: 34px;
//       @media (max-width: 768px) {
//          padding: 0 5px;
//       }
//    }
// `;

// const Join = styled.a`
//    font-size: 16px;
//    padding: 10px 12px;
//    text-decoration: none;
//    border-radius: 4px;
//    color: rgba(0, 0, 0, 0.6);
//    margin-right: 12px;
//    &:hover {
//       background-color: rgba(0, 0, 0, 0.08);
//       color: rgba(0, 0, 0, 0.9);
//       text-decoration: none;
//    }
// `;
// const SignIn = styled.a`
//    box-shadow: inset 0 0 0 1px #0a66c2;
//    color: #0a66c2;
//    border-radius: 24px;
//    transition-duration: 167ms;
//    font-size: 16px;
//    font-weight: 600;
//    line-height: 40px;
//    padding: 10px 24px;
//    text-align: center;
//    background-color: rgba(0, 0, 0, 0);
//    &:hover {
//       background-color: rgba(112, 181, 249, 0.15);
//       color: #0a66c2;
//       text-decoration: none;
//    }
// `;
// const Section = styled.section`
//    display: flex;
//    align-content: start;
//    min-height: 700px;
//    padding-bottom: 130px;
//    padding-top: 40px;
//    padding: 40px 0;
//    position: relative;
//    flex-wrap: wrap;
//    width: 100%;
//    max-width: 1128px;
//    margin: auto;
//    @media (max-width: 768px) {
//       margin: auto;
//       min-height: 0px;
//    }
// // `;
// const Hero = styled.div`
//    width: 100%;
//    h1 {
//       padding-bottom: 0;
//       width: 55%;
//       font-size: 56px;
//       color: #2977c9;
//       font-weight: 200;
//       line-height: 70px;
//       @media (max-width: 768px) {
//          text-align: center;
//          font-size: 22px;
//          width: 100%;
//          line-height: 2;
//       }
//    }
//    img {
//       width: 700px;
//       height: 670px;
//       position: absolute;
//       bottom: -2px;
//       right: -150px;
//       @media (max-width: 768px) {
//          top: 230px;
//          width: initial;
//          position: initial;
//          height: initial;
//       }
//    }
// `;
// const Form = styled.div`
//    margin-top: 100px;
//    width: 400px;
//    @media (max-width: 768px) {
//       margin-top: 20px;
//    }
// // `;
// const Google = styled.button`
//    display: flex;
//    justify-content: center;
//    background-color: #fff;
//    align-items: center;
//    height: 56px;
//    width: 100%;
//    border-radius: 28px;
//    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 /0%),
//       inset 0 0 0 1px rgb(0 0 0 / 0%);
//    vertical-align: middle;
//    z-index: 0;
//    transition-duration: 167ms;
//    font-size: 20px;
//    color: rgba(0, 0, 0, 0.6);
//    &:hover {
//       background-color: rgba(207, 207, 207, 0.25);
//       color: rgba(0, 0, 0, 0.75);
//    }
// `;
const mapStateToProps = (state) => {
   return {
      user: state.userState.user,
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      signIn: () => dispatch(signInAPI()),
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
