import Landingpage from "../assets/landing.png";
import appDownload from "../assets/appDownload.png";
const Homepage = () => {
  return (
    <div>
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
      </div>

      <div className="grid md:grid-cols-2 gap-5 pt-5">
        <img src={Landingpage} alt="page" />
        <div className="flex flex-col item-center justify-center gap-4 text-center">
          <span>Order takeaway even Faster!</span>
          <span>
            Download the MermEats App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownload} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
