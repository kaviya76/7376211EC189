import ProductCard from "./Components/ProdcutCard"
import About from "./Components/About"

const Home = () => {

    const products = [{
        img: "C:\Users\HP\Desktop\react\my-react-app\public\download.jpeg",
        name: "Product name :Laptop 1",
        price: "Price: 2236",
        rating: "Rating: 4.7",
        discount: "Discount: 63",
        availability: "Availability: yes"
    },
    {
        img: "C:\Users\HP\Desktop\react\my-react-app\public\download.jpeg",
        name: "Product name :Laptop 13",
        price: "Price: 1244",
        rating: "Rating:4.5",
        discount: "Discount: 45",
        availability: "Availability: out-of-stock"
    },
    {
        img: "C:\Users\HP\Desktop\react\my-react-app\public\download.jpeg",
        name: "Product name :Laptop 3",
        price: "Price: 9102",
        rating: "Rating:4.44",
        discount: "Discount: 98",
        availability: "Availability: out-of-stock"
    },
    {
        img: "C:\Users\HP\Desktop\react\my-react-app\public\download.jpeg",
        name: "Product name :Laptop 11",
        price: "Price: 2652",
        rating: "Rating:4.12",
        discount: "Discount: 70",
        availability: "Availability: yes"
    },
    {
        img: "C:\Users\HP\Desktop\react\my-react-app\public\download.jpeg",
        name: "Product name :Laptop 4",
        price: "Price: 1258",
        rating: "Rating:3.8",
        discount: "Discount: 33",
        availability: "Availability: yes"
    },
    {
        img: "C:\Users\HP\Desktop\react\my-react-app\public\download.jpeg",
        name: "Product name :Laptop 13",
        price: "Price :8686",
        rating: "Rating: 3.22",
        discount: "Discount: 24",
        availability: " Availability:out-of-stock"
    },
    {
        img: "C:\Users\HP\Desktop\react\my-react-app\public\download.jpeg",
        name: "Product name :Laptop 14",
        price: "Price: 9254",
        rating: "Rating: 3",
        discount: "Discount: 56",
        availability: "Availability: yes"
    },
    {
        img: "C:\Users\HP\Desktop\react\my-react-app\public\download.jpeg",
        name: "Product name :Laptop 1",
        price: "Price: 1059",
        rating: "Rating: 2.77",
        discount: "Discount: 21",
        availability: "Availability: yes"
    },
    {
        img: "C:\Users\HP\Desktop\react\my-react-app\public\download.jpeg",
        name: "Product name :Laptop 10",
        price: "Price: 7145",
        rating: "Rating: 2.74",
        discount: "Discount: 15",
        availability: "Availability: yes"
    },
    {
        img: "C:\Users\HP\Desktop\react\my-react-app\public\download.jpeg",
        name: "Product name :Laptop 10",
        price: "Price: 4101",
        rating: "Rating: 2.67",
        discount: "Discount: 37",
        availability: "Availability: out-of-stock"
    }

    ]
    return (
        <>
            <div className="product-list">
                {products.map((item)=>{
                    return(
                        <ProductCard key={item.title} {...item}/>
                    )
                })
                }
            </div>
            <About />
        </>
        // npm create vite (file name) -- --template react
        // cd (filename)
        // nmp install
        // npm run dev
    )
}

export default Home
