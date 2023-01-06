import { useRef, useState, useEffect } from "react";
import { toPng } from "html-to-image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
	dark,
	a11yDark,
	atomDark,
	coldarkDark,
	dracula,
	duotoneDark,
	funky,
	oneDark,
	pojoaque,
	xonokai,
	vscDarkPlus,
	twilight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const Main = () => {
	const themesStr = [
		"dark",
		"a11yDark",
		"atomDark",
		"coldarkDark",
		"dracula",
		"duotoneDark",
		"funky",
		"oneDark",
		"pojoaque",
		"xonokai",
		"vscDarkPlus",
		"twilight",
	];
	const themes = [
		dark,
		a11yDark,
		atomDark,
		coldarkDark,
		dracula,
		duotoneDark,
		funky,
		oneDark,
		pojoaque,
		xonokai,
		vscDarkPlus,
		twilight,
	];
	const toImage = useRef(null);

	const [langServer, setLangServer] = useState("python");
	const [code, setCode] = useState("");
	const [width, setWidth] = useState(null);
	const [theme, setTheme] = useState(themes[0]);
	const inputRef = useRef(null);

	useEffect(() => {
		console.log(langServer);
	}, [langServer]);

	const onSaveClick = () => {
		if (code === "") {
			return;
		}

		toPng(toImage.current, { cacheBust: true })
			.then((dataUrl) => {
				const link = document.createElement("a");
				link.download = "code image.png";
				link.href = dataUrl;
				link.click();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<main className="container mx-auto my-8 space-y-8">
			<section className="flex justify-between flex-col gap-4 sm:flex-row p-4 lg:p-0">
				<div className="flex gap-2 flex-col md:flex-row">
					<select
						defaultValue={"python"}
						onChange={(e) => {
							setLangServer(() => e.target.value);
						}}
						className="text-slate-100 bg-slate-900 border select-none outline-none px-4 py-2 rounded appearance-none
						scrollbar-thin scrollbar-thumb-blue-600"
					>
						<option
							value={"default"}
							disabled
						>
							Language Support
						</option>
						<option value="python">Python</option>
						<option value="javascript">JavaScript</option>
						<option value="typescript">TypeScript</option>
						<option value="HTML">HTML</option>
						<option value="django">Django</option>
						<option value="json">JSON</option>
						<option value="xml">XML</option>
						<option value="sql">SQL</option>
						<option value="scss">SCSS</option>
						<option value="css">CSS</option>
						<option value="php">PHP</option>
						<option value="lua">Lua</option>
						<option value="livescript">LiveScript</option>
						<option value="markdown">Markdown</option>
						<option value="perl">Perl</option>
						<option value="ruby">Ruby</option>
						<option value="java">Java</option>
						<option value="c">C</option>
						<option value="r">R</option>
						<option value="c#">C#</option>
						<option value="go">Go</option>
						<option value="rust">Rust</option>
						<option value="swift">Swift</option>
						<option value="kotlin">Kotlin</option>
					</select>
					<select
						defaultValue={"default"}
						onChange={(e) => setTheme(themes[e.target.value])}
						className="appearance-none rounded px-4 py-2 text-slate-100 bg-slate-900 border select-none outline-none cursor-pointer"
					>
						<option
							value={"default"}
							disabled
						>
							Switch theme
						</option>
						{themesStr.map((item, index) => (
							<option
								key={item}
								value={index}
							>
								{item}
							</option>
						))}
					</select>
				</div>
				<button
					onClick={onSaveClick}
					className={`px-4 py-2 rounded select-none ${
						code === "" ? "bg-slate-600 cursor-not-allowed" : "bg-blue-600"
					}`}
				>
					Save Image
				</button>
			</section>

			<section
				className={`text-slate-900 flex gap-4 ${
					width > 738 && "lg:flex-col"
				} flex-col p-4 lg:p-0 lg:flex-row scrollbar-thin scrollbar-thumb-blue-600`}
			>
				<textarea
					// ref={inputRef}
					placeholder="Paste your code here..."
					onChange={(e) => {
						setCode(() => e.target.value);
						setWidth(toImage.current.offsetWidth);
					}}
					className="w-full appearance-none resize-none bg-slate-100 rounded outline-none p-8 scrollbar-thin"
				></textarea>
				<div
					ref={toImage}
					className="w-full rounded bg-gradient-to-tr from-blue-100 via-blue-50 to-blue-100 p-6"
				>
					<div className="bg-black rounded w-full shadow-lg">
						<div className="[&>*]:w-3 [&>*]:h-3 [&>*]:rounded-full flex gap-2 p-6 rounded">
							<div className="bg-red-500"></div>
							<div className="bg-amber-500"></div>
							<div className="bg-green-500"></div>
						</div>
						<div className="p-4">
							<SyntaxHighlighter
								style={theme}
								language={langServer}
							>
								{code}
							</SyntaxHighlighter>
						</div>
					</div>
					<p className="text-slate-500 text-center mt-4 text-sm">
						https://codeimager.netlify.app
					</p>
				</div>
			</section>
		</main>
	);
};

export default Main;
