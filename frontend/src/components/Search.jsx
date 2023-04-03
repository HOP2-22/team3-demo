import { AiOutlineSearch } from "react-icons/ai";
import { Container, Box } from "@mui/material";
export default function Search({ boolean }) {
  return (
    <Box
      className={`bg-gray-100 w-full h-[280px] absolute mt-[75px] flex items-center  ${
        boolean ? "flex" : "hidden"
      } `}
      sx={{
        display: {
          xs: "hidden",
          md: "flex",
        },
      }}>
      <Container>
        <div className="text-[76px]">LOOKING FOR SOMETHING ?</div>
        <span className="flex items-center h-[40px] gap-3 text-[22px]">
          <AiOutlineSearch />
          <input
            placeholder="SEARCH BY PRODUCT, ARTWORK, ARTIST, COMMUNITY OR TOPIC"
            className="w-full outline-none bg-transparent"
          />
        </span>
      </Container>
    </Box>
  );
}
