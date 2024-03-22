import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Logo } from "./logo";

const config: DocsThemeConfig = {
  logo: Logo,
  project: {
    link: "https://github.com/builtjs/docs",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/builtjs/docs",
  footer: {
    text: "Built.js",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Docs | Built.js",
    };
  },
  primaryHue: 36,
  head: (
    <>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </>
  ),
};

export default config;
