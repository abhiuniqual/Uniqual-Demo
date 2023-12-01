import React from "react";
import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { ReactComponent as Star } from "../resources/svgs/Star.svg";
import Blog1 from "../resources/images/Blog1.png";
import Blog2 from "../resources/images/Blog2.png";
import Blog3 from "../resources/images/Blog3.png";
import Blog4 from "../resources/images/Blog4.png";

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
  return (
    <>
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
          <Typography variant="h2">Blogs</Typography>
        </Box>
        <Box>
          {BlogData.map((blog) => (
            <Box
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
                <Typography
                  sx={{
                    textDecorationLine: "underline",
                    fontWeight: "700",
                    fontSize: {
                      lg: "40px",
                      md: "30px",
                      xs: "24px",
                    },
                  }}
                >
                  {blog.title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: {
                      lg: "20px",
                      md: "16px",
                      xs: "14px",
                    },
                    opacity: "0.8",
                    padding: "15px 0 30px 0",
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
                        padding: "6px 8px",
                        backgroundColor: "#1F1F1F",
                        fontSize: {
                          md: "16px",
                          xs: "12px",
                        },
                        fontWeight: "400",
                        color: "white",
                      }}
                    >
                      {tag}
                    </Typography>
                  ))}
                  <Typography
                    sx={{
                      fontSize: {
                        md: "16px",
                        xs: "12px",
                      },
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
    </>
  );
};

export default Blog;
