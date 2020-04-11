# HTML Import SHIM

> **N.B.** The *HTML Import SHIM* was originally brilliantly documented by *Scott Jehl* of *filament group* in April 2019 in:
> - https://www.filamentgroup.com/lab/html-includes/

_______

The *HTML Import **SHIM*** (***S**imple **H**TML **I**mport **M**ethod*) is a client-side technique which enables a web document to import external HTML files (and file snippets) into its own DOM, declaratively, via a single **helper element** (albeit one which contains inlined `style` and `onload` event listener attributes).

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

## Additional Note
