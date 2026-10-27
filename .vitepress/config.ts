import { defineConfig } from "vitepress";

export default defineConfig({
  title: "ANU CRM Docs",
  description: "Hướng dẫn sử dụng ANU CRM theo từng vai trò",
  lang: "vi-VN",
  base: "/docs/",
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: "Trang chủ", link: "/" },
      { text: "Thuật ngữ", link: "/glossary" },
      { text: "Changelog", link: "/changelog" },
    ],

    search: {
      provider: "local",
    },

    sidebar: [
      {
        text: "CM & CM Lead",
        collapsed: false,
        items: [{ text: "Tổng quan", link: "/cm/" }],
      },
      {
        text: "Admin / Admin Lead / Admin Master",
        collapsed: false,
        items: [{ text: "Tổng quan", link: "/admin/" }],
      },
      {
        text: "Teacher & Teacher Lead",
        collapsed: false,
        items: [{ text: "Tổng quan", link: "/teacher/" }],
      },
      {
        text: "HOC (Trưởng cơ sở)",
        collapsed: false,
        items: [{ text: "Tổng quan", link: "/hoc/" }],
      },
      {
        text: "PPGV",
        collapsed: true,
        items: [{ text: "Tổng quan", link: "/ppgv/" }],
      },
      {
        text: "TPGV",
        collapsed: true,
        items: [{ text: "Tổng quan", link: "/tpgv/" }],
      },
      {
        text: "Kế toán (Accountant)",
        collapsed: true,
        items: [{ text: "Tổng quan", link: "/accounting/" }],
      },
      {
        text: "BO (Back Office)",
        collapsed: true,
        items: [{ text: "Tổng quan", link: "/bo/" }],
      },
      {
        text: "Sales / Sales Lead",
        collapsed: true,
        items: [{ text: "Tổng quan", link: "/sales/" }],
      },
      {
        text: "Manager",
        collapsed: true,
        items: [{ text: "Tổng quan", link: "/manager/" }],
      },
      {
        text: "Student Support",
        collapsed: true,
        items: [{ text: "Tổng quan", link: "/student-support/" }],
      },
      {
        text: "Khác",
        collapsed: true,
        items: [
          { text: "Thuật ngữ", link: "/glossary" },
          { text: "Changelog", link: "/changelog" },
        ],
      },
    ],

    socialLinks: [],

    footer: {
      message: "Tài liệu nội bộ ANU CRM — không công khai.",
      copyright: "© ANU",
    },
  },
});
