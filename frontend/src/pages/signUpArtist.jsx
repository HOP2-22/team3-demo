import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStorage from "@/hooks/useStorage";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { IconButton, Stack, Button, Typography } from "@mui/material";

export default function SignUp() {
  const [emailSignUp, setEmailSignUpArtist] = useState();
  const [passwordUserSignUp, setPasswordSignUpArtist] = useState();
  const [username, setUserName] = useState();
  const [artistType, setArtistType] = useState();
  const [checkpassUserSignUp, setCheckPassSignUpArtist] = useState();
  const [userInfo, setUserInfo] = useState();
  const { handleUpload, handleUploadBgImg } = useStorage();
  const [image, setImage] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [imageBg, setImageBg] = useState();

  const router = useRouter();

  const EmailInput = async (event) => {
    setEmailSignUpArtist(event.target.value);
  };
  const PassInput = async (event) => {
    setPasswordSignUpArtist(event.target.value);
  };
  const PassInputCheck = async (event) => {
    setCheckPassSignUpArtist(event.target.value);
  };
  const TypeInput = async (event) => {
    setArtistType(event.target.value);
  };
  const NameInput = async (event) => {
    setUserName(event.target.value);
  };
  const CVInput = async (event) => {
    setUserInfo(event.target.value);
  };

  const handle = async () => {
    try {
      if (!image) return;
      const res = await handleUpload(image);
      setImageUrl(res);
      toast("Successfully");
    } catch (error) {
      toast("Error uploading");
    }
  };
  const handleBgImg = async () => {
    try {
      if (!imageBg) return;
      const res = await handleUploadBgImg(imageBg);
      setImageUrl(res);
      toast("Successfully");
      console.log(res);
    } catch (error) {
      toast("Error uploading");
      console.log(error);
    }
  };

  const signUpArtist = async () => {
    if (passwordUserSignUp == checkpassUserSignUp) {
      console.log(
        emailSignUp,
        passwordUserSignUp,
        username,
        artistType,
        imageUrl
      );
      try {
        await axios.post("http://localhost:7070/artist/create", {
          email: emailSignUp,
          password: passwordUserSignUp,
          username: username,
          type_of: artistType,
          cv: userInfo,
          image: imageUrl,
        });
        console.log(
          "================================================================"
        );
        toast("Successfully created artist accout!");

        router.push("/loginArtist");
      } catch (error) {
        toast("Password or Email incorrect!");
      }
    } else {
      toast("Password does not match!");
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
        <Button variant="contained" component="label" onClick={() => handle()}>
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
    <div className="w-full  h-[60vh]  mt-[150px] flex flex-col items-center justify-center gap-10">
      <ToastContainer />
      <div className="text-[32px] text-[#1b1927]">Бүртгүүлэх</div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="px-[20px] text-[16px]">Цахим хаяг</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            onChange={EmailInput}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="px-[20px] text-[16px]">Нууц үг</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            onChange={PassInput}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="px-[20px] text-[16px]">Нууц үгээ давтна уу?</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            onChange={PassInputCheck}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="px-[20px] text-[16px]">
            Өөрийн уран бүтээлчийн нэрээ бичнэ үү?
          </p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="Ганаа"
            onChange={NameInput}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="px-[20px] text-[16px]">
            Өөрийн товч мэдээлэлээ бичнэ үү?
          </p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="ёйхыөаб"
            onChange={CVInput}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="px-[20px] text-[16px]">Өөрийн урсгалаа бичнэ үү?</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="Photographers"
            onChange={TypeInput}
          />
        </div>
        <div className="flex  gap-2">
          <UploadImage />
          <UploadImageBgImg />
          <img src={imageUrl} alt="image" style={{ width: "10vh" }} />
        </div>
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
  );
}
