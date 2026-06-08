# cross-origin-injector

A browser extension that injects custom CSS and JavaScript into websites, including cross-origin pages.

## Features

- Inject custom CSS into any website
- Inject custom JavaScript into any website
- Works across different origins
- Lightweight and easy to use
- No build process required

## Installation

1. Download or clone this repository.

```bash
git clone https://github.com/jaaybender/cross-origin-injector.git
```

2. Open your browser's extensions page:
   - Chrome: `chrome://extensions`
   - Edge: `edge://extensions`

3. Click **Developer mode** in the top-right corner.

4. Click **Load unpacked**.

5. Select the project folder.

6. The extension is now installed and ready to use.

## Usage

1. Open the extension.
2. Enter your custom CSS and/or JavaScript.
3. Specify the target website.
4. Save your changes.
5. Refresh the target page to apply the injected code.

## Sample Custom CSS

```css
/* Change page background */
body {
    background: #f5f5f5;
}

/* Style headings */
h1 {
    color: #2563eb;
}
```

## Sample JavaScript

```javascript
// Add a floating message
const message = document.createElement('div');

message.textContent = 'Hello from CrossInject!';
message.style.position = 'fixed';
message.style.top = '20px';
message.style.right = '20px';
message.style.padding = '10px';
message.style.background = '#2563eb';
message.style.color = '#fff';

document.body.appendChild(message);
```

## Notes

- Some websites may have security restrictions that limit certain JavaScript functionality.
- Reload the page after updating your CSS or JavaScript.
- Use responsibly and only on websites you are authorized to modify.

## License

MIT License
