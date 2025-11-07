import { MainTitle } from "../../Title/MainTitle/MainTitle";
import { MainListObject } from "@/utils";

interface MainListProps {
  title: string;
  listItems: MainListObject[];
  secondaryStyle?: boolean;
}

export function MainList(props: MainListProps) {
  return (
    <div className="flex flex-col w-full gap-9 items-center">
      <MainTitle text={props.title} />
      <ul className="flex flex-col w-full gap-5">
        {props.listItems.map((item, index) => (
          <li key={index} className="group relative flex flex-row justify-between items-center w-full overflow-hidden bg-[#141414] rounded-2xl px-6 py-3 text-amber-50 font-medium transition-all duration-300 ease-in-out">
            <div className="flex flex-row justify-between items-center w-full transition-all duration-300 ease-in-out group-hover:w-[80%]">
              <span>{item.title}</span>
              <span className={props.secondaryStyle ? "text-[#EE2A2E]" : "text-primary-400"}>{item.value}</span>
            </div>
            <button className="absolute right-0 top-0 bottom-0 w-0 opacity-0 group-hover:w-[20%] group-hover:opacity-100 transition-all duration-300 ease-in-out bg-red-600 text-white text-sm font-medium rounded-r-2xl cursor-pointer" onClick={item.onRemove}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
