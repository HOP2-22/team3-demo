import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext({});

export const useAuthContext = () => useContext(Context);

export const Provider = (props) => {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [isArtist, setIsArtist] = useState(false);
  const [artistId, setArtistId] = useState("");

  axios.interceptors.request.use(
    function (config) {
      const token = Cookies.get("token");
      config.headers.token = token;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // useEffect(() => {
  //   location.reload();
  // }, [refresh]);

  useEffect(() => {
    const getUser = async () => {
      const token = Cookies.get("token");

      if (!token) return;
      // const user = Cookies.get("user");
      // const res = await axios.get("http://localhost:7070/user/getUser");
      // setUserName(res?.data?.user?.name);
      // setCurrentUser(user);
      const { data } = await axios.get("http://localhost:7070/user/getUser");
      // console.log(data);
      setCurrentUser({
        name: data?.user?.name,
        image: data?.user?.image,
        userId: data?.user?._id,
      });
    };
    getUser();
  }, []);

  // console.log(currentUser);

  return (
    <Context.Provider
      value={{
        currentUser,
        setCurrentUser,
        isClient,
        setIsClient,
        isArtist,
        setIsArtist,
        artistId,
        setArtistId,
      }}>
      {children}
    </Context.Provider>
  );
};

// {
//   "match": true,
//   "user": {
//       "_id": "645b5b0e1d5198811cff580d",
//       "email": "123",
//       "password": "$2b$10$Fneh4TpyL8nsgXYZ8saYreDiErhMc.V4d7NgdXqOyKXNACHyH38sO",
//       "username": "123",
//       "type_of": "123",
//       "Role": "6906",
//       "image": "https://firebasestorage.googleapis.com/v0/b/demoday-cc353.appspot.com/o/files%2Ffragile.jpeg?alt=media&token=2ce3f928-fe04-449c-8231-a70f60e83742",
//       "__v": 0
//   },
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMTIzIiwidXNlcklkIjoiNjQ1YjViMGUxZDUxOTg4MTFjZmY1ODBkIiwiaWF0IjoxNjgzNzEwNzE5fQ.wXmD4bEKgP36opVpGsCvcED5IE6VC55778aBL-oF8Hs"
// }
