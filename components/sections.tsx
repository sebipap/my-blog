import { useCallback, useEffect, useState } from "react";

const Block = ({
  width,
  height,
  children,
  color,
  onClick,
  emoji,
}: {
  width: number;
  height: number;
  children: React.ReactNode;
  color: string;
  emoji: string;
  onClick?: () => void;
}) => (
  <div
    className={`col-span-${width} row-span-${height} bg-${color} rounded-[60px] p-10 flex flex-col-reverse transition-all hover:scale-95 hover:opacity-90`}
    onClick={onClick}
  >
    <p className={`font-semibold text-lg`}>{children}</p>
    <p className="text-4xl flex-grow">{emoji}</p>
  </div>
);

const sections = [
  { text: "Projects", emoji: "🚀", color: "gray-300", big: true },
  { text: "Blog", emoji: "📗", color: "green-400" },
  { text: "Contact", emoji: "📱", color: "teal-400", big: true },
  { text: "CV", emoji: "👨‍💻", color: "blue-400" },
];

export const Sections = () => {
  const [activeElement, setActiveElement] = useState(0);

  return (
    <>
      <div className="grid grid-rows-2 grid-cols-4 grid-flow-col gap-2 h-[500px] mb-60">
        {sections.map((element, i) => (
          <Block
            key={i}
            color={element.color}
            width={element.big || activeElement === i ? 2 : 1}
            height={activeElement === i ? 2 : 1}
            onClick={() => setActiveElement(i)}
            emoji={element.emoji}
          >
            {element.text}
          </Block>
        ))}
      </div>
      {sections.map((element, i) => (
        <div key={i} className={``}>
          <h3
            className={`text-${element.color} font-bold text-4xl border-b border-${element.color} mb-14`}
          >
            {element.text}
          </h3>
          <div className="grid grid-rows-2 grid-cols-4 grid-flow-col gap-2 h-[500px] mb-60">
            <div
              className={`bg-${element.color} rounded-[60px] p-10 flex flex-col-reverse transition-all hover:scale-95 hover:opacity-90`}
            ></div>
            <div
              className={`bg-${element.color} rounded-[60px] p-10 flex flex-col-reverse transition-all hover:scale-95 hover:opacity-90`}
            ></div>
            <div
              className={`bg-${element.color} rounded-[60px] p-10 flex flex-col-reverse transition-all hover:scale-95 hover:opacity-90`}
            ></div>
            <div
              className={`bg-${element.color} rounded-[60px] p-10 flex flex-col-reverse transition-all hover:scale-95 hover:opacity-90`}
            ></div>
          </div>
        </div>
      ))}
    </>
  );
};
