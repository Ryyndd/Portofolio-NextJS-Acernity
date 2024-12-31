"use client";

import React from "react";

import { Dock, DockIcon } from "@/components/ui/dock-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  return (
    <div className="fixed bottom-5 left-0 right-0 z-50">
      <Dock iconMagnification={60} iconDistance={100}>
       
        <DockIcon className="bg-black/10  dark:bg-white/10">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                     <Link href="#home">
                        <Icons.gitHub className="size-full" />
                    </Link>
                    </TooltipTrigger>
                    <TooltipContent>HOME</TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                    <Link href="#about">
                        <Icons.notion className="size-full" />
                    </Link>
                    </TooltipTrigger>
                    <TooltipContent>ABOUT</TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </DockIcon>
            <DockIcon className="bg-black/10 dark:bg-white/10">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                        <Link href="#work">
                            <Icons.googleDrive className="size-full" />
                        </Link>
                        </TooltipTrigger>
                        <TooltipContent>PROJECT</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
            <TooltipProvider>
                <Tooltip>
                    <Link href="#contact">
                    <TooltipTrigger>
                        <Icons.whatsapp className="size-full" />
                    </TooltipTrigger>
                    </Link>
                    <TooltipContent>CONTACT</TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </DockIcon>
      </Dock>
    </div>
  );
}

const Icons = {
  gitHub: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512" {...props}><path  fill="#fff" d="M22,5.724V2c0-.552-.447-1-1-1s-1,.448-1,1v2.366L14.797,.855c-1.699-1.146-3.895-1.146-5.594,0L2.203,5.579c-1.379,.931-2.203,2.48-2.203,4.145v9.276c0,2.757,2.243,5,5,5h2c.553,0,1-.448,1-1V14c0-.551,.448-1,1-1h6c.552,0,1,.449,1,1v9c0,.552,.447,1,1,1h2c2.757,0,5-2.243,5-5V9.724c0-1.581-.744-3.058-2-4Z"/></svg>

  ),
  notion: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
    <path fill="#fff" d="M12.006,12.309c3.611-.021,5.555-1.971,5.622-5.671-.062-3.56-2.111-5.614-5.634-5.637-3.561,.022-5.622,2.122-5.622,5.672s2.062,5.615,5.634,5.636Z"/>
    <path fill="#fff" d="M11.994,13.661c-5.328,.034-8.195,2.911-8.291,8.322-.004,.268,.099,.527,.287,.718s.445,.299,.713,.299h14.595c.268,0,.525-.108,.713-.299,.188-.191,.291-.45,.287-.718-.092-5.333-3.036-8.288-8.304-8.322Z"/>
    </svg>

  ),
  googleDrive: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
    <path  fill="#fff" d="M23.899,6H0v-1C0,2.243,2.243,0,5,0h2.528c.463,0,.927,.109,1.341,.316l3.156,1.578c.138,.069,.293,.105,.447,.105h6.528c2.414,0,4.434,1.721,4.899,4Zm-.778,14.928c-1.157,1.916-3.25,3.196-5.484,3.063-3.145-.188-5.637-2.797-5.637-5.989,0-1.139,.882-3.11,1.465-4.139,.32-.566,.812-.498,1.062,.103,.208,.501,.428,2.035,1.104,2.035,1.82,0,1.433-3.302,2.37-5.492,.234-.548,.637-.61,1.083-.215,2.6,2.303,6.736,6.168,4.038,10.636Zm-3.794-2.43l-.769-1.097c-.308-.308-.807-.308-1.115,0l-.77,1.096c-.754,.754-.889,1.99-.195,2.8,.802,.937,2.242,.937,3.044,0,.693-.809,.559-2.046-.195-2.8ZM0,17c0,2.757,2.243,5,5,5h6.083c-.684-1.181-1.083-2.545-1.083-3.999,0-2.019,1.548-4.812,1.724-5.124,.528-.935,1.429-1.456,2.399-1.399,.513,.031,.987,.22,1.383,.537,.147-.749,.334-1.544,.655-2.293,.498-1.163,1.374-1.503,1.847-1.623,.183-.046,.375-.088,.585-.099H0v9ZM18.77,8c.423,.023,.934,.204,1.638,.794h0c.951,.844,2.401,2.138,3.591,3.758v-4.552h-5.23Z"/>
    </svg>

  ),
  whatsapp: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
    <path fill="#fff" d="M22.246,7.479c-.898-2.647-3.028-4.758-5.695-5.645-2.984-.992-6.109-.992-9.094,0-2.671,.888-4.801,3-5.697,5.647-1.016,2.998-1.016,6.038,0,9.036,.897,2.649,3.027,4.761,5.697,5.648,1.492,.496,3.022,.748,4.547,.748s3.054-.251,4.545-.747c.786-.261,1.212-1.11,.951-1.896-.263-.785-1.112-1.213-1.896-.95-2.374,.789-4.829,.787-7.201,0-1.783-.593-3.204-2-3.801-3.764-.799-2.359-.799-4.751,0-7.111,.597-1.763,2.018-3.17,3.802-3.763,2.372-.788,4.829-.789,7.2,0,1.782,.593,3.203,1.999,3.802,3.762,.687,2.026,.778,4.092,.274,6.146-.175,.201-.43,.317-.707,.317-.46,0-.844-.329-.916-.759,.411-1.726,.326-3.466-.257-5.187-.433-1.275-1.458-2.292-2.741-2.719-2.026-.674-4.083-.674-6.11,0-1.285,.427-2.31,1.443-2.742,2.72-.683,2.017-.683,4.062,0,6.078,.432,1.276,1.457,2.293,2.742,2.72,1.013,.337,2.034,.505,3.055,.505s2.042-.168,3.055-.505c.508-.169,.976-.431,1.383-.765,.679,.57,1.561,.912,2.531,.912,1.381,0,2.676-.734,3.381-1.915,.07-.118,.125-.246,.16-.379,.729-2.716,.64-5.452-.268-8.132Zm-7.288,6.597c-.132,.391-.449,.704-.847,.836-1.418,.471-2.797,.472-4.216,0-.397-.132-.714-.444-.846-.835-.474-1.398-.474-2.756,0-4.154,.132-.391,.449-.703,.846-.835,.709-.236,1.409-.354,2.108-.354s1.399,.118,2.108,.354c.397,.132,.715,.445,.847,.835,.473,1.397,.473,2.757,0,4.153Z"/>
    </svg>
  ),
};
