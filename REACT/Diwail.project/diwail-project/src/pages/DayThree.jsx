




import rain from '../assets/day3/morning.jpg'
import rain1 from '../assets/day3/morning2.jpg'

import food from '../assets/day3/food.jpg'

import washing from '../assets/day3/cloth.jpg'
import washing2 from '../assets/day3/cloth2.jpg'

import work from '../assets/day3/work.jpg'
import work2 from '../assets/day3/work2.jpg'

import bilal from '../assets/day3/bilal.jpg'
import bilal2 from '../assets/day3/bilal1.jpg'

import beach from '../assets/day3/beach.jpg'
import beach2 from '../assets/day3/beach1.jpg'


import road from '../assets/day3/road.jpg'
import road2 from '../assets/day3/road2.jpg'


import park from '../assets/day3/park2.jpg'
import park2 from '../assets/day3/park3.jpg'

import lulu from '../assets/day3/lulu.jpg'
import lulu2 from '../assets/day3/lulu2.jpg'

import road3 from '../assets/day3/park.jpg'

import nigthfood from '../assets/day3/nigthfood.jpg'

import movie2 from '../assets/day3/movie2.jpg'
import movie3 from '../assets/day3/movie3.jpg'


import { Link } from 'react-router-dom'


import StoryCard from '../components/StoryCard'


// Reusable Story Card


const DayThree = () => {

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
            Last <span className="text-orange-500">Day</span>
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
            title="Last Day Morning"
            images={[
              { src: rain, alt: 'Morning rain' },
              { src: rain1, alt: 'Rainy weather' },
            ]}
          >
           Today is Deepavali. Like yesterday, it rained continuously today as well. I woke up at 5:30 a.m. After waking up and finishing my prayers, 
           I looked outside around 6:30 a.m., and it was still raining.
          </StoryCard>


          
          <StoryCard
            number="02"
            title="Morning Breakfast"
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
              title="Washing Cloths"
              images={[
                { src: washing, alt: 'cloths1' },
                { src: washing2, alt: 'cloths2' }
              ]}
            >
              After coming up, I decided to look at the project work, 
              so I was looking at the project work given by the sir.
            </StoryCard>
          </div>


          <StoryCard
            number="04"
            title="Project Work"
            images={[
              { src: work, alt: "work1" },
              { src: work2, alt: "work2" },

            ]}
          >
            After that, my brother sent me a message saying, "Leave at 10:00. Take the metro from Vadapalani and get off at the airport. Once you get off, call me." He invited me to his house to celebrate Diwali. So, I got ready and was about to leave when it started raining heavily. 
            I took an umbrella and headed to the Vadapalani metro station.
          </StoryCard>


         
          <StoryCard
            number="05"
            title="Bilal Cafe"
            images={[
              { src: bilal, alt: 'bilal shop1' },
              { src: bilal2, alt: 'bilal shop2' }
            ]}
          >
            I came to Vadapalani metro while it was drizzling. From there, 
            I took the metro, got off at Alandur, and from Alandur, I came to the airport.
          </StoryCard>


         
          <div className="md:col-span-2">
            <StoryCard
              number="06"
              title="Patinapakkam Beach"
              images={[
                { src: beach, alt: 'beach visit' },
                { src: beach2, alt: 'beach1 visit' }
              ]}
            >
              After coming up, I decided to look at the project work, 
              so I was looking at the project work given by the sir.
            </StoryCard>
          </div>


          <StoryCard
            number="07"
            title="Night Ride "
            images={[
              { src: road, alt: 'road' },
              { src: road2, alt: 'road2' }
            ]}
          >
            After that, I left their house at 7:30. I left at 7:30 and reached KK Nagar by 8:30. We just rode the bike around and then had a coffee to complete the day.
          </StoryCard>


          <StoryCard
            number="08"
            title="Anna Nagar Tower Park "
            images={[
              { src: park, alt: 'park' },
              { src: park2, alt: 'park2' }
            ]}
          >
            After that, I left their house at 7:30. I left at 7:30 and reached KK Nagar by 8:30. We just rode the bike around and then had a coffee to complete the day.
          </StoryCard>


          <div className="md:col-span-2">
            <StoryCard
              number="09"
              title="Lulu Mall"
              images={[
                { src: lulu, alt: 'lulu' },
                { src: lulu2, alt: 'lulu2' }
              ]}
            >
              After coming up, I decided to look at the project work, 
              so I was looking at the project work given by the sir.
            </StoryCard>
          </div>


          <StoryCard
            number="10"
            title="Return to Vadapalani "
            images={[
              { src: road3, alt: 'return' },
        
            ]}
          >
            After that, I left their house at 7:30. I left at 7:30 and reached KK Nagar by 8:30. We just rode the bike around and then had a coffee to complete the day.
          </StoryCard>

          <StoryCard
            number="11"
            title="Night Dinner "
            images={[
              { src: nigthfood , alt: 'nigthfood' },
        
            ]}
          >
            After that, I left their house at 7:30. I left at 7:30 and reached KK Nagar by 8:30. We just rode the bike around and then had a coffee to complete the day.
          </StoryCard>



          <div className="md:col-span-2">
            <StoryCard
              number="12"
              title="Movie in Palazzo"
              images={[
                { src: movie2, alt: 'moive' },
                { src: movie3, alt: 'movie' }
              ]}
            >
              After coming up, I decided to look at the project work, 
              so I was looking at the project work given by the sir.
            </StoryCard>
          </div>


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
           THE END
          </div>

        </div>

      </div>

    </div>

    </>
  )
}

export default DayThree