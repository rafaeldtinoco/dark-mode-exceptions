# Dark Mode Exceptions

Chrome's built-in "Auto Dark Mode for Web Contents" feature (`chrome://flags`) is one of the best dark-mode "extensions" for google chrome (and derivatives). However there is one small problem: there is no quick **opt-out** from dark mode once it is enabled. **Dark Mode Exceptions** is a simple extension that allows you to add exceptions to the dark mode.

With this extension you might:

- Keep dark mode on most sites by default (once you enable **Auto Dark Mode for Web Contents** feature).
- Exclude websites from chrome's dark mode in **one click**.
- View sites in light-mode, despite chrome's dark-mode settings.
- Allow some sites to use their own dark theme, despite chrome's dark-mode settings.
- Use [Dark Reader](https://darkreader.org/) on excluded sites (as an alternative dark mode on broken sites).
- Toggle between modes instantly.

> The extension is fully open-source and does not collect any user data.

## Why Use This Extension?

Chrome's built-in dark mode often produces inconsistent results across different websites. Dark Mode Exceptions gives you control over which sites use dark mode, ensuring the best viewing experience for each website you visit.

## Screenshots

<img src="images/one.png" width="25%" height="25%" alt="One">
<img src="images/two.png" width="25%" height="25%" alt="Two">
<img src="images/three.png" width="25%" height="25%" alt="Three">

## How It Works

1. **Enable Chrome's Auto Dark Mode:**
   - Go to `chrome://flags/#enable-force-dark`
   - Set to `Enabled with Selective inversion of non-image elements`
   - Restart Chrome

2. **Install Extension:**
   - Download/clone repository (or download the zip file).
   - Go to `chrome://extensions/`
   - Enable **Developer mode**
   - Click **Load unpacked** and select extension folder

3. **Exclude a Domain:**
   - Visit website
   - Click extension icon
   - Toggle domain
   - Site reloads in light theme

4. **(Optional) Use with Dark Reader:**
   - Install [Dark Reader](https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh)
   - Exclude site using this extension
   - Apply Dark Reader for better dark mode

## Technical Details

- Uses Chrome's `chrome.storage.sync` to remember your excluded domains.
- Injects a small CSS snippet to force light mode on excluded sites.
- No tracking, no ads, open source.

## Contributing

Pull requests and suggestions are welcome! If you find a bug or have an idea, open an issue or PR.

## License

Apache 2.0

## Privacy

This extension does not collect any user data as defined in the categories above. It only stores a user-specified list of website domains in chrome.storage.sync to toggle dark/light mode, and accesses the current tab's hostname to apply these settings. No personal data, web history, or user activity is collected.
