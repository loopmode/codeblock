import raw from "raw.macro";
import React from "react";

import Codeblock, { Code } from "@loopmode/codeblock";

const OwnSource = raw("./inline.js");

export default function InlinePage() {
  return (
    <div>
      <h2>Inline code</h2>
      <section>
        <h3>Simple</h3>
        <h4>Code:</h4>
        <Codeblock language="jsx">{`<Codeblock>const foo = "foo";</Codeblock>`}</Codeblock>
        <h4>Result:</h4>
        <Codeblock>const foo = "foo";</Codeblock>
      </section>
      <section>
        <h3>Multiline</h3>
        <p>
          For <Code>inline</Code>multiline strings you can use a string literal.
          However, you will have to escape backticks in the content.
        </p>

        <h4>Code:</h4>
        <Codeblock language="jsx">
          {`<Codeblock>{\`const foo = "foo";
    class Bar {}
    const baz = new Bar(foo);
\`}</Codeblock>`}
        </Codeblock>
        <h4>Result:</h4>
        <Codeblock>{`const foo = "foo";
class Bar {}
const baz = new Bar(foo);
`}</Codeblock>
      </section>
      <h3>Source of this page</h3>
      <p>
        The source of this page is included as a string using{" "}
        <code>raw.macro</code>
      </p>
      <Codeblock language="jsx">{OwnSource}</Codeblock>
    </div>
  );
}
