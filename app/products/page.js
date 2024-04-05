import Footer from "../components/Footer";

const Products = ()=>{
    return(
        <main>
        <div className="justify-center w-full sm:text-center text-left lg:p-10 max-auto">
            <h1 className="text-6xl font-bold py-32">PRODUCTS</h1>


            <div className="bg-[#F4F4F4] py-12 rounded-3xl">
              <div className="mx-72">
                <div className="border py-48 my-8 bg-white rounded-3xl"></div>
                <div className="border py-48 my-8 bg-white rounded-3xl"></div>
                <div className="border py-48 my-8 bg-white rounded-3xl"></div>
                <div className="border py-48 my-8 bg-white rounded-3xl"></div>
              </div>
            </div>




            <Footer productspage={'productspage'} />
            </div>
        </main>
    )
}
export default Products;