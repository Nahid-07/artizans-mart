const Card = ({product}) => {
  return (
    <div className="ring-1 ring-orange-500">
      <div>
        <img src={product.prodImg} alt="" />
      </div>
      <div className="mt-5 p-3">
        <h4 className="text-xl font-semibold">{product.productName}</h4>
        <p>{product.prodDesc}</p>
        <p className="text-orange-500 font-bold mb-3">Price:{product.price}</p>
        <button className="bg-orange-500 w-full py-3 text-white">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
