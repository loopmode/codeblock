import raw from "raw.macro";
import React from "react";

import Markdown from "../components/Markdown";
import Codeblock from "@loopmode/codeblock";

const MarkdownSource = raw("../components/Markdown/Markdown.js");
const ReadmeSource = raw("../../../codeblock/README.md");

const OwnSource = raw("./markdown.js");

export default function UsePrismHookPage() {
  return (
    <div>
      <h2>
        The <code>usePrism</code> hook
      </h2>
      <p>
        This example showcases how to use the hook instead of the component. The{" "}
        <code>Markdown</code> component uses the <code>usePrism</code> hook to
        apply highlighting to any code contained in the markdown.
      </p>
      <h3>The code</h3>
      <p>
        This is the code of the <code>Markdown.js</code> component:
      </p>
      <Codeblock language="jsx">{MarkdownSource}</Codeblock>

      <p>
        Here is the <code>Markdown</code> component in action, displaying the{" "}
        <code>README.md</code> file, which contains codeblocks defined with
        triple backticks.
      </p>
      <Markdown>{ReadmeSource}</Markdown>

      <h3>Source of this page</h3>
      <Codeblock language="jsx">{OwnSource}</Codeblock>
    </div>
  );
}
