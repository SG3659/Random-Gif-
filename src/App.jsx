import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return (
    <div
      className="w-full h-screen flex flex-col background relative overflow-x-hidden
    items-center"
    >
      <h1
        className="bg-white rounded-lg  text-center w-11/12
      font-bold text-4xl mt-[40px]  py-2 px-2  "
      >
        Random GIF
      </h1>
      <div
        className="flex flex-col  w-full items-center mt-[30px] 
      gap-y-10 "
      >
        <Random />
        <Tag />
      </div>
    </div>
  );
}
