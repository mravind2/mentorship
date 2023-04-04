import Header from "./Header";

const mentorList = [
  {
    name: "John Doe",
    image: "mentor1.jpg",
  },
  {
    name: "Michael Crow",
    image: "mentor2.jpg",
  },
  {
    name: "Andrew Tate",
    image: "mentor3.jpg",
  },
  {
    name: "Peter Parker",
    image: "mentor4.jpg",
  },
  {
    name: "James Throne",
    image: "mentor5.jpg",
  },
  {
    name: "Mentor 6",
    image: "mentor6.jpg",
  },
  {
    name: "Mentor 7",
    image: "mentor7.jpg",
  },
  {
    name: "Mentor 8",
    image: "mentor8.jpg",
  },
  {
    name: "Mentor 9",
    image: "mentor9.jpg",
  }
];

export default function MentorSelect() {
  return (
    <div>
      <Header />
      <style>
        {`
      
          .mentor-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 20px;
            margin: 0 auto;
            max-width: 800px;
          }

          .connect-button {
            padding: 10px;
            background-color: #0077cc;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          .connect-button:hover {
            background-color: #005fa3;
          }
        `}
      </style>
      <div className="mentor-grid">
        {mentorList.map((mentor) => (
          <div key={mentor.name} className="mentor-item">
            <img src={mentor.image}/>
            <div className="mentor-label">{mentor.name}</div>
            <button className="connect-button">Connect</button>
          </div>
        ))}
      </div>
    </div>
  );
}