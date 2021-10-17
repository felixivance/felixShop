import Head from 'next/head'
import Header from '../components/Header'
import ProductListings from '../components/ProductListings'

export default function Home() {
  return (
    <div className="">
      <Header />

      <ProductListings />
      
    </div>
  )
}
