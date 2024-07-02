import { MdArrowOutward } from "react-icons/md";
import { PiHandWavingFill } from "react-icons/pi";
import { CiCircleCheck } from "react-icons/ci";
import { FaCode, FaFileCode, FaLaptopCode, FaCentercode, FaAccessibleIcon, Fa500Px, FaAccusoft, FaAmazon, FaAddressBook, FaAirbnb, FaStar, FaStarHalfAlt } from "react-icons/fa";
import image1 from "./images/writer.jpg";
import image2 from "./images/org-writer-768x768.jpg";
import c1 from "./images/1.png";
import c2 from "./images/2.png";
import c3 from "./images/3.png";
import c4 from "./images/4.png";
import c5 from "./images/5.png";
import c6 from "./images/6.png";
import c7 from "./images/7.png";
import c8 from "./images/8.png";
import c9 from "./images/9.png";
import c10 from "./images/10.png";
import c11 from "./images/11.png";
import c12 from "./images/12.png";
import c13 from "./images/13.png";
import c14 from "./images/14.png";
import c15 from "./images/15.png";
import c16 from "./images/16.png";
import c17 from "./images/17.png";
import c18 from "./images/18.png";
import ps1 from "./images/ps_01.jpg";
import ps2 from "./images/ps_03.jpg";
import ps3 from "./images/ps_04.jpg";
import ps4 from "./images/ps_05.jpg";


function App() {
    return (
        <>
            <div id="header" className="sticky top-0 h-16 bg-white shadow-md flex justify-between px-12">
                <div id="site-title" className="flex m-2 hover:text-blue-400">
                    <div className="text-indigo-600/100 font-bold text-3xl  hover:text-blue-700">P</div>
                    <div className="font-bold text-3xl">ortfolio</div>
                </div>
                <div id="menu-item" >
                    <ul className="flex ml-2 mr-2">
                        <li className="text-lg text-black font-medium p-4  hover:text-indigo-600">Home</li>
                        <li className="text-lg text-black font-medium p-4  hover:text-indigo-600">About</li>
                        <li className="text-lg text-black font-medium p-4  hover:text-indigo-600">Services</li>
                        <li className="text-lg text-black font-medium p-4  hover:text-indigo-600">Portfolio</li>
                        <li className="text-lg text-black font-medium p-4  hover:text-indigo-600">Blog</li>
                        <li className="text-lg text-black font-medium p-4  hover:text-indigo-600">Contact</li>
                    </ul>
                </div>
                <button className=" flex items-center bg-indigo-600/100 text-white text-xl font-semi-bold rounded-3xl m-1 px-10 py-3 hover:bg-black" >
                    Let's Talk <MdArrowOutward /></button>
            </div>
            <div id="body" className="bg-indigo-50">
                <div id="hero" className="h-screen flex ml-12 mr-8 ">
                    <div id="left-hero" className="w-2/3 mt-12">
                        <div className="bg-indigo-200 rounded-3xl px-4 py-2 w-1/3 text-indigo-600 flex items-center justify-center">
                            <PiHandWavingFill className="text-yellow-400 text-lg shadow-sm" />   Hi, Welcome to my Portfolio</div>
                        <div className="text-8xl font-semibold mt-4 mb-8">I'm Tarak Siddhanta</div>
                        <div className="text-8xl font-semibold  mt-4 mb-8 text-indigo-600/100">Full Stack Developer</div>
                        <div className="text-black text-lg">I am a full stack developer working as Mern Stack developer since last five year at Tech Sunset, Bangalore, India .</div>
                    </div>
                    <div id="right-hero" className="static mt-8 mb-8 align-middle">
                        <img className="rounded-full  h-3/4 w-auto" src={image1} alt="Image" />
                        <div className="relative bottom-0 left-0 rounded-full bg-indigo-600/100  h-40 w-40 align-super	 p-0">text</div>
                    </div>

                </div>

                <div id="clients" className="bg-gray-50 text-center items-center ">
                    <p className="text-indigo-500 font-semibold text-lg mt-8"> {'>>>'} Clients</p>
                    <p className="text-black font-bold text-4xl"> Clients I've Worked With</p>
                    <div className="grid grid-cols-6  m-12">
                        <img className="shadow-sm h-2/5    w-2/4   m-8   hover:border border-indigo-400 p-2" src={c1} alt="Image" />
                        <img className="shadow-sm h-2/5    w-2/4   m-8   hover:border border-indigo-400 p-2" src={c2} alt="Image" />
                        <img className="shadow-sm h-2/5    w-2/4   m-8   hover:border border-indigo-400 p-2" src={c3} alt="Image" />
                        <img className="shadow-sm h-2/5    w-2/4   m-8   hover:border border-indigo-400 p-2" src={c4} alt="Image" />
                        <img className="shadow-sm h-2/5    w-2/4   m-8   hover:border border-indigo-400 p-2" src={c5} alt="Image" />
                        <img className="shadow-sm h-2/5    w-2/4   m-8   hover:border border-indigo-400 p-2" src={c6} alt="Image" />
                        <img className="shadow-sm h-2/5    w-2/4   m-8   hover:border border-indigo-400 p-2" src={c7} alt="Image" />
                        <img className="shadow-sm h-2/5    w-2/4   m-8   hover:border border-indigo-400 p-2" src={c8} alt="Image" />
                        <img className="shadow-sm h-2/5    w-2/4   m-8   hover:border border-indigo-400 p-2" src={c9} alt="Image" />
                        <img className="shadow-sm h-2/5    w-2/4   m-8   hover:border border-indigo-400 p-2" src={c10} alt="Image" />
                        <img className="shadow-sm h-2/5    w-2/4   m-8   hover:border border-indigo-400 p-2" src={c11} alt="Image" />
                        <img className="shadow-sm h-2/5    w-2/4   m-8   hover:border border-indigo-400 p-2" src={c14} alt="Image" />
                        <img className="shadow-sm h-2/5    w-2/4   m-8   hover:border border-indigo-400 p-2" src={c12} alt="Image" />
                        <img className="shadow-sm h-2/5    w-2/4   m-8   hover:border border-indigo-400 p-2" src={c13} alt="Image" />
                        <img className="shadow-sm h-2/5    w-2/4   m-8   hover:border border-indigo-400 p-2" src={c15} alt="Image" />
                        <img className="shadow-sm h-2/5    w-2/4   m-8   hover:border border-indigo-400 p-2" src={c16} alt="Image" />
                        <img className="shadow-sm h-2/5    w-2/4   m-8   hover:border border-indigo-400 p-2" src={c17} alt="Image" />
                        <img className="shadow-sm h-2/5    w-2/4   m-8   hover:border border-indigo-400 p-2" src={c18} alt="Image" />
                    </div>
                </div>

                <div id="services" className="text-center items-center justify-center">
                    <p className="text-indigo-500 font-semibold text-lg  "> {'>>>'} My Services</p>
                    <h1 className="text-black font-bold text-4xl"> What I Do</h1>
                    <div className="grid grid-cols-4 m-12">
                        <div className="bg-gray-50  justify-center p-8 m-4 hover:border border-indigo-400">
                            <FaLaptopCode className="text-6xl text-indigo-400 text-center m-4" />
                            <p className="text-xl text-black font-bold mb-8">Web Development</p>
                            <p className=" text-black  mb-8 mt-4">Freelance web developer include adverts, websites, digital media or posts.</p>
                        </div>
                        <div className="bg-gray-50  justify-center p-8 m-4 hover:border border-indigo-400">
                            <FaCode className="text-6xl text-indigo-400 text-center m-4" />
                            <p className="text-xl text-black font-bold mb-8">Web Development</p>
                            <p className=" text-black  mb-8 mt-4">Freelance web developer include adverts, websites, digital media or posts.</p>
                        </div>
                        <div className="bg-gray-50  justify-center p-8 m-4 hover:border border-indigo-400">
                            <FaFileCode className="text-6xl text-indigo-400 text-center m-4" />
                            <p className="text-xl text-black font-bold mb-8">Web Development</p>
                            <p className=" text-black  mb-8 mt-4">Freelance web developer include adverts, websites, digital media or posts.</p>
                        </div>
                        <div className="bg-gray-50  justify-center p-8 m-4 hover:border border-indigo-400">
                            <FaAccusoft className="text-6xl text-indigo-400 text-center m-4" />
                            <p className="text-xl text-black font-bold mb-8">Web Development</p>
                            <p className=" text-black  mb-8 mt-4">Freelance web developer include adverts, websites, digital media or posts.</p>
                        </div>
                        <div className="bg-gray-50  justify-center p-8 m-4 hover:border border-indigo-400">
                            <FaAmazon className="text-6xl text-indigo-400 text-center m-4" />
                            <p className="text-xl text-black font-bold mb-8">Web Development</p>
                            <p className=" text-black  mb-8 mt-4">Freelance web developer include adverts, websites, digital media or posts.</p>
                        </div>
                        <div className="bg-gray-50  justify-center p-8 m-4 hover:border border-indigo-400">
                            <FaLaptopCode className="text-6xl text-indigo-400 text-center m-4" />
                            <p className="text-xl text-black font-bold mb-8">Web Development</p>
                            <p className=" text-black  mb-8 mt-4">Freelance web developer include adverts, websites, digital media or posts.</p>
                        </div>
                        <div className="bg-gray-50  justify-center p-8 m-4 hover:border border-indigo-400">
                            <FaAddressBook className="text-6xl text-indigo-400 text-center m-4" />
                            <p className="text-xl text-black font-bold mb-8">Web Development</p>
                            <p className=" text-black  mb-8 mt-4">Freelance web developer include adverts, websites, digital media or posts.</p>
                        </div>
                        <div className="bg-gray-50  justify-center p-8 m-4 hover:border border-indigo-400">
                            <FaAirbnb className="text-6xl text-indigo-400 text-center m-4" />
                            <p className="text-xl text-black font-bold mb-8">Web Development</p>
                            <p className=" text-black  mb-8 mt-4">Freelance web developer include adverts, websites, digital media or posts.</p>
                        </div>
                    </div>
                </div>

                <div id="experience" className="text-center items-center justify-center bg-indigo-50">
                    <p className="text-indigo-500 font-semibold text-xl mt-8 mb-4 "> {'<'} Resume {'>'} </p>
                    <h1 className="text-black font-bold text-4xl mb-8"> My Work Experience</h1>
                    <div className="flex justify-center flex-col m-auto  bg-white  w-2/3  shadow-lg mb-8">
                        <div className="flex justify-between items-center m-4 p-4">
                            <p className="flex items-center text-xl font-bold "> <CiCircleCheck className="text-2xl font-bold text-indigo-600" />Full Stack Developer</p>
                            <p className="text-xl  text-gray-600">2019-2024 (Present)</p>
                        </div>
                        <div className="flex flex-col-2">
                            <img src={c17} className="m-8 p-8"></img>
                            <div className="text-left items-center p-12">
                                <p className="text-lg font-bold">Tech Sunset</p>
                                <p>Lorem Ipsum is a versatile tool in a web developer's arsenal, aiding in efficient design, rapid prototyping, and effective testing while safeguarding privacy  </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center flex-col m-auto  bg-white  w-2/3  shadow-lg mb-8">
                        <div className="flex justify-between items-center m-4 p-4">
                            <p className="flex items-center text-xl font-bold "> <CiCircleCheck className="text-2xl font-bold text-indigo-600" />Software Developer</p>
                            <p className="text-xl  text-gray-600">2016-2019</p>
                        </div>
                        <div className="flex flex-col-2">
                            <img src={c12} className="m-8 p-8"></img>
                            <div className="text-left items-center p-12">
                                <p className="text-lg font-bold">DataLink Infotech</p>
                                <p>Lorem Ipsum is a versatile tool in a web developer's arsenal, aiding in efficient design, rapid prototyping, and effective testing while safeguarding privacy  </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center flex-col m-auto  bg-white  w-2/3  shadow-lg mb-8">
                        <div className="flex justify-between items-center m-4 p-4">
                            <p className="flex items-center text-xl font-bold "> <CiCircleCheck className="text-2xl font-bold text-indigo-600" />IT Expert</p>
                            <p className="text-xl  text-gray-600">2013-2016</p>
                        </div>
                        <div className="flex flex-col-2">
                            <img src={c15} className="m-8 p-8"></img>
                            <div className="text-left items-center p-12">
                                <p className="text-lg font-bold">Old Malda Municipality via Pwc India</p>
                                <p>Lorem Ipsum is a versatile tool in a web developer's arsenal, aiding in efficient design, rapid prototyping, and effective testing while safeguarding privacy  </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="works">
                    <marquee direction="right" behavior="alternate">
                        <p className="text-9xl font-semibold text-indigo-100 shadow-sm outline outline-offset-2 outline-1">Selected Works</p>
                    </marquee>
                    <div className="grid grid-cols-2 p-8 m-8">
                        <div className="text-center items-center m-4 hover:border border-1 bg-white">
                            <img className="transition duration-500 hover:scale-90" src={ps1} />
                            <p className="text-left ml-4  mt-2 font-semibold text-2xl">Yoga</p>
                            <p className="text-left ml-4 mb-4 text-gray-600 text-lg">Portfolio Website </p>
                        </div>
                        <div className="text-center items-center m-4 hover:border border-1 bg-white">
                            <img className="transition duration-500 hover:scale-90" src={ps2} />
                            <p className="text-left ml-4  mt-2 font-semibold text-2xl">CRM </p>
                            <p className="text-left ml-4 mb-4 text-gray-600 text-lg">Sales & Mkt Website </p>
                        </div>
                        <div className="text-center items-center m-4 hover:border border-1 bg-white">
                            <img className="transition duration-500 hover:scale-90" src={ps3} />
                            <p className="text-left ml-4  mt-2 font-semibold text-2xl">Edtech Website</p>
                            <p className="text-left ml-4 mb-4 text-gray-600 text-lg">Edtech Development </p>
                        </div>
                        <div className="text-center items-center m-4 hover:border border-1 bg-white">
                            <img className="transition duration-500 hover:scale-90" src={ps4} />
                            <p className="text-left ml-4  mt-2 font-semibold text-2xl">App Landing Page</p>
                            <p className="text-left ml-4 mb-4 text-gray-600 text-lg">Mobile App Website </p>
                        </div>
                       
                    </div>
                </div>
                <div id="testimonial" className="text-center items-center justify-center bg-slate-100">
                    <p className="text-indigo-500 font-semibold text-lg  "> {'>>>'} Testimonials</p>
                    <h1 className="text-black font-bold text-4xl"> What Clients Says About Me</h1>
                    <div className="flex m-12">
                        <div className="bg-gray-50   p-8 m-4 hover:border border-indigo-400">
                            <div className="flex items-center ">
                                <p className="text-xl text-black font-bold">Great Solution</p>
                                <div className="flex  items-center text-yellow-500 px-8"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /></div>
                            </div>
                            <p className=" text-black mt-4 mb-4 text-left">
                                He did an amazing job building my website. They were professional, responsive, and delivered great results. I highly recommend their web development services.
                            </p>
                            <div className="text-left">
                                <p className="text-xl text-black font-semibold ">Johnny Deep</p>
                                <p className="text-lg text-gray-700 ">CEO</p>
                            </div>

                        </div>
                        <div className="bg-gray-50   p-8 m-4 hover:border border-indigo-400">
                            <div className="flex items-center ">
                                <p className="text-xl text-black font-bold">Great Solution</p>
                                <div className="flex  items-center text-yellow-500 px-8"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /></div>
                            </div>
                            <p className=" text-black mt-4 mb-4 text-left">
                                He did an amazing job building my website. They were professional, responsive, and delivered great results. I highly recommend their web development services.
                            </p>
                            <div className="text-left">
                                <p className="text-xl text-black font-semibold ">Johnny Deep</p>
                                <p className="text-lg text-gray-700 ">CEO</p>
                            </div>

                        </div>
                        <div className="bg-gray-50   p-8 m-4 hover:border border-indigo-400">
                            <div className="flex items-center ">
                                <p className="text-xl text-black font-bold">Great Solution</p>
                                <div className="flex  items-center text-yellow-500 px-8"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /></div>
                            </div>
                            <p className=" text-black mt-4 mb-4 text-left">
                                He did an amazing job building my website. They were professional, responsive, and delivered great results. I highly recommend their web development services.
                            </p>
                            <div className="text-left">
                                <p className="text-xl text-black font-semibold ">Johnny Deep</p>
                                <p className="text-lg text-gray-700 ">CEO</p>
                            </div>

                        </div>

                    </div>
                </div>
                <div id="whoAmI" className="flex  items-center bg-indigo-50">
                    <img src={image2}  className="p-8 m-8 h-1/3 w-1/3 rounded-full" />
                    <div className="text-left mr-8">
                    <PiHandWavingFill className="text-indigo-500 text-6xl shadow-sm mb-4" /> 
                    <p className="text-4xl font-bold mb-6">Who I Am</p>
                    <p className="text-left text-2xl mr-2 text-gray-500">I'm Tarak Siddhanta, a Freelance English Creative Copywriter, Content Writer and Communications Consultant based in New York, USA. By better copying, I create value for the companies. I have spent more than 25 + years at various copywriting agencies, advertising, public relations and digital agencies, and most recently as a freelance copywriter for brands and businesses, honing my creative writing skills.</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default App;
