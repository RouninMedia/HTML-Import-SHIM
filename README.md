# HTML Import SHIM

> **N.B.** The *HTML Import SHIM* was originally brilliantly documented by *Scott Jehl* of *filament group* in April 2019 in:
> - https://www.filamentgroup.com/lab/html-includes/

_______

The *HTML Import **SHIM*** (***S**imple **H**TML **I**mport **M**ethod*) is a client-side technique which enables a web document to import external HTML files (and file snippets) into its own DOM, declaratively, via a single **helper element** (albeit one which contains inlined `style` and `onload EventListener` attributes).

Either of two HTML5 elements can be used as the **helper element** in the **HTML Import SHIM** (both work equally well):

 - `<object>`
 - `<iframe>`
 
Here is an example of both elements in action as **HTML Import SHIM helper elements**:
 
```
<object data="/my-html-import-1.html" style="display: none;" onload="this.before(this.contentDocument.body.children[0]); this.remove();"></object>

<iframe src="/my-html-import-2.html" style="display: none;" onload="this.before(this.contentDocument.body.children[0]); this.remove();"></iframe>
 
```
We can see that each **helper element** has *3 attributes*, the last 2 of which are ***always the same***, whenever the **HTML Import SHIM** is deployed:

 - `style="display: none;"`
 - `onload="this.before(this.contentDocument.body.children[0]); this.remove();"`

The inline `style` attribute is included because there is no reason for the **helper element** to ever display in the viewport.

The inline `onload` javascript event listener is the workhorse of the **HTML Import SHIM**, which, once the element has loaded, extracts the contents of the element, adds that content to the DOM of the viewport document and then removes the **helper element** from the DOM of the viewport document.

The *third* attribute (which is `data` if you're deploying `<object>` as a **helper element** and `src` if you're deploying `<iframe>`) has a value which *may* (but doesn't have to) change whenever the **HTML Import SHIM** is deployed and which points to the external HTML file, the contents of which will be imported into the viewport document.

_____

## Appendix I : Separation of Concerns

Although the **HTML Import SHIM** is intended primarily to be deployed as a single, self-contained, declarative element, we may of course, present it alternatively *without* inlined `style` and `onload` attributes, adhering instead to a **Separation of Concerns** approach.

If we need to separate *structure* from *presentation* from *behaviour*, we can straightforwardly convert the self-contained declarative element(s) above into an Unobtrusive CSS and Javascript setup, involving three separated files (*HTML*, *CSS* and *JS*):

### HTML:

```
<object class="html-import-helper" data="/my-html-import.html"></object>
```

or

```
<iframe class="html-import-helper" src="/my-html-import.html"></iframe>
```

### CSS:

```
.html-import-helper {
  display: none;
}
```

### Javascript:

```
const htmlImportHelper = document.getElementsByClassName('html-import-helper')[0];

const importHTML = (e) => {
  e.target.before(e.target.contentDocument.body.children[0]);
  e.target.remove();
}

htmlImportHelper.addEventListener('load', importHTML);
```
_____

## Appendix II : Importing SVG / JSON / Plaintext

Although the  **HTML Import SHIM** is intended primarily to import *HTML*, it will also, just as capably, import *SVG*. *JSON* and *Plaintext*.

The key difference when importing anything that isn't an HTML document is that we should use

```
this.contentDocument.children[0] // instead of this.contentDocument.body.children[0]
```

**e.g.**

Scalable Vector Graphics (SVG):

```
<object data="/my-svg-import-1.svg" style="display: none;" onload="this.before(this.contentDocument.children[0]); this.remove();"></object>
```
or

```
<iframe src="/my-svg-import-2.svg" style="display: none;" onload="this.before(this.contentDocument.children[0]); this.remove();"></iframe>
```

JSON:

```
<object data="/my-json-import-1.json" style="display: none;" onload="this.before(this.contentDocument.children[0]); this.remove();"></object>
```

or

```
<iframe src="/my-json-import-2.json" style="display: none;" onload="this.before(this.contentDocument.children[0]); this.remove();"></iframe>
```

Plaintext:
```
<object data="/my-txt-import-1.txt" style="display: none;" onload="this.before(this.contentDocument.children[0]); this.remove();"></object>
```

or

```
<iframe src="/my-txt-import-2.txt" style="display: none;" onload="this.before(this.contentDocument.children[0]); this.remove();"></iframe>
```
