# IOS scroll bug with fixed positioned contents

## _Proplem_

When we have overlay or modals which have position fixed, we should be able to scroll if content does not fit screen. And you scroll fixed positioned content, the body below the overlay should not scroll.

## _Solution_

Typical solution for this it to disable scroll on body when fixed-positioned overlay is opened. This solution works fine for desktops, androids but there seem to have some issues with getting it right with IOS safari.

---

\
This repo has some examples in reactjs using different solutions but none worked for me so far.

### `npm start`

Runs the app in the development and open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Recordings

### 1. Without body scroll lock

Video Link: https://www.loom.com/share/a067864da0d84f59bf12df936cce7183

Notes to take from video.
- I could reach to bottom but could not click close button because body kept scrolling
- Before I open the overlay, body content was on topmost. But after closing, it was on bottommost

### 2. Using `useLockBodyScroll` from [react-use](https://github.com/streamich/react-use)

Video Link: https://www.loom.com/share/18d82e79e14944a897432c578ac4cbf0

Notes to take from video recording
- Scroll was locked for both body and overlay when overlay is opened but only body scroll should be locked

### 3. Using `useLockBodyScroll` from [usehooks](https://usehooks.com/)

Video Link: https://www.loom.com/share/f0872dcfd8c9431bac1e6f03adf0a3df

Notes to take from video recording
- I opened overlay from bottommost `open` button. So the body conent should stay here when I come back from overlay.
- I was able to reach to the overlay bottom and click close button 
> I could not click close button in first example, when body scroll was not locked)
- Despite body scroll lock, I was able to scroll body up after scrolling up overlay. As a result, I was seeing topmost body content instead of bottommost where I opened overlay.

Conclusion, neither of 2 solutions above did not work as expected. 

## Test this locally with your ios phone

### Method 1:

- Use [localtunnel](https://www.npmjs.com/package/localtunnel) using command below \
  `npx localtunnel --port 3000`
- Copy the generated link and paste it in your ios safari

> hot reloading did not work very well for me so I used `ngrok` instead

### Method 2:

- Set up [ngrok](https://ngrok.com/) and access token on your machine
- Generate tunnel link using `{PATH_TO_NGROK}/ngrok http 3000`
- Copy the generated link and paste it in your ios safari

> `ngrok http 3000` if ngrok is located in current directtory



### OS details
Iphone 13 pro \
IOS version 15.1 \
Safari browser \
