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
    },
    {
      date: "02/23/2024",
      day: "Tuesday",
      brut: 0,
      net: 0,
    },
    {
      date: "02/23/2024",
      day: "Wednesday",
      brut: 330,
      net: 242,
      
    },
    {
      date: "02/23/2024",
      day: "Thursday",
      brut: 350,
      net: 220,
      
    },
    {
      date: "02/23/2024",
      day: "Friday",
      brut: 400,
      net: 350,
      
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
      type: "",
      displayName: "",
      email: "",
    },
  ],
};

const tipsForm = {
  templateTitle: "tipsForm",
  fields: [
    { type: "number", label: "TipsBrut", placeholder: "enter tips brut" },
    { type: "number", label: "TipsNet", placeholder: "enter tips net" },
  ],
};

const update = {
  templateTitle: "update",
  fields: [{ type: "text", label: "displayName", placeholder: "display name" }],
};

const titlesData = [
  {
    titles: ["today", "tips(brut)", "tips(net)"],
  },
];
export {
  dashboardData,
  profile,
  tipsForm,
  titlesData,
  signupData,
  loginData,
  update,
};
