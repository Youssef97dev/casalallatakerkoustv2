import BackgroundSlideshow from "./components/BackgroundSlideshow";
import LinkTree from "./components/LinkTree";

const page = () => {
  return (
    <main className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden p-5">
      <BackgroundSlideshow />
      <LinkTree />
    </main>
  );
};

export default page;
