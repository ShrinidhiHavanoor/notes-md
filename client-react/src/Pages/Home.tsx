import { FC } from "react";
import { Image, MoveRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <div>
      <section className="flex justify-between items-start">
        <div className=" w-full md:p-20 flex flex-col gap-8 py-10 px-2">
          <h1 className="md:text-5xl text-3xl">
            Your Powerful Notes Management Tool
          </h1>
          <p className="md:text-xl">
            {""}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            expedita numquam quasi, aut, odit asperiores eius consequatur quo
            dignissimos corporis omnis vero ipsum voluptatum eos eveniet
            mollitia. Dignissimos, fuga praesentium!
          </p>
          <Link to={"/study-resource"}>
            <Button variant={"default"}>
              Explore Study Resource <MoveRightIcon className="size-4 ml-3" />
            </Button>
          </Link>
        </div>
        {/* <Image className="size-1/2 hidden md:flex" /> */}
        <img
          className="size-1/2 hidden md:flex"
          src="/Land.png"
          alt="Landing Image"
        />
      </section>
    </div>
  );
};

export default Home;
