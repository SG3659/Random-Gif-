import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
  const [tag, setTag] = useState(" ");
  {
    /*random gig genrate in input */
  }
  const [gif, setGif] = useState(" ");
  const [loading, setLoading] = useState("false");

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    console.log(data);
    {
      /*url data in inspect */
    }
    setGif(imageSource);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }
  function changeHandler(event) {
    setTag(event.target.value);
  }
  return (
    <div
      className="w-1/2  bg-slate-100 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]"
    >
      <h1 className="font-bold text-2xl underline mt-[15px]">
        Generate GIF
      </h1>
      <div className="w-96 flex justify-center items-center">
        {loading ? (
          <Spinner />
        ) : (
          <img src={gif} width="480" className="rounded-lg shadow-xl" />
        )}
      </div>
      <input
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={changeHandler}
        value={tag}
        placeholder=" Generate-Gif"
      />
      <button
        onClick={clickHandler}
        className="
      w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
      >
        GENERATE
      </button>
    </div>
  );
};

export default Tag;
