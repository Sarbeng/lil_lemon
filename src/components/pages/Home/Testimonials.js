import { MdStars, MdStar } from "react-icons/md"

export default function Testimonials() {
    const testimonials = [
        {
            name: "Kwabena Anthem",
            image: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
            rating: 5,
            review: 'Amazing Service'
        },
        {
            name: "Joojo Essien",
            image: "https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_1280.jpg",
            rating: 4,
            review: 'Amazing Service'
        },
        {
            name: "Louisa McClean",
            image: "https://cdn.pixabay.com/photo/2016/01/13/22/46/boy-1139042_1280.jpg",
            rating: 4,
            review: 'Amazing Service'
        },
        {
            name: "Kwabena Essien",
            image: "https://cdn.pixabay.com/photo/2016/01/13/22/46/boy-1139042_1280.jpg",
            rating: 5,
            review: 'Amazing Service'
        },
    ]
    return <section className=" bg-primary-yellow px-4 md:px-[290px] mt-8 md:h-[590px] h-auto py-8 flex flex-col  justify-center items-center">
        <h2 className="font-markazi text-display text-center">Testimonials</h2>
        <section id="testimonials" className="flex gap-8 justify-between mt-16 flex-col  md:flex-row">
            {testimonials.map((card) => {
                return <section id="testiominal_card" className="bg-white  px-8 w-[200px] h-[175px] flex flex-col justify-center gap-4 rounded-lg" key={card.name}>
                    <h5 className="flex items-center">Rating: <span className="flex text-yellow-500"><MdStar /><MdStar /><MdStar /><MdStar /><MdStar /></span></h5>
                    <section className="flex gap-2">
                        <img src={card.image} alt="" className="w-8 h-8 rounded-full" />
                        <p className="text-sm font-bold">{card.name}</p>
                    </section>
                    <p className="text-sm">{card.review}</p>
                </section>
            })}
        </section>
    </section>
}