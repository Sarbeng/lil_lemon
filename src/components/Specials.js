import greekSalad from "../assets/greek salad.jpg";
import bruscheta from "../assets/bruchetta.png";
import lemonDessert from "../assets/lemon dessert.jpg";
import bike from "../assets/bike.svg"

export default function Specials() {
    const card_content = [
        {
            title: "Greek salad",
            price: "$12.99",
            image: greekSalad,
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
        },
        {
            title: "Bruscheta",
            price: "$5.99",
            image: bruscheta,
            description: "Our Bruscheta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        },
        {
            title: "Lemon Desert",
            price: "$5.00",
            image: lemonDessert,
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        }
    ]
    return (
        <section className="md:px-[290px] mt-24">
            <section id="title" className="flex justify-between mb-[60px]">
                <h1 className="font-markazi text-display text-7xl">This week Specials!</h1>
                <button className="capitalize bg-primary-yellow text-lead-text  text-highlights-black rounded-2xl h-16 px-8 w-[200px] ">Online Menu</button>
            </section>
            <section id="card-collection" className="flex gap-8">
                {card_content.map((cards) => {
                    return <section id="card" key={cards.description} className="w-[265px] rounded-2xl bg-highlights-grey">
                        <img src={cards.image} alt="img placeholder" className="rounded-t-2xl w-full h-[227px] bg-cover bg-no-repeat" />
                        <section className="p-6">
                            <section className="flex justify-between mb-7">
                                <h4 className="text-card-title text-black">{cards.title}</h4>
                                <p className="text-section-categories text-secondary-orange">{cards.price}</p>
                            </section>
                            <p className="text-paragraph-text text-primary-green mb-4 h-[120px]">{cards.description}</p>
                            <section className="flex items-center gap-2">
                                <p className="text-highlight-text font-bold">Order a delivery</p>
                                <img src={bike} alt="a bike icon" />
                            </section>
                        </section>
                    </section>
                })}
            </section>
        </section>
    );
}