
import Header from "./header"


function Home(){
    return(
        <div className="container ">
         <Header/>

         <section className="flex justify-between items-center px-[13%] mt-5 max-sm:flex-col-reverse max-sm:p-0 max-sm:gap-10">
            <div className="w-100 flex flex-col justify-between max-sm:px-[5%]">
                <div className="max-sm:text-center">
                    <h1 className="text-6xl font-bold max-sm:text-4xl">Make remote work</h1>
                    <p className="text-Gray-500 my-4 font-medium">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                    <button className="bg-Gray-950 text-Gray-50 px-3 py-1.5 rounded-md font-medium hover:bg-transparent hover:border-2 hover:border-Gray-950 hover:text-Gray-950 cursor-pointer">Learn more</button>

                </div>
                <div className="mt-15 max-sm:mt-6 flex justify-between items-center max-sm:gap-0.5">
                    <img src="/assets/images/client-databiz.svg" alt="" />
                    <img src="/assets/images/client-audiophile.svg" alt="" />
                    <img src="/assets/images/client-meet.svg" alt="" />
                    <img src="/assets/images/client-maker.svg" alt="" />
                </div>

            </div>
            <div>
                <img 
                    className="w-90 max-sm:hidden"
                    src="/assets/images/image-hero-desktop.png" alt="" />
                <img 
                    className="hidden max-sm:block"
                    src="/assets/images/image-hero-mobile.png" alt="" />
            </div>
         </section>

  

  

  
        </div>
    )
}

export default Home