import BaseComponent from "../components/BaseComponent";
import products from "../mock_products.json";
import PageLayout from "./PageLayout";

const Products = () => {
    return (
        <PageLayout>
            <BaseComponent>
                {products.map((product) => (
                    <ProductCard>product</ProductCard>
                ))}
            </BaseComponent>
        </PageLayout>
    );
};
