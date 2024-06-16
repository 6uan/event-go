import Link from 'next/link'
import { FaHeart, FaUser } from 'react-icons/fa'
import '../globals.css'
import ProfileIcon from './ProfileIcon'

const NavBar = () => {
  return (
    // <div className="transparent h-32 w-lvw flex flex-row justify-between pr-9">
    <div className="z-10 transparent h-32 absolute top-0 left-0 w-full flex flex-row justify-between pr-9">
      <div className="flex flex-row gap-10 items-center">
        <div className="w-36 h-36 flex justify-center items-center">
          <Link href={"/"}>
            <div className="bg-logo bg-no-repeat bg-contain w-20 overflow-auto h-20 bg-center" />
          </Link>
        </div>

        <Link href={"/explore"}>
          <p className="font-black hover:drop-shadow-md text-xl pt-1">
            {" "}
            Explore{" "}
          </p>
        </Link>
        <Link href={"/sports"}>
          <p className="font-black hover:drop-shadow-md text-xl pt-1">
            {" "}
            Sports{" "}
          </p>
        </Link>
        <Link href={"/theatre-comedy"}>
          <p className="font-black hover:drop-shadow-md text-xl pt-1">
            Theatre & Comedy
          </p>
        </Link>
        <Link href={"/music"}>
          <p className="font-black hover:drop-shadow-md text-xl pt-1">
            {" "}
            Music{" "}
          </p>
        </Link>
      </div>
      <div className="flex flex-row gap-10 pr-5 items-center">
        <p className="font-black text-xl pt-1"> SELL </p>
        {/* 
        OPTIONAL ICONS - ("SELL" to sell event, Calendar to add/create event, Heart to view favorites, User to view profile)
        <FaCalendar size={25} />
        <FaCalendarPlus size={25} /> 
        */}
        <FaHeart size={25} />
        <ProfileIcon />
      </div>
    </div>
  );
};

export default NavBar;
