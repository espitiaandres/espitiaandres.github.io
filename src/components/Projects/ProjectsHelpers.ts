import Studyfi from "assets/images/projects/webp/studyfi.webp";
import PenguinPyLogo from "assets/images/projects/webp/penguin_py_logo.webp";
import Porespy from "assets/images/projects/webp/porespy.webp";
import ResearchPaper from "assets/images/projects/webp/research_paper.webp";
import Pokeball from "assets/images/projects/webp/pokeball_icon.webp";
import Udemy from "assets/images/projects/webp/udemy.webp";
import FantasyBasketball from "assets/images/projects/webp/fantasy_basketball.webp";
import GolangImageConversion from "assets/images/projects/webp/golang_image_conversion.webp";
import PythonImageConversion from "assets/images/projects/webp/python_image_conversion.webp";

export interface Achievement {
  header: string;
  links: Link[];
  description: string;
  image?: string;
}

export interface Link {
  url: string;
  name: string;
}

export const achievementsList: readonly Achievement[] = [
	{
		header: "Studyfi",
		links: [
			{
				url: "https://espitiaandres.com/studyfi/",
				name: "See it live",
			},
			{
				url: "https://github.com/espitiaandres/studyfi",
				name: "Frontend",
			},
			{
				url: "https://github.com/espitiaandres/studyfi-backend",
				name: "Backend",
			},
		],
		description:
			"A place to study, listen to music, and chat with friends. Getting work done while listening to music on Spotify on one page. To build this, I used Node, Express, React, Redux, Web sockets, Material UI, and the Spotify API.",
		image: Studyfi,
	},
	{
		header: "penguin_py",
		links: [
			{
				url: "https://pypi.org/project/penguin-py/",
				name: "PyPI",
			},
			{
				url: "https://github.com/espitiaandres/penguin",
				name: "Github",
			},
		],
		description:
			"Penguin is a lightweight, customizable stopwatch ⏱ decorator that helps you determine how long it takes for your functions to run. It supports both synchronous and asynchronous functions.",
		// image: AstronautJellyfish,
		image: PenguinPyLogo,
	},
	{
		header: "Porespy Web App",
		links: [
			{
				url: "https://porespy.org/",
				name: "Package",
			},
			{
				url: "https://github.com/PMEAL/porespy-frontend",
				name: "Frontend",
			},
			{
				url: "https://github.com/PMEAL/porespy-backend",
				name: "Backend",
			},
		],
		description:
			"PoreSpy is a collection of image analysis functions used to extract information from 3D images of porous materials (typically obtained from X-ray tomography). To make this python library into a full-stack web app, I used React, Redux, and Django.",
		image: Porespy,
	},
	{
		header: "Udemy Courses",
		links: [
			{
				url: "https://www.udemy.com/certificate/UC-7d6aa75a-4b43-4ce4-ac8d-6be29fd5ca76/",
				name: "The Modern GraphQL Bootcamp (with Node.js and Apollo)",
			},
			{
				url: "https://www.udemy.com/certificate/UC-fff41949-10a7-46ea-8803-b2a83e27b456/",
				name: "The Complete Node.js Developer Course (3rd Edition)",
			},
			{
				url: "https://www.udemy.com/certificate/UC-1edea84a-855a-4d1d-9f9b-e5c1d48fda7c/",
				name: "The Complete React Developer Course (w/ Hooks and Redux)",
			},
			{
				url: "https://www.udemy.com/certificate/UC-4cf5bf40-8b5b-4917-a0f7-d8a375650fff/",
				name: "Complete Machine Learning & Data Science Bootcamp 2023",
			},
			{
				url: "https://www.udemy.com/certificate/UC-ded2794d-f6e9-41b1-93f5-f1360e4ef8ea/",
				name: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
			},
			{
				url: "https://app.cybrary.it/courses/api/certificate/CC-d9aa958f-e59e-4a68-bd5d-13fa37881507/view",
				name: "End User Cyber Fundamentals",
			},
		],
		description: "Some interesting courses I've completed that I recommend.",
		image: Udemy,
	},
	{
		header: "Research Papers",
		links: [
			{
				url: "https://iopscience.iop.org/article/10.1149/2.0061916jes/meta",
				name: "Abstract",
			},
			{
				url: "https://iopscience.iop.org/article/10.1149/2.0061916jes/pdf",
				name: "PDF",
			},
		],
		description:
			"Electrochemical Formation of Four Al-Li Phases (β-AlLi, Al2Li3, AlLi2−x, Al4Li9) at Intermediate Temperatures. Aluminum electrodes have been considered for use in lithium and lithium ion batteries for nearly four decades. Although the Al-Li equilibrium phase diagram contains multiple Al-Li phases, only β-AlLi forms during room temperature cycling. Al2Li3 can be formed when electrochemically inserting Li at temperatures above 400°C, and Al4Li9 is occasionally detected after extended room temperature cycling. Here, four equilibrium phases of Al-Li (β-AlLi, Al2Li3, AlLi2−x, Al4Li9) were produced by the electrochemical lithiation and delithiation of 1100-series aluminum foil at moderate to intermediate temperatures (30–150°C) using a carbonate-based electrolyte. Phase identification was performed using ex-situ X-ray diffraction and coulometry, after accounting for the consumption of lithium in electrolyte breakdown products. After overcoming an initial nucleation barrier, β-AlLi formed at all temperatures, Al2Li3 and AlLi2−x formed at temperatures above 60°C at moderate rates, and above 35°C at low rates, and Al4Li9 formed at temperatures above 100°C. All expected phases were also encountered during delithiation. The effects of nucleation and diffusion on observed phases and capacities are also discussed.",
		image: ResearchPaper,
	},
	{
		header: "Pokedex",
		links: [
			{
				url: "https://github.com/espitiaandres/pokedex",
				name: "Github",
			},
			{
				url: "https://espitiaandres.com/pokedex/",
				name: "Live",
			},
		],
		description:
			"An interactive pokedex that lets the user catch and remove wild pokemon, and displays their statistics such as type, abilities, move, and so on",
		image: Pokeball,
	},
	{
		header: "Fantasy Basketball MLR Analyzer",
		links: [
			{
				url: "https://github.com/espitiaandres/Multiple-Linear-Regression-Analyzer",
				name: "Github",
			},
		],
		description:
			"A multiple linear regression in C# and Python that analyzes a given set amount of regressors to one dependent variable. Using gnuplot, it also creates plots of each regressor with the dependent variable, and plots of how the regressors changed chronologically at different data points. I used this throughout the 2018-2019 fantasy basketball season and it helped me get 1st place!",
		image: FantasyBasketball,
	},
	{
		header: "Go Image Conversion",
		links: [
			{
				url: "https://github.com/espitiaandres/go-image-conversion",
				name: "Github",
			},
		],
		description:
			"An Image Conversion script that uses goroutines and waitgroups to convert .heic files to .jpg",
		image: GolangImageConversion,
	},
	{
		header: "Python Image Conversion",
		links: [
			{
				url: "https://github.com/espitiaandres/python-image-conversion",
				name: "Github",
			},
		],
		description:
			"An Image Conversion script that uses python's multiprocessing and Wand libraries to convert images to jpg | png.",
		image: PythonImageConversion,
	},
];
