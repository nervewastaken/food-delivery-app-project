
import Image from "next/image";
import MenuItem from "../components/menu-items/mixedfruit";
import SectionHeader from "../components/layout/SectionHeader";
import Header from "../components/layout/header";
import Shopcart from "../components/layout/cartify";

export default function HomeMenu(){
    return(
        <section className="">
            <Header/>
                <div className="text-center mb-4"> 
                    <SectionHeader subHeader={'check out'}
                    mainHeader={'Menu'}></SectionHeader>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>

                </div>
                
                <Shopcart/>
                

            
            
        </section>
    )
}