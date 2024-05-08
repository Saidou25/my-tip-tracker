// data for testing purpose

const dashboardData = {
  templateTitle: "dashboard",
  fields: [
    {
      date: "02/23/2024",
      day: "Monday",
      brut: 220,
      net: 175,
      shift: "dinner",
    },
    {
      date: "02/23/2024",
      day: "Tuesday",
      brut: 240,
      net: 205,
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
      shift: "brunch",
    },
    {
      date: "02/23/2024",
      day: "Sunday",
      shift: "brunch",
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
export { dashboardData, profile, tipsForm };
