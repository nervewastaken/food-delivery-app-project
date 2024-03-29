import SectionHeader from "../components/layout/SectionHeader";
import Header from "../components/layout/header";

export default function aboutus(){
    return(
        <>
        <Header/>
        <div className="container mx-auto my-10 p-8 bg-white shadow-lg">
        <SectionHeader subHeader={'Our Story'} mainHeader={'About Us'}></SectionHeader>
        <p className="text-lg leading-relaxed">
          Welcome to our company! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
        </>

        
    );
}