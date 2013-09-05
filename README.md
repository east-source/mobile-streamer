mobile-streamer
===============

A simple non-flash live streaming solution for mobile devices.
Provided that you are streaming an mp4 through **rtmp** protocol, all you need to do is run a **FFMPEG** process that
splits the stream into sequential images at a high rate (~15 fps) which we expose via an url.
Then the images are drawn on an HTML5 canvas at a browser-supported interval.

###Features
* requires no plugins
* usable on any device and platform
* avoids restrictions like iOS auto-play or full-screen
