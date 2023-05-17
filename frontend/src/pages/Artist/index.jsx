import axios from "axios";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import { useRouter } from "next/router";

const Artist = ({ artists }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const router = useRouter();
  const { push } = useRouter();

  console.log(artists);

  const handleClick = (id) => {};

  const handleTailor = (event) => {
    if (event.target.checked) {
      router.push({
        query: {
          type_of: "Оёдолчин",
        },
      });
    } else {
      delete query.type_of;
      router.push({
        query: { ...query },
      });
    }
  };
  const handlePhotographer = (event) => {
    if (event.target.checked) {
      router.push({
        query: {
          type_of: "Гэрэл зурагчин",
        },
      });
    } else {
      delete query.type_of;
      router.push({
        query: { ...query },
      });
    }
  };

  const handleDrawer = (event) => {
    if (event.target.checked) {
      router.push({
        query: {
          type_of: "Зураач",
        },
      });
    } else {
      delete query.type_of;
      router.push({
        query: { ...query },
      });
    }
  };
  const handleGraphic = (event) => {
    if (event.target.checked) {
      router.push({
        query: {
          type_of: "График дизайнер",
        },
      });
    } else {
      delete query.type_of;
      router.push({
        query: { ...query },
      });
    }
  };
  const handleCraftsman = (event) => {
    if (event.target.checked) {
      router.push({
        query: {
          type_of: "Гар урлаач",
        },
      });
    } else {
      delete query.type_of;
      router.push({
        query: { ...query },
      });
    }
  };

  return (
    <Box sx={{ marginTop: "70px", marginBottom: "100px", bgcolor: "#090520" }}>
      <Container maxWidth="xl">
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "40px",
              paddingBottom: "40px",
            }}
          >
            <Box sx={{ display: "flex", alignSelf: "self-start" }}>
              <Box
                sx={{
                  fontSize: {
                    xs: "70px",
                    sm: "85px",
                    md: "85px",
                    lg: "90px",
                    xl: "96px",
                  },
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                ARTIST
              </Box>
              <Box
                sx={{
                  color: "rgb(205, 30, 59)",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "25px",
                    sm: "30px",
                    md: "30px",
                    lg: "30px",
                    xl: "36px",
                  },
                }}
              >
                {artists.length}
              </Box>
            </Box>
            <Box
              sx={{
                alignSelf: "self-start",
                fontWeight: "300",
                color: "white",
              }}
            >
              Мэдрэмж бүхэн өөр
            </Box>
            <Box
              sx={{
                paddingTop: "16px",
                paddingBottom: "16px",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "1px",
                  bgcolor: "white",
                  boxSizing: "border-box",
                }}
              ></Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                // flex: 4,
                // marginTop: "-20px",
                width: {
                  xs: "100%",
                  sx: "100%",
                  md: "100%",
                  lg: "100%",
                  xl: "auto",
                },
                gap: "20px",
                justifyContent: {
                  xs: "center",
                  sx: "none",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
                paddingLeft: {
                  xs: "0px",
                  xl: "70px",
                },
                paddingRight: {
                  xs: "0px",
                  xl: "70px",
                },
              }}
            >
              {artists?.map((artist, index) => (
                <div
                  className="w-[360px] h-[360px] border-2"
                  onClick={() => push(`/artist/${artist?._id}`)}
                >
                  <div className="w-[100%] h-[100%]  flex items-center flex-col ">
                    <img src={artist?.image} className="w-[100%] h-[40%]" />
                    <img
                      src={artist?.image}
                      className="w-[100px] h-[100px] rounded-full border-[6px] mt-[-50px]"
                    />
                    <div className="w-[100%] flex flex-col items-center gap-[4px]">
                      <p
                        className="text-[28px] font-bold"
                        style={{ color: "white" }}
                      >
                        {artist?.username}
                      </p>
                      <p
                        className="text-[14px] text-[#636363]"
                        style={{ color: "white" }}
                      >
                        {artist?.type_of}
                      </p>
                      <div
                        className="w-[100%] px-[10%]"
                        style={{ color: "white" }}
                      >
                        <p>{artist?.cv}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Box>
            <Box
              sx={{
                paddingLeft: "0px",
                paddingRight: {
                  xs: "0px",
                  xl: "80px",
                },
                width: {
                  xs: "none",
                  sx: "none",
                  md: "25%",
                  lg: "25%",
                  xl: "30%",
                },
                display: {
                  xs: "none",
                  sx: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  top: "80px",
                  position: "sticky",
                }}
              >
                <Box
                  sx={{
                    padding: "10px",
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  Төрлөөр шүүх
                </Box>
                <Box sx={{ display: "flex", color: "white" }}>
                  <Checkbox {...label} />
                  <Box sx={{ display: "flex", alignItems: "center" }}>Бүгд</Box>
                </Box>
                <Box sx={{ display: "flex", color: "white" }}>
                  <Checkbox {...label} onChange={handleTailor} />
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    Оёдолчин
                  </Box>
                </Box>
                <Box sx={{ display: "flex", color: "white" }}>
                  <Checkbox {...label} onChange={handlePhotographer} />
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    Гэрэл зурагчин
                  </Box>
                </Box>
                <Box sx={{ display: "flex", color: "white" }}>
                  <Checkbox {...label} onChange={handleDrawer} />
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    Зураач
                  </Box>
                </Box>
                <Box sx={{ display: "flex", color: "white" }}>
                  <Checkbox {...label} onChange={handleGraphic} />
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    График дизайнер
                  </Box>
                </Box>
                <Box sx={{ display: "flex", color: "white" }}>
                  <Checkbox {...label} onChange={handleCraftsman} />
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    Гар урлаач
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Artist;

export async function getServerSideProps(ctx) {
  const query = ctx.query;

  try {
    const res = await axios.get(
      `http://localhost:7070/artist/?${
        query.type_of ? `type_of=${query.type_of}` : ""
      }`
    );

    const artists = res.data.data.filter((item) => {
      if (item.products.length > 0) return item;
    });

    return {
      props: {
        artists: artists,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}
