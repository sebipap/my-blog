import { useCallback, useRef, useState } from "react";

const Block = ({
  children,
  styles,
  onClick,
  emoji,
}: {
  children: React.ReactNode;
  styles: string;
  emoji: string;
  onClick?: () => void;
}) => (
  <div
    className={`${styles} rounded-[60px] p-10 flex flex-col-reverse transition-all hover:scale-95 hover:opacity-90 shadow-2xl`}
    onClick={onClick}
  >
    <p className={`font-semibold text-lg`}>{children}</p>
    <p className="text-4xl flex-grow">{emoji}</p>
  </div>
);

const sections = [
  {
    text: "Projects",
    emoji: "🚀",
    blockStyle: "bg-indigo-500 col-span-2 row-span-2 hover:shadow-indigo/20",
    sectionTitleStyle: "border-indigo-500",
    sectionBlocksStyle: "bg-indigo-500 shadow-indigo-300/5",
    items: [
      {
        title: "La Voluntad",
        description: "Restaurant Website.",
        img: "hover:bg-[url('https://lavoluntad.vercel.app/gallery/0.jpg')]",
        links: {
          Open: "https://lavoluntad.vercel.app/",
          Github: "https://github.com/sebipap/la-voluntad",
        },
      },
      {
        title: "money mover",
        description: "get steps to move money.",
        links: {
          Open: "https://money-mover.vercel.app/",
          Github: "https://github.com/sebipap/money-mover",
        },
      },
      {
        title: "Open Ticket",
        description: "Ticketing for events.",
        img: "hover:bg-[url('https://sebipap.github.io/img/openticket.png')]",
        links: {
          Open: "https://openticket-front.herokuapp.com/",
          Github: "https://github.com/sebipap/openticket-backend",
        },
      },
      {
        title: "Auto Trader",
        description: "Marketplace for cars.",
        img: "hover:bg-[url('https://sebipap.github.io/img/auto-trader.png')]",
        links: {
          Open: "https://auto-trader-arg.herokuapp.com/posts",
          Github: "https://github.com/sebipap/AutoTrader.git",
        },
      },
      {
        title: "Crypto Dolar Blue",
        description: "Live prices for crypto and fiat currencies.",
        img: "hover:bg-[url('https://sebipap.github.io/img/crypto-dolar-blue.png')]",
        links: {
          Open: "https://crypto-dolar-blue.herokuapp.com/posts",
          Github: "https://github.com/sebipap/crypto-dolar-blue",
        },
      },
      {
        title: "OpenBank",
        description: "Home banking POC with transfers and QR code payments.",
        img: "col-span-2 hover:bg-[url('https://sebipap.github.io/img/openbank.jpg')]",
        links: {
          Open: "https://sebipaps-openbank.herokuapp.com/",
          Github: "https://github.com/sebipap/openbank",
        },
      },
      {
        title: "PokerStats",
        description: "Poker odds calculator.",
        img: "hover:bg-[url('https://sebipap.github.io/img/pokerstats.jpg')]",
        links: {
          Open: "https://poker-odds-calulator.herokuapp.com/",
          Github: "https://github.com/sebipap/pokerodds",
        },
      },
    ],
  },
  {
    text: "Blog",
    emoji: "📗",
    blockStyle: "bg-green-400 col-span-1 row-span-1 hover:shadow-green-400/20",
    sectionTitleStyle: "border-green-400",
    sectionBlocksStyle: "bg-green-400",
    items: [
      {
        title: "Upcoming",
        description: "Se vienen cositas.",
      },
    ],
  },
  {
    text: "Contact",
    emoji: "📱",
    blockStyle: "bg-teal-400 col-span-2 row-span-1 hover:shadow-teal-400/20",
    sectionTitleStyle: "border-teal-400",
    sectionBlocksStyle: "bg-teal-400",
    items: [
      {
        title: "Github",
        description: "@sebipap",
        links: {
          "Follow Me": "https://github.com/sebipap",
        },
        img: "col-span-2 row-span-2 bg-[url('https://cdn-icons-png.flaticon.com/512/25/25231.png')]",
      },
      {
        title: "LinkedIn",

        links: {
          "Follow Me":
            "https://www.linkedin.com/in/sebasti%C3%A1n-papanicolau-10baa91b1/",
        },
        img: "col-span-2 bg-[url('https://proinfluent.b-cdn.net/wp-content/uploads/2019/05/Logo-LinkedIn-blanc.png')]",
      },
      {
        title: "Email",
        description: "sebipaps@gmail.com",
        img: "bg-[url('https://img.icons8.com/ios_filled/12x/apple-mail.png')]",
      },
    ],
  },
  {
    text: "Resume",
    emoji: "👨‍💻",
    blockStyle: "bg-blue-400 col-span-1 row-span-1 hover:shadow-blue-400/20",
    sectionTitleStyle: "border-blue-400",
    sectionBlocksStyle: "bg-blue-400",
    items: [
      {
        title: "PDF Resume",
        href: "/resume.pdf",
        description: "Download",
      },
      {
        title: "UTN Systems Engineer",
        description: "2020 - 2022",
        img: "bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq4IoxAIVlGrzrzCQXSy-VgzKPiR_4D5iOYENPW1FE4cYEZ7VLkW4wtVtapak7G82Etxc&usqp=CAU')]",
      },
      {
        title: "Pluggy",
        description: "Dev since feb '22",
        img: "bg-[url('https://avatars.githubusercontent.com/u/52629757?s=280&v=4')]",
      },
    ],
  },
];

export const Sections = () => {
  const sectionRefs = useRef<any[]>([]);

  const scrollTo = (selectedElement: number) => {
    sectionRefs?.current[selectedElement]?.scrollIntoView();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* in mobile, set cols to 1 */}
      <div className="grid grid-rows-2 grid-cols-4 grid-flow-col gap-2  mb-60 cursor-pointer w-[100%]">
        {sections.map((element, i) => (
          <Block
            key={i}
            styles={element.blockStyle}
            onClick={() => scrollTo(i)}
            emoji={element.emoji}
          >
            {element.text}
          </Block>
        ))}
      </div>
      {sections.map((element, i) => (
        <>
          <div key={i} ref={(el) => (sectionRefs.current[i] = el)}>
            <h1 className="text-5xl mb-4 pt-32">{element.emoji}</h1>
            <h3
              className={`${element.sectionTitleStyle} text-white font-bold text-4xl border-b mb-14  `}
            >
              {element.text}
            </h3>
            <div className="lg:grid grid-cols-4 grid-rows-4 grid-flow-col gap-2 mb-32 sm:grid-cols-1">
              {element.items?.map((item, i) => (
                <Item
                  item={item}
                  sectionBlocksStyle={element.sectionBlocksStyle}
                  key={i}
                />
              ))}
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export const Item = ({ item, sectionBlocksStyle }: any) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = useCallback(() => {
    setIsActive((p) => !p);
  }, []);

  return (
    <a href={item.href}>
      <div
        onClick={handleClick}
        className={`${sectionBlocksStyle} rounded-[60px] p-10 flex flex-col-reverse transition-all ${item.img} bg-contain  shadow-xl transition-all hover:scale-95 bg-brightness-50 text-black  cursor-pointer bg-blend-soft-light w-[100%]`}
      >
        {isActive && item.links ? (
          Object.entries(item.links).map(([key, value]: any) => (
            <a
              href={value}
              key={key}
              className={`${sectionBlocksStyle} p-2 m-3 rounded-lg  text-2xl border-x-black drop-shadow-lg hover:bg-black hover:text-white text-black`}
              // open in new tab
              target="_blank"
              rel="noreferrer"
            >
              {key}
            </a>
          ))
        ) : (
          <a>
            <p>{item.description}</p>
            <h5 className={`text-xl font-bold`}>{item.title}</h5>
          </a>
        )}
      </div>
    </a>
  );
};
