import React from 'react'

const Home = () => {
  return (
    <>
    
    
      <main class="pt-28 px-6 pb-10">

        <div class="max-w-3xl mx-auto bg-[#ffffff] text-black p-6 rounded-xl">

            <h1 class="text-3xl font-bold text-[#21C1F3] mb-6 text-center">
                React Router DOM
            </h1>

            <ol class="list-decimal list-inside space-y-4">

                <li>React Router DOM is a library used for navigation in React applications.</li>

                <li>Install it using <code class="text-[#21C1F3]">npm install react-router-dom</code>.</li>

                <li>It allows users to move between pages without a full page reload.</li>

                <li>BrowserRouter enables routing in a web application.</li>

                <li>Routes groups the route definitions.</li>

                <li>Route connects a URL path to a component.</li>

                <li>Example: <code class="text-[#21C1F3]">path="/about"</code> displays the About component.</li>

                <li>Link is used to navigate between routes.</li>

                <li>NavLink can style the currently active route.</li>

                <li>useNavigate lets you navigate programmatically using JavaScript.</li>

                <li>useParams reads dynamic values from URL parameters.</li>

                <li>Nested routes allow pages to appear inside a shared layout.</li>

                <li>A 404 page handles URLs that do not match your routes.</li>

                <li>Home, About, and Contact can each have their own route.</li>

            </ol>

        </div>

    </main>

    
    
    </>
  )
}

export default Home