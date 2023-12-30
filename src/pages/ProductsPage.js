import React from "react";
import BaseComponent from "../components/BaseComponent";
import { baseStyles } from "../components/BaseComponent";
import ProductCard from "../components/ProductCard";
import products from "../mock_products.json";
import PageLayout from "./PageLayout";

const styles = {
    style: {
        ...baseStyles.baseContainer,
        ...baseStyles.baseMargin,
        // ...baseStyles.basePadding,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
    },
};

const ProductsPage = () => {
    return (
        <PageLayout>
            {/* <div style={styles.page}> */}
            {/* <BaseComponent style={styles.style}>
                    <h4>Filter</h4>
                </BaseComponent> */}
            <BaseComponent style={styles.style}>
                {products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </BaseComponent>
            {/* </div> */}
        </PageLayout>
    );
};

export default ProductsPage;
