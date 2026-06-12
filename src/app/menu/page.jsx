import PdfViewerClient from "./components/PdfClient";

export const metadata = {
  title: "Menu | Casa Lalla Takerkoust | Moroccan Restaurant Ibiza Style",
  description:
    "Explore the Casa Lalla Takerkoust menu featuring refined Moroccan cuisine, fresh local ingredients, and signature dishes. Enjoy lakeside dining near Marrakech with views of Lake Takerkoust and the Atlas Mountains.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/menu/",
  },
  openGraph: {
    title: "Menu | Casa Lalla Takerkoust | Moroccan Cuisine Near Marrakech",
    description:
      "Discover the Casa Lalla Takerkoust menu with authentic Moroccan dishes, fresh ingredients, and lakeside dining experience near Marrakech and the Agafay Desert.",
    url: "https://casalallatakerkoust.com/menu/",
    siteName: "Casa Lalla Takerkoust",
    type: "website",
  },
};

const page = () => {
  return <PdfViewerClient file="/menu/menu-casalalla-anglais.pdf" />;
};

export default page;
