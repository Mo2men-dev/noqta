const docsList = [
	{
		title: "Getting Started",
		slug: "getting-started",
		headers: ["What is Noqta", "Installation", "Usage"],
		prev: null,
		next: { title: "Extensions", slug: "extensions" },
	},
	{
		title: "Extensions",
		slug: "extensions",
		headers: ["Introduction", "Default Extensions", "Custom Extensions"],
		prev: { title: "Getting Started", slug: "getting-started" },
		next: { title: "Themes", slug: "themes" },
	},
	{
		title: "Themes",
		slug: "themes",
		headers: ["Introduction", "Default Themes", "Custom Themes", "Applying Themes"],
		prev: { title: "Extensions", slug: "extensions" },
		next: null,
	},
	{
		title: "API Reference",
		slug: "api",
		headers: [],
		prev: { title: "Themes", slug: "themes" },
		next: null,
	},
];

export default docsList;
