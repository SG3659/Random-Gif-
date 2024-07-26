import Random from "./components/Random";
import Tag from "./components/Tag";
import Button from "./components/Button"
export default function App() {
  return (
    <div
      className="w-full h-screen flex flex-col background  overflow-x-hidden
    items-center bg-[#4A4E69] "
    >
      <h1
        className="bg-[#22223B] rounded-lg  text-center w-11/12
      font-bold text-4xl mt-[40px]  py-2 px-2 text-gray-100 "
      >
        Random GIF
      </h1>
      <div
        className="flex flex-col  w-full items-center mt-[30px] 
      gap-y-10 "
      >
        <Random />
        <Tag />
        <Button/>
      </div>
      

    </div>
  );
}
