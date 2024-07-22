import { RiStarSFill } from "react-icons/ri";


const GenerateStars = (no) => {
    const stars = [];

    for (let i=0;i<no;i++){
        stars.push(<RiStarSFill className="rating-star" />)
    }

    return stars;
}

export default GenerateStars