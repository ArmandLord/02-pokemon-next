import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full h-16 bg-gray-800 text-white px-10">
      <div className="flex flex-row items-center">
        <Link href="/">
          <h1 className="text-2xl ">
            POKE<b className="text-orange-500">APPI</b>
          </h1>
        </Link>
      </div>
      <div className="flex flex-row items-center">
        <Link href="/favorites">
          <h1 className="text-xl mr-5 hover:cursor-pointer">Favorites</h1>
        </Link>
      </div>
    </div>
  );
};
