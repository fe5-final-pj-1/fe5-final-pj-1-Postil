import React, { useEffect, useState } from 'react';
import SingleItemSection from '../AllSections/SingleItemSection';
import CarouselSection from '../AllSections/CarouselSection';
import { useParams, useNavigate } from 'react-router-dom';
import getOneProduct from '../../api/getOneProduct';
import getAllProducts from '../../api/getAllProducts';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';

function DetailsPage() {
    const [product, setProduct] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    const productId = params.productId;
    useEffect(() => {
        getOneProduct(productId).then((res) => {
            if (res) {
                setProduct(res.data);
            } else {
                navigate('/');
            }
        });
    }, [productId, navigate]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then((res) =>
            setProducts(
                res.data.length % 3
                    ? res.data.slice(0, res.data.length - (res.data.length % 3)).map((item) => {
                          const { name, currentPrice, imageUrls, _id } = item;
                          return { name, currentPrice, imageUrls, _id };
                      })
                    : res.data.map((item) => {
                          const { name, currentPrice, imageUrls, _id } = item;
                          return { name, currentPrice, imageUrls, _id };
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
