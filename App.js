//javascript object representing a developer's profile.
// this object will be used to populate the developer card.
const devRecord = {
    devID: '4',
    username: 'scriptKid',
    yearsExperience: 0.5,
    isActive: true,
    pictureUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=Eden",
    email: 'diva@example.com',
    phone: '397-223-9883',
    skills: ['HTML', 'CSS'],
    bio: 'Eager and new to the scene, scriptKid has spent the last 6 months mastering the foundational web technologies of HTML and CSS to build clean, static websites.'
};

// creates a root container and adds it to the HTML body.
const root = document.createElement('main');
document.body.appendChild(root);

// creates the cards container
const devCard = document.createElement('section');
devCard.className = 'dev-card';// gives it a glass name
root.appendChild(devCard);//adds the card to the root container

// create top section container for image and details to style them side-by-side
const topSection = document.createElement('div');
topSection.className = 'top-section';
devCard.appendChild(topSection);

const img = document.createElement('img');
img.src = devRecord.pictureUrl;
img.alt = `${devRecord.username}'s profile picture`;
topSection.appendChild(img);

const details = document.createElement('div');
details.className = 'details';
topSection.appendChild(details);
//the users information is added to the details section
// each piece of information is created as a separate element and appended to the details section.
const name = document.createElement('h2');
name.textContent = devRecord.username;
details.appendChild(name);

const userID = document.createElement('p');
userID.textContent = `User ID: ${devRecord.devID}`;
details.appendChild(userID);

const years = document.createElement('p');
years.textContent = `Years of Experience: ${devRecord.yearsExperience}`;
details.appendChild(years);

const activeStatus = document.createElement('p');
activeStatus.textContent = 'Active: ';
const activeIcon = document.createElement('span');
activeIcon.textContent = devRecord.isActive ? '✅' : '❌';
activeStatus.appendChild(activeIcon);
details.appendChild(activeStatus);

const email = document.createElement('p');
email.textContent = 'Email: ';
const emailLink = document.createElement('a');
emailLink.href = `mailto:${devRecord.email}`;
emailLink.textContent = devRecord.email;
email.appendChild(emailLink);
details.appendChild(email);

const phone = document.createElement('p');
phone.textContent = `Phone: ${devRecord.phone}`;
details.appendChild(phone);

const skills = document.createElement('p');
skills.textContent = `Skills: ${devRecord.skills.join(', ')}`;
details.appendChild(skills);

const bio = document.createElement('div');
bio.className = 'bio';
devCard.appendChild(bio);

const bioText = document.createElement('p');
bioText.textContent = devRecord.bio.trim();
bio.appendChild(bioText);
