import { catalog } from "../../utils/catalog";
import ProductCard from "./ProductCard";

const ProductContainer = () => {
  return (
    <section className="container flex flex-wrap mx-auto p-10 justify-center gap-10">
      {catalog.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
};

export default ProductContainer;

// import { catalog } from "../../utils/catalog";
// import ProductCard from "./ProductCard";

// const ProductContainer = () => {
//   return (
//     <section className="container flex flex-wrap mx-auto p-10 justify-center gap-10">
//       {catalog.map((product) => (
//         <ProductCard key={product.id} {...product} />
//       ))}
//     </section>
//   );
// };

// export default ProductContainer;
