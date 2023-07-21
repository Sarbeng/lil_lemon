import greekSalad from "../assets/greek salad.jpg";
import bruscheta from "../assets/bruchetta.png";
import lemonDessert from "../assets/lemon dessert.jpg"

export default function Specials() {
    const card_content = [
        {
            title:"Greek salad",
            price:"$12.99",
            image:greekSalad,
            description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
        },
        {
            title:"Bruscheta",
            price:"$5.99",
            image:bruscheta,
            description:"Our Bruscheta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        },
        {
            title:"Lemon Desert",
            price:"$5.00",
            image:lemonDessert,
            description:"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        }
    ]
    return (
        <section  className="md:px-[290px] mt-24">
            <section id="title" className="flex justify-between">
                <h1 className="font-markazi text-display text-7xl">This week Specials!</h1>
                <button className="capitalize bg-primary-yellow text-lead-text  text-highlights-black rounded-2xl h-16 px-8 w-[200px] ">Online Menu</button>
            </section>
            <section>
        
            </section>
        </section>
    );
}