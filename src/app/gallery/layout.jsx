import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ButtonWtsp from "@/components/ButtonWtsp";
import Hero from "./components/Hero";

export default function GalleryLayout({ children }) {
  return (
    <div>
      {/* GLOBAL HEADER */}
      <Navbar path="/fr/gallery" />
      <Hero />

      {/* MAIN CONTENT */}
      <main>{children}</main>

      {/* GLOBAL FOOTER */}
      <Footer />

      {/* FLOAT BUTTON */}
      <div className="fixed bottom-7 right-6 z-50">
        <ButtonWtsp />
      </div>
    </div>
  );
}
