import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <div className="bg-[#1b1927]  pb-[100px] ">
      <Container>
        <div className="flex flex-col ">
          <div className="w-full grid grid-cols-12 h-[500px] pt-[50px] md:pt-[150px] gap-y-[50px]">
            <div className="col-span-12 sm:col-span-6 xl:col-span-3 w-[200px] flex flex-col gap-[8px]">
              <div className="mb-[30px] flex flex-col gap-[10px]">
                <div className="text-white font-bold">INFORMATION</div>
                <div className="h-[1px] rounded-[2px] bg-red-500"></div>
              </div>
              <div className="text-white text-[16px] font-bold flex flex-col items-start gap-[10px]">
                <p>privacy policy</p>
                <p>Geru for ...</p>
                <p>terms of use</p>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 xl:col-span-3 w-[220px] flex flex-col gap-[8px]">
              <div className="mb-[30px] flex flex-col gap-[10px]">
                <div className="text-white font-bold">ХОЛБОО БАРИХ</div>
                <div className="h-[1px] rounded-[2px] bg-red-500"></div>
              </div>
              <div className="text-white text-[16px] font-bold flex flex-col items-start gap-[10px]">
                <p>Сүхбаатар дүүрэг, 5-р хороо, New Mind Building, 1 давхар</p>
                <p>Мэйл: info@geru.mn</p>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 xl:col-span-3 w-[220px] flex flex-col gap-[8px]">
              <div className="mb-[30px] flex flex-col gap-[10px]">
                <div className="text-white font-bold">FOR LATEST UPDATES</div>
                <div className="h-[1px] rounded-[2px] bg-red-500"></div>
              </div>
              <div className="text-white text-[16px] font-bold flex flex-col items-start gap-[10px] ">
                <button className="bg-[#464ee3] rounded-[7px] w-[200px] h-[50px]">
                  JOIN OUR COMMUNITY
                </button>
                <button className="h-[50px]">JOIN US ON INSTAGRAM</button>
                <button className="bg-[#3875e9] rounded-[7px] w-[200px] h-[50px]">
                  LIKE US ON FACEBOOK
                </button>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 xl:col-span-3 w-[220px] flex flex-col gap-[8px]">
              <div className="mb-[30px] flex flex-col gap-[10px]">
                <div className="text-white font-bold">GERU АРТИСТ</div>
                <div className="h-[1px] rounded-[2px] bg-red-500"></div>
              </div>
              <p className="text-white font-bold">
                Мэдрэмжээ чөлөөтэй илэрхийлэх бүтээлч орон зай Geru-г санал
                болгож байна
              </p>
            </div>
          </div>
          <div
            className="text-white text-[30px] font-bold mt-[500px] sm:mt-[50px] md:mt-[250px] md:text-[52px] lg:mt-[200px] xl:mt-[30px] lg:text-[72px]"
            style={{ display: "flex", justifyContent: "center" }}
          >
            ONE STEP UP
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
