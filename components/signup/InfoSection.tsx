"use client";
import React from "react";
import { useStageStore } from "@/store";

import { Info } from "./Info";
import FillIcon from "../icons/FillIcon";
import { Logo } from "../icons/Logo";

const InfoSection = () => {
  const { currentStage } = useStageStore();
  return (
    <>
      <div className="mt-[30px] max-md:text-center md:absolute">
        <Logo />
      </div>
      {currentStage === "signUp" ? (
        <article className="mx-auto max-w-[327px] sm:max-w-[442px] md:my-auto">
          <div className="mb-10 max-w-[250px] sm:max-w-[411px]">
            <h1 className="h3-semibold text-secondary2 dark:text-background2 sm:text-[30px] sm:font-bold sm:leading-[40px]">
              Real-time social platform built with Next.js + WebSockets
            </h1>
          </div>
          {/* Info cards */}
          <div className="flex w-full flex-col gap-5">
            <Info
              className="bg-red10"
              fillIcon={<FillIcon.Business className="fill-red90" />}
            >
              Instant messaging, live user status, and infinite scroll, powered
              by WebSockets
            </Info>
            <Info
              className="bg-yellow10"
              fillIcon={<FillIcon.Feedback className="fill-yellow" />}
            >
              Next.js 14 App Router + Tailwind · 25 % faster loads · 35 % higher
              engagement
            </Info>
            <Info
              className="bg-blue10"
              fillIcon={<FillIcon.Inbox className="fill-blue" />}
            >
              Sleek, social platform with group engagement features
            </Info>
          </div>
        </article>
      ) : (
        <>
          <article className="mx-auto w-[327px] sm:w-[442px] md:my-auto">
            <div className="mb-10 max-w-[250px] sm:max-w-[411px]">
              <h1 className="h3-semibold text-secondary2 dark:text-background2 sm:text-[30px] sm:font-bold sm:leading-[40px]">
                Tell us about yourself
              </h1>
            </div>
            {/* Info cards */}
            <div className="flex w-full flex-col gap-5">
              <Info
                className="bg-red10"
                fillIcon={<FillIcon.Rocket className="fill-red" />}
              >
                Help us build the best community for people like you.
              </Info>
              <Info
                className="bg-yellow10"
                fillIcon={<FillIcon.Feedback className="fill-yellow" />}
              >
                See the best content and conversations, tailored to your
                interests.
              </Info>
            </div>
          </article>
        </>
      )}
    </>
  );
};

export default InfoSection;
