function createElement(tagName, parent, className) {
  let element = document.createElement(tagName);
  element.className = className;
  parent.append(element);

  return element;
}

function createTextElement(tagName, parent, textContent = "") {
  let element = document.createElement(tagName);
  element.textContent = textContent;
  parent.append(element);

  return element;
}

const main = createElement("main", document.body, "main_container");
const nav = createElement("nav", main, "left_column");
const navDivFirst = createElement("div", nav, "display-container");
const navImg = createElement("img", navDivFirst, "display-container");
navImg.src = "/img/photo.jpeg";
const navH1 = createTextElement("h1", navDivFirst, "Ghevond Tunyan");
const navDivSecond = createElement("div", nav, "container");

const navIcons = [
  "fas fa-briefcase",
  "fa fa-home",
  "fa fa-envelope",
  "fas fa-phone-alt",
];
const navTextContent = [
  "Front End Developer",
  "Berlin, Germany",
  "tunyan.ghevond@gmail.com",
  "+4915733920708",
];

for (let i = 0; i < navIcons.length; i++) {
  let p = document.createElement("p");
  p.textContent = navTextContent[i];
  let icon = document.createElement("i");
  icon.className = navIcons[i];
  p.prepend(icon);
  navDivSecond.append(p);
}

function hr(line) {
  let hr = document.createElement("hr");
  line.append(hr);
}
hr(navDivSecond);

function skillTitle(parent, text, icon) {
  let p = document.createElement("p");
  p.classList.add("large");
  let b = document.createElement("b");
  b.textContent = text;
  p.append(b);
  let i = document.createElement("i");
  i.className = icon;
  parent.append(p);
}

const skills = skillTitle(navDivSecond, "Skills", "fa fa-asterisk");

const skillName = [
  "HTML, CSS, SASS, JavaScript",
  "React including Hooks and Router, Redux",
  "Typescript",
  "React Testing Library, Jest",
];
const percentValue = [90, 80, 65, 65];

function skillElement(parent, text, value = "") {
  let skillName = document.createElement("p");
  skillName.textContent = text;
  parent.append(skillName);

  let percent = document.createElement("div");
  percent.classList.add("percent");
  parent.append(percent);

  let percentValue = document.createElement("span");
  percentValue.classList.add("percent_value");
  percentValue.style.width = value + "%";
  percentValue.style.height = "10px";
  percent.append(percentValue);
}

for (let i = 0; i < skillName.length; i++) {
  skillElement(navDivSecond, skillName[i], (value = percentValue[i]));
}

const language = skillTitle(navDivSecond, "Languages", "fa fa-globe");

const languages = ["Armenian", "English", "Russian"];
const perceValue = [95, 75, 70];

for (let i = 0; i < languages.length; i++) {
  skillElement(navDivSecond, languages[i], (value = perceValue[i]));
}

const section = createElement("section", main, "work_experience");
const sectionTitle = createTextElement("h2", section, "Work Experience");
const sectionTitleIcon = createElement("i", sectionTitle, "fa fa-suitcase");

function sectionContent(parent, titleText, spanText, pText) {
  let aside = document.createElement("aside");
  let h5 = document.createElement("h1");
  aside.append(h5);
  let b = document.createElement("b");
  b.textContent = titleText;
  h5.append(b);
  let h6 = document.createElement("h6");
  let icon = document.createElement("i");
  icon.className = "fa fa-calendar";
  h6.append(icon);
  aside.append(h6);
  let span = document.createElement("span");
  span.textContent = spanText;
  h6.append(span);
  let p = document.createElement("p");
  p.textContent = pText;

  aside.append(p);
  parent.append(aside);
}

const titleText = [
  "Front End Engineer - SoftConstruct",
  "Front End Intern - SoftConstruct",
];
const spanText = ["Feb 2021 - Jul 2021", "Oct 2020 - Jan 2021"];
const pText = [
  "Design and develop code parts of the product, develop functional web applications with React, build reusable React components.",
  "Core concepts of front-end web development, practice of producing HTML, CSS and JavaScript for websites and web applications.",
];

for (let i = 0; i < titleText.length; i++) {
  sectionContent(section, titleText[i], spanText[i], pText[i]);
}

const sectionTwo = createElement("section", main, "education");
const sectionTwoTitle = createTextElement("h2", sectionTwo, "Education");
const sectionTwoTitleIcon = createElement(
  "i",
  sectionTwoTitle,
  "fa fa-certificate"
);

const titleTwoText = [
  "Zero To Mastery Academy",
  "Colibri Lab Training Center, Yerevan Armenia",
  "National Polytechnic University of Armenia",
];
const spanTwoText = [
  "Oct 2020 - Dec 2020",
  "Jan 2020 - Sep 2020",
  "Sep 2004 - May 2010",
];
const pTwoText = [
  "Complete React Developer Course",
  "Front End Development Course",
  "Bachelors Degree in Electrical and Electronics Engineering",
];

for (let i = 0; i < titleTwoText.length; i++) {
  sectionContent(sectionTwo, titleTwoText[i], spanTwoText[i], pTwoText[i]);
}

const footer = createElement("footer", main, "footer");
const footerP = createTextElement("p", footer, "Find me on social media.");

function footerIcon(parent, iconClass, socialLinks) {
  let links = document.createElement("a");

  let icon = document.createElement("i");
  icon.className = iconClass;
  links.href = socialLinks;

  links.append(icon);
  parent.append(links);
}
const footerIcons = [
  "fa fa-facebook-official",
  "fa fa-github",
  "fa fa-linkedin",
];
const links = [
  "https://www.facebook.com/",
  "https://github.com/tunyanghevond",
  "https://www.linkedin.com/in/ghevond-tunyan-6bb64518a/",
];
for (let i = 0; i < footerIcons.length; i++) {
  footerIcon(footer, footerIcons[i], links[i]);
}

const footerLink = createTextElement("p", footer, "w3.css");
