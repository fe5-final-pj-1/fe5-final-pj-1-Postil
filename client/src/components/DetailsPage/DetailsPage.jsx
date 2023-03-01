import React, { useEffect, useState } from 'react';
import SingleItemSection from '../SingleItemSection';
import CarouselSection from '../CarouselSection';
import { useParams } from 'react-router-dom';
import getOneProduct from '../../api/getOneProduct';

function DetailsPage() {
    const [product, setProduct] = useState({});
    const params = useParams();
    const productId = params.productId;
    useEffect(() => {
        getOneProduct(productId).then((res) => {
            setProduct(res.data);
        });
    }, [productId]);
    return (
        <main>
            <SingleItemSection product={product} />
            <CarouselSection />
        </main>
    );
}

export default DetailsPage;
