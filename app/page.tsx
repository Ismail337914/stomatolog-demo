import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://via.placeholder.com/600x400?text=Hollywood+Smile+1",
    "https://via.placeholder.com/600x400?text=Zubni+Implantati+2",
    "https://via.placeholder.com/600x400?text=Izbjeljivanje+3",
    "https://via.placeholder.com/600x400?text=Viniri+4",
    "https://via.placeholder.com/600x400?text=Ortodoncija+5",
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image
                src="/next.svg"
                alt="Logo"
                width={100}
                height={20}
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">Poliklinika Demo</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600">O nama</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Usluge</a>
              <a href="#gallery" className="text-gray-700 hover:text-blue-600">Naši radovi</a>
              <a href="#team" className="text-gray-700 hover:text-blue-600">Tim</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Recenzije</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Kontakt</a>
            </nav>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Zakaži termin</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Vaš osmijeh je naš uspjeh</h1>
          <p className="text-xl md:text-2xl mb-8">Vrhunska stomatološka njega u Sarajevu sa dugogodišnjom tradicijom</p>
          <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100">Zakaži besplatni pregled</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">O našoj poliklinici</h2>
            <p className="mt-4 text-lg text-gray-600">Brinemo o vašem osmijehu sa najnovijim tehnologijama i stručnim timom</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Naša misija</h3>
              <p className="text-gray-700">Pružamo vrhunske dentalne usluge koristeći najsavremenije tehnologije i materijale. Naš tim stručnjaka brine o vašem oralnom zdravlju sa ljubaznošću i profesionalnošću.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Zašto izabrati nas?</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Dugogodišnje iskustvo i tradicija</li>
                <li>• Moderne tehnologije i oprema</li>
                <li>• Ljubazno i stručno osoblje</li>
                <li>• Zadovoljni pacijenti širom svijeta</li>
                <li>• Dentalni turizam i pristupačne cijene</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Naše usluge</h2>
            <p className="mt-4 text-lg text-gray-600">Kompletna dentalna njega za cijelu porodicu</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Konzervativna stomatologija</h3>
              <p className="text-gray-700">Liječenje karijesa, plombe i čišćenje zuba.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Implantologija</h3>
              <p className="text-gray-700">Zubni implantati i All-on-4/All-on-6 rješenja.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Estetska stomatologija</h3>
              <p className="text-gray-700">Izbjeljivanje, viniri i Hollywood smile.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Ortodoncija</h3>
              <p className="text-gray-700">Ispravljanje nepravilnog položaja zuba.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Dječija stomatologija</h3>
              <p className="text-gray-700">Specijalizirana njega za najmlađe pacijente.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Protetika</h3>
              <p className="text-gray-700">Krunice, mostovi i proteze visokog kvaliteta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Naši radovi</h2>
            <p className="mt-4 text-lg text-gray-600">Pogledajte rezultate našeg rada prije i poslije</p>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={images[currentImage]}
                alt={`Rad ${currentImage + 1}`}
                width={600}
                height={400}
                className="w-full h-96 object-cover"
              />
            </div>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
              ›
            </button>
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full ${index === currentImage ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Naš stručni tim</h2>
            <p className="mt-4 text-lg text-gray-600">Iskusni doktori sa dugogodišnjom praksom</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold">Dr. Marko Demo</h3>
              <p className="text-gray-600">Specijalista oralne hirurgije</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold">Dr. Ana Demo</h3>
              <p className="text-gray-600">Specijalista parodontologije</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">🦷</span>
              </div>
              <h3 className="text-xl font-semibold">Dr. Ivan Demo</h3>
              <p className="text-gray-600">Dječiji stomatolog</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Šta kažu naši pacijenti</h2>
            <p className="mt-4 text-lg text-gray-600">Zadovoljstvo pacijenata je naš najveći uspjeh</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">"Izvanredna usluga i profesionalizam. Preporučujem svima!"</p>
              <p className="font-semibold">- Marija K.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">"Doktori su ljubazni, a rezultati fantastični. Hvala vam!"</p>
              <p className="font-semibold">- Petar M.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Kontaktirajte nas</h2>
            <p className="mt-4 text-lg text-gray-600">Zakažite termin i dođite na besplatni pregled</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Informacije</h3>
              <p className="text-gray-700 mb-2">Adresa: Ulica Demo 123, Sarajevo</p>
              <p className="text-gray-700 mb-2">Telefon: +387 33 123 456</p>
              <p className="text-gray-700 mb-2">Email: info@poliklinikademo.ba</p>
              <p className="text-gray-700">Radno vrijeme: Pon-Pet 8-20h, Sub 8-15h</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Zakaži termin</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Ime i prezime" className="w-full p-3 border rounded-md" />
                <input type="email" placeholder="Email" className="w-full p-3 border rounded-md" />
                <input type="tel" placeholder="Telefon" className="w-full p-3 border rounded-md" />
                <textarea placeholder="Poruka" className="w-full p-3 border rounded-md h-24"></textarea>
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">Pošalji</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 Poliklinika Demo. Sva prava zadržana.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-blue-400">Instagram</a>
            <a href="#" className="hover:text-blue-400">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
