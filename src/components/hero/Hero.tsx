import Image from "next/image";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";

const Hero = () => {
  return (
    <div className="py-10 md:py-32">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row justify-between items-center gap-x-10 w-full">
          <div className="w-full space-y-3">
            <span className="font-bold border px-4 py-0.5 rounded-full text-xs text-blue-600">
              প্লে থেকে দশম শ্রেণী পর্যন্ত।
            </span>
            <h1 className="text-blue-600 font-bold w-fit tracking-tight !leading-relaxed text-2xl md:text-3xl">
              মুক্তিযোদ্ধা প্রজন্ম একাডেমী এন্ড <br /> ইঞ্জিনিয়ার ফরিদুল ইসলাম
              উচ্চ বিদ্যালয়।
            </h1>
            <p className="text-base text-foreground">
              জাতীয় শিক্ষা কারিকুলাম অনুযায়ী (বাংলা মাধ্যম) পরিচালিত।
            </p>
            <p className="text-base text-foreground">
              চরবাহার, সাতখামাইর, বরমী, শ্রীপুর, গাজীপুর
            </p>

            {/* <Link
              href={actionRoute}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              {actionLable}
            </Link> */}

            <button className="bg-blue-600 px-6 py-2 rounded-md text-white">
              ভর্তি চলছে
            </button>
          </div>
          <div className="w-full mt-8 md:mt-0">
            <Image
              src="/assets/images/image1.jpg"
              height={720}
              width={1000}
              alt="product"
              className="w-full h-full object-cover object-center rounded-xl"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
