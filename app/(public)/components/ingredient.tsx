import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Plus, Minus } from "lucide-react";
import Image from "next/image";

interface CartIngredientProps {
  src: string;
  alt: string;
  title: string;
}

const MakeIngredient = ({ src, alt, title }: CartIngredientProps) => {
  return (
    <Card className="rounded-[3rem]">
      <CardHeader>
        <Image
          src={src}
          alt={alt}
          width={104}
          height={37}
          className="m-auto h-[30px]"
        />
      </CardHeader>
      <CardContent>
        <h2 className="text-center text-gray-800 text-sm font-semibold leading-tight">
          {title}
        </h2>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="rounded-full p-2 bg-violet-50 group hover:bg-indigo-700">
          <Plus className="stroke-indigo-700 group-hover:stroke-violet-50 " />
        </Button>
        <span className="text-xl font-bold ">0</span>
        <Button className="rounded-full p-2 bg-violet-50 group hover:bg-indigo-700">
          <Minus className="stroke-indigo-700 group-hover:stroke-violet-50 " />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MakeIngredient;
