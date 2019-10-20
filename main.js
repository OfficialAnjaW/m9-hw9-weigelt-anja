// Access Accordion Headers
var accordionHeaders = document.querySelectorAll('#accordion .accordion-headers');

// Accordion Dropdown Action
function expandAccordionDescription() {

  // Toggle Indicators
  for (i = 0; i < accordionHeaders.length; i++) {
    accordionHeaders[i].childNodes[3].innerHTML = '+';
  }
  this.childNodes[3].innerHTML = '-';
}

// Add Click Event Listener for Accordion Headers
for (i = 0; i < accordionHeaders.length; i++) {
  accordionHeaders[i].addEventListener('click', expandAccordionDescription);
}
