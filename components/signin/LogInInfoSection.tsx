"use client";
import React from "react";

import { Info } from "@/components/signup/Info";
import FillIcon from "../icons/FillIcon";
import { Logo } from "../icons/Logo";

const LogInInfoSection = () => {
  return (
    <>
      <div className="mt-[30px] max-md:text-center md:absolute">
        <Logo />
      </div>
      {
        <article className="mx-auto max-w-[327px] sm:max-w-[442px] md:my-auto">
          <div className="mb-10 max-w-[250px] sm:max-w-[411px]">
            <h1 className="h3-semibold text-secondary2 dark:text-background2 sm:text-[30px] sm:font-bold sm:leading-[40px]">
              Sign In to Hipnode
            </h1>
          </div>
          {/* Info cards */}
          <div className="flex w-full flex-col gap-5">
            <Info
              className="bg-green10"
              fillIcon={<FillIcon.Inbox className="fill-green" />}
            >
              Want to explore the app? Use the demo account:{" "}
              <span className="text-red80">demo@hipnode.com</span> Password:{" "}
              <span className="text-red80">Demo1234</span>
            </Info>
            <Info
              className="bg-yellow10"
              fillIcon={<FillIcon.Thunderbolt className="fill-yellow" />}
            >
              Real-time feed, instant messaging, and live status powered by
              <span className="text-red80"> WebSockets</span> + Next.js App
              Router
            </Info>
          </div>
        </article>
      }
    </>
  );
};

export default LogInInfoSection;
