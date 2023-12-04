import React, { useState, useEffect } from "react";
import { Box, Paper, Typography, Modal, Link } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../resources/svgs/Logo.svg";
import { ReactComponent as Humburger } from "../resources/svgs/Humburger.svg";
import { ReactComponent as LogoBlack } from "../resources/svgs/logoblack.svg";
import { ReactComponent as Close } from "../resources/svgs/close.svg";
import { ReactComponent as Uniqual } from "../resources/svgs/UniQual..svg";

const Menus = [
  { title: "Services", link: "/service" },
  { title: "Projects", link: "" },
  { title: "Team", link: "" },
  { title: "About us", link: "" },
  { title: "Engagement model", link: "" },
  { title: "Blogs", link: "/blog" },
  { title: "Contact us", link: "" },
];

const data = [
  {
    title: "Work with us",
    links: [
      {
        label: "+91 87485 98749",
        url: "tel:+918748598749",
      },
      {
        label: "Contact us",
        url: "https://uniqualitech.com/contact",
      },
    ],
  },
  {
    title: "Follow us",
    links: [
      {
        label: "Twitter",
        url: "https://twitter.com/UniQualiTech9",
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/uniqualitech/",
      },
    ],
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [menus, setMenus] = useState(Menus);
  const handleLogoClick = () => {
    setOpen(false);
    navigate("/");
  };

  const modalStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "white",
    border: "none",
    boxShadow: "none",
    outline: "none",
    padding: {
      md: "30px 50px",
      xs: "30px",
    },
  };

  // const location = useLocation();
  // useEffect(() => {
  //   const updatedMenus = Menus.map((item) => ({
  //     ...item,
  //     color: location.pathname.includes(item.title) ? "red" : "inherit",
  //   }));
  //   setMenus(updatedMenus);
  // }, [location.pathname]);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(40px)",
          zIndex: 999,
          top: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: {
              md: "30px 50px",
              xs: "15px 30px",
            },
          }}
        >
          <Box sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            <Logo />
          </Box>
          <Typography
            variant="body2"
            sx={{ display: { sm: "block", xs: "none" } }}
          >
            Maverick Software Development House - Surat<sup>/IND</sup>
          </Typography>
          <Paper sx={{ cursor: "pointer", backgroundColor: "transparent" }}>
            <Humburger onClick={handleOpen} />
          </Paper>
        </Box>
      </Box>
      <Modal
        open={open}
        aria-labelledby="modal-title"
        sx={{ transition: "1.5s ease" }}
      >
        <Box sx={modalStyle}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ cursor: "pointer" }} onClick={handleLogoClick}>
              <LogoBlack />
            </Box>
            <Box sx={{ cursor: "pointer" }} onClick={handleClose}>
              <Close />
            </Box>
          </Box>
          <Box
            sx={{
              height: {
                md: "70vh",
                xs: "80vh",
              },
              display: "flex",
              justifyContent: "center",
              alignItems: {
                md: "flex-end",
                xs: "center",
              },
              gap: {
                md: 18,
                xs: 10,
              },
              color: "black",
            }}
          >
            <Box
              sx={{
                display: {
                  md: "block",
                  xs: "none",
                },
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "end", marginBottom: 2 }}
              >
                <Uniqual />
              </Box>
              <Typography variant="subtitle">
                Maverick Software Development House
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 5,
                  justifyContent: "end",
                  marginY: 2,
                }}
              >
                {data.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      marginTop: {
                        md: 0,
                        xs: 4,
                      },
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        padding: "0 0 30px",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                      }}
                    >
                      {item.links.map((link, index) => (
                        <Link
                          key={index}
                          href={link.url}
                          sx={{
                            cursor: "pointer",
                            fontSize: {
                              md: "20px",
                              xs: "18px",
                            },
                            fontWeight: "400",
                          }}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {Menus.map((item, i) => (
                <Typography
                  key={i}
                  variant="menu"
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                  onClick={() => {
                    navigate(item.link);
                    handleClose();
                  }}
                >
                  {item.title}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;
