// You can add interactivity here in the future
console.log("MotoLife blog loaded.");

function scrollToSection(event, sectionId) {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  } else {
    alert(`Section "${sectionId}" not found!`);
  }
}
