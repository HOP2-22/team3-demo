import { Container, Box } from "@mui/material";

import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ searchClick }) => {
  return (
    <Box
      className={`w-full h-[280px] absolute mt-[75px] flex items-center  ${
        searchClick ? "flex" : "hidden"
      } `}
      sx={{
        display: {
          xs: "hidden",
          md: "flex",
        },
        bgcolor: "#090520",
      }}
    >
      <Container
        sx={{
          bgcolor: "#090520",
        }}
      >
        <div className="text-[76px]" style={{ color: "white" }}>
          LOOKING FOR SOMETHING?
        </div>
        <span className="flex items-center h-[40px] gap-3 text-[22px]">
          <AiOutlineSearch color="white" />
          <input
            placeholder="SEARCH BY PRODUCT, ARTWORK, ARTIST, COMMUNITY OR TOPIC"
            className="w-full outline-none bg-transparent"
          />
        </span>
      </Container>
    </Box>
  );
};

export default Search;
