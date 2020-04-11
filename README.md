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

 - `style="display: none;"` <= Because there is no reason for the helper element to ever display in the viewport
 - `onload="this.before(this.contentDocument.body.children[0]); this.remove();"` <= 
