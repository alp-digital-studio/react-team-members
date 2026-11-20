import SocialLinks from "./SocialLinks.jsx";

function TeamMember({ name, position, age, city, image, email }) {
    return (
        <div className="team-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <h3>{position}</h3>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <SocialLinks email={email} />
        </div>
    );
}

export default TeamMember;
