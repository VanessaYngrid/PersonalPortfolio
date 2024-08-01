import BannerIntro from "./components/bannerintro/page";
import Navbar from "./components/navbar/page";
import Presentation from "./components/presentation/page";
import Weather from "./components/weather/page";

export default function Home() {
  return (
    <div className="bg-[#240046] min-h-screen overflow-x-hidden">
      <Navbar/>
      <Weather/>
      <BannerIntro/>
      <Presentation/>
      </div>
  );
}
