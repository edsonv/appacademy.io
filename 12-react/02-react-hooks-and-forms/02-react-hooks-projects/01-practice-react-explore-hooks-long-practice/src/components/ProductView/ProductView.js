import { useEffect, useState } from "react";
import ProductDetails from "../ProductDetails";
import ProductListItem from "../ProductListItem";
import "./ProductView.css";

function ProductView({ products }) {
  const [sideOpen, setSideOpen] = useState(
    JSON.parse(localStorage.getItem("sideOpen")) ?? true
  );
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (selectedProduct) {
      setSideOpen(true);
    }
  }, [selectedProduct]);

  useEffect(() => {
    if (!sideOpen) setSelectedProduct(null);

    localStorage.setItem("sideOpen", JSON.stringify(sideOpen));
  }, [sideOpen]);

  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map((item) => (
            <ProductListItem
              key={item.id}
              product={item}
              onClick={() => setSelectedProduct(item)}
              isSelected={selectedProduct && item.id === selectedProduct.id}
            />
          ))}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div
            className="product-side-panel-toggle"
            onClick={() => setSideOpen(!sideOpen)}
          >
            {sideOpen ? ">" : "<"}
          </div>
        </div>
        <ProductDetails visible={sideOpen} product={selectedProduct} />
      </div>
    </div>
  );
}

export default ProductView;
