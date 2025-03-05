import { ArrowRightFilled } from "../Components/icons/ArrowRightFilled";
import { IconBadgeCheck } from "../Components/icons/IconBadgeCheck";
import PizzaImage from '../assets/images/vegies.webp';
import cooking from '../assets/images/cooking1.jpg';
function Home(){
    return (
        <div>
           {/* hero section */}
           <section className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-5 bg-gradient-to-r from-amber-50 to-orange-300 ">
                <div className="w-4/6 ml-4 text-center md:w-2/6 md:text-left">
                   <div className="flex justify-center text-4xl md:justify-normal">
                       <h1 className="pb-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text">
                        Enjoy the slice {'  '}
                       </h1>
                       <h1>
                        😋
                       </h1>
                   </div>
                   <p className="pb-4 text-[#6b7290] ">
                      The Pizza App lets you order your favourite pizza from the comfort of your home. Enjoy the best pizza in the town with just few clicks
                   </p>
                   <button className=" flex items-center px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 group">
                      Order Now
                      <span className="inline-block  ml-3 transition-transform ease-in-out group-hover:translate-x-2">
                         <ArrowRightFilled />
                      </span>
                   </button>
                </div>

               <div>
                  <img src={PizzaImage} alt="Pizza"  className="w-[180px]  md:w-[450px]  "/>
               </div>
              
           </section>


           {/* services section */}

           <section className="py-4 mt-6 bg-gradient-to-r from-amber-50 to-orange-300">
                <div className="container flex flex-col md:flex-row">
                  <div className="flex flex-col items-center justify-center rounded-lg lg:w-1/2">
                     <img src={cooking} alt="Cooking" className="rounded-lg" width={500}/>
                  </div>
                  <div className="flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left ">
                     <div className="flex flex-col items-center lg:items-start">
                        <div>
                           <h2 className="mb-2 text-5xl font-extrabold text-transparent text-font bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text">
                              Cooked by the best <br /> cheifs in the world
                           </h2>
                           <p className="text-base leading-relaxed text-[#6b7280]">
                              There are many benefits regarding to that but the main ones are: 
                           </p>
                        </div>   
                     </div>
                     <div className="w-full p-1">
                        <div className="flex items-center h-full p-2 text-2xl rounded">
                           <IconBadgeCheck className="text-[#f38339] w-10 h-10 mr-4"/>
                           <span className="font-bold title-font">Perfect Taste</span>
                        </div>
                     </div>
                     <div className="w-full p-1">
                        <div className="flex items-center h-full p-2 text-2xl rounded">
                           <IconBadgeCheck className="text-[#f38339] w-10 h-10 mr-4"/>
                           <span className="font-bold title-font">Prepared Quickly</span>
                        </div>
                     </div>
                     <div className="w-full p-1">
                        <div className="flex items-center h-full p-2 text-2xl rounded">
                           <IconBadgeCheck className="text-[#f38339] w-10 h-10 mr-4"/>
                           <span className="font-bold title-font">Food hygeine guaranteed</span>
                        </div>
                     </div>
                  </div>
                </div>
           </section>
        </div>
    );
    
}
export default Home;