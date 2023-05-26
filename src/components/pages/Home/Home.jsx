import SectionHeadlin from "../../shared/SectionHeadlin";
import Banner from "./Banner";
import Sweper from "./Sweper";
import { Swiper, SwiperSlide } from "swiper/react";
import chef from "../../../assets/home/chef-service.jpg";
import feature from "../../../assets/home/featured.jpg";
import MenuBar from "../../shared/MenuBar";
import { useEffect, useState } from "react";
import "swiper/css/navigation";
// import { Rating } from "@smastrom/react-rating";
// import '@smastrom/react-rating/style.css'
import { Navigation } from "swiper";


function Home() {
  const [reviews, setReviews] = useState([]);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch('Review.json')
        .then(res => res.json())
        .then(data => setReviews(data))
}, [])


  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter((item) => item.category === "popular");

        setMenus(popularMenu);
      });
  }, []);

  return (
    <>
      <section className="hero min-h-screen">
        <Banner />
      </section>
      <section className="w-[90%] mx-auto my-10">
        <SectionHeadlin
          tags={"---From 11:00am to 10:00pm---"}
          title={"ORDER ONLINE"}
        />
        <Sweper />
      </section>
      <section
        className="w-[90%] hero bg-fixed  mx-auto mb-10 h-96 "
        style={{ backgroundImage: `url(${chef})` }}
      >
        <div className="hero-overlay flex items-center ">
          <div className=" text-black text-center bg-white py-10 px-40 w-[85%] mx-auto">
            <h1 className="text-3xl font-bold mb-5">Bistro Boss</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </section>
      <section className="w-[90%] mx-auto">
        <SectionHeadlin tags={"---Check it out---"} title={"FROM OUR MENU"} />
        <div className="grid md:grid-cols-2 gap-5 my-10">
          {menus.map((menu) => (
            <MenuBar key={menu._id} menu={menu} />
          ))}
        </div>
        <div className="text-center my-8">
          <button className=" btn btn-outline border-b-2 uppercase">
            View Full Menu
          </button>
        </div>
      </section>
      <section className="my-20 w-[90%] mx-auto">
        <div className="bg-black h-48 text-white font-bold text-4xl flex justify-center items-center">
          <h1>Call Us: +88 0192345678910</h1>
        </div>
      </section>
      <section>
        <SectionHeadlin tags={"---Should Try---"} title={"CHEF RECOMMENDS"} />
      </section>
      <section className="my-20 w-[90%] mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {menus.slice(0, 3).map((item) => (
            <>
              <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure>
                  <img src={item?.image} alt="food" />
                </figure>
                <div className="card-body items-center">
                  <h2 className="card-title">{item.name}</h2>
                  <p>{item.recipe}</p>
                  {/* <p>{item.price}</p> */}
                  <div className="card-actions justify-center">
                    <button className="btn btn-outline my-3">
                      Add to Card
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
      <section className="hero h-full bg-fixed " style={{ backgroundImage: `url(${feature})` }}>

        <div className="hero-overlay">
        <div className="w-[90%] mx-auto">
        <div className="py-5 text-white">
        <SectionHeadlin  tags={"---Check it out---"} title={"FROM OUR MENU"} />
        </div>
        <div className="hero-content">
        <div className="flex pb-20 gap-5">
          <img className="w-[50%]" src={feature} alt="" />
          <div className="w-[50%] text-white flex flex-col justify-center gap-3 py-5 px-8">
            <h1>March 20, 2023</h1>
            <h2 className="text-xl font-bold">WHERE CAN I GET SOME?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <div><button className="uppercase btn btn-outline border-b-4 text-white my-2">Read more</button></div>
          </div>
        </div>
        </div>
        </div>
        </div>
      </section>
      <section className="w-[90%] mx-auto py-10">
        <SectionHeadlin tags={'What Our Client Say'} title={'Testimonials'} />

            
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

              {
                  reviews.map(review => <SwiperSlide
                      key={review._id}
                  >
                      <div className="flex flex-col items-center mx-24 my-16">
                          {/* <Rating
                              style={{ maxWidth: 180 }}
                              value={review.rating}
                              readOnly
                          /> */}
                          <p className="py-8">{review.details}</p>
                          <h3 className="text-2xl text-orange-400">{review.name}</h3>
                      </div>
                  </SwiperSlide>)
              }
          </Swiper>
            

      </section>
    </>
  );
}

export default Home;
