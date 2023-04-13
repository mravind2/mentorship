import axios from "axios";
import { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function MentorProfile() {
  const { action } = useParams();
  const { user } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [description, setDescription] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [profilePicture, setProfilePicture] = useState("");

  function inputHeader(text) {
    return <h2 className="text-xl mt-4 px-2">{text}</h2>;
  }

  function preInput(header) {
    return (
      <>
        {inputHeader(header)}
      </>
    );
  }

  function uploadPhoto(ev) {
    const files = ev.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
    axios
      .post("/upload", data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((response) => {
        const { data: filenames } = response;
        setAddedPhotos((prev) => {
          return [...prev, ...filenames];
        });
        if (!profilePicture) {
          setProfilePicture("http://localhost:3001/uploads/" + filenames[0]);
        }
      });
  }

  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-4 py-4">
      <div className="md:col-start-2 md:col-end-4 flex flex-col">
        {action !== "edit" && (
          <div className="text-center">
            <Link
              className="inline-flex bg-indigo-600 gap-1 text-white py-2 px-6 rounded-full"
              to={"/account/mentor-profile/edit"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              <span>Edit profile</span>
            </Link>
          </div>
        )}
        {action === "edit" && (
          <div className="px-4">
            <form className="flex flex-col">
            {preInput("Name")}
          <input
            className="border border-gray-400 py-2 px-3"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {preInput("Email")}
          <input
            className="border border-gray-400 py-2 px-3"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {preInput("LinkedIn")}
          <input
            className="border border-gray-400 py-2 px-3"
            type="text"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />

          {preInput("Description")}
          <textarea
            className="border border-gray-400 py-2 px-3"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          {preInput("Photos")}
          <div className="flex flex-wrap gap-2">
            {addedPhotos.map((photo) => (
              <div key={photo}>
                <img
                  src={`http://localhost:3001/uploads/${photo}`}
                  alt="Uploaded"
                  className="max-w-xs h-auto"
                />
              </div>
            ))}
            <div>
              <label className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 text-gray-400 hover:text-gray-600 transition-colors duration-150"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span className="block text-gray-400 mt-2">Add photo</span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={uploadPhoto}
                />
              </label>
            </div>
          </div>

          <button
            className="bg-indigo-600 text-white py-2 px-4 rounded-full mt-4"
            type="submit"
          >
            Save Changes
          </button>
        </form>
      </div>
    )}
  </div>
</div>
);
}
