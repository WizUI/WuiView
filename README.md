#WuiView
[![Circle CI](https://circleci.com/gh/WizUI/WuiView/tree/master.svg?style=svg)](https://circleci.com/gh/WizUI/WuiView/tree/master)

## What it is

This functions is basically an HTML div, but allows for the created, opening, opened, closing and
closed events. On each of these events, the game programmer can perform logic related to loading
data, binding other events, animation or other game events. Inherits from [WuiDom].

## Using the WuiView component

A WuiView often contains other [WuiDom] and [WizUI] elements, and is usually a container element, used
for display, hide and show logic.
It can interact with [NavTree](https://github.com/Wizcorp/NavTree) to enable smooth navigation
on a single page applications.

## Methods

### create

The create method is called when a view is being created.
This method is called by NavTree when a WuiView is registered.
It includes optional parameters, specified during the item registration
process.

Calling the method:

```javascript
newView.create(options, viewName);
```

These options can be used to specify dynamic view behavior, but both parameters should be
considered optional.

### open

The open method can be used to show a WuiView.

The views are automatically scrolled into view,
so the user should not worry about trying to do screen logic.

Calling the method:

```javascript
newView.open();
```

### close

The close method can be used to hide a WuiView.

Calling the method:

```javascript
newView.close();
```

### disableScrolling

The disableScrolling method can be used to disable scrolling events on a WuiView.

Calling the method:

```javascript
newView.disableScrolling();
```

### enableScrolling

The enableScrolling method can be used to enable scrolling events on a WuiView. By default,
scrolling events are enabled on a WuiView.

Calling the method:

```javascript
newView.enableScrolling();
```

## Events (from [NavTree](https://github.com/Wizcorp/NavTree))

### created

The created event is called when the WuiView's create function has completed, and after it is
registered in a NavTree.

### opening

The `opening` event is called when the WuiView's open method is called,
and it is in the process of being transitioned to.

### opened

The `opened` event is called when the WuiView is finally on screen.

### closing

The `closing` event is called when the WuiView close method is called.
Can be used to trigger closing animation.

### closed

The closed event is called when the WuiView's closed method is called.
Destructor logic should be placed here.

### How to use WuiView

```javascript

function SampleView() {
	WuiView.call(this);

	this.once('created', function () {
		// Load player data
		// Create content
		// Setup button events
	});

	this.on('opening', function () {
		// Start animations
		// Load data
		// Update views with recent data
	});

	this.on('closed', function () {
		// Pause animations
		// Set timeouts
		// Free resources
		// Invalidate caches, if needed
	});

}

inherit(SampleView, WuiView);
module.exports = SampleView;
```

[WuiDom]: http://github.com/WizUI/WuiDom
[WizUI]: http://wizui.github.io/
