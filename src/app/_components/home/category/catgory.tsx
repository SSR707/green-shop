"use client";
import { useState } from "react";
import { CategoryList } from "./category-list";
import { getCategory } from "@/service/query/getCategorys";

export const Category = () => {
  const [isActive, setIsActive] = useState<number | null>(null);
  const { data } = getCategory();
  return (
    <div className=" pl-[12px] flex flex-col gap-y-[20px]">
      {data?.data.map((item, index) => (
        <CategoryList
          key={index}
          text={item.name}
          count={item.products.length}
          isActive={isActive === index}
          onClick={() => setIsActive(index)}
        />
      ))}
    </div>
  );
};
