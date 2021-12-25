/* eslint-disable no-unused-vars */
const projects = [
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    imageurl: 'images/snapshoot-2.png',
    technologies: ['Ruby On Rails', 'css', 'javaScript', 'Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    live_version: 'https://github.com/abdulrahmanshr75?tab=repositories/',
    codesource: 'https://github.com/abdulrahmanshr75?tab=repositories',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    imageurl: 'images/snapshoot-2.png',
    technologies: ['Ruby On Rails', 'css', 'javaScript', 'Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    live_version: 'https://github.com/abdulrahmanshr75?tab=repositories/',
    codesource: 'https://github.com/abdulrahmanshr75?tab=repositories',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    imageurl: 'images/snapshoot-2.png',
    technologies: ['Ruby On Rails', 'css', 'javaScript', 'Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    live_version: 'https://github.com/abdulrahmanshr75?tab=repositories/',
    codesource: 'https://github.com/abdulrahmanshr75?tab=repositories',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    imageurl: 'images/snapshoot-2.png',
    technologies: ['Ruby On Rails', 'css', 'javaScript', 'Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    live_version: 'https://github.com/abdulrahmanshr75?tab=repositories/',
    codesource: 'https://github.com/abdulrahmanshr75?tab=repositories',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    imageurl: 'images/snapshoot-2.png',
    technologies: ['Ruby On Rails', 'css', 'javaScript', 'Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    live_version: 'https://github.com/abdulrahmanshr75?tab=repositories/',
    codesource: 'https://github.com/abdulrahmanshr75?tab=repositories',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    imageurl: 'images/snapshoot-2.png',
    technologies: ['Ruby On Rails', 'css', 'javaScript', 'Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    live_version: 'https://github.com/abdulrahmanshr75?tab=repositories/',
    codesource: 'https://github.com/abdulrahmanshr75?tab=repositories',
  },
];

const project1 = document.getElementById('project1');
const project2 = document.getElementById('project2');
const project3 = document.getElementById('project3');
const project4 = document.getElementById('project4');
const project5 = document.getElementById('project5');
const project6 = document.getElementById('project6');

const CreatePop = (project) => {
  const Popup = document.createElement('div');
  document.body.appendChild(Popup);
  Popup.classList.add('popup');
  Popup.innerHTML += `<span class = "pop-exit" onclick="RemovePop()">&times;</span>
  <img class="pop-exit-desk" onclick="RemovePop()" src="images/Disabled.png">
  <div class="project-img"></div>
  <h1 class="pop-title">${project.name}</h1>
  <ul class="pop-ul">
  <li class ="pop-li">${project.technologies[0]}</li>
  <li class ="pop-li">${project.technologies[1]}</li>
  <li class ="pop-li">${project.technologies[2]}</li>
  </ul>
  <ul class="pop-ul-desk">
  <li class ="pop-li">${project.technologies[3]}</li>
  <li class ="pop-li">${project.technologies[4]}</li>
  <li class ="pop-li">${project.technologies[5]}</li>
  <li class ="pop-li">${project.technologies[6]}</li>
  <li class ="pop-li">${project.technologies[7]}</li>
  <li class ="pop-li">${project.technologies[8]}</li>
  </ul>
  <p class = "pop-d">${project.description}</p>
  <div class="btn-container">
  <a href="${project.live_version}" class = "pop-btn">See Live<span> </span><img src="images/popup-live-icon.png"></a>
  <a href="${project.codesource}"  class = "pop-btn">See Source<span> </span><img src="images/source-icon.png"></a>
  </div>
        `;
};

const RemovePop = () => {
  const Popup = document.querySelector('.popup');
  Popup.remove();
};