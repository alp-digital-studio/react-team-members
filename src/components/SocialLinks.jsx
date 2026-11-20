function SocialLinks({ email }) {
    return (
        <a href={`mailto:${email}`} className="email">
            Contact
        </a>
    );
}

export default SocialLinks;
