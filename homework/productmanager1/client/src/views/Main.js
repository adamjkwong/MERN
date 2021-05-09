import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductDisplay from '../components/ProductDisplay';
const Main = () => {
    return (
        <div>
            <ProductForm/>
            <ProductDisplay/>
        </div>
    )
}
export default Main;
