"use client";

import Image from "next/image";
import Size from "@/components/Size";
import Color from "@/components/Color";
import { useCart } from "@/context/CartContext";
import Descriptive from "./Descriptive";

interface Product {
  id: string;
  name: string;
  imagePath: string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

interface ProductDetailsProps {
  product: Product;
  relatedProducts: Product[];
}

const ProductDetails = ({ product, relatedProducts }: ProductDetailsProps) => {
  const { addToCart } = useCart();
  const {addToFavourite} = useCart();

  return (
    <div>
      <div className="w-full h-[100px]">
        <p className="pl-[60px] text-sm sm:text-base md:text-lg">
          <span className="text-[#9F9F9F] mx-2">Home</span>
          {" > "}
          <span className="text-[#9F9F9F] mx-2">Shop</span> | {product.description}
        </p>
      </div>
      <section className="px-[20px] md:px-[50px]">
        <div className="flex flex-col items-center justify-center lg:flex lg:flex-row lg:justify-between">
          {/* Image Section */}
          <div className="left flex flex-col lg:flex-row justify-center items-center gap-5 lg:w-[700px]">
            <div className="w-full sm:w-[150px] md:w-[200px] lg:w-[76px] h-auto flex justify-center items-center lg:flex lg:flex-col lg:justify-center bg-black">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="w-[50%] lg:w-full">
                  <Image src={product.imagePath} alt="product-image" width={200} height={200} className="w-full" />
                </div>
              ))}
            </div>
            <div className="w-full sm:w-[481px] h-auto bg-[#FFF9E5] rounded-lg">
              <Image src={product.imagePath} alt="product-image" width={200} height={200} className="w-full h-full" />
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full md:w-[500px] mt-[60px] md:mt-0 md:h-auto border-b-2 border-[#D9D9D9] mr-[50px]">
            <div className="py-8">
              <h1 className="font-bold text-[24px] mb-[10px]">{product.description}</h1>
              <h4 className="text-[#9F9F9F] mb-[10px]">RS. {product.price}</h4>
              <Size />
              <Color />
              <div className="btn-cart flex gap-3 mt-[30px]">
                {/* <div className="w-[123px] h-[64px] rounded-lg border border-[#9F9F9F] flex justify-evenly items-center">
                  <button>-</button>
                  <div>1</div>
                  <button>+</button>
                </div> */}
                <button
                  className="px-[40px] text-black py-[10px] rounded-md border-2 border-[#000000] rounded-2"
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      imagePath: product.imagePath,
                      price: product.price,
                      quantity: 1,
                    })
                  }
                >
                  Add To Cart
                </button>


                <button
                  className="px-[40px] text-black py-[10px] border-2 rounded-md border-[#000000] rounded-2"
                  onClick={() =>
                    addToFavourite({
                      id: product.id,
                      name: product.name,
                      imagePath: product.imagePath,
                      price: product.price,
                      quantity: 1,
                    })
                  }
                >
                  Add To Favourite
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Descriptive pics={product.imagePath} relatedProData={relatedProducts} />
    </div>
  );
};

export default ProductDetails;
