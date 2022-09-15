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
