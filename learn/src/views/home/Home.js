import React from "react";
import Header from "../../components/header/Header";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Footer from "../../components/footer/Footer";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Home.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Home() {
  var items = [
    {
      name: "https://arabillionaire.com/api/web/uploads/homePageimages/main%20slider%20international%20desktop%20en(7).png",
    },
    {
      name: "https://arabillionaire.com/api/web/uploads/homePageimages/main%20slider%20soap%20omr(1).png",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        <Carousel>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>

      <div className="card">
        <Card sx={{ minWidth: 400 }}>
          <CardContent>
            <Typography variant="h6" component="div">
              Last Draw Result
            </Typography>
            <Typography variant="body2">Saturday,29 October 2022</Typography>
            <br></br>
            <div className="last-draw-card">
              <Typography className="nb-card">1</Typography>
              <Typography className="nb-card">4</Typography>
              <Typography className="nb-card">8</Typography>
              <Typography className="nb-card">3</Typography>
              <Typography className="nb-card">9</Typography>
              <Typography className="nb-card">2</Typography>
              <Typography className="nb-card">6</Typography>
            </div>
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <Card sx={{ minWidth: 400 }}>
          <CardContent>
            <Typography variant="h6" component="div">
              Next Draw
            </Typography>
            <Typography variant="body2">Sunday,6 November 2022</Typography>
            <br></br>
            <div className="next-draw-card">
              <Typography className="nb-card-next">
                4 <br></br>Days
              </Typography>
              <Typography className="nb-card-next">
                8 <br></br>Hours
              </Typography>
              <Typography className="nb-card-next">
                6 <br></br>Minutes
              </Typography>
              <Typography className="nb-card-next">
                50 <br></br>Seconds
              </Typography>
            </div>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </div>

      <Typography>
        <h1>3 Steps to start your billionaire journey</h1>
        <div className="steps-cards-all">
          <Card sx={{ minWidth: 200 }}>
            <CardContent className="steps-card">
              <img
                src={"	https://arabillionaire.com/img/buy-product.89cf3fb1.png"}
                alt="steps"
              />
              <Typography variant="h6" component="div">
                BUY A SOAP TO GET INTO A WEEKLY DRAW
              </Typography>
              <Typography variant="body2">
                Maximize your winning opportunity! For each Soap you buy, you
                would get an entry to our weekly draws.
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
          <Card sx={{ minWidth: 200 }}>
            <CardContent className="steps-card">
              <img
                src={
                  "	https://arabillionaire.com/img/enter_the_draw.8cb091e3.png"
                }
                alt="steps"
              />
              <Typography variant="h6" component="div">
                CHOOSE YOUR DRAW ENTRY NUMBERS
              </Typography>
              <Typography variant="body2">
                Select 7 numbers of your choice from left to right as your entry
                numbers to the draw.
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
          <Card sx={{ minWidth: 200 }}>
            <CardContent className="steps-card">
              <img
                src={"https://arabillionaire.com/img/win.43bd9595.png"}
                alt="steps"
              />
              <Typography variant="h6" component="div">
                BE A WINNER
              </Typography>
              <Typography variant="body2">
                To know if you are the lucky winner; watch our live Draw at Arab
                Billionaire Official Channels on Social Media every Sunday 7PM
                UAE time.
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </div>
      </Typography>

      <Typography>
        <h1>Winners</h1>
        <Typography variant="p" component="div">
          Your are one step away from starting your billionaire journey
        </Typography>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div>
                <img
                  src={
                    "https://arabillionaire.com/api//web/uploads/winners/rachel-mcdermott-0fn7fxv1ewa-unsplash.jpg"
                  }
                  alt="steps"
                />
                <p>Maria Taoum</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src={
                    "https://arabillionaire.com/api//web/uploads/winners/jonas-kakaroto-kipqvvtoc1s-unsplash.jpg"
                  }
                  alt="steps"
                />
                <p>Elie Saoud</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src={
                    "https://arabillionaire.com/api//web/uploads/winners/le-minh-phuong-jgzitdfhmts-unsplash.jpg"
                  }
                  alt="steps"
                />
                <p>Souad Torfi</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div>
                <img
                  src={
                    "https://arabillionaire.com/api//web/uploads/winners/rachel-mcdermott-0fn7fxv1ewa-unsplash.jpg"
                  }
                  alt="steps"
                />
                <p>tahani Hassan</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Typography>

      <div className="last-section">
        {" "}
        <div className="last-section-card">
          <Card sx={{ minWidth: 200, minHeight: "100%" }}>
            <CardContent className="content-last-card">
              <Typography variant="h2" component="div">
                Giving Back
              </Typography>
              <Typography variant="h4" component="div">
                Making a difference together
              </Typography>
              <br></br>
              <Typography>
                Arab Billionaire is committed to giving to charity.We believe
                that our contribution to the society is part of our mission to
                improve human living and make a difference in society.
              </Typography>
              <br></br>
              <Button variant="contained">Know More</Button>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </div>
        <div className="last-section-image">
          <img
            src="	https://arabillionaire.com/img/giving-back.beea8dc9.png"
            alt="giving-back"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Item(props) {
  return (
    <Paper className="paper">
      <img src={props.item.name} alt="background" />
    </Paper>
  );
}

export default Home;
