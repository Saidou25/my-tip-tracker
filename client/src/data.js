// data for testing purpose
const signupData = {
  templateTitle: "signupData",
  fields: [
    { type: "email", label: "email", placeholder: "gf@example.com" },
    { type: "password", label: "password", placeholder: "******" },
  ],
};
const loginData = {
  templateTitle: "loginData",
  fields: [
    { type: "email", label: "email", placeholder: "gf@example.com" },
    { type: "password", label: "password", placeholder: "******" },
  ],
};
const dashboardData = {
  templateTitle: "dashboard",
  fields: [
    {
      date: "02/23/2024",
      day: "Monday",
      brut: 0,
      net: 0,
      shift: "dinner",
    },
    {
      date: "02/23/2024",
      day: "Tuesday",
      brut: 0,
      net: 0,
      shift: "dinner",
    },
    {
      date: "02/23/2024",
      day: "Wednesday",
      brut: 330,
      net: 242,
      shift: "dinner",
    },
    {
      date: "02/23/2024",
      day: "Thursday",
      brut: 350,
      net: 220,
      shift: "dinner",
    },
    {
      date: "02/23/2024",
      day: "Friday",
      brut: 400,
      net: 350,
      shift: "dinner",
    },
    {
      date: "02/23/2024",
      day: "Saturday",
      brut: 334,
      net: 200,
      shift: "day",
    },
    {
      date: "02/23/2024",
      day: "Sunday",
      shift: "day",
      brut: 350,
      net: 230,
    },
  ],
};

const profile = {
  templateTitle: "profile",
  fields: [
    {
      type: "text",
      firstname: "Oliva",
      workPlace: "GF",
      email: "me@gmail.com",
      position: "server",
    },
  ],
};

const tipsForm = {
  templateTitle: "tipsForm",
  fields: [
    { type: "number", label: "Tips brut", placeholder: "enter tips brut" },
    { type: "number", label: "Tips net", placeholder: "enter tips net" },
  ],
};

const titlesData = [
  {
    titles: ["today", "dinner", "tips(brut)", "tips(net)"],
  },
];
export { dashboardData, profile, tipsForm, titlesData, signupData, loginData };
