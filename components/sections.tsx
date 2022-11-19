import { useCallback, useEffect, useRef, useState } from "react";

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
    sectionBlocksStyle: "bg-indigo-300 shadow-indigo-300/5",
    items: [
      {
        title: "Open Ticket",
        description: "Ticketing for events.",
        img: "hover:bg-[url('https://sebipap.github.io/img/openticket.png')]",
        links: {
          url: "https://openticket-front.herokuapp.com/",
          Github: "https://github.com/sebipap/openticket-backend",
        },
      },
      {
        title: "Auto Trader",
        description: "Marketplace for cars.",
        img: "hover:bg-[url('https://sebipap.github.io/img/auto-trader.png')]",
        links: {
          url: "https://auto-trader-arg.herokuapp.com/posts",
          Github: "https://github.com/sebipap/AutoTrader.git",
        },
      },
      {
        title: "Crypto Dolar Blue",
        description: "Live prices for crypto and fiat currencies.",
        img: "hover:bg-[url('https://sebipap.github.io/img/crypto-dolar-blue.png')]",
        links: {
          url: "https://crypto-dolar-blue.herokuapp.com/posts",
          Github: "https://github.com/sebipap/crypto-dolar-blue",
        },
      },
      {
        title: "OpenBank",
        description: "Home banking POC with transfers and QR code payments.",
        img: "col-span-2 hover:bg-[url('https://sebipap.github.io/img/openbank.jpg')]",
        links: {
          url: "https://sebipaps-openbank.herokuapp.com/",
          Github: "https://github.com/sebipap/openbank",
        },
      },
      {
        title: "PokerStats",
        description: "Poker odds calculator.",
        img: "hover:bg-[url('https://sebipap.github.io/img/pokerstats.jpg')]",
        links: {
          url: "https://poker-odds-calulator.herokuapp.com/",
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
  },
  {
    text: "CV",
    emoji: "👨‍💻",
    blockStyle: "bg-blue-400 col-span-1 row-span-1 hover:shadow-blue-400/20",
    sectionTitleStyle: "border-blue-400",
    sectionBlocksStyle: "bg-blue-400",
  },
];

export const Sections = () => {
  const sectionRefs = useRef<any[]>([]);

  const [selectedElement, setSelectedElement] = useState<number | null>(null);

  useEffect(() => {
    if (selectedElement === null) return;

    console.log(selectedElement);

    sectionRefs?.current[selectedElement]?.scrollIntoView();
  }, [sectionRefs, selectedElement]);

  return (
    <>
      <div className="grid grid-rows-2 grid-cols-4 grid-flow-col gap-2 h-[500px] mb-60 cursor-pointer">
        {sections.map((element, i) => (
          <Block
            key={i}
            styles={element.blockStyle}
            onClick={() => setSelectedElement(i)}
            emoji={element.emoji}
          >
            {element.text}
          </Block>
        ))}
      </div>
      {sections.map((element, i) => (
        <div key={i} ref={(el) => (sectionRefs.current[i] = el)}>
          <h3
            className={`${element.sectionTitleStyle} text-white font-bold text-4xl border-b mb-14`}
          >
            {element.text}
          </h3>
          <div className="grid grid-rows-2 grid-cols-4 grid-flow-col gap-2 h-[500px] mb-60">
            {element.items?.map((item, i) => (
              <Item
                item={item}
                sectionBlocksStyle={element.sectionBlocksStyle}
                key={i}
              />
            ))}
          </div>
        </div>
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
    <div
      onClick={handleClick}
      className={`${sectionBlocksStyle} rounded-[60px] p-10 flex flex-col-reverse transition-all ${item.img} bg-cover shadow-xl transition-all hover:scale-95 hover:bg-blend-normal bg-brightness-50 hover:text-transparent text-black hover:bg-grey-500  bg-blend-soft-light cursor-pointer`}
    >
      {isActive ? (
        Object.entries(item.links).map(([key, value]: any) => (
          <a
            href={value}
            key={key}
            className={`${sectionBlocksStyle} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5`}
          >
            {key}
          </a>
        ))
      ) : (
        <>
          <p>{item.description}</p>
          <h5 className={`text-xl font-bold`}>{item.title}</h5>
        </>
      )}
    </div>
  );
};
