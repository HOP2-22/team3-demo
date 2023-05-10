import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import useStorage from "@/hooks/useStorage";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { IconButton, Stack, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/router";

export default function SignUpUser() {
  const router = useRouter();

  const [emailSignUp, setEmailSignUp] = useState();
  const [passwordSignUp, setPasswordUserSignUp] = useState();
  const [checkpass, setCheckPass] = useState();
  const [name, setName] = useState();

  const { handleUpload } = useStorage();
  const [image, setImage] = useState();
  const [imageUrl, setImageUrl] = useState();

  const EmailInput = async (event) => {
    setEmailSignUp(event.target.value);
  };
  const PassInput = async (event) => {
    setPasswordUserSignUp(event.target.value);
  };
  const PassInputCheck = async (event) => {
    setCheckPass(event.target.value);
  };
  const NameInput = async (event) => {
    setName(event.target.value);
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

  const signUpUser = async () => {
    if (passwordSignUp == checkpass) {
      try {
        const res = await axios.post("http://localhost:7070/user/create", {
          email: emailSignUp,
          password: passwordSignUp,
          name: name,
          image: imageUrl,
        });
        toast("Successfully signed up!");
        console.log(res);
        router.push("/Login");
      } catch (error) {
        console.log(error);
        toast("Password or Email incorrect!");
      }
    } else {
      toast("Password does not match!");
    }
  };

  return (
    <div className="w-full h-full  mt-[150px] flex flex-col items-center justify-center gap-10">
      <ToastContainer />
      <div className="text-[32px] text-[#1b1927]">Бүртгүүлэх</div>
      <div className="flex flex-col gap-6">
        <div className="">
          <p className="px-[20px] text-[16px]">Цахим хаяг</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            onChange={EmailInput}
          />
        </div>
        <div className="">
          <p className="px-[20px] text-[16px]">Хэрэглэгчийн нэр</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            onChange={NameInput}
          />
        </div>
        <div className="">
          <p className="px-[20px] text-[16px]">Нууц үг</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            onChange={PassInput}
          />
        </div>
        <div className="">
          <p className="px-[20px] text-[16px]">Нууц үгээ давтна уу?</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            onChange={PassInputCheck}
          />
        </div>
        <div>
          <UploadImage />
        </div>
        <Link href="/signUpArtist">
          <p className="text-[16px] ml-[20px]">
            Уран бүтээлч бол энд дарна уу?
          </p>
        </Link>
        <button
          className="text-[20px] w-[280px] sm:w-[380px] h-[45px] rounded-full bg-[#1b1927] text-white"
          onClick={() => {
            signUpUser();
          }}
        >
          Бүртгүүлэх
        </button>
      </div>
    </div>
  );
}
