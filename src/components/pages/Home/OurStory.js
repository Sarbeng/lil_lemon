
import mario_and_adrian_a from "./assets/Mario_and_Adrian_A.jpg"
import mario_and_adrian_b from "./assets/Mario and Adrian b.jpg"
export default function OurStory() {
    return (
      
        
      
    <section className="flex justify-center items-center h-[590px]">
         <section className=" px-[290px] py-20 text-white flex justify-between gap-14">
        <section id="content" className="w-1/2 flex flex-col gap-6">
            <h1 className="font-markazi text-display font-medium  text-black ">Little Lemon </h1>
            <h3 className="font-markazi font-normal text-[40px] text-black  -mt-12">Chicago</h3>
            <p className="text-black">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
        </section>
        <section id="image" className=" w-1/2 flex ">
            <img src={mario_and_adrian_a} alt="restaurant food" className="w-[268px] h-[336px] rounded-2xl absolute ml-36 object-cover object-right"/>
            <img src={mario_and_adrian_b} alt="restaurant food" className="w-[268px] h-[336px] rounded-2xl absolute  -z-20 mt-20 object-cover object-right-bottom"/>
        </section>
     </section>
    </section>
     
    );
}