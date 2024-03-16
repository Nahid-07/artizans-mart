import Link from "next/link";

const Card = ({product}) => {
  return (
    <Link href='/'>
        <div className="ring-1 ring-orange-500 hover:-translate-y-6 duration-200">
      <div>
        <img src={product.prodImg} alt="" className="h-52 md:h-72 w-full" />
      </div>
      <div className="mt-5 p-3">
        <h4 className="text-xl font-semibold">{product.productName}</h4>
        <p>{product.prodDesc.length > 100 ? product.prodDesc.substr(0,100) + '...': product.prodDesc}</p>
        <p className="text-orange-500 font-bold mb-3">Price:{product.price}</p>
        <button className="bg-orange-500 w-full py-3 text-white">
          Add to cart
        </button>
      </div>
    </div>
    </Link>
  );
};

export default Card;
