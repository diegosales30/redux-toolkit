import Link from "next/link";

import productApi from "../features/productSlice";

export default function Produtos() {
  const { data, isLoading } = productApi.useGetProductsQuery();
  const product = data?.products;

  return (
    <>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {product?.map((item) => (
            <div key={item.id}>
              <h1>{item.name}</h1>
              <p>{item.price}</p>
              <p>{item.brand}</p>
              <p>{item.description}</p>
            </div>
          ))}
          <div>
            <Link href={"/"}>
              <button>Voltar para home</button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
