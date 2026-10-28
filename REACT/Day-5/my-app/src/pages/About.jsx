


const About = () => {
  return (

    <>
    <main className="pt-28 px-6 pb-10">

      <div className="max-w-3xl mx-auto bg-white text-black p-6 rounded-xl">

        <h1 className="text-3xl font-bold text-[#21C1F3] mb-6 text-center">
          React Rendering Methods
        </h1>

        <ol className="list-decimal list-inside space-y-4">

          <li>Rendering means displaying React components in the user interface.</li>

          <li>React creates the UI using components.</li>

          <li>Initial rendering happens when a component first appears on the screen.</li>

          <li>Re-rendering happens when a component needs to update its UI.</li>

          <li>State changes can trigger a re-render.</li>

          <li>Props changes can trigger a re-render.</li>

          <li>The <code className="text-[#21C1F3]">useState()</code> hook manages component state.</li>

          <li>The <code className="text-[#21C1F3]">createRoot()</code> method creates a React root.</li>

          <li>The <code className="text-[#21C1F3]">root.render()</code> method renders React elements.</li>

          <li>React updates the DOM when necessary.</li>

          <li>The Virtual DOM helps React determine UI changes.</li>

          <li>React compares the new UI with the previous UI to determine necessary updates.</li>

          <li>Parent components can re-render when their state or props change.</li>

          <li>React can skip some unnecessary renders when optimization techniques are used.</li>

          <li>Rendering keeps the UI synchronized with the component's data.</li>

        </ol>

      </div>

    </main>
    </>
  )
}

export default About
