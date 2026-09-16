import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";

const logos = ["/logos/casalalla-takerkoust-logo.png"];

const LinkTree = () => {
  //const [index, setIndex] = useState(0);
  //const [fade, setFade] = useState(true);

  /*useEffect(() => {
    if (!logos.length) return;
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % logos.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);*/
  return (
    <div className="w-full rounded-3xl p-6 bg-casa-white  text-[#4A2C1C] shadow-lg relative">
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <div className="w-32 h-32  rounded-full bg-casa-background">
          <Image
            src={"/logos/casalalla-takerkoust-logo.png"}
            alt="rotating logo"
            width={500}
            height={500}
            className={`w-32 h-32  rounded-full object-cover border border-white`}
          />
        </div>
      </div>

      {/* Name */}
      <h2 className="text-center text-xl">Enjoy Marrakech</h2>
      <p className="text-center text-base mt-1 opacity-80">with us</p>

      {/* Buttons */}
      <div className="mt-8 w-full flex flex-col  justify-center items-center space-y-3">
        <Link
          href="https://maps.app.goo.gl/CdZE6bLCs9tzvyJd7"
          className="w-[85%] flex justify-start items-center pl-7 gap-3  py-3 bg-casa-background text-casa-black rounded-lg font-light shadow-lg hover:scale-105 transition-all duration-200 ease-in-out"
        >
          <FaMapMarkerAlt />
          <span className="pt-0.5">Location</span>
        </Link>

        <Link
          href="https://www.instagram.com/casa.lalla.takerkoust/"
          className="w-[85%] flex justify-start items-center pl-7 gap-3 py-3 bg-casa-background text-casa-black rounded-lg font-light shadow-lg hover:scale-105 transition-all duration-200 ease-in-out"
        >
          <FaInstagram />
          <span className="pt-0.5">Instagram</span>
        </Link>

        <Link
          href="https://casalallatakerkoust.com/menu/"
          className="w-[85%] flex justify-start items-center pl-7 gap-3 py-3 bg-casa-background text-casa-black rounded-lg font-light shadow-lg hover:scale-105 transition-all duration-200 ease-in-out"
        >
          <MdOutlineMenuBook />
          <span className="pt-0.5">Menu</span>
        </Link>
      </div>
    </div>
  );
};

export default LinkTree;
