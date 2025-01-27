I have set up dynamic routing in my Next.js project by creating a folder for my dynamic route with the name [id] inside the shop directory, and i have fetched product data based on the dynamic id from a CMS (Sanity).

Here's a quick recap of the steps involved:

(1) Dynamic Route Creation:

I created a dynamic route by creating a folder named shop inside the app directory.
Inside the folder, I added a file [id].tsx, which will handle dynamic URLs like /shop/[id], where [id] represents a product's unique identifier.

(2) Fetching Product Data:

In [id].tsx, I fetched product data from Sanity using async/await to get the product details based on the id parameter, ensuring that the product page is pre-rendered with the correct data.

(3) State Management:

For client-side operations like "Add to Cart," I used the use client directive, as Next.js components are server-side by default. Instead of using local state for managing the cart, I implemented the Context API to manage the global state of the cart. This allows components across the application to access and modify the cart state without having to pass props down through each level. The ProductList component was passed as a child within the context provider, ensuring that the cart's state is properly managed across different components. This also resolves issues with using async/await, as the logic for fetching product data and handling state is encapsulated in the appropriate components and contexts.

(4) Testing:

I successfully tested the dynamic routing by running npm run dev and visiting /shop for product listings and 
/shop/[id] for individual product details. The application worked without errors.

(5) Running the Application:

I run the application in development mode using npm run dev, which enables dynamic routing for product listings and individual product pages.