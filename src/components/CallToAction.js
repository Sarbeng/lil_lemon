export default function CallToAction() {
    return (
      
        
      
     <section className="bg-primary-green px-[290px] py-12 text-white flex h-[406px] justify-between">
        <section id="content" className="w-[280px] flex flex-col gap-6">
            <h1 className="font-markazi text-display font-medium leading-3  text-primary-yellow">Little Lemon </h1>
            <h3 className="font-markazi font-normal text-[40px] ">Chicago</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="capitalize bg-primary-yellow text-lead-text  text-highlights-black rounded-[5px] h-[48px] px-8 py-3 w-[200px]">Reserve a table</button>
        </section>
        <section id="image">
            <img src="../assets/restauranfood.jpg" alt="restaurant food" className="w-[375px] h-[420px] rounded-2xl"/>
        </section>
     </section>
     
    );
}