// import TextField from "@mui/material/TextField";

// const Add_merch = () => {
//   const uploadimg =
//     "https://i.ibb.co/h1v2j5g/Screen-Shot-2023-05-17-at-19-30-05.png";

//   return (
//     <div className="w-full bg-[#0E0528] py-[150px]">
//       <div className="w-[100%] flex ">
//         <div className="w-[15%] "></div>
//         <div className="w-[70%]  flex flex-col  gap-[20px] ">
//           <p className="text-[white] text-[45px] font-bold px-[10%]">
//             Create a new merch
//           </p>
//           <div className="w-[100%] flex flex-col gap-[20px] items-center">
//             <TextField
//               label="Standard warning"
//               variant="standard"
//               color="grey"
//             />
//             <div className="w-[80%] rounded-[12px] h-[670px] border-dashed border-2 border-sky-500 bg-[#15122A] relative">
//               <img
//                 src={uploadimg}
//                 className="absolute w-[99%] h-[99%]  object-cover object-center top-0 left-0 ml-[4px]"
//               />
//             </div>
//             <TextField
//               id="outlined-basic"
//               label="Outlined"
//               variant="outlined"
//             />
//             ;
//           </div>
//         </div>
//         <div className="w-[15%] "></div>
//       </div>
//     </div>
//   );
// }

import { Box } from "@mui/material";
import Image from "next/image";


const Add_merch = () => {
  const add_merch = () => { };

  return (
    <Box
      sx={{
        backgroundColor: "#090520",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          paddingLeft: "60px",
          paddingRight: "60px",
          width: "100%",
          paddingTop: "75px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "60px",
            paddingTop: "50px",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "20px",
            borderBottom: "1px dashed #382B76",
          }}
        >
          <p style={{ color: "white", fontSize: "25px", cursor: "pointer" }}>
            Aproved
          </p>
          <p style={{ color: "white", fontSize: "25px", cursor: "pointer" }}>
            Pending
          </p>
          <p style={{ color: "white", fontSize: "25px", cursor: "pointer" }}>
            Order
          </p>
        </Box>
        <Box
          sx={{
            display: "flex",
            padding: "50px",
            paddingLeft: "0",
            paddingRight: "0",
            gap: "50px",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              gap: "10px",
              display: "flex",
              flexDirection: "column",
              width: "400px",
              border: "2px solid #382B76",
              borderRadius: "8px",
              backgroundColor: "#0e0638",
              padding: "25px",
            }}
          >
            <Image
              style={{
                border: "hidden",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              width={400}
              height={400}
              src=""
              alt="img"
            />
            <p
              style={{
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
                fontWeight: "100",
                textAlign: "center",
              }}
            >
              INNER ESSENCE OF MANKIND
            </p>
          </Box>
          {/* Mappppppp */}
          <Box
            sx={{
              gap: "10px",
              display: "flex",
              flexDirection: "column",
              width: "400px",
              border: "2px solid #382B76",
              borderRadius: "8px",
              backgroundColor: "#0e0638",
              padding: "25px",
            }}
          >
            <Image
              style={{
                border: "hidden",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              width={400}
              height={400}
              src=""
              alt="img"
            />
            <p
              style={{
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
                fontWeight: "100",
                textAlign: "center",
              }}
            >
              INNER ESSENCE OF MANKIND
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Add_merch;
