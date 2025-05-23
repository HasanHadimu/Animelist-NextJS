import Image from 'next/image'
import AnimeList from './components/AnimeList'
import Navbar from './components/Utilities/Navbar'
import Footer from './components/Utilities/Footer'

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
  const anime = await response.json()

  return (
    <div className="bg-gray-900 min-h-screen px-4 pb-10">
      <Navbar />

      {/* Section Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center mt-10 mb-6 anime-font tracking-wide glow-effect">
        TOP ANIME
      </h1>
      <br></br>

      {/* Anime Grid */}
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        {anime.data.map(data => (
          <div key={data.mal_id} className="shadow-xl hover:scale-105 transition-transform duration-300">
            <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Home
