import Link from "next/link";

export const LinkButton = ({ text, href, className = "", ...props }) => {
  // const { navigateTo } = useAnimatedNavigation();

  return (
    <Link
      className={`group w-fit hover:text-primary block duration-300  ${className}`}
      href={href}
      // onClick={(e) => {
      //   e.preventDefault();
      //   navigateTo(href);
      // }}
    >
      <div className="flex items-center justify-start gap-2">
        <span className="link-line">{text}</span>
        <div className="w-[1.2vw] h-[1.2vw] flex justify-center items-center">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            className=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1437 11.3079L10.7469 11.2593L10.9959 4.10001L11.0189 3.41746L1.9889 11.8405L1.03569 10.8186L10.0657 2.39556L9.38385 2.37185L2.22392 2.12216L2.27249 0.725365L12.4986 1.08099L12.1437 11.3079Z"
              fill="#0E0E0E"
              stroke="white"
              className=" group-hover:fill-primary duration-300"
              strokeWidth="0.565587"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};
