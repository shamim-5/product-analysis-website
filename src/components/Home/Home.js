import { useNavigate } from "react-router-dom";
import useCustomHooks from "../hooks/useCustomHooks";
import TopReview from "../TopReview/TopReview";

const Home = () => {
  const [reviews] = useCustomHooks();
 
  let topReviews = [...reviews.slice(0, 3)];

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("../reviews");
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2 text-5xl text-left mx-16 my-auto">
          <h2 className="text-indigo-900 pb-5">Capture Your Moments with </h2>
          <h2 className="text-fuchsia-900">Contixo F35 GPS Drone 4K UHD Camera</h2>
          <p className="text-xl pt-4 text-slate-700">
            4K UHD Camera with 2-Axis Self stabilizing Gimbal - Amazing 4K UHD video quality 3840 x 2160 pixel at 30fps for stunning clarity, deep contrast and vivid colors. The camera with a 100°FOV
            lens gives a broad view of the memorable moment and support up to 128GB SD card
          </p>
          <button className="text-bold text-3xl text-cyan-900 border-2 bg-slate-100 px-3 rounded-lg hover:text-blue-900 hover:bg-red-100 mt-9">Live demo</button>
        </div>
        <div className="w-4/5 mt-5">
          <img src="https://res.cloudinary.com/dskmjlma4/image/upload/v1649000017/product-analysis/drone-hovering-up_puw9wi.jpg" alt="" />
        </div>
      </div>
      <div>
        <div className="mb-6 mt-12">
          <h2 className="text-2xl font-sans font-semibold text-orange-600">Customer Reviews (3)</h2>
        </div>
        <div className="flex justify-around mx-20">
          {topReviews.map((review) => (
            <TopReview key={review.name} review={review}></TopReview>
          ))}
        </div>
        <button onClick={handleClick} type="button" className="text-bold text-3xl text-violet-900 border-2 bg-sky-100 px-3 rounded-lg hover:text-blue-900 my-14 hover:bg-violet-100">
          See All Reviews
        </button>
      </div>
    </div>
  );
};

export default Home;
