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
    className={`${styles} rounded-[60px] p-10 flex flex-col-reverse transition-all hover:scale-95 hover:opacity-90`}
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
    blockStyle: "bg-indigo-500 col-span-2 row-span-2",
    sectionTitleStyle: "text-indigo-500 border-indigo-500",
    sectionBlocksStyle: "bg-indigo-500",
  },
  {
    text: "Blog",
    emoji: "📗",
    blockStyle: "bg-green-400 col-span-1 row-span-1",
    sectionTitleStyle: "text-green-400 border-green-400",
    sectionBlocksStyle: "bg-green-400",
  },
  {
    text: "Contact",
    emoji: "📱",
    blockStyle: "bg-teal-400 col-span-2 row-span-1",
    sectionTitleStyle: "text-teal-400 border-teal-400",
    sectionBlocksStyle: "bg-teal-400",
  },
  {
    text: "CV",
    emoji: "👨‍💻",
    blockStyle: "bg-blue-400 col-span-1 row-span-1",
    sectionTitleStyle: "text-blue-400 border-blue-400",
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
      <div className="grid grid-rows-2 grid-cols-4 grid-flow-col gap-2 h-[500px] mb-60">
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
            className={`${element.sectionTitleStyle} font-bold text-4xl border-b mb-14`}
          >
            {element.text}
          </h3>
          <div className="grid grid-rows-2 grid-cols-4 grid-flow-col gap-2 h-[500px] mb-60">
            <div
              className={`${element.sectionBlocksStyle} rounded-[60px] p-10 flex flex-col-reverse transition-all hover:scale-95 hover:opacity-90`}
            ></div>
            <div
              className={`${element.sectionBlocksStyle} rounded-[60px] p-10 flex flex-col-reverse transition-all hover:scale-95 hover:opacity-90`}
            ></div>
            <div
              className={`${element.sectionBlocksStyle} rounded-[60px] p-10 flex flex-col-reverse transition-all hover:scale-95 hover:opacity-90`}
            ></div>
            <div
              className={`${element.sectionBlocksStyle} rounded-[60px] p-10 flex flex-col-reverse transition-all hover:scale-95 hover:opacity-90`}
            ></div>
          </div>
        </div>
      ))}
    </>
  );
};
