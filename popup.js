const projects = [
    {
        name: 'Keeping track of hundreds of components',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        imageurl: 'images/Snapshoot.png',
        technologies: ['Codekit', 'GitHub', 'javaScript', 'Bootstrap', 'Terminal', 'Codepen'],
        live_version: 'https://github.com/abdulrahmanshr75?tab=repositories/',
        codesource:'https://github.com/abdulrahmanshr75?tab=repositories',
    },
    {
        name: 'Keeping track of hundreds of components',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        imageurl: 'images/Snapshoot.png',
        technologies: ['Codekit', 'GitHub', 'javaScript', 'Bootstrap', 'Terminal', 'Codepen'],
        live_version: 'https://github.com/abdulrahmanshr75?tab=repositories/',
        codesource:'https://github.com/abdulrahmanshr75?tab=repositories',
    },
    {
        name: 'Keeping track of hundreds of components',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        imageurl: 'images/Snapshoot.png',
        technologies: ['Codekit', 'GitHub', 'javaScript', 'Bootstrap', 'Terminal', 'Codepen'],
        live_version: 'https://github.com/abdulrahmanshr75?tab=repositories/',
        codesource:'https://github.com/abdulrahmanshr75?tab=repositories',
    },
    {
        name: 'Keeping track of hundreds of components',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        imageurl: 'images/Snapshoot.png',
        technologies: ['Codekit', 'GitHub', 'javaScript', 'Bootstrap', 'Terminal', 'Codepen'],
        live_version: 'https://github.com/abdulrahmanshr75?tab=repositories/',
        codesource:'https://github.com/abdulrahmanshr75?tab=repositories',
    },
    {
        name: 'Keeping track of hundreds of components',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        imageurl: 'images/Snapshoot.png',
        technologies: ['Codekit', 'GitHub', 'javaScript', 'Bootstrap', 'Terminal', 'Codepen'],
        live_version: 'https://github.com/abdulrahmanshr75?tab=repositories/',
        codesource:'https://github.com/abdulrahmanshr75?tab=repositories',
    },
    {
        name: 'Keeping track of hundreds of components',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
        imageurl: 'images/Snapshoot.png',
        technologies: ['Codekit', 'GitHub', 'javaScript', 'Bootstrap', 'Terminal', 'Codepen'],
        live_version: 'https://github.com/abdulrahmanshr75?tab=repositories/',
        codesource:'https://github.com/abdulrahmanshr75?tab=repositories',
    }
    ];

    const project1 = document.getElementById('project1');
    const project2 = document.getElementById('project2');
    const project3 = document.getElementById('project3');
    const project4 = document.getElementById('project4');
    const project5 = document.getElementById('project5');
    const project6 = document.getElementById('project6');

    const RemovePop = () => {
        const Popup = document.querySelector('.popup')
        Popup.remove();
    }

    const CreatePop = (project) => {
        const Popup = document.createElement('div')
        document.body.appendChild(Popup);
        Popup.classList.add('popup')
        Popup.innerHTML += `<img src = "images/Disabled.png" class="exit-popup" onclick="RemovePop();">
        <img src = "images/snapshoot.png" class="pop-image">
        <div class = "h1-buttons-div">
        <h1 class="pop-title">${project.name}</h1>
        <div class = "pop-links">
        <a class = "button" href="${project.live_version}">See live<img src="images/popup-live-icon.png"></a>
        <a class = "button" href="${project.codesource}">See Source<img src="images/source-icon.png"></a>
        </div>
        </div>
        `
    };