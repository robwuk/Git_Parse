var defaultText = "# Welcome to my React Markdown Previewer!\n\n";
defaultText += "## This is a sub-heading...\n";
defaultText += "### And here's some other cool stuff:\n\n";
defaultText += "Heres some code, `<div></div>`, between 2 backticks.\n";
defaultText += "```\n";
defaultText += "// this is multi-line code:\n\n";
defaultText += "function anotherExample(firstLine, lastLine) {\n";
defaultText += "  if (firstLine == '```' && lastLine == '```') {\n";
defaultText += "    return multiLineCode;\n";
defaultText += "  }\n";
defaultText += "}\n";
defaultText += "```\n\n";
defaultText += "You can also make text **bold**... whoa!\n";
defaultText += "Or _italic_.\n";
defaultText += "Or... wait for it... **_both!_**\n";
defaultText += "And feel free to go crazy ~~crossing stuff out~~.\n\n";

defaultText += "There's also [links](https://www.freecodecamp.com), and\n";
defaultText += "> Block Quotes!\n";

defaultText += "And if you want to get really crazy, even tables:\n";

defaultText += "Wild Header | Crazy Header | Another Header?\n";
defaultText += "------------ | ------------- | -------------\n";
defaultText += "Your content can | be here, and it | can be here....\n";
defaultText += "And here. | Okay. | I think we get it.\n\n";

defaultText += "- And of course there are lists.\n";
defaultText += "  - Some are bulleted.\n";
defaultText += "     - With different indentation levels.\n";
defaultText += "        - That look like this.\n\n";


defaultText += "1. And there are numbererd lists too.\n";
defaultText += "1. Use just 1s if you want!\n";
defaultText += "1. But the list goes on...\n";
defaultText += "- Even if you use dashes or asterisks.\n";
defaultText += "* And last but not least, let's not forget embedded images:\n\n";

defaultText += "![React Logo w/ Text](https://goo.gl/Umyytc)";
marked.setOptions({
  breaks: true,
});

function textUpdate() {
  console.log("here");
  var enteredText= document.getElementById("editor").value;
  document.getElementById("preview").innerHTML = marked(enteredText);
}

function setDefaults(){
  document.getElementById("editor").value = defaultText;
  document.getElementById("preview").innerHTML = marked(defaultText);
}

window.onload=setDefaults();
