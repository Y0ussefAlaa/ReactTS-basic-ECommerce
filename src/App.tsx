import ProductCard from "./components/ProductCard";
import { productList } from "./data/productList";

function App() {
  const renderedProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xl:grid-4">
        {renderedProductList}
      </div>
    </div>
  );
}

export default App;
