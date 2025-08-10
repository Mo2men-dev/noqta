# Themes

---

## Introduction

Noqta supports a theming system that allows you to customize the appearance of the editor to match your brand or personal preferences. This guide will walk you through the process of creating and using themes in Noqta.

## Default Themes

Noqta comes with a set of default themes that you can use out of the box. These themes provide a variety of styles to choose from, making it easy to find a look that suits your needs.

Here is how to use a default theme in your Noqta editor:

```tsx
import { NoqtaEditor } from "noqta";
import { darkTheme } from "noqta/themes";

export default function EditorPage() {
	return <NoqtaEditor theme={darkTheme} />;
}
```

This will render the Noqta editor with the dark theme applied.

> If there are no theme specified, Noqta will use the default dark theme.

## Custom Themes

You can create your own custom themes by defining a theme object that specifies the colors and styles you want to apply. A theme object should include properties for various UI elements, such as the background, text color, and other stylistic choices.
Here is an example of how to create a custom theme:

```tsx
import { Theme } from "noqta";

const lightTheme: Theme = {
	background: {
		primary: "#eee",
		hover: "#ddd",
		active: "#ccc",
	},
	text: {
		primary: "#000",
		secondary: "#304fcb",
	},
	border: {
		primary: "#304fcb",
		hover: "#9eb1ff",
		active: "#fff",
	},
	shadow: "#304fcb92",
};

export default lightTheme;
```

This `lightTheme` object defines colors for the primary background, text, border, and shadow. You can customize these values to fit your design requirements.

## Applying Themes

To apply a custom theme to your Noqta editor, simply pass the theme object as a prop when rendering the `NoqtaEditor` component:

```tsx
import NoqtaEditor from "noqta";
import lightTheme from "./path/to/lightTheme";

export default function EditorPage() {
	return <NoqtaEditor theme={lightTheme} />;
}
```

This will render the Noqta editor with your custom theme applied.
