import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import useStorage from "@/hooks/useStorage";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { IconButton, Stack, Button, Typography } from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { toast } from "react-hot-toast";

const Signup = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    name: "",
    image:
      "https://res.cloudinary.com/dalheltnm/image/upload/v1675930695/CommunityCard/Group_22024_fdiua9.png",
  });

  const { handleUpload } = useStorage();

  const [image, setImage] = useState();

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

  const imageHandler = async () => {
    try {
      if (!image) return;
      const res = await handleUpload(image);
      setForm({ ...form, image: res });
    } catch (error) {
      console.log(error);
    }
  };

  const UploadImage = () => {
    return (
      <Stack direction="row" alignItems="center" spacing={2}>
        <Button
          variant="contained"
          component="label"
          onClick={() => imageHandler()}
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
          <Typography>Зургаа сонгоно уу?</Typography>
        </IconButton>
      </Stack>
    );
  };

  const signup = async () => {
    if (form.email.length === 0) return toast.error(`email field is empty`);
    if (form.password.length === 0)
      return toast.error(`password field is empty`);
    if (form.name.length === 0) return toast.error(`name field is empty`);
    if (form.image.length === 0) return toast.error(`image field is empty`);

    if (form.password === form.passwordCheck) {
      try {
        delete form?.passwordCheck;

        await axios.post("http://localhost:7070/user/create", {
          ...form,
        });

        toast.success("Successfully signed up!");

        router.push("/login");
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Password does not match!");
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", onkey, true);
  }, []);

  const onkey = async (event) => {
    console.log(event);
    if (event.keyCode === 13 && event.code === "Enter") {
      signup();
    }
  };

  return (
    <div
      className="w-full  h-[60vh]   py-[650px] flex flex-col items-center justify-center gap-10"
      style={{ backgroundColor: "#090520" }}
    >
      <div className="text-[32px] text-white">Бүртгүүлэх</div>
      <div className="flex flex-col gap-6">
        <div className="">
          <p className="px-[20px] text-[16px] text-white">Цахим хаяг</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            onChange={emailHandler}
            value={form?.email}
          />
        </div>
        <div className="">
          <p className="px-[20px] text-[16px] text-white">Хэрэглэгчийн нэр</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            onChange={nameHandler}
            value={form?.name}
          />
        </div>
        <div className="">
          <p className="px-[20px] text-[16px] text-white">Нууц үг</p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            type={showPassword ? "text" : "password"}
            onChange={passwordHandler}
            value={form?.password}
          />
          {showPassword ? (
            <VisibilityIcon
              sx={{ color: "white" }}
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            />
          ) : (
            <VisibilityOffIcon
              sx={{ color: "white" }}
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            />
          )}
        </div>
        <div className="">
          <p className="px-[20px] text-[16px] text-white">
            Нууц үгээ давтна уу?
          </p>
          <input
            className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            type={showConfirmPassword ? "text" : "password"}
            onChange={passwordCheckHandler}
            value={form?.passwordCheck}
          />
          {showConfirmPassword ? (
            <VisibilityIcon
              sx={{ color: "white" }}
              onClick={() => {
                setShowConfirmPassword((s) => !s);
              }}
            />
          ) : (
            <VisibilityOffIcon
              sx={{ color: "white" }}
              onClick={() => {
                setShowConfirmPassword((s) => !s);
              }}
            />
          )}
        </div>
        <div style={{ display: "flex" }}>
          <UploadImage />
          <img src={form?.image} alt="image" style={{ width: "10vh" }} />
        </div>
        <Link href="/signup/artist">
          <p className="text-[16px] ml-[20px] text-white">
            Уран бүтээлч бол энд дарна уу?
          </p>
        </Link>
        <button
          className="text-[20px] w-[280px] sm:w-[380px] h-[45px] rounded-full bg-[#1b1927] text-white"
          onClick={() => {
            signup();
          }}
        >
          Бүртгүүлэх
        </button>
      </div>
    </div>
  );
};

export default Signup;
