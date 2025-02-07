"use client"
import { Poppins } from "next/font/google"
import Button from "./Button"
import { useCart } from "@/context/CartContext";


const poppins = Poppins(
    {
        subsets: ['latin'],
        weight: "400",
        display: "swap"

    }
)

const CheckoutDetails = () => {
    const { totalPrice } = useCart();
    const { cart } = useCart()
    console.log(totalPrice)
    return (
        <div className={`flex flex-col w-full  px-10 py-24 ${poppins.className} space-y-5`}>
            <div className="section border-b-0.5 border-[#D9D9D9] space-y-2 pb-5  max-w-[500px]">
                <div className="item text-[20px] font-medium">
                    <h2>Product</h2>
                    <h2>Subtotal</h2>
                </div>

                <div className="item  flex flex-col">
                    {cart.map((item) => {
                        return (<div key={item.id} className="flex w-full justify-between ">
                            <p><span className="text-[#9F9F9F]">{item.name}</span>  x {item.quantity}</p>
                            <p>Rs. {item.price * item.quantity}</p>
                        </div>)
                    })}

                </div>

                <div className="item">
                    <p>Subtotal</p>
                    <p>Rs. {totalPrice}</p>
                </div>

                <div className="item">
                    <p>Total</p>
                    <p><span className="text-[#B88E2F] font-bold text-[22px]">Rs. {totalPrice}</span></p>
                </div>
            </div>

            {/* section 2 */}

            <div className="section border-b-0.5 border-[#D9D9D9] space-y-2 pb-5 max-w-[500px]">
                <ul className="">
                    <li className="space-x-2">
                        <input type="radio" id="bankTransfer" name="paymentMethod" value="bankTransfer" />
                        <label htmlFor="bankTransfer">Direct Bank Transfer</label>
                    </li>
                </ul>
                <p className="max-w-full w-full">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>
                <ul className="">
                    <li className="space-x-2">
                        <input type="radio" id="bankTransfer2" name="paymentMethod" value="bankTransfer" />
                        <label htmlFor="bankTransfer2">Direct Bank Transfer</label>
                    </li>
                    <li className="space-x-2">
                        <input type="radio" id="cashOnDelivery" name="paymentMethod" value="cashOnDelivery" />
                        <label htmlFor="cashOnDelivery">Cash On Delivery</label>
                    </li>
                </ul>
                <p>
                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                </p>
            </div>




























            <div className="flex justify-center  max-w-[500px]">
                <Button content="Log In"
                    classname="w-[180px] h-[55px] flex justify-center items-center border-1 border-black rounded-[15px] text-[18px] cursor-pointer " />
            </div>
        </div>
    )
}

export default CheckoutDetails