"use client"
import Image from "next/image";
import Link from "next/link";
import { Poppins } from 'next/font/google'
import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";
// import product from "@/sanity/schemaTypes/product";
// import { StaticImport } from "next/dist/shared/lib/get-img-props";
// import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";


const poppins = Poppins(
  {
    subsets: ['latin'],
    weight: "400",
    display: "swap"

  }
)

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
interface Props {
  search: string;
  filter: string
}



const Shopcards = ({ search, filter }: Props) => {
  // defining usestate hook to store fetched API data
  const [products, setProducts] = useState<null | Product[]>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  //defining useeffect hook to fetch data from sanity
  useEffect(() => {

    const fetchDataFromSanity = async () => {
      try {
        const products: Product[] = await client.fetch(`*[_type == "product" ]{
           id,
      name,
      imagePath,
      price,
      description,
      discountPercentage,
      isFeaturedProduct,
      stockLevel,
      category
      }`)
        setProducts(products)

      } catch (error) {
        setError('Failed to fetch Data')

      } finally {
        setLoading(false);
      }
    }
    fetchDataFromSanity()
  }, [])
  console.log(products)

  if (loading) {
    return <p className="flex justify-center items-center font-bold text-4xl">Loading...</p>
  }
  if (error) {
    return <p>{error}</p>
  }



  return (


    <>
      <div className='flex  gap-4 flex-col flex-wrap md:p-[30px] md:flex md:flex-row '>

        {products &&
          products.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
          })
            .filter((item) => {
              return item.category.toLowerCase().includes(filter.toLowerCase())
            })
            .map((product: Product) => {
              return <Link
                key={product.id}
                href={`/shop/${product.id}`}>
                <div className='flex flex-col cursor-pointer md:w-[287px]
        md:h-[500px]
        '>
                  <div className="h-[70%] rounded-t-lg overflow-hidden">
                    <Image
                      src={product.imagePath} alt='top-pic' width={300} height={300}
                      className="w-full h-full object-cover hover:scale-105 duration-300 rounded-t-lg"

                    />
                  </div>

                  <div className={`${poppins.className} p-5 text-center`}>
                    <p className='md:text-[20px] font-bold'>{product.name}</p>

                    <p className='md:text-[16px] '>{`RS. ${product.price}`}</p>



                    <p>{`Stock ${product.stockLevel}`}</p>
                  </div>

                </div>
              </Link>

            })}
      </div>



      <div className="flex justify-center mt-[50px] gap-10 items-center">
        <div className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-[#FFF9E5] flex justify-center items-center">1</div>
        <div className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-[#FFF9E5] flex justify-center items-center">2</div>
        <div className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-[#FFF9E5] flex justify-center items-center">2</div>
        <div className="w-[78px] md:w-[98px] h-[40px] md:h-[60px] bg-[#FFF9E5] flex justify-center items-center">Next</div>
      </div>
    </>
  )
}

export default Shopcards










// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { Poppins } from "next/font/google";
// import { client } from "@/sanity/lib/client";
// import { useState, useEffect } from "react";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: "400",
//   display: "swap",
// });

// interface Product {
//   id: string;
//   name: string;
//   imagePath: string;
//   price: number;
//   description: string;
//   discountPercentage: number;
//   isFeaturedProduct: boolean;
//   stockLevel: number;
//   category: string;
// }

// interface Props {
//   search: string;
//   filter: string;
// }

// const ITEMS_PER_PAGE = [13, 2, 5]; // Products per page for Page 1, Page 2, and remaining pages

// const Shopcards = ({ search, filter }: Props) => {
//   const [products, setProducts] = useState<null | Product[]>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [currentPage, setCurrentPage] = useState<number>(1);

//   useEffect(() => {
//     const fetchDataFromSanity = async () => {
//       try {
//         const products: Product[] = await client.fetch(`*[_type == "product" ]{
//           id,
//           name,
//           imagePath,
//           price,
//           description,
//           discountPercentage,
//           isFeaturedProduct,
//           stockLevel,
//           category
//         }`);
//         setProducts(products);
//       } catch (error) {
//         setError("Failed to fetch Data");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDataFromSanity();
//   }, []);

//   const getPaginatedProducts = () => {
//     if (!products) return [];

//     // Calculate the range of products for the current page
//     const offset = ITEMS_PER_PAGE.slice(0, currentPage - 1).reduce((a, b) => a + b, 0);
//     const limit = ITEMS_PER_PAGE[currentPage - 1] || 5; // Default to 5 for additional pages

//     return products.slice(offset, offset + limit);
//   };

//   if (loading) {
//     return <p className="flex justify-center items-center font-bold text-4xl">Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <>
//       <div className="flex gap-4 flex-col flex-wrap md:p-[30px] md:flex md:flex-row">
//         {getPaginatedProducts()
//           .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
//           .filter((item) => item.category.toLowerCase().includes(filter.toLowerCase()))
//           .map((product: Product) => (
//             <Link key={product.id} href={`/shop/${product.id}`}>
//               <div
//                 className="flex flex-col cursor-pointer md:w-[287px]
//         md:h-[500px]"
//               >
//                 <div className="h-[70%] rounded-t-lg overflow-hidden">
//                   <Image
//                     src={product.imagePath}
//                     alt="top-pic"
//                     width={300}
//                     height={300}
//                     className="w-full h-full object-cover hover:scale-105 duration-300 rounded-t-lg"
//                   />
//                 </div>
//                 <div className={`${poppins.className} p-5 text-center`}>
//                   <p className="md:text-[20px] font-bold">{product.name}</p>
//                   <p className="md:text-[16px] ">{`RS. ${product.price}`}</p>
//                   <p>{`Stock ${product.stockLevel}`}</p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-center mt-[50px] gap-10 items-center">
//         {/* Previous Button */}
//         <button
//           className={`w-[78px] md:w-[98px] h-[40px] md:h-[60px] bg-[#FFF9E5] flex justify-center items-center ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>

//         {/* Page Numbers */}
//         {products &&
//           Array.from({ length: Math.ceil(products.length / ITEMS_PER_PAGE[0]) }, (_, index) => (
//             <button
//               key={index}
//               className={`w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-[#FFF9E5] flex justify-center items-center ${currentPage === index + 1 ? "bg-black text-white" : ""
//                 }`}
//               onClick={() => setCurrentPage(index + 1)}
//             >
//               {index + 1}
//             </button>
//           ))}

//         {/* Next Button */}
//         <button
//           className={`w-[78px] md:w-[98px] h-[40px] md:h-[60px] bg-[#FFF9E5] flex justify-center items-center ${currentPage === ITEMS_PER_PAGE.length ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           onClick={() =>
//             setCurrentPage((prev) =>
//               prev <Math.ceil(products.length / ITEMS_PER_PAGE[0]) ? prev + 1 : prev
//             )
//           }
//           disabled={currentPage === Math.ceil(products.length / ITEMS_PER_PAGE[0])}
//         >
//           Next
//         </button>
//       </div>
//     </>
//   );
// };

// export default Shopcards;




























// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { Poppins } from "next/font/google";
// import { client } from "@/sanity/lib/client";
// import { useState, useEffect } from "react";
// import PaginationButton from "./Pagination";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: "400",
//   display: "swap",
// });

// interface Product {
//   id: string;
//   name: string;
//   imagePath: string;
//   price: number;
//   description: string;
//   discountPercentage: number;
//   isFeaturedProduct: boolean;
//   stockLevel: number;
//   category: string;
// }

// interface Props {
//   search: string;
//   filter: string;
// }

// const Shopcards = ({ search, filter }: Props) => {
//   const [products, setProducts] = useState<Product[] | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [currentPage, setCurrentPage] = useState<number>(1); // Tracks current page
//   const productsPerPage = [13, 2, 2, 2, 2]; // Number of products for each page

//   useEffect(() => {
//     const fetchDataFromSanity = async () => {
//       try {
//         // await new Promise(resolve => setTimeout(resolve, 5000));
//         const products: Product[] = await client.fetch(
//           `*[_type == "product" ]{
//             id,
//             name,
//             imagePath,
//             price,
//             description,
//             discountPercentage,
//             isFeaturedProduct,
//             stockLevel,
//             category
//           }`
//         );
//         setProducts(products);
//       } catch (error) {
//         setError("Failed to fetch data");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDataFromSanity();
//   }, []);

//   if (loading) {
//     return <p className="flex justify-center items-center font-bold text-4xl">Loading...</p>;
//   }
//   if (error) {
//     return <p>{error}</p>;
//   }

//   // Filter products based on search and filter inputs
//   const filteredProducts = products
//     ?.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
//     .filter((item) => item.category.toLowerCase().includes(filter.toLowerCase())) || [];

//   // Determine start and end indices for the current page
//   const startIndex = productsPerPage.slice(0, currentPage - 1).reduce((a, b) => a + b, 0);
//   const endIndex = startIndex + productsPerPage[currentPage - 1];
//   const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

//   return (
//     <>
//       <div className="flex flex-col justify-between gap-4 px-7 py-10  space-y-10 md:space-x-0 md:space-y-0 flex-wrap md:p-[30px] md:flex md:flex-row">
//         {paginatedProducts.map((product: Product) => (
//           <Link key={product.id} href={`/shop/${product.id}`}>
//             <div className="flex flex-col cursor-pointer  h-[400px] md:mt-10 md:w-[287px] md:h-[500px]
//              hover:scale-105 duration-300 rounded-t-lg hover:shadow-2xl
//             ">
//               <div className="h-[70%] rounded-t-lg overflow-hidden">
//                 <Image
//                   src={product.imagePath}
//                   alt="product image"
//                   width={300}
//                   height={300}
//                   className="w-full h-full object-cover hover:scale-105 duration-300 rounded-t-lg"
//                 />
//               </div>
//               <div className={`${poppins.className}  p-5 text-center`}>
//                 <p className="md:text-[20px] font-bold">{product.name}</p>
//                 <p className="md:text-[16px]">{`RS. ${product.price}`}</p>
//                 <p>{`Stock: ${product.stockLevel}`}</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>


//       <div className="flex justify-center  mb-10 mt-[50px] gap-5 items-center">
//         {productsPerPage.map((_, index) => (
//           <PaginationButton
//             key={index}
//             isActive={currentPage === index + 1}
//             pageNumber={index + 1}
//             onClick={() => setCurrentPage(index + 1)}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default Shopcards;









