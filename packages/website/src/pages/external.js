import React from "react";

import Codeblock from "@loopmode/codeblock";

export default function ExternalSourcePage() {
  return (
    <div>
      <h2>External content</h2>

      <section>
        <p>
          Set the <code>src</code> prop to load and display an external file.
        </p>
        <h4>Code:</h4>
        <Codeblock language="jsx">
          {`<Codeblock src="https://raw.githubusercontent.com/facebook/react/master/packages/react/src/ReactElement.js" />`}
        </Codeblock>
        <h4>Result:</h4>
        <Codeblock src="https://raw.githubusercontent.com/facebook/react/master/packages/react/src/ReactElement.js" />
      </section>
    </div>
  );
}
