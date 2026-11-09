
import React from 'react'

import rain from '../assets/morning.jpg'
import rain1 from '../assets/morning2.jpg'
import rain2 from '../assets/morning4.jpg'
import food from '../assets/food.jpg'
import search from '../assets/search2.jpg'
import home from '../assets/frdhome.jpg'
import home1 from '../assets/frdhome1.jpg'
import sky from '../assets/sky.jpg'
import biriyan from '../assets/manis.jpg'
import easybuy from '../assets/easybuy2.jpg'
import easybuy1 from '../assets/easybuy1.jpg'
import juice from '../assets/juice.jpg'
import juice2 from '../assets/juice1.jpg'
import cracker from '../assets/cracker1.jpg'
import cracker1 from '../assets/cracker2.jpg'
import child from '../assets/child.jpg'
import child1 from '../assets/child2.jpg'


import StoryCard from '../components/StoryCard'


// Reusable Story Card


const DayOne = () => {

  return (
    <div className="min-h-screen bg-[#FFF5E6] pt-36 pb-16 px-4 md:px-8">

      <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-12">

          <p className="text-orange-600 uppercase tracking-[5px] font-bold text-sm">
            My Diwali Memories
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-4">
            Day <span className="text-orange-500">01</span>
          </h1>

          <p className="text-gray-500 text-base md:text-lg mt-4">
            A day full of unexpected moments and beautiful memories.
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-16 h-[2px] bg-orange-300"></div>
            <span className="text-2xl">🪔</span>
            <div className="w-16 h-[2px] bg-orange-300"></div>
          </div>

        </div>


        {/* Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


          {/* Morning Rain */}
          <StoryCard
            number="01"
            title="Morning Rain"
            images={[
              { src: rain, alt: 'Morning rain' },
              { src: rain1, alt: 'Rainy weather' },
              { src: rain2, alt: 'Rain outside' }
            ]}
          >
            Day one. I woke up in the morning and looked outside, it was raining heavily.
            So, I took photos of the rain and added them to my vlog.
            I thought the rain would stop, but it kept raining intermittently.
          </StoryCard>


          {/* Morning Food */}
          <StoryCard
            number="02"
            title="Morning Food"
            images={[
              { src: food, alt: 'Morning food' }
            ]}
          >
            It was raining heavily at 7:40, and since the rainy weather made me hungry,
            I went downstairs expecting our usual 7:30 hostel meal.
            Neither the food nor the warden was there because he had gone to fetch it,
            so I ate after he cycled back with the food at 8:00.
          </StoryCard>


          {/* Room Searching */}
          <div className="md:col-span-2">
            <StoryCard
              number="03"
              title="Room Searching Operation"
              images={[
                { src: search, alt: 'Room searching' },
                { src: home, alt: 'Room visit' },
                { src: home1, alt: 'Room visit with friends' },
                { src: sky, alt: 'Evening sky' }
              ]}
            >
              After finishing lunch, I called my institute's sir. He had told me yesterday
              that we needed to go see a room because I needed one.
              I told him I didn't like staying in the PG and wanted to move and see a new room.
              He said we could look for rooms after 11:00 p.m.
              After finishing dinner, I called him to ask what time we should go.
              He said we could go after 11:30 p.m. and that he would call me.
              He called at 11:30 p.m., and we went to look for rooms.

              {'\n\n'}

              As I said, the sir came at 11:30. At 11:30, we both left to look for a room.
              First, we looked for a room in MG Nagar.
              There were "To Let" boards in two or three places.
              We called and asked if a room was available for bachelors.
              They said they only give it to families and not to bachelors.
              Some people said it nicely, while others were harsh.
              Then we thought it wouldn't work out and decided to look separately.
              So, we called another student of the sir who was studying backend and asked
              him to help us find a room in his area.
              He agreed to help and came with us to look for a room.
              We looked at about five or six rooms.
              Finally, we looked at a room near the sir's student's house.
              Everything was fine.
              Then we went to the sir's student's house, which was nearby.
              We drank water, ate sweets, talked, and looked at a room there too.

              {'\n\n'}

              Finally, we got a room somehow. And unfortunately i forgot to take a room pic.
              It was okay for me and okay for the sir.
              After that, the sir's student showed us the way to the street corner and told
              us to go that way, then he left, and we also left.
              Our next plan was to eat, then get a dress, and then buy crackers.
              So, we went to eat first.
            </StoryCard>
          </div>


          {/* Afternoon Biryani */}
          <StoryCard
            number="04"
            title="Afternoon Biryani"
            images={[
              { src: biriyan, alt: "Mani's biryani" }
            ]}
          >
            Then he and I talked. He asked me if it was okay for me, and I asked him if it
            was okay for him. We talked about everything.
            After that, I didn't get the feel of a sir.
            He became like an elder brother or a friend to me.
            After that, I started calling him brother, broo, friend, and so on.
            He would always tell me to eat Mani's biryani because it's very tasty.
            Mani's biryani is super tasty, and I really like Mani's biryani.
            He asked me what I wanted to eat.
            Since you keep talking about Mani's biryani, let's go eat there.
            He and I went to Mani's biryani in Ashok Nagar.
            When we went there, it was very crowded, with about 20 people waiting.
            We were told we could only eat after that.
            He asked me again, "Shall we go after drinking coffee, or shall we eat now?"
            I told him, "You didn't eat in the morning, so let's not drink coffee and eat directly."
            I suggested going to Mani's biryani in Vadapalani.
            We went there, waited, ate, and finished.
            After that, the plan was to go buy clothes.
          </StoryCard>


          {/* Easybuy Shopping */}
          <StoryCard
            number="05"
            title="Shopping in Easybuy"
            images={[
              { src: easybuy, alt: 'Easybuy shopping' },
              { src: easybuy1, alt: 'Shopping clothes' }
            ]}
          >
            After eating, we talked and went to porur to buy a dresses in easybuy shop.
            We spent about two hours there choosing dresses.
            We picked a t-shirt, a shirt, pants, and a rider jacket for my brother.
            Then we planned to go drink juice at 5:00.
          </StoryCard>


          {/* Juice */}
          <StoryCard
            number="06"
            title="Drink Juice for Hydration"
            images={[
              { src: juice, alt: 'Juice shop' },
              { src: juice2, alt: 'Guava juice' }
            ]}
          >
            We took the dresses for long hours so we are completely drained,
            so we decided to drink some juice and went to a nearby juice shop.
            We both drank guava juice.
            After that, we went to buy a dress for the baby.
            Then, we went to buy crackers.
          </StoryCard>


          {/* Cracker Shop */}
          <StoryCard
            number="07"
            title="Cracker Shop"
            images={[
              { src: cracker, alt: 'Cracker shop' },
              { src: cracker1, alt: 'Crackers' }
            ]}
          >
            When we checked the time, it was 5:30.
            Earlier on our way, we had seen a crackers shop with a 75% discount,
            so we kept looking for it on the way back and finally found it.
            We went inside to buy crackers and initially picked up a lot of night crackers,
            especially sparklers.
            When we gave them at the billing counter, they said the total came to ₹4,000.
            Surprised that it cost ₹4,000 for this, we kept reducing the items until we
            were left with just six boxes of crackers, which they said would cost ₹1,300.
            We bought them for ₹1,300 and then went to the old room where my broo was already staying.
          </StoryCard>


          {/* Crackers with Children */}
          <StoryCard
            number="08"
            title="Crackers with Children"
            images={[
              { src: child, alt: 'Children celebrating Diwali' },
              { src: child1, alt: 'Cracker celebration' }
            ]}
          >
            We reached the old room at 6:00 sharp.
            My broo roommates were there, so we talked to them for a little while,
            told them we were leaving, and headed out.
            When we came downstairs, two kids were bursting crackers.
            My broo decided to give them two of the crackers we had bought,
            so we went over, handed them to the kids, and burst them together.
            After that, we said goodbye and left, bringing that day to an end.
          </StoryCard>


        </div>


        {/* Bottom Section */}
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
  )
}

export default DayOne
