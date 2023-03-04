import React, { useEffect, useState } from 'react';
import SingleItemSection from '../SingleItemSection';
import CarouselSection from '../CarouselSection';
import { useParams } from 'react-router-dom';
import getOneProduct from '../../api/getOneProduct';
import getAllProducts from '../../api/getAllProducts';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

function DetailsPage() {
    const [product, setProduct] = useState({});
    const params = useParams();
    const productId = params.productId;
    useEffect(() => {
        getOneProduct(productId).then((res) => {
            setProduct(res.data);
        });
    }, [productId]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then((res) =>
            setProducts(
                res.data.length % 3
                    ? res.data.slice(0, res.data.length - (res.data.length % 3)).map((item) => {
                          const { name, currentPrice, imageUrls, itemNo } = item;
                          return { name, currentPrice, imageUrls, itemNo };
                      })
                    : res.data.map((item) => {
                          const { name, currentPrice, imageUrls, itemNo } = item;
                          return { name, currentPrice, imageUrls, itemNo };
                      }),
            ),
        );
    }, []);

    return (
        <main>
            <BreadCrumbs category={product.categories} name={product.name} />
            <SingleItemSection product={product} />
            <CarouselSection products={products} />
        </main>
    );
}

export default DetailsPage;
