import Header from "./Header";
// import MentorSelect from "./MentorSelect";

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
    name: "Jane Doe",
    image: "mentor6.jpg",
  },
  {
    name: "Adam Smith",
    image: "mentor7.jpg",
  },
  {
    name: "John Adams",
    image: "mentor8.jpg",
  },
  {
    name: "Cool Dude",
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

          .mentor-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            background-color: #f5f5f5;
            border-radius: 4px;
          }

          .mentor-item img {
            max-width: 100%;
            height: auto;
            margin-bottom: 10px;
          }

          .mentor-label {
            font-weight: bold;
            margin-bottom: 10px;
          }

          .connect-button {
            width: 100%;
            padding: 10px;
            background-color: #8E24AA;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .connect-button:hover {
            background-color: #CBC3E3;
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