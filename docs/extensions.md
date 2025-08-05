# Extensions

---

## Introduction

Noqta's architecture is designed to be extensible, allowing you to add custom extensions to enhance the editor's functionality. This guide will walk you through the process of creating and using extensions in Noqta.

## Default Extensions

Noqta comes with a group of default extensions much like the [TitTap Starter Kit](https://tiptap.dev/docs/editor/extensions/functionality/starterkit), But with some additional features and improvements. These extensions provide a solid foundation for building rich text editing capabilities.

Noqta gives you full control over these extensions, allowing you to enable, disable or configure them as needed. You can see the full list of default extensions in the [API Reference](/docs/api#DefaultExtensions).

Here is how to use the default extensions in your Noqta editor:

```tsx
import NoqtaEditor from "noqta";

export default function EditorPage() {
	return <NoqtaEditor defaultExtensionsConfig={{ smartTyping: false, link: { autolink: true } }} />;
}
```

This will render the Noqta editor with the default extensions enabled, except for the `smartTyping` extension which is disabled, and the `link` extension which is configured to automatically link URLs.

## Custom Extensions

As well as the default extensions, you can create your own custom extensions to add specific functionality to the editor. Custom extensions can be used to implement features like custom formatting, additional input rules, or even entirely new editor commands.

First you need to create a custom Tiptap extension. You can follow the [Tiptap documentation](https://tiptap.dev/docs/editor/extensions/custom-extensions) to create your own extension. Once you have created your custom extension, you can use it in Noqta like this:

```tsx
import { MyCustomExtension } from "./MyCustomExtension";
import NoqtaEditor from "noqta";

export default function EditorPage() {
	return <NoqtaEditor extensions={[MyCustomExtension]} />;
}
```

This will render the Noqta editor with your custom extension enabled.
