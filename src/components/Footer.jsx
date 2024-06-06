const Footer = () => {
  return (
    <footer className="h-fit py-4 px-10 bg-black text-white  ">
      <div className=" flex flex-row justify-between space-x-10">
        <div>
          <p className="text-lg font-bold">Exclusive</p>
          <p className="text-sm mt-3">Subscribe</p>
          <p className="text-xs mt-3">Get 10% off your fist order</p>
          <div className="bg-black px-2 mt-2  rounded-sm border-white border w-fit">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your email"
              className="text-white w-[150px] bg-black p-2 text-xs rounded-lg outline-none border-none "
            />
            <button className="text-xs">searchicon</button>
          </div>
        </div>
        <div>
          <p className="text-lg">Support</p>
          <ul className="space-y-2 mt-3">
            <li className="text-xs text-gray-300">loden 11 st sadsafjklio </li>
            <li className="text-xs text-gray-300">emai2@email.com</li>
            <li className="text-xs text-gray-300">+972564456846848</li>
          </ul>
        </div>
        <div>
          <p className="text-lg">Account</p>
          <ul className="space-y-2 mt-3">
            <li className="text-xs text-gray-300">My Account</li>
            <li className="text-xs text-gray-300">Login/register</li>
            <li className="text-xs text-gray-300">Cart</li>
            <li className="text-xs text-gray-300">Wishlist</li>
            <li className="text-xs text-gray-300">Shop</li>
          </ul>
        </div>
        <div>
          <p className="text-lg">Quick Link</p>
          <ul className="space-y-2 mt-3">
            <li className="text-xs text-gray-300">privacy policy </li>
            <li className="text-xs text-gray-300">FAQ</li>
            <li className="text-xs text-gray-300">+contact</li>
          </ul>
        </div>
        <div>
          <p className="text-lg">Download App</p>
        </div>
      </div>
      <div className="p-5 mt-5 border-gray-500 border-t">
        <p className="text-gray-500 text-base text-center  ">
          Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
