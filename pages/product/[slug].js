import Layout from '@/components/Layout'
import { productionBrowserSourceMaps } from '@/next.config'
import { Store } from '@/utils/Store';
import data from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react'
import { RiArrowGoBackFill } from "react-icons/ri";
import { toast, ToastContainer } from 'react-toastify';

function ProductScreen() {

  const { state, dispatch } = useContext(Store)

  const { query } = useRouter();
  const router = useRouter()
  const { slug } = query;

  const product = data.products.find((x) => x.slug === slug)

  if (!product) {
    return <div>Product Not Found</div>
  }

  const notifyError = () => {
    toast.error(`Sorry. You can't add product more than stock which is ${product.countInStock}!`)
  }

  const notifySuccess = () => {
    toast.success("Product Added to the cart successfully!")
  }




  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug)
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      notifyError()
    } else {
      dispatch({
        type: 'CART_ADD_ITEM', payload: { ...product, quantity }
      })
      notifySuccess()
      // router.push("/cart")  with router push we can go to cart page when item added to cart
    }

  }

  return (
    <Layout title={product.name} >
      <div className='py-2'>
        <Link className='text-lg font-bold hover:text-amber-500 transition-all duration-300' href="/"><div className='flex items-center space-x-1'><RiArrowGoBackFill className='text-lg font-bold' /><p>Back To Products</p></div></Link>
      </div>
      <div className='grid md:grid-cols-4 md:gap-3'>
        <div className='md:col-span-2'>
          <Image src={product.image} width={640} height={640} alt={product.name} />
        </div>
        <div>
          <ul>
            <li>
              <h1 className='text-2xl'>{product.name}</h1>
            </li>
            <li>
              <h2>{product.category}</h2>
            </li>
            <li>
              <h3>{product.brand}</h3>
            </li>
            <li>
              <h4>{product.rating} Stars ({product.numReviews} Reviews)</h4>
            </li>
            <li>
              <h6>Description: {product.description}</h6>
            </li>
          </ul>
        </div>
        <div>
          <div className='card p-5' >
            <div className='mb-2 flex justify-between'>
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className='mb-2 flex justify-between'>
              <div>Status</div>
              <div>{product.countInStock > 0 ? "In Stock" : "Unavailable"}</div>
            </div>
            <button onClick={addToCartHandler} className='primary-button w-full'>Add to cart</button>
          </div>

        </div>
        <ToastContainer />
      </div>
    </Layout>
  )
}

export default ProductScreen