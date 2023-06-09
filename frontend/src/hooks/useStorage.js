import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseConfig";

export const useStorage = () => {
  const [loading, setLoading] = useState(false);

  const handleUploadBgImg = async (file) => {
    if (!file) {
      alert("Зургаа сонгоно уу!");
    }
    setLoading(true);

    const storageRef = ref(storage, `/bgImg/${file.name}`);
    await uploadBytes(storageRef, file);

    const url = await getDownloadURL(storageRef);
    setLoading(false);
    return url;
  };

  const handleUpload = async (file) => {
    if (!file) {
      alert("Зургаа сонгоно уу!");
    }
    setLoading(true);

    const storageRef = ref(storage, `/files/${file.name}`);
    await uploadBytes(storageRef, file);

    const url = await getDownloadURL(storageRef);
    setLoading(false);
    return url;
  };
  return { handleUpload, loading, setLoading, handleUploadBgImg };
};
export default useStorage;
