import { Component, createSignal, For } from "solid-js";
import numberToWordsAz from 'number-to-words-az'
import BG_PNG from './assets/bg.png'
import _ from 'lodash'

const App: Component = () => {
  const [number, setNumber] = createSignal("")
  const words = () => numberToWordsAz.readNumber(number()) as string
  const touched = () => words().length > 0

  return (
      <div class={`relative h-screen bg-base-200 bg-cover bg-[url('${BG_PNG}')]`}>
        <div class="absolute top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2 hero-content text-center">
          <div class="w-[450px] flex flex-col gap-10 items-stretch">
            <h1 class="text-6xl font-bold">
              <span class="title-word title-word-4">Num</span>
              <span class="title-word title-word-3">baz</span>
            </h1>
            <input
              type="text"
              class="input input-bordered"
              placeholder="Nömrəni bura daxil edin"
              spellcheck={false}
              value={number()}
              oninput={evt => setNumber(evt.currentTarget.value)}
            />
            <code class="h-2 w-full wrap text-left text-gray leading-relaxed" classList={{ 'grid place-items-center': !touched()}}>
              {touched() ? words().split(" ").map(s => <span class={`title-word title-word-${_.random(1,4)}`}> {s}</span>) : <div class="text-xs text-accent-focus">Hələlik heç nə yoxdur</div> }
            </code>
          </div>
        </div>
      </div>
  );
};

export default App;
