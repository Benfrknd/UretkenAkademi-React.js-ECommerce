import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(res => setProduct(res))
      .catch(err => console.log(err));
  }, [productId]);

  const addToCart = () => {
    // Add your logic to handle adding the product to the cart
    // For simplicity, let's just set a state to indicate it's added
    setIsAddedToCart(true);
  };

  const buyNow = () => {
    // Add your logic to handle the buy now functionality
    // For simplicity, let's just navigate to a checkout page
    // You should replace the following line with your actual routing logic
    window.location.href = '/checkout';
  };

  return (
    <>
      <div className="d-flex flex-wrap gap-2">
        <div className="col">
          <img src={product.image} className="img-fluid border-0 w-50" alt={product.title} />
        </div>
        <div className="col">
          <div className="row">
            <h4 className="text-start px-0">{product.title}</h4>
          </div>
          <div className="row py-1 fs-6 text-muted text-start">{product.description}</div>
          <div className="row py-1 text-start">
            <p className="fw-bold w-100 px-0">Kategori:</p>
            <p className="bg-success text-white rounded p-1 w-25 text-center m-0">{product.category}</p>
          </div>
          <div className="row py-1 fs-2 text-dark fw-bold text-start">Fiyat: {product.price} $</div>
          <div className="row py-2">
            {!isAddedToCart ? (
              <>
                <button className="btn btn-primary me-2 " onClick={addToCart}>
                  Sepete Ekle
                </button>
                
                <button className="btn btn-success mt-3" onClick={buyNow}>
                  Satın Al
                </button>
              </>
            ) : (
              <p className="text-success">Ürün sepete eklendi!</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
