

import { Form } from "@/components/ui/form";
import SectionHeader from "../components/layout/SectionHeader";
import Header from "../components/layout/header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Chat from "../components/icons/chat";



export default function ContactUs() {
  
  return (
    <>
      <Header />
      <SectionHeader subHeader={'Like Our Options?'} mainHeader={'Contact Us now!'}></SectionHeader>

      <div className="flex items-center space-x-4">

        <Chat/> <div className="">Whatsapp - <a href="https://wa.me/+917738730303">7738730303</a></div>
        <div>
        
      </div>

      <div className="flex items-center space-x-4 ">
      <Chat/> <div> Phone    - <a href="phone:7738730303">7738730303</a></div>
        </div>
      </div>

      <div>
        <SectionHeader subHeader={'Want something different?'} mainHeader={'Let us Know!'}>
        </SectionHeader>
        <Form >
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" />
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" />
          <Label htmlFor="name">Name</Label>
          <Input id="name"/>
          <div id="r">
          <Button type="submit">Submit</Button>
          </div>
        </Form>
      </div>
    </>
  );
}
