import { Poppins } from "next/font/google";
import { client } from "@/sanity/lib/client";
import ProductDetails from "@/components/ProductDetails"; // Ensure the file name matches

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

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

export default async function DynamicPage({ params }: { params: { id: string } }) {
  const { id } = params;

  try {
    // Fetch product and related products from Sanity
    const products: Product[] = await client.fetch(`*[_type == "product"]{
      id,
      name,
      imagePath,
      price,
      description,
      discountPercentage,
      isFeaturedProduct,
      stockLevel,
      category
    }`);

    const existProduct = products.find((product) => product.id === id);
    if (!existProduct) {
      return <div>Product Not Found</div>;
    }

    const relatedProduct: Product[] = await client.fetch(
      `*[_type == "product" && category == $category && id != $id]{
        id,
        name,
        imagePath,
        price,
        description,
        discountPercentage,
        isFeaturedProduct,
        stockLevel,
        category
      }`,
      { category: existProduct.category, id: existProduct.id }
    );

    return (
      <div className={`${poppins.className}`}>
        <ProductDetails product={existProduct} relatedProducts={relatedProduct} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return <div>Failed to load product details. Please try again later.</div>;
  }
}

