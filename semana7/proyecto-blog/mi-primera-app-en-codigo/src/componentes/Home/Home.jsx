import React from "react";
import { urlVideo, urlPhoto, urlImageCard } from "../../utils/utils";
import { ReactVideo } from "reactjs-media";
import Carousel from "nuka-carousel";
import "./Home.scss";
import SimpleCard from "../SimpleCard/SimpleCard";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <div className="home__video">
        {/* es ReactVideo me sirve para mostrar videos de diefrentes fuentes , local , youtube , etc */}
        <ReactVideo alt="img" src={urlVideo} autoplay poster={urlPhoto} />
      </div>
      <div className="home__cards">
        <SimpleCard
          url={urlImageCard}
          contenido={"los premios de 20-21"}
          boton="Ir a la web"
          titulo="Los ganadores del año"
        />
        <SimpleCard
          url={urlImageCard}
          contenido={"los premios de 20-21"}
          boton="Ir a la web"
          titulo="Los ganadores del año"
        />
        <SimpleCard
          url={urlImageCard}
          contenido={"los premios de 20-21"}
          boton="Ir a la web"
          titulo="Los ganadores del año"
        />
      </div>
      <div className="home__body">
        <h1 className="home__body__title">Contenido de la seccion</h1>
        <p className="home__body__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde a
          adipisci placeat odit modi blanditiis dolor fuga voluptatem similique
          eaque natus, vel neque nostrum vero iusto ad accusamus, eum
          architecto. Quam quia soluta dicta facilis, obcaecati doloremque
          aliquam sint distinctio voluptatibus quidem debitis itaque
          reprehenderit ipsam numquam sit earum maiores libero! Voluptates error
          excepturi, aut sint adipisci nulla quo? Accusamus. Consequatur
          delectus porro sint modi id? Hic, ipsam voluptatum. Ipsa, repellat
          veritatis natus facere ut suscipit placeat. Quibusdam impedit
          explicabo laboriosam tenetur eaque quod rem aliquid nisi nihil
          inventore! Eligendi? Alias, tenetur earum. Beatae debitis ad odio
          quibusdam architecto quam excepturi est unde, repellat voluptatum
          animi nesciunt esse, deserunt quas sequi voluptatibus nemo nulla iste
          et. Ullam eaque aut voluptatibus?
        </p>
      </div>
      <div className="home__corousel">
        {/* carousel sireve para mostrar imagenes una tras otra , de manera responsiva*/}
        <Carousel pauseOnHover>
          <img
            alt="img"
            src="https://images.pexels.com/photos/2333911/pexels-photo-2333911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
          <img
            alt="img"
            src="https://images.pexels.com/photos/220512/pexels-photo-220512.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
          <img
            alt="img"
            src="https://images.pexels.com/photos/5325700/pexels-photo-5325700.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
          <img
            alt="img"
            src="https://images.pexels.com/photos/2534475/pexels-photo-2534475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
          <img
            alt="img"
            src="https://images.pexels.com/photos/7523991/pexels-photo-7523991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
          <img
            alt="img"
            src="https://images.pexels.com/photos/2837577/pexels-photo-2837577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </Carousel>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
