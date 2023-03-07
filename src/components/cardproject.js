import Image from "next/image";
import Link from "next/link";

export default function CardProject(props) {

  return (
    <Link href={props.link} className="shadow-lg hover:shadow-cyan-500 h-full transition-all duration-200 bg-zinc-500  w-[350px]  flex m-4 flex-wrap rounded-[20px]">
      {props.name === "shortly" ? (
        <div className=" rounded-[20px] hover:bg-zinc-600  h-full bg-zinc-500  py-4 px-4 flex items-center justify-center w-[350px] min-h-[348px]">
          <h1 className="text-white  bg-transparent ">Em breve</h1>
          <div className="mt-2"></div>
        </div>
      ) : (
        <div
          className="shadow hover:shadow-md hover:shadow-cyan-500 hover:bg-zinc-600  transition-all duration-200  h-full w-[350px] bg-zinc-500 rounded-[20px] py-4 px-4  flex-wrap  min-h-[348px]"
        >
          <img
            src={props.img}
            className="w-full h-56 mx-auto object-cover "
            alt={props.name}
          ></img>
          <div className="mt-2 bg-transparent">
            <h1 className="font-bold md:text-xl bg-transparent ">{props.name}</h1>
          </div>
        </div>
      )}
    </Link>
  );
}
