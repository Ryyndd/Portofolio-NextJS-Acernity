import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";

const techStack = [
    {
      name: "JavaScript",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "React",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "Node.js",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      name: "Tailwind CSS",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      name: "Laravel",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    },
    {
      name: "Kotlin",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
    },
    {
      name: "Python",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fpython-5-logo-png-transparent.png&f=1&nofb=1&ipt=b3a2c04645c1e1e1dad1c914350563945745ff96c83ccae27a86b9dac37e7b16&ipo=images",
    },
    {
      name: "Botstrap",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuxwing.com%2Fwp-content%2Fthemes%2Fuxwing%2Fdownload%2Fbrands-and-social-media%2Fbootstrap-5-logo-icon.png&f=1&nofb=1&ipt=a6f29b7a2a68329ff06ae29b8db349ba53f8dc04dbfcccee0ec27da5253a57b8&ipo=images",
    },
    {
      name: "C++",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    },
    {
      name: "Java",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandlogos.net%2Fwp-content%2Fuploads%2F2021%2F11%2Fjava-logo.png&f=1&nofb=1&ipt=61ef57427665cc668e60c3425e84c5790b7b7b9b90aeebf459771f53f78cb39d&ipo=images",
    },
    {
      name: "",
      image: ""
    }
  ];
  
  
const firstRow = techStack.slice(0 , techStack.length - 1);

const ReviewCard = ({
  image,
  name,
}: {
  image: string;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-40 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
        <div className="flex flex-col justify-center items-center">
            <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <img className="rounded w-16 grayscale brightness-100" alt="" src={image} />
                        </TooltipTrigger>
                            <TooltipContent>{name}</TooltipContent>
                    </Tooltip>
            </TooltipProvider>
        </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative mt-10 flex h-[300px] border-0 w-full flex-col items-center justify-center overflow-hidden rounded-lg ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
    </div>
  );
}
