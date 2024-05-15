import { FaSackDollar } from "react-icons/fa6";
import { GiCoins } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import Button from "./Button";

import "./Card.css";

const CardBodyTipsForm = ({ fields }) => {
  const [showSaveButton, setShowSaveButton] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    TipsBrut: 0,
    TipsNet: 0,
    createdAt: "",
    dayName: "",
  });

  const form = useRef();

  const currentUser = auth.currentUser;

  const date = new Date();
  const todaysDayName = date.toString().slice(0, 3);
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const updateTheCollection = async (e) => {
    e.preventDefault();
    // console.log("form state", formState)
    const userDocRef = doc(db, "users", currentUser.uid);
    console.log("update the collection", userDocRef);

    // Atomically add a new region to the "regions" array field.
    await updateDoc(userDocRef, {
      tips: arrayUnion({ ...formState, ["createdAt"]: date }),
    });
  };

  const createTheCollection = async (e) => {
    e.preventDefault();
    // console.log("create the collection", formState);

    // Add a new document with currentUser's id for id.
    await setDoc(doc(db, "users", currentUser.uid), {
      displayName: currentUser.displayName,
      email: currentUser.email,
      photoURL: currentUser.photoURL,
      tips: [formState],
    });
    // console.log("Document written with ID:", currentUser.uid);
  };

  useEffect(() => {
    console.log(todaysDayName);
    for (let day of weekDays) {
      if (day.toString().slice(0, 3) === todaysDayName) {
        const name = "dayName";
        setFormState({
          ...formState,
          [name]: day,
        });
      } else {
        console.log("nope");
      }
    }
  }, []); // No dependancies here as we do only want to set the "dayName" and date at first rendering

  useEffect(() => {
    const inconue = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const dataArray = []; // Initialize an array to store the stringified objects
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        // console.log(`${doc.id} => ${JSON.stringify(data)}`);
        dataArray.push(data); // Push the data object into the dataArray
      });
      // console.log(dataArray);
      // Filter to find out if currentUser already has stored tips.
      // if yes the currentUser's tips need to be updated
      // otherwise a new firebase "document" will be created
      const firstTime = dataArray.filter(
        (array) => array.email === currentUser.email
      );
      setShowSaveButton(firstTime);
      // console.log("firstime", firstTime.length);
      if (firstTime.length) {
        console.log("lenght is not null", firstTime.length);
        // setShowUpdate(true)
      } else {
        console.log("lenght is null", firstTime.length);
        // setShowAddButton()
      }
      // setEarnings(dataArray);
      // console.log("querySnapshot", querySnapshot);
    };
    inconue();
  }, []);

  return (
    <div className="row you tips g-0" data-testid="card-body-tips-form">
      <form
        ref={form}
        role="form"
        className="form px-5"
        onSubmit={
          showSaveButton.length ? updateTheCollection : createTheCollection
        }
        // onSubmit={createTheCollection}
      >
        <br />
        {fields &&
          fields.map((field) => (
            <div className="col-12" key={field.label}>
              <label
                data-testid={`enterTipsForm-label-${field.label}`}
                htmlFor={field.label}
                className="form-label here mb-3"
                name={field.label}
              >
                {field.label}:
              </label>
              <br />
              <br />
              {field.label === "Tipsbrut" && (
                <FaSackDollar
                  data-testid="fa-sack-dollar"
                  className="hum-icon-form"
                />
              )}
              {field.label === "TipsNet" && (
                <GiCoins data-testid="fa-gi-coins" className="hum-icon-form" />
              )}
              <input
                data-testid="input"
                role="spinbutton"
                id={field.label}
                inputMode="numeric"
                type={field.type}
                className="tips-input mb-3 mx-2"
                placeholder={field.placeholder}
                style={{
                  fontStyle: "oblique",
                  paddingLeft: "3%",
                  color: "black",
                }}
                value={formState.field?.label}
                onChange={handleChange}
                name={field.label}
                onKeyDown={(evt) =>
                  ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
                }
              />
              <br />
              <br />
            </div>
          ))}

        <Button
          type="submit"
          className="button"
          disabled={false}
          loading={loading}
        >
          add tips
        </Button>

        {error && (
          <span className="text-danger" data-testid="oops">
            Oops, something went wrong...
          </span>
        )}
      </form>
    </div>
  );
};
export default CardBodyTipsForm;
