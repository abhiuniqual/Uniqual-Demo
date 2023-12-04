import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { ReactComponent as Star } from "../resources/svgs/Star.svg";
import Blog1 from "../resources/images/Blog1.png";
import Blog2 from "../resources/images/Blog2.png";
import Blog3 from "../resources/images/Blog3.png";
import Blog4 from "../resources/images/Blog4.png";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogData = [
  {
    title: "Bad UX Design - 13 Worst UX Design Fails to Avoid in Your SaaS",
    description:
      "We are not married to any specific tool or platform. We sit on our client's side of the table and advise and implement what is best for our clients. We sit on our client's side of the table and advise and implement what is best for our clients. We sit on our client's side of the table and advise and implement what is best for our clients. We sit on our client's side of the table and advise and implement what is best for our clients. We sit on our client's side of the table and advise and implement what is best for our clients...",
    tags: ["UX Tools", "Figma", "UX Research"],
    readTime: "14 Min read",
    image: Blog1,
  },
  {
    title: "Bad UX Design - 13 Worst UX Design Fails to Avoid in Your SaaS",
    description:
      "We are not married to any specific tool or platform. We sit on our client's side of the table and advise and implement what is best for our clients. We sit on our client's side of the table and advise and implement what is best for our clients. We sit on our client's side of the table and advise and implement what is best for our clients. We sit on our client's side of the table and advise and implement what is best for our clients. We sit on our client's side of the table and advise and implement what is best for our clients...",
    tags: ["UX Tools", "Figma", "UX Research"],
    readTime: "14 Min read",
    image: Blog2,
  },
  {
    title: "Bad UX Design - 13 Worst UX Design Fails to Avoid in Your SaaS",
    description:
      "We are not married to any specific tool or platform. We sit on our client's side of the table and advise and implement what is best for our clients. We sit on our client's side of the table and advise and implement what is best for our clients. We sit on our client's side of the table and advise and implement what is best for our clients. We sit on our client's side of the table and advise and implement what is best for our clients. We sit on our client's side of the table and advise and implement what is best for our clients...",
    tags: ["UX Tools", "Figma", "UX Research"],
    readTime: "14 Min read",
    image: Blog3,
  },
  {
    title: "Bad UX Design - 13 Worst UX Design Fails to Avoid in Your SaaS",
    description:
      "We are not married to any specific tool or platform. We sit on our client's side of the table and advise and implement what is best for our clients. We sit on our client's side of the table and advise and implement what is best for our clients. We sit on our client's side of the table and advise and implement what is best for our clients. We sit on our client's side of the table and advise and implement what is best for our clients. We sit on our client's side of the table and advise and implement what is best for our clients...",
    tags: ["UX Tools", "Figma", "UX Research"],
    readTime: "14 Min read",
    image: Blog4,
  },
];

const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      sx={{
        marginTop: {
          md: 18,
          xs: 10,
        },
      }}
    >
      <Helmet>
        <title>Blog | {process.env.REACT_APP_APP_NAME}</title>
      </Helmet>
      <Box
        sx={{
          margin: {
            lg: "60px 120px",
            md: "40px 60px",
            xs: "20px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            marginBottom: "60px",
          }}
        >
          <Star />
          <Typography
            sx={{
              fontSize: {
                lg: "60px",
                md: "42px",
                xs: "26px",
              },
              fontWeight: "700",
              opacity: 1,
            }}
          >
            Blogs
          </Typography>
        </Box>
        <Box>
          {BlogData.map((blog) => (
            <Box
              data-aos="fade-up"
              key={blog.title}
              sx={{
                padding: "20px 32px",
                display: "flex",
                flexDirection: {
                  md: "row",
                  xs: "column",
                },
                columnGap: "100px",
                border: "1px solid #4E4E4E",
                marginBottom: "30px",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Typography variant="h1">{blog.title}</Typography>
                <Typography
                  variant="h4"
                  sx={{
                    padding: "20px 0 40px 0",
                  }}
                >
                  {blog.description}
                </Typography>
                <Box
                  sx={{
                    gap: 2,
                    display: "flex",
                    alignItems: "center",
                    marginBottom: {
                      md: 0,
                      xs: 3,
                    },
                  }}
                >
                  {blog.tags.map((tag) => (
                    <Typography
                      key={tag}
                      variant="button"
                      sx={{
                        padding: "8px 10px",
                        backgroundColor: "#1F1F1F",
                        fontSize: {
                          md: "18px",
                          xs: "16px",
                        },
                        fontWeight: "400",
                      }}
                    >
                      {tag}
                    </Typography>
                  ))}
                  <Typography
                    sx={{
                      fontSize: {
                        md: "18px",
                        xs: "16px",
                      },
                      opacity: 1,
                    }}
                  >
                    {blog.readTime}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  width: {
                    md: "40%",
                    xs: "100%",
                  },
                  height: {
                    md: "100%",
                    xs: "200px",
                  },
                }}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Blog;
