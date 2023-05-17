import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import useStorage from "@/hooks/useStorage";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { IconButton, Stack, Button, Typography } from "@mui/material";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { toast } from "react-hot-toast";

const ArtistSignUp = () => {
  const router = useRouter();

  const { handleUpload, handleUploadBgImg } = useStorage();
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    name: "",
    type_of: "",
    image: "",
    backgroundImage: "",
    cv: "",
  });

  //file
  const [image, setImage] = useState();
  const [imageBg, setImageBg] = useState();

  const typeHandler = (event) => {
    setForm({ ...form, type_of: event.target.value });
  };

  const emailHandler = async (event) => {
    setForm({ ...form, email: event.target.value });
  };
  const passwordHandler = async (event) => {
    setForm({ ...form, password: event.target.value });
  };
  const passwordCheckHandler = async (event) => {
    setForm({ ...form, passwordCheck: event.target.value });
  };
  const nameHandler = async (event) => {
    setForm({ ...form, name: event.target.value });
  };
  const cvHandler = async (event) => {
    setForm({ ...form, cv: event.target.value });
  };
  const handleImage = async () => {
    try {
      if (!image) return;
      const res = await handleUpload(image);
      setForm({ ...form, image: res });
    } catch (error) {
      console.log(error);
    }
  };
  const handleBgImg = async () => {
    try {
      if (!imageBg) return;
      const res = await handleUploadBgImg(imageBg);

      setForm({ ...form, backgroundImage: res });
    } catch (error) {
      console.log(error);
    }
  };

  const signUpArtist = async () => {
    if (form.email.length === 0) return toast.error(`email field is empty`);
    if (form.password.length === 0)
      return toast.error(`password field is empty`);
    if (form.name.length === 0) return toast.error(`name field is empty`);
    if (form.type_of.length === 0) return toast.error(`type_of field is empty`);
    if (form.image.length === 0) return toast.error(`image field is empty`);
    if (form.backgroundImage.length === 0)
      return toast.error(`backgroundImage field is empty`);
    if (form.cv.length === 0) return toast.error(`cv field is empty`);
    if (form?.password === form?.passwordCheck) {
      try {
        delete form.passwordCheck;

        await axios.post("http://localhost:7070/artist/create", {
          ...form,
        });

        toast.success("Successfully registered");

        setForm({
          email: "",
          password: "",
          passwordCheck: "",
          name: "",
          type_of: "",
          image: "",
          backgroundImage: "",
          cv: "",
        });

        router.push("/login/artist");
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Password does not match!");
    }
  };

  const UploadImageBgImg = () => {
    return (
      <Stack direction="row" alignItems="center" spacing={2}>
        <Button
          variant="contained"
          component="label"
          onClick={() => handleBgImg()}
        >
          Upload
        </Button>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={(el) => {
              setImageBg(el.target.files[0]);
            }}
          />

          <PhotoCamera />
          <Typography> Зургаа сонгоно уу?</Typography>
        </IconButton>
      </Stack>
    );
  };

  const UploadImage = () => {
    return (
      <Stack direction="row" alignItems="center" spacing={2}>
        <Button
          variant="contained"
          component="label"
          onClick={() => handleImage()}
        >
          Upload
        </Button>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={(el) => {
              setImage(el.target.files[0]);
            }}
          />

          <PhotoCamera />
        </IconButton>
      </Stack>
    );
  };

  return (
    <Box>
      <div
        className="w-full h-[190px]  mt-[75px] flex flex-col items-center py-[650px] justify-center gap-10"
        style={{ backgroundColor: "#090520" }}
      >
        <div className="text-[32px] text-white">Бүртгүүлэх</div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="px-[20px] text-[16px] text-white">Цахим хаяг</p>
            <input
              className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
              placeholder="••••••••••"
              onChange={emailHandler}
              value={form?.email}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="px-[20px] text-[16px] text-white">Нууц үг</p>
            <input
              className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
              placeholder="••••••••••"
              onChange={passwordHandler}
              value={form?.password}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="px-[20px] text-[16px] text-white">
              Нууц үгээ давтна уу?
            </p>
            <input
              className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
              placeholder="••••••••••"
              onChange={passwordCheckHandler}
              value={form?.passwordCheck}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="px-[20px] text-[16px] text-white">
              Өөрийн уран бүтээлчийн нэрээ бичнэ үү?
            </p>
            <input
              className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
              placeholder="Ганаа"
              onChange={nameHandler}
              value={form?.name}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="px-[20px] text-[16px] text-white">
              Өөрийн товч мэдээлэлээ бичнэ үү?
            </p>
            <input
              className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
              placeholder="ёйхыөаб"
              onChange={cvHandler}
              value={form?.cv}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Box sx={{ minWidth: 120, color: "white" }}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "white" }}
                >
                  type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={form?.type_of}
                  label="Age"
                  onChange={typeHandler}
                >
                  <MenuItem value={"Оёдолчин"}>Оёдолчин</MenuItem>
                  <MenuItem value={"Гэрэл зурагчин"}>Гэрэл зурагчин</MenuItem>
                  <MenuItem value={"Зураач"}>Зураач</MenuItem>
                  <MenuItem value={"График дизайнер"}>График дизайнер</MenuItem>
                  <MenuItem value={"Гар урлаач"}>Гар урлаач</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="flex flex-col">
            <UploadImage />
            <img src={form?.image} alt="image" style={{ width: "10vh" }} />
            <UploadImageBgImg />
            <img
              src={form?.backgroundImage}
              alt="image"
              style={{ width: "10vh" }}
            />
          </div>
          <div className="flex  gap-2"></div>
          <button
            className="text-[20px] w-[280px] sm:w-[380px] h-[45px] rounded-full bg-[#1b1927] text-white"
            onClick={() => {
              signUpArtist();
            }}
          >
            Бүртгүүлэх
          </button>
        </div>
      </div>
    </Box>
  );
};

export default ArtistSignUp;
