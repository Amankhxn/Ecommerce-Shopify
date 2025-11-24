import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const reviews = [
    {
        id: 1,
        name: "John Doe",
        rating: 5,
        text: "Amazing jacket! Fits perfectly and quality is top-notch.",
        date: "2 weeks ago",
    },
    {
        id: 2,
        name: "Sameer Khan",
        rating: 4,
        text: "Good quality but delivery was slow.",
        date: "1 month ago",
    },
];

export default function ReviewTab({review_count}) {
    const [sortOpen, setSortOpen] = useState(false);

    return (
        <div className=" max-w-xl">

            <h2 className="text-2xl font-semibold flex items-center gap-3">
                ⭐ 4.6 <span className="text-gray-600 text-base">({review_count} Reviews)</span>
            </h2>
            <p className="text-gray-500 mb-4">76% people recommend this product</p>






            <div className="mt-6 space-y-6">
                {reviews.map((review) => (
                    <div key={review.id} className=" pb-4">
                        <div className="flex items-center gap-3">
                            <img
                                src={`https://i.pravatar.cc/50?img=${review.id}`}
                                className="w-10 h-10 rounded-full"
                                alt="user avatar"
                            />
                            <div>
                                <p className="font-medium">{review.name}</p>
                                <p className="text-gray-500 text-sm">{review.date}</p>
                            </div>
                        </div>

                        <div className="flex text-yellow-500 mt-2">
                            {[...Array(review.rating)].map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>

                        <p className="mt-2 text-gray-700">{review.text}</p>
                    </div>
                ))}
            </div>

            <button className="mt-6 text-black font-semibold underline hover:text-red-500 transition">
                Load more
            </button>
        </div>
    );
}
