<div align="center">

<img src="./extension/img/icon-128.png" alt="QuickRead Logo" width="120"/>

# **QuickRead**
### ✨ Summarize with Gemini ✨

_Enhance your reading experience with instant summaries, translation, and improved readability._

</div>

---

## About QuickRead

QuickRead is a Chrome extension designed to enhance your reading experience by providing tools for summarizing, translating, and improving the readability of web content.

## Features

- **Summarization**: Quickly summarize web pages for a concise overview.
- **Translation**: Translate content into multiple languages.
- **Improved Readability**: Clean up web pages for distraction-free reading.
- **PDF Support**: View and process PDF files directly in the browser.
- **Follow-up Questions**: Ask more questions for better understanding.

## Project Structure

```
QuickRead/
├── .gitignore
├── eslint.config.mjs
├── extension/
│   ├── manifest.json          # Extension manifest file
│   ├── options.html           # Options page for the extension
│   ├── options.js             # JavaScript for the options page
│   ├── popup.html             # Popup UI for the extension
│   ├── popup.js               # JavaScript for the popup
│   ├── results.html           # Results page for displaying summaries
│   ├── results.js             # JavaScript for the results page
│   ├── service-worker.js      # Background service worker
│   ├── templates.html         # HTML templates for dynamic content
│   ├── utils.js               # Utility functions
│   ├── _locales/              # Localization files
│   │   └── en/
│   │       └── messages.json  # English localization messages
│   ├── css/                   # Stylesheets
│   │   ├── common.css         # Common styles
│   │   └── new.min.css        # Minified styles
│   ├── img/                   # Images and icons
│   │   ├── arrow.png
│   │   └── icon-128.png
│   ├── lib/                   # Third-party libraries
│       ├── marked.umd.min.js  # Markdown parser
│       ├── pdf.mjs            # PDF processing library
│       ├── pdf.worker.mjs     # PDF worker script
│       ├── purify.min.js      # DOM sanitization library
│       └── Readability.min.js # Readability library
├── utils/
│   ├── description/
│   │   ├── description_en.txt # Project description in English
│   │   ├── requirements.txt   # Requirements for the project
│   │   └── translate.py       # Script for translation tasks
```

## Installation

1. Download the zip folder of the repo and unzip it.
2. Load the extension in your browser:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" in the top-right corner.
   - Click "Load unpacked" and select the `extension` folder.
3. Set up the Proxy Server:
   - Clone the proxy server repository:
     ```sh
     git clone https://github.com/anshi05/QuickRead-ProxyServer.git
     ```
   - Navigate to the proxy server directory:
     ```sh
     cd ProxyServer
     ```
   - Install dependencies:
     ```sh
     npm install
     ```
   - Start the server:
     ```sh
     node server.js
     ```
   - Ensure the proxy server is running in the background while using the extension.
  

## Usage

1. Configure settings in the options page and add your gemini api key.


   ![image](https://github.com/user-attachments/assets/d594b6e0-41c7-4a9c-8b00-ba5c6c392d62)

3. Click on the QuickRead icon in your extensions.
4. Use the popup to summarize, translate, or clean up web pages.


   ![image](https://github.com/user-attachments/assets/16f097a5-1519-4419-b2d6-4ec06276cf78)



## Development

### Prerequisites

- Node.js and npm installed on your system.


## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [marked.js](https://github.com/markedjs/marked) for Markdown parsing.
- [Readability.js](https://github.com/mozilla/readability) for improving web page readability.
- [DOMPurify](https://github.com/cure53/DOMPurify) for sanitizing HTML content.
- [PDF.js](https://github.com/mozilla/pdf.js) for PDF rendering.

---
Happy reading with **QuickRead**!
