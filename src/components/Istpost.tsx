import Image from "next/image"
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { PiCalendarBlankFill } from "react-icons/pi";
import { Poppins } from "next/font/google";
const poppins = Poppins(
    {
        subsets: ['latin'],
        weight: "400",
        display: "swap"

    }
)
interface Props {
    src: string;
    span: string;
    h1Text: string
}



const Istpost = ({ src, span, h1Text }: Props) => {
    return (
        <div className='w-full'>
            <div className="max-w-full w-full h-[400px] rounded-lg">
                <Image src={src} alt="blog-image" width={500} height={500}
                    className="w-full h-full object-cover  rounded-xl"
                />
            </div>

            <div className={`${poppins.className} flex  flex-col space-y-3`}>

                <div className="flex space-x-5 text-[#9f9f9f]">
                    <div className="flex items-center space-x-1">
                        <FaUserAlt />
                        <span>Admin</span>
                    </div>

                    <div className="flex items-center space-x-1">
                        <PiCalendarBlankFill />
                        <span>14 Oct 2022</span>
                    </div>

                    <div className="flex items-center space-x-1">
                        <PiCalendarBlankFill />
                        <span>{span}</span>
                    </div>

                </div>

                <h1 className="font-bold text-[20px]">{h1Text}</h1>
                <p className="text-[#9f9f9f] text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet ipsum culpa assumenda, vitae quam saepe atque laboriosam! Ex ea maiores cum libero fuga porro sunt obcaecati excepturi quo architecto.
                    Sint officia necessitatibus facilis, quia fugiat quisquam a? Ex voluptatum commodi iste cumque non numquam esse perferendis explicabo quibusdam, eos laboriosam expedita quidem possimus totam dolores! Itaque nam dolorum maiores.!</p>
                <div >
                    <Link href="#" className={`text-[20px] font-semibold border-b-2 border-b-[#000000]`}>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default Istpost