javascript: (() => {
const imageURLs = []
const divs = document.querySelectorAll('[id^="ember"].occludable-update');

divs.forEach((div) => {
  const element = div.querySelector('.feed-shared-image img')
  if(element?.src !== null && element?.src !== undefined) {
    imageURLs.push(element.src)
  }
})

const textBreakLines = imageURLs.join("\n");

function copyToClipboard(text) {     
    var dummy = document.createElement("textarea");     
    document.body.appendChild(dummy);     
    dummy.value = text;     
    dummy.select();     
    document.execCommand("copy");     
    document.body.removeChild(dummy);   
};

copyToClipboard(textBreakLines)
})();
