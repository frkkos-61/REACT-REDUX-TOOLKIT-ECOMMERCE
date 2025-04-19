import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    infinite: true,
    speed: 500,
    auto: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 p-4">
          <div>
            <div className="text-5xl font-bold ">Eşsiz Modeller</div>
            <div className="text-xl my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              expedita repellat obcaecati labore consequatur illo, nemo dolore
              corporis, amet quasi sed dolorem quos, minus perspiciatis! Veniam
              veritatis nesciunt consectetur itaque.
              <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-300 mt-5">
                İncele
              </div>
            </div>
          </div>
          <img className="w-[600px]" src="./ayakkabılar.webp" alt="img-1" />
        </div>
        <div className="!flex items-center bg-gray-100 p-4">
          <div>
            <div className="text-5xl font-bold">Kaliteli Ayakkabılar</div>
            <div className="text-xl my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              expedita repellat obcaecati labore consequatur illo, nemo dolore
              corporis, amet quasi sed dolorem quos, minus perspiciatis! Veniam
              veritatis nesciunt consectetur itaque.
              <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-300 mt-5">
                İncele
              </div>
            </div>
          </div>
          <img className="w-[600px]" src="/nikeair.png" alt="img-2" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
