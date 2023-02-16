import React from "react";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Facebook <i class="fa-brands fa-square-facebook text-3xl" ></i>
        </>
      ),
      href: "https://www.facebook.com/profile.php?id=100030966376320",
      style:'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          Zalo  {/* Zalo <i class="fa-regular fa-0"></i> <i class="fa-regular fa-9"></i> <i class="fa-regular fa-6"></i> <i class="fa-regular fa-2"></i><i class="fa-regular fa-1"></i><i class="fa-regular fa-8"></i><i class="fa-regular fa-9"></i><i class="fa-regular fa-2"></i><i class="fa-regular fa-1"></i><i class="fa-regular fa-5"></i> */}
        </>
      ),
      href: "0962189215",
    },
    {
      id: 3,
      child: (
        <>
          Github <i class="fa-brands fa-github"></i>
        </>
      ),
      href: "https://github.com/hoatv02",
    },
    {
      id: 4,
      child: (
        <>
          Email <i class="fa-regular fa-envelope"></i>
        </>
      ),
      href: "https://mail.google.com/mail/u/0/#inbox",
      style:'rounded-br-md'
    },
  ];
  return (
    <div className=" flex-col top-[35%] left-0 flex fixed">
      <ul>
        {/* <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:rounded-md duration-300 hover:ml-[-10px]">
          <a
            href=""
            className="flex justify-between items-center w-full text-white"
          >
            <>
              Facebook <i class="fa-brands fa-square-facebook text-3xl"></i>
            </>
          </a>
        </li> */}
        {links.map(({id,child,style,href}) => {
          return (
            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:rounded-md  duration-300 hover:ml-[-10px]" + " " + style }>
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
              >
                {/* <>
                  Facebook <i class="fa-brands fa-square-facebook text-3xl"></i>
                </> */}
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
