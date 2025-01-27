import { NextResponse } from 'next/server';
import axios from 'axios';
import{ client} from '../../../sanity/lib/client';

export async function GET() {
  try {
    // Fetch data from the API
    const { data } = await axios.get('https://template-0-beta.vercel.app/api/product');

    // Insert each product into Sanity
    for (const product of data) {
      await client.create({
        _type: 'product',
        id: product.id,
        name: product.name,
        imagePath: product.imagePath,
        price: parseFloat(product.price),
        description: product.description,
        discountPercentage: product.discountPercentage,
        isFeaturedProduct: product.isFeaturedProduct,
        stockLevel: product.stockLevel,
        category: product.category,
      });
    }

    // Return a response using NextResponse
    return NextResponse.json({ message: 'Data inserted successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch or insert data' }, { status: 500 });
  }
}
