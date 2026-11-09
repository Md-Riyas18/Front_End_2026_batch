
import rain from '../assets/day2/morning1.jpg'
import rain1 from '../assets/day2/morning2.jpg'
import rain2 from '../assets/day2/morning3.jpg'
import food from '../assets/day2/food.jpg'
import work from '../assets/day2/work.jpg'
import work2 from '../assets/day2/work2.jpg'
import outside from '../assets/day2/outside1.jpg'
import outside1 from '../assets/day2/outside2.jpg'
import outside2 from '../assets/day2/outside3.jpg'
import metro from '../assets/day2/metro.jpg'
import metro2 from '../assets/day2/aladhur.jpg'
import movie from '../assets/day2/movie.jpg'
import cracker from '../assets/day2/cracker.jpg'
import cracker1 from '../assets/day2/cracker1.jpg'
import coffee from '../assets/day2/coffee.jpg'
import coffee1 from '../assets/day2/coffee1.jpg'

import { Link } from 'react-router-dom'


import StoryCard from '../components/StoryCard'


// Reusable Story Card


const DayTwo = () => {

  return ( <>
    <div className="min-h-screen bg-[#FFF5E6] pt-36 pb-16 px-4 md:px-8">


    <div className="flex justify-between items-center pt-6  border-orange-200">

  <Link
    to="/day-1"
    className="bg-gray-800 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-900 transition-all duration-300"
  >
    ← Previous Day
  </Link>

  <Link
    to="/day-3"
    className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-all duration-300"
  >
    Next Day →
  </Link>

</div>
      <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-12">

          <p className="text-orange-600 uppercase tracking-[5px] font-bold text-sm">
            My Diwali Memories
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-4">
            Diwail <span className="text-orange-500">Day</span>
          </h1>

          <p className="text-gray-500 text-base md:text-lg mt-4">
            A day full of unexpected moments and beautiful memories.
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-16 h-[2px] bg-orange-300"></div>
            <span className="text-2xl">💥</span>
            <div className="w-16 h-[2px] bg-orange-300"></div>
          </div>

        </div>


       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start content-start">


         
          <StoryCard
            number="01"
            title="Diwail Morning"
            images={[
              { src: rain, alt: 'Morning rain' },
              { src: rain1, alt: 'Rainy weather' },
              { src: rain2, alt: 'Rain outside' }
            ]}
          >
           Today is Deepavali. Like yesterday, it rained continuously today as well. I woke up at 5:30 a.m. After waking up and finishing my prayers, 
           I looked outside around 6:30 a.m., and it was still raining.
          </StoryCard>


          
          <StoryCard
            number="02"
            title="Morning Food"
            images={[
              { src: food, alt: 'Morning food' }
            ]}
          >
            It was raining continuously without stopping. Then I used my phone for a while. After that, I went downstairs at 8:00 to see what was there for breakfast. 
            I saw poori, ate it, and then came back upstairs.
          </StoryCard>


         
          <div className="md:col-span-2">
            <StoryCard
              number="03"
              title="Project Work"
              images={[
                { src: work, alt: 'work1' },
                { src: work2, alt: 'work2' }
              ]}
            >
              After coming up, I decided to look at the project work, 
              so I was looking at the project work given by the sir.
            </StoryCard>
          </div>


          <StoryCard
            number="04"
            title="Get-ready To Go Broo House For celebrating Diwali"
            images={[
              { src: outside, alt: "outside1" },
              { src: outside1, alt: "outside2" },
              { src: outside2, alt: "outside3" }
            ]}
          >
            After that, my brother sent me a message saying, "Leave at 10:00. Take the metro from Vadapalani and get off at the airport. Once you get off, call me." He invited me to his house to celebrate Diwali. So, I got ready and was about to leave when it started raining heavily. 
            I took an umbrella and headed to the Vadapalani metro station.
          </StoryCard>


         
          <StoryCard
            number="05"
            title="Metro Vadapalani-->Air-Port"
            images={[
              { src: metro, alt: 'metro1' },
              { src: metro2, alt: 'metro1' }
            ]}
          >
            I came to Vadapalani metro while it was drizzling. From there, 
            I took the metro, got off at Alandur, and from Alandur, I came to the airport.
          </StoryCard>


         
          <StoryCard
            number="06"
            title="Movie Time"
            images={[
              { src: movie, alt: 'movie1' }
            ]}
          >
            After that, my brother came. We went home on his bike. We went home, ate, and then decided to watch a movie, so we searched for one. 
            Then we watched Baththa on Netflix.
          </StoryCard>


          
          <StoryCard
            number="07"
            title="Firing Crackers At Night"
            images={[
              { src: cracker, alt: 'Cracker1' },
              { src: cracker1, alt: 'Cracker2' },

            ]}
          >
           After watching all the movies and eating lunch, it was around 6:30 in the evening. We decided to burst firecrackers like night crackers, 
           flower pots, and ground spinners at night.
          </StoryCard>


          <StoryCard
            number="08"
            title="Complete Diwali Day With A Coffee "
            images={[
              { src: coffee, alt: 'coffee1' },
              { src: coffee1, alt: 'coffee2' }
            ]}
          >
            After that, I left their house at 7:30. I left at 7:30 and reached KK Nagar by 8:30. We just rode the bike around and then had a coffee to complete the day.
          </StoryCard>


        </div>


       
        <div className="mt-14 text-center">

          <div className="text-4xl mb-3">✨</div>

          <h2 className="text-2xl font-extrabold text-gray-800">
            End of Day One
          </h2>

          <p className="text-gray-500 mt-2">
            One day, many memories. The journey continues...
          </p>

          <div className="mt-5 text-orange-500 font-bold tracking-widest">
            TO BE CONTINUED
          </div>

        </div>

      </div>

    </div>

    </>
  )
}

export default DayTwo
