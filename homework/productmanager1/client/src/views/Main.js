import ProductForm from '../components/ProductForm';
import ProductDisplay from '../components/ProductDisplay';
import '../App.css';


const Main = () => {
const removeFromDom = personId => {
}
    return (
        <div class ="mainbody">
            <h1>Product Manager</h1>
            <ProductForm removeFromDom={removeFromDom}/>
            <h2>All Products: </h2>
            <ProductDisplay removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main;
