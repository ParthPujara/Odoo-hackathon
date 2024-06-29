import { useLocation } from "react-router-dom";
// import profile from "../../assets/profile.png";
import { useEffect, useState } from "react";
import { UilBars } from "@iconscout/react-unicons"

const routeMapping = {
  "dashboard": "Dashboard",
  "manage-subscription": "Manage Subscription"
};

function AppBar({ showToggle, setShowToggle, setOpenNav, openNav }) {
  const { pathname } = useLocation();
  console.log(pathname)
  //   const { routeName } = useSelector((state) => state.route);
  const [routeString, setRouteString] = useState('');

  useEffect(() => {
    const paths = pathname.split('/');
    let str = '';
    paths.map((value, index) => {
      if (value != '') {
        str += `${routeMapping[value]} /`;
      }
    });
    setRouteString(str);

  }, []);

  return (
    <header className="bg-[rgb(248,249,250)]  w-full">
      {showToggle ? <UilBars className='absolute ms-2 mt-5' onClick={() => { setShowToggle(!showToggle); setOpenNav(!openNav) }} /> : ''}
      <div className="flex items-center justify-between pr-24 py-2 pl-10">
        <div className="path mt-2">
          {/* <span className="font-medium text-[1.2rem] block">{routeName}</span> */}
          <span className="text-[#5c5c5c] text-[0.9rem]">{routeString}</span>
        </div>
        <div className="flex justify-end h-16 items-center">
          {/* <div className="search-field px-6 py-2 bg-white mr-[30px] w-64 rounded-full text-[#6c6c6c] shadow-xl shadow-[#e9e9e9]">
            Search
          </div> */}
          <img
            className="h-10 w-10 rounded-full cursor-pointer bg-blue-200"
            // src={profile}
            alt="Profile Avatar"
          />
        </div>
      </div>
    </header>
  );
}

export default AppBar;
