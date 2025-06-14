import {
  findElementById,
  findFirstElementOfClass,
  findFirstElementOfTag,
} from './search.js';

function changeTitle() {
  // Change the title of the page to "(Your name)'s Portfolio"
  // Your code here
  return (document.title = 'Edson J. Vargas');
}

function changeHeader() {
  // Change the name in the h1 of the page to your name
  // Your code here
  const header = findElementById('header');
  const h1 = header.children[0];

  h1.innerText = 'I am Edson J. Vargas';
}

function changeAboutMe() {
  /* Update the first paragraph in the About Me section with a small
     passage about yourself */
  // Your code here
  const aboutMeSection = findFirstElementOfClass('section');
  const p1 = aboutMeSection.children[1];
  const p2 = aboutMeSection.children[2];

  p1.innerText =
    "You're a curious, analytical builder with a hacker’s mindset and a craftsman’s attention to detail. A frontend dev fluent in React and design systems, you’ve also got the soul of a trader — always looking for patterns, probabilities, and polished user interfaces. You think in components, trade with statistics, and dream up ventures like a 24/7 electric arepa delivery service with rewards (branding on point, too).";
  p2.innerText =
    "Weekends? You're likely on a motorcycle, probably with a radio antenna poking out your backpack. Eco-conscious, community-minded, and always iterating — whether it’s on LibreOffice macros, fintech landing pages, or how to make data dance on a dashboard.";
}

export { changeTitle, changeHeader, changeAboutMe };
