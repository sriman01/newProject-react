import React, {useContext} from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/herosection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'


export default function Home() {
    const context = useContext(myContext);
    const {mode} = context;
  return (
    <section style = {{backgroundColor : mode === 'dark' ? '#5C8374' : ''}}>
        <Layout>
            <HeroSection />
            <Filter />
            <ProductCard />
            <Track />
            <Testimonial />
        </Layout>
    </section>
  )
}
