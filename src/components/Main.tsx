import Image from "next/image";
import Card from "./ui/article-card";
import {
  BiliBiliIcon,
  GitHubIcon,
  TikTokIcon,
  TwitterIcon,
} from "./ui/social-icons";

const Main = () => {
  return (
    <div className="w-full">
      <div className="mb-6">
        <Image
          src="/aoen.png"
          alt="aoen"
          width={120}
          height={150}
          className="rounded-full"
        />
      </div>
      <h2 className="text-4xl mb-2">Zy's personal website.</h2>
      {/** 外链 */}
      <div className="flex justify-start gap-4">
        <a href="">
          <TwitterIcon className="size-6" />
        </a>
        <a href="https://github.com/stupidman111">
          <GitHubIcon className="size-6" />
        </a>
        <a href="">
          <BiliBiliIcon className="size-6" />
        </a>
        <a href="">
          <TikTokIcon className="size-6" />
        </a>
      </div>
      <div className="grid grid-cols-2">
        <div className="h-44 flex justify-center items-center ">
          TODO: personal description
        </div>
        <div className="h-44 flex justify-center items-center ">
          TODO: contribution component
        </div>
      </div>
      <section className="w-full">
        <div className="text-4xl">latest:</div>
        <div className="grid grid-cols-2 gap-4 m-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
};

export default Main;
