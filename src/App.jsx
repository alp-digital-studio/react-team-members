import Header from "./components/Header.jsx";
import TeamMember from "./components/TeamMember.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

const members = [
    {
        id: 1,
        name: "Ali Mammadov",
        position: "Frontend Developer",
        age: 24,
        city: "Baku",
        image: "https://i.pravatar.cc/300?img=12",
        email: "ali@gmail.com"
    },
    {
        id: 2,
        name: "Leyla Ahmadova",
        position: "UI/UX Designer",
        age: 22,
        city: "Ganja",
        image: "https://i.pravatar.cc/300?img=47",
        email: "leyla@gmail.com"
    },
    {
        id: 3,
        name: "Murad Hasanov",
        position: "Backend Developer",
        age: 26,
        city: "Sumgait",
        image: "https://i.pravatar.cc/300?img=14",
        email: "murad@gmail.com"
    },
    {
        id: 4,
        name: "Nigar Aliyeva",
        position: "Project Manager",
        age: 25,
        city: "Baku",
        image: "https://i.pravatar.cc/300?img=44",
        email: "nigar@gmail.com"
    }
];

function App() {
    return (
        <div>
            <Header />
            <main className="team-container">
                {members.map(member => (
                    <TeamMember
                        key={member.id}
                        name={member.name}
                        position={member.position}
                        age={member.age}
                        city={member.city}
                        image={member.image}
                        email={member.email}
                    />
                ))}
            </main>
            <Footer />
        </div>
    );
}

export default App;
