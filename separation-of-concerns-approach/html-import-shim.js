const htmlImportHelper = document.getElementsByClassName('html-import-helper')[0];

const importHTML = (e) => {
  e.target.before(e.target.contentDocument.body.children[0]);
  e.target.remove();
}

htmlImportHelper.addEventListener('load', importHTML);
