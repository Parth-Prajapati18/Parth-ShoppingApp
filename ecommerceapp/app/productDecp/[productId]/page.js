"use client"
import products from '../../shop/data';

const ProductDetail = ({params} ) => {

  const product = products.find(p => p.id == params.productId);

  if (!product) {
    console.log(product);
    console.log(params.productId);
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <div className='grid grid-cols-5'>
        <div className='grid grid-rows-3 gap-2 m-2 w-2/3 border-4	max-h-screen h-2/3 bg-green-500'>
          {
            product.additionalImages.map((imgsrc,index)=>(
              <img 
                key={index}
                src={imgsrc}
                alt={product.productName}
                className='w-full h-full border'
              />
            ))
          }
        </div>

        <div className='col-span-2'>
          Div 2
        </div>

        <div className='col-span-2'>
          Div 3
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
