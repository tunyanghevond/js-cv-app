function createElement (tagName, parent, className){
    let element = document.createElement(tagName);
    element.className = className;
    parent.append(element);;
      
      return element;

}

function createTextElement (tagName, parent,textContent=''){
   let element = document.createElement(tagName);
   element.textContent = textContent;
    parent.append(element);
      
      return element;
}


const main = createElement('main',document.body,'main_container');
const nav = createElement('nav', main, 'left_column');
const navDivFirst = createElement('div', nav,'display-container' );
const navImg = createElement('img', navDivFirst, 'display-container');
navImg.src = "/img/avatar_hat.jpg";
const navH1 = createTextElement('h1',navDivFirst,'John Doe' );
const navDivSecond = createElement('div', nav,'container' );

const navIcons = ['fas fa-briefcase', 'fa fa-home', 'fa fa-envelope', 'fas fa-phone-alt'];
const navTextContent = ['Designer', 'London, UK', 'ex@mail.com', '1224435534'];

for (let i = 0; i < navIcons.length; i++) {
    let p = document.createElement('p');
    p.textContent = navTextContent [i];
    let icon = document.createElement('i');
    icon.className = navIcons[i];
    p.prepend(icon);
    navDivSecond.append(p);

  }

  function hr(line) {
    let hr = document.createElement('hr')
    line.append(hr)

}
hr(navDivSecond);

function skillTitle  (parent,text,icon) {
  let p = document.createElement('p');
  p.classList.add('large');
  let b = document.createElement('b');
  b.textContent = text;
  p.append(b);
  let i = document.createElement('i');
  i.className = icon;
  b.append('i')
  parent.append(p)
}

const skills = skillTitle (navDivSecond,'Skills','fa fa-asterisk')
const skillName = ['Adobe Photoshope', 'Photograpy', 'Illustrator', 'Media'];
const percentValue  = [90, 80, 75, 50, ];

function skillElement(parent, text, value = '') {

    let skillName = document.createElement('p');
    skillName.textContent = text;
    parent.append(skillName)

    let percent = document.createElement('div');
    percent.classList.add('percent');
    parent.append(percent);

    let percentValue = document.createElement('span');
    percentValue.classList.add('percent_value');
    percentValue.style.width = value + '%';
    percentValue.textContent = value + '%';
    percent.append(percentValue);
    
}

for (let i = 0; i < skillName.length; i++) {
    skillElement(navDivSecond, skillName[i], value = percentValue[i] )
  }

const language =  skillTitle  (navDivSecond,'Languages','fa fa-globe');

const languages = ['English', 'Spanish', 'German'];
const perceValue  = [100, 50, 25];

for (let i = 0; i < languages.length; i++) {
    skillElement(navDivSecond, languages[i], value = perceValue[i] )
  };

  const section = createElement ('section', main, 'work_experience');
  const sectionTitle =createTextElement ('h2', section,'Work Experiance');
  const sectionTitleIcon = createElement('i',sectionTitle,'fa fa-suitcase');

  function sectionContent (parent,titleText,spanText, pText){
      let aside = document.createElement('aside');
      let h5 = document.createElement('h5');
      aside.append(h5);
      let b = document.createElement('b');
      b.textContent = titleText;
      h5.append(b);
      let h6 = document.createElement('h6');
      let icon  = document.createElement('i');
      icon.className = 'fa fa-calendar';
      h6.append(icon);
      aside.append(h6)
      let span = document.createElement('span');
      span.textContent = spanText;
      h6.append(span);
      let p = document.createElement('p');
      p.textContent = pText;
      aside.append(p);
      parent.append(aside)

  }

  const titleText = ['Front End Developer / w3schools.com','Web Developer / something.com','Graphic Designer / designsomething.com'];
  const spanText = ['Jan 2015','Mar 2012 - Dec 2014','Jun 2010 - Mar 2012']
  const pText = ["Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel","Consectetur adipisicing elit. Praesentium magnam consectetur vel","Lorem ipsum dolor sit amet, consectetur adipisicing elit."];
 
  for (let i = 0; i < titleText.length; i++) {
    sectionContent(section,titleText[i],spanText[i],pText[i])
  };

  const sectionTwo = createElement ('section', main, 'education');
  const sectionTwoTitle =createTextElement ('h2', sectionTwo ,'Education');
  const sectionTwoTitleIcon = createElement('i',sectionTwoTitle,'fa fa-certificate');

  const titleTwoText = ['W3Schools.com','London Business School','School of Coding'];
  const spanTwoText = ['Forever','2013 - 2015','2010 - 2013']
  const pTwoText = ["Web Development! All I need to know in one place","Master Degree","Bachelor Degree"];

  for (let i = 0; i <  titleTwoText .length; i++) {
    sectionContent(sectionTwo, titleTwoText [i],spanTwoText[i],pTwoText[i])
  };

  const footer = createElement ('footer', main, 'footer');
  const footerP = createTextElement ('p', footer,'Find me on social media.');

  function footerIcon (parent,iconClass){
      let icon = document.createElement('i');
      icon.className = iconClass;
      parent.append(icon);

  }
  const footerIcons = ['fa fa-facebook-official','fa fa-instagram','fa fa-snapchat','fa fa-pinterest-p','fa fa-twitter','fa fa-linkedin'];

  for (let i = 0; i < footerIcons.length; i++) {
    footerIcon(footer,footerIcons[i] )
  };

  const footerLink = createTextElement ('p', footer,'w3.css');








  