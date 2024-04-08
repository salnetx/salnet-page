import Footer from "../components/Footer";

const Blogs = ()=>{
    return(
        <main>
        <div className="justify-center w-full sm:text-center text-left lg:p-10 max-auto">
        <h1 className="text-6xl font-bold pt-32 pb-20 tracking-tight">Blog Post</h1>


        <div className="bg-[#fff] rounded-3xl">
          <div className="mx-72">
          <div className="border py-48 my-16 bg-[#F4F4F4] rounded-3xl"></div>
          <div className="border py-48 my-16 bg-[#F4F4F4] rounded-3xl"></div>
          <div className="border py-48 my-8 bg-[#F4F4F4] rounded-3xl"></div>
          <div className="border py-48 my-8 bg-[#F4F4F4] rounded-3xl"></div>
          </div>
        </div>

            <Footer blogspage={'blogspage'} />
            </div>
        </main>
    )
}
export default Blogs;