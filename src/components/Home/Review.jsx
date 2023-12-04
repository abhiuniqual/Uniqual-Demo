import React, { useEffect } from "react";
import { Container, Grid, Typography, Paper, Avatar, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import theme from "../../theme";
import AOS from "aos";
import "aos/dist/aos.css";

const clients = [
  {
    name: "Raynald Salah",
    position: "CEO and Founder, Klapty",
    imgSrc: "https://uniqualitech.com/public/front/assets/images/client-1.jpg",
  },
  {
    name: "Abdulrahman Abu Zaid",
    position: "Founder, Juthoor",
    imgSrc: "https://uniqualitech.com/public/front/assets/images/client-2.jpg",
  },
  {
    name: "Anand Hebbale",
    position: "Founder, SparkMySport a Skillteck Inc",
    imgSrc: "https://uniqualitech.com/public/front/assets/images/client-3.jpg",
  },
  {
    name: "Akinbo Tenitogaju",
    position: "Founder, News Notifier",
    imgSrc: "https://uniqualitech.com/public/front/assets/images/client-4.jpg",
  },
  {
    name: "Andrew Buxton",
    position: "Founder and CEO, Sezzi",
    imgSrc: "https://uniqualitech.com/public/front/assets/images/client-5.jpg",
  },
  {
    name: "Carl Pomfret",
    position: "Co-Founder, Financielle",
    imgSrc: "https://uniqualitech.com/public/front/assets/images/client-6.jpg",
  },
  {
    name: "Desmond Eastmond",
    position: "CEO, Ultimate Assist Publishing Corporation",
    imgSrc: "https://uniqualitech.com/public/front/assets/images/client-7.jpg",
  },
  {
    name: "Chris Bogiatzis",
    position: "CEO, FastFinity",
    imgSrc: "https://uniqualitech.com/public/front/assets/images/client-8.jpg",
  },
];

const reviews = [
  <>
    <Typography style={{ marginBottom: "20px", opacity: 1, fontSize: "16px" }}>
      Pritesh and his team UniQual Itech are really amazing. They create many
      complex things on this big project: one iOs app, one android app(With
      Wi-Fi connection to material) and re-create a new website. They also work
      nice with our CTO on many task, for example on the API part between both
      apps connection to our webplatform and website for online payment.
    </Typography>
    <Typography style={{ opacity: 1, fontSize: "16px" }}>
      They work nice and fast, they have a really good communication and
      understanding, and also, they are really resonsiveness when necessary! For
      sure, it is one of our best experience on Upwork after more than 4 years
      here. I really recommend, it's was a pleasure on this first project, and
      we will start now another project with Pritesh and his team. Thank you
      guys, you rock!!"
    </Typography>
  </>,
  "Pritesh is phenomenal and will always go out of his way to ensure deliverables are met and support/advice is given. I worked with Pritesh on a digital health app, and I wouldn't have wanted to do this project with any other person. I highly recommend Pritesh and his company, and I do not doubt that future projects will be with him.",
  <>
    <Typography style={{ marginBottom: "20px", opacity: 1, fontSize: "16px" }}>
      We are completing our Phase 1 work with them and will engage them again
      going forward. UniQual was our partner in success. From day one, they
      worked closely with us. Very flexible with the several changes that we had
      to make based on feedback from user testing. We were very impressed with
      their commitment to making our app successful.
    </Typography>
    <Typography style={{ opacity: 1, fontSize: "16px" }}>
      The team always met the agreed milestones. Even after the fixed price
      assignment was complete, they continued to support us with minor changes
      and bug fixes. We have great feedback from the market for this app making
      us invest further. Hoping to continue the engagement with another project.
      Highly recommend UniQual.
    </Typography>
  </>,
  "Pritesh is absolutely the best guy I've ever worked with. You can never go wrong with Pritesh and always expect 110% from him. His competence, patience, knowledge, understanding, collaboration are skills you can't get from 95% of the app developer here on Upwork. He did exactly what I told him, what I paid for and he even did more. I will be using him for future projects and I'm lucky I stumble upon this guy.",
  "Pritesh and his team were great about getting feedback and adapting to the vision that I had for my app. They were very professional and good about getting it down quickly.",
  <>
    <Typography style={{ marginBottom: "20px", opacity: 1, fontSize: "16px" }}>
      Financially hired UniQual to build its first mobile application for
      submission to both app stores. Our goals were to build an app that was an
      enhancement to the existing Financielle brand, was suitable for paying
      customers, and was capable of easy iteration and development. The App
      included education and course functionality, budget and net worth
      software, life admin reminders, and push notifications. Additional
      features included community software, blog article functionality, and our
      Instagram feed pulling in.
    </Typography>
    <Typography style={{ opacity: 1, fontSize: "16px" }}>
      We benefitted from the UniQual project management style, including an
      inclusive Skype chat group, a project management portal where we could
      track progress and communicate on specific points. We were also impressed
      by the timely responses from the team, especially with the difference in
      time zones. We loved the quality of the development and the collaboration
      between UniQual and Financielle - we felt like one team which is essential
      to be able to develop with precision and pace.
    </Typography>
  </>,
  <>
    <Typography style={{ marginBottom: "20px", opacity: 1, fontSize: "16px" }}>
      This has been an unbelievable experience for my first time developing an
      APP. Precise coached us along the way and made us feel comfortable with
      every phase of this project.
    </Typography>
    <Typography style={{ opacity: 1, fontSize: "16px" }}>
      His work is paramount to the success of our project and we are
      pleased..... He is a home run and for those who have doubts download his
      work on both Apple and Android users as a testament to "Assistant
      Basketball Coach"... Thank you Pritesh
    </Typography>
  </>,
  <>
    <Typography style={{ marginBottom: "20px", opacity: 1, fontSize: "16px" }}>
      This has been an unbelievable experience for my first time developing an
      APP. Precise coached us along the way and made us feel comfortable with
      every phase of this project.
    </Typography>
    <Typography style={{ opacity: 1, fontSize: "16px" }}>
      When you’re looking for a team to realize your software project, you’re
      definitely at the right place. Thanks again for the good and also ongoing
      cooperation!
    </Typography>
  </>,
];

const Review = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      sx={{
        marginY: {
          md: 8,
          xs: 4,
        },
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <Box>
              <Typography
                data-aos="fade-right"
                style={{
                  opacity: 1,
                  paddingBottom: "20px",
                  fontSize: "48px",
                  fontWeight: "bold",
                }}
                gutterBottom
              >
                Why they love us?
              </Typography>
              <Box marginY={4}>
                <Box my={2}>
                  {[...Array(5)].map((_, index) => (
                    <img
                      key={index}
                      src="https://uniqualitech.com/public/front/assets/images/star.svg"
                      alt="star"
                    />
                  ))}
                </Box>
                <Typography sx={{ opacity: 1, fontWeight: "bold" }}>
                  Uniqual is rated 8/8 average from 16 reviews on Upwork
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
              >
                {clients.map((client, index) => (
                  <SwiperSlide key={index}>
                    <Paper
                      sx={{
                        display: "flex",
                        backgroundColor: "black",
                        color: "white",
                        gap: "40px",
                      }}
                    >
                      <Avatar
                        alt={client.name}
                        src={client.imgSrc}
                        sx={{ height: "80px", width: "80px" }}
                      />
                      <Box>
                        <Typography
                          gutterBottom
                          style={{
                            fontSize: "30px",
                            fontWeight: "bold",
                            lineHeight: 1,
                            opacity: 1,
                          }}
                        >
                          {client.name}
                        </Typography>
                        <Typography
                          style={{
                            color: theme.palette.primary.light,
                            opacity: 1,
                          }}
                        >
                          {client.position}
                        </Typography>
                      </Box>
                    </Paper>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { md: "column", xs: "row" },
                gap: 4,
              }}
            >
              <Box>
                <img
                  className="quoteImg"
                  src="https://uniqualitech.com/public/front/assets/images/quote.svg"
                  alt="quote"
                />
              </Box>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  opacity: 1,
                }}
              >
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                >
                  {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                      <Paper
                        sx={{
                          color: theme.palette.primary.light,
                          backgroundColor: theme.palette.primary.main,
                        }}
                      >
                        <Typography
                          style={{
                            opacity: 1,
                            color: theme.palette.primary.light,
                            fontSize: "16px",
                          }}
                        >
                          {review}
                        </Typography>
                      </Paper>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Review;
