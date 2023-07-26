
import mario_and_adrian_a from "./assets/Mario_and_Adrian_A.jpg"
import mario_and_adrian_b from "./assets/Mario and Adrian b.jpg"
export default function OurStory() {
    return (



        <section className="flex flex-col md:flex-row justify-center  md:h-[590px] h-auto mt-16 mb-96 md:mb-0">
            <section className=" md:px-[290px] px-4 md:py-16 text-white flex flex-col md:flex-row justify-between gap-14">
                <section id="content" className="w-1/2 flex flex-col gap-6">
                    <h1 className="font-markazi md:text-display text-6xl w-screen md:w-full font-medium  text-primary-yellow   ">Little Lemon </h1>
                    <h3 className="font-markazi font-normal text-[40px] text-highlights-black  -mt-12">Chicago</h3>
                    <p className="text-highlights-black w-screen md:w-full">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </section>
                <section id="image" className=" w-1/2 flex flex-col md:flex-row  justify-start items-baseline">
                    <img src={mario_and_adrian_a} alt="restaurant food" className="w-48 h-64 md:w-[268px] md:h-[336px] rounded-2xl absolute ml-36 object-cover object-right" />
                    <img src={mario_and_adrian_b} alt="restaurant food" className=" w-48 h-64 md:w-[268px] md:h-[336px] rounded-2xl absolute  -z-20 mt-20 object-cover object-right-bottom" />
                </section>
            </section>
        </section>

    );
}