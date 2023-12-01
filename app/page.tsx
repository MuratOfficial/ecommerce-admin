import ClientNav from "@/components/client/client-nav";
import PhotoCollage from "@/components/client/photo-collage";
import PopularCategory from "@/components/client/popular-category";
import ProcessChain from "@/components/client/process-chain";
import ProductLinks from "@/components/client/product-links";
import React from "react";

function HomePage() {
  return (
    <div>
      <ClientNav />
      <PhotoCollage />
      <PopularCategory />
      <ProductLinks />
      {/**Animated Blocks */}
      <ProcessChain />
    </div>
  );
}

export default HomePage;
