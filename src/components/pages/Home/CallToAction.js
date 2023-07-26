export default function CallToAction() {
    return (
      
        
      
     <section className=" bg-primary-green px-4 md:px-[290px] py-12 text-white flex flex-col md:flex-row md:h-[406px] h-[700px] justify-between gap-12">
        <section id="content" className="w-1/2 flex flex-col gap-6">
            <h1 className="font-markazi md:text-display text-6xl w-screen md:w-full font-medium text-primary-yellow">Little Lemon </h1>
            <h3 className="font-markazi font-normal text-[40px] md:-mt-12 -mt-8 text-4xl">Chicago</h3>
            <p className="w-screen md:w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="capitalize bg-primary-yellow text-lead-text  text-highlights-black rounded-[5px] h-[48px] px-8 py-3 w-[200px]">Reserve a table</button>
        </section>
        <section id="image" className="">
            <img src="../../../assets/restauranfood.jpg" alt="restaurant food" className="w-[375px] h-[420px] rounded-2xl"/>
        </section>
     </section>
     
    );
}