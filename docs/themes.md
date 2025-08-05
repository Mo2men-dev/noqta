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
import { Theme, StyleTokens } from "noqta";

const colors: StyleTokens = {
	light: {
		colors: {
			primary: "#2563eb",
			secondary: "#f97316",
			background: "#f9fafb",
			text: "#111827",
		},
		buttons: {
			background: "#2563eb",
			text: "#ffffff",
			border: "#2563eb",
			hover: "#1d4ed8",
		},
		table: {
			border: "#333333",
			text: "#111827",
			cellBackground: "#f3f4f6",
			headerBackground: "#e5e7eb",
		},
	},
};

const customTheme: Theme = {
	editor: {
		base: {
			backgroundColor: colors.light.colors.background,
			color: colors.light.colors.text,
		},
	},
	bubbleMenu: {
		base: {
			backgroundColor: colors.light.colors.background,
			color: colors.light.colors.text,
			borderColor: colors.light.colors.primary,
		},
	},
	buttons: {
		base: {
			backgroundColor: colors.light.buttons.background,
			color: colors.light.buttons.text,
			borderColor: colors.light.buttons.border,
		},
		hover: {
			backgroundColor: colors.light.buttons.hover,
		},
	},
	table: {
		td: {
			backgroundColor: colors.light.table.cellBackground,
			borderColor: colors.light.table.border,
		},
		th: {
			backgroundColor: colors.light.table.headerBackground,
			borderColor: colors.light.table.border,
		},
		table: {
			color: colors.light.table.text,
			borderColor: colors.light.table.border,
		},
	},
};
```

This custom theme defines colors for the editor, bubble menu, buttons, and table elements. You can adjust the colors and styles to fit your design requirements.

## Applying Themes

To apply a custom theme to your Noqta editor, simply pass the theme object as a prop when rendering the `NoqtaEditor` component:

```tsx
import customTheme from "./path/to/customTheme";
import NoqtaEditor from "noqta";

export default function EditorPage() {
	return <NoqtaEditor theme={customTheme} />;
}
```

This will render the Noqta editor with your custom theme applied.
