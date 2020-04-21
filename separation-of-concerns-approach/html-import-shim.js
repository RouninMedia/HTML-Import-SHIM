const htmlImportHelpers = [... document.getElementsByClassName('html-import-helper')];

const importHTML = (e) => {
  e.target.before(e.target.contentDocument.body.children[0]);
  e.target.remove();
}

for (htmlImportHelper of htmlImportHelpers) {
  htmlImportHelper.addEventListener('load', importHTML);
}
