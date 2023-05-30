import { Button } from "./stories/components/button/Button";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

const code = `import { useState } from 'react';
import { Switch } from '@handlessui/react';
import { BrowserRouter } from 'react-router-dom';

function Example() {
  const [Enabled, setEnabled] = useState(true);

  return (
    <form action="/notification-settings" method="post">
      <switch checked={Enabled} onChange={setEnabled} name="notification-settings">
        { /* ... */ }
      </switch>
      <button>Submit</button>
    </form>
  );
}`;

const customTheme = {
  ...dracula,
  function: {
    color: "#6570c4",
  },
  tag: {
    color: "#646ec3",
  },
  constant: {
    color: "orange",
  },
};

const App = () => {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-40 lg:px-8">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <img
                  className="h-11"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600"
                  alt="Your Company"
                />
                <div className="mt-24 sm:mt-32 lg:mt-16">
                  <button className="inline-flex space-x-6">
                    <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                      What's new
                    </span>
                    <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                      <span>Just shipped v0.1.0</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-gray-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Supercharge your web applications
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button
                    className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    label="Documentation"
                    size="md"
                  />
                  <a
                    href="#"
                    className="text-base font-semibold leading-7 text-gray-900"
                  >
                    View on GitHub <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            ></div>
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-indigo-500 w-98 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                ></div>
                <div className="relative w-full px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                          <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 py-2 px-4 text-white">
                            NotificationSetting.jsx
                          </div>
                          <div className="border-r border-gray-600/10 py-2 px-4">
                            App.jsx
                          </div>
                        </div>
                      </div>
                      <code className="flex-auto relative block text-slate-50 pt-4 pb-4 px-4 overflow-auto">
                        <SyntaxHighlighter
                          language="jsx"
                          style={customTheme}
                          className="code-bg"
                        >
                          {code}
                        </SyntaxHighlighter>
                        {/*<div className="leading-loose">
                          <div>
                            <p>
                              import{" { "}
                              <span className="text-sky-500 ">useState </span>
                              {" } "}from
                              <span className="text-teal-400">'react'</span>
                              import{" { "}
                              <span className="text-sky-500 ">Switch </span>
                              {" } "}from
                              <span className="text-teal-400">
                                '@handlessui/react'
                              </span>
                              import{" { "}
                              <span className="text-sky-500 ">
                                BrowserRouter{" "}
                              </span>
                              {" } "}from
                              <span className="text-teal-400">
                                'react-router-dom'
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="mt-10">
                              <span className="text-purple-500">
                                function Example
                              </span>
                              <span>{"() {"}</span>
                            </p>
                            <div className="ml-10">
                              <p>
                                const {"["}
                                <span className="text-sky-500">
                                  Enabled, setEnabled
                                </span>
                                {"]"} = useState{"("}
                                <span className="text-sky-500">true</span>
                                {")"}
                              </p>
                              <p className="mt-10">
                                <span className="mt-10">return {"("}</span>
                              </p>
                              <div className="ml-10">
                                <span>
                                  {"<"}
                                  <span className="text-purple-500">
                                    form
                                  </span>{" "}
                                  action="/
                                </span>
                                <span className="text-teal-400">
                                  notification-settings
                                </span>
                                " method="
                                <span className="text-teal-400">post</span>"
                                {">"}
                                <div className="ml-10">
                                  {"<"}
                                  <span className="text-purple-500">
                                    Switch
                                  </span>{" "}
                                  checked={"{"}
                                  <span className="text-sky-500">enabled</span>
                                  {"} "}
                                  onChange={"{"}
                                  <span className="text-sky-500">
                                    setEnabled
                                  </span>
                                  {"}"} name="
                                  <span className="text-teal-400">
                                    notification-settings
                                  </span>
                                  "{">"}
                                  <div className="ml-10">
                                    {"{ "}
                                    <span className="text-gray-400">
                                      /* ... */}
                        {/*</span>{" "}
                                    {"}"}
                                  </div>
                                  {"</"}
                                  <span className="text-purple-500">
                                    Switch
                                  </span>
                                  {">"}
                                </div>
                                {"</"}
                                <span className="text-purple-500">form</span>
                                {">"}
                              </div>
                              {")"}
                            </div>
                            <span>{"}"}</span>
                          </div>
                        </div> */}
                      </code>
                      <div className="px-6 pt-6 pb-14">
                        <p className="text-white   "></p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
      </div>
    </div>
  );
};

export default App;
