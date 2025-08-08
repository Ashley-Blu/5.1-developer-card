const devRecord = {
    devID: '4',
    username: 'scriptKid',
    yearsExperience: 0.5,
    isActive: true,
    pictureUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=Eden",
    email: ' mailto:diva@example.com',
    phone: '397-223-9883',
    skills: ['HTML', 'CSS'],
    bio: 'Eager and new to the scene, scriptKid has spent the last 6 months mastering the foundational web technologies of HTML and CSS to build clean, static websites.								'
}

const root = document.createElement('main');
const devCard = document.createElement('section');
root.appendChild(devCard);

const details = document.createElement('div');
const bio = document.createElement('div');
devCard.appendChild(details);
devCard.appendChild(bio);


