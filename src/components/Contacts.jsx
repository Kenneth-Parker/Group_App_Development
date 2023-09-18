import React from "react";
import '../App.css';
import TeamMemberCard from './TeamMemberCard';

const ContactPage = () => {

    const teamMembers = [
        {
            name: 'Anicka "Nicki" Lewis',
            imageUrl: 'https://avatars.githubusercontent.com/u/127878284?v=4',
            linkedInLink: 'https://www.linkedin.com/in/anickalewiss/',
            githubLink: 'https://github.com/anickacodes',
            info: 'Nicki-of-all-trades in the process of adding FSWD to my arsenal to ensure an impactful and successful legacy for my natural hair styling franchise'
        },
        {
            name: 'Jesse Chong',
            imageUrl: 'https://ca.slack-edge.com/TCVA3PF24-U04SVAB1FMH-ae146e745ddc-512',
            linkedInLink: 'https://www.linkedin.com/in/jessemchong/',
            githubLink: 'https://github.com/Jesse-Chong',
            info: `Full-stack web development student with a surprising amount of experience on customer service relations, latte art, and mixology.`
        },
        {
            name: 'Xavier Rice',
            imageUrl: 'https://avatars.githubusercontent.com/u/126502714?v=4',
            linkedInLink: 'https://www.linkedin.com/in/xavier0rice/',
            githubLink: 'https://github.com/XavierRice',
            info: 'An aspiring software engineer and experienced storyteller and professional creative with a background in storytelling and community engagement.'
        },

        {
            name: 'Kenneth Parker',
            imageUrl: 'https://avatars.githubusercontent.com/u/131785555?v=4',
            linkedInLink: 'https://www.linkedin.com/in/-KennethParker',
            githubLink: 'https://github.com/Kenneth-Parker',
            info: `As a Pursuit full stack web developer with an entrepreneurial mindset, I'm passionate about building innovative web applications that solve real-world problems`
        },


    ];


    return (
        <>

            <header>
                {/* <NavBar /> */}
            </header>

            <div className="about-page">
                <h1></h1>

                <div className="team-members">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            name={member.name}
                            imageUrl={member.imageUrl}
                            linkedInLink={member.linkedInLink}
                            githubLink={member.githubLink}
                            info={member.info}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ContactPage;
