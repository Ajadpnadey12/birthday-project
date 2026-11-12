
"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [wish, setWish] = useState(null);
  const [showSurprise, setShowSurprise] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/birthday")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load birthday data");
        return res.json();
      })
      .then((data) => setWish(data))
      .catch((error) => console.error("Backend error:", error));
  }, []);

  const photos = [
    { src: "/images/photo1.jpg", alt: "Birthday memory 1" },
    { src: "/images/photo2.jpg", alt: "Birthday memory 2" },
    { src: "/images/photo3.jpg", alt: "Birthday memory 3" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-yellow-100 px-4 py-10">
      {/* Birthday Header */}
      <section className="mx-auto max-w-3xl rounded-3xl bg-white/90 p-6 text-center shadow-2xl sm:p-10">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-pink-500">
          A Special Day for Someone Special
        </p>

        <h1 className="text-4xl font-extrabold text-pink-600 sm:text-6xl">
          Happy Birthday sister ! 🎉
        </h1>

        <div className="my-6 text-7xl">🎂</div>

        {/* <h2 className="mb-3 text-2xl font-bold text-purple-700 sm:text-3xl">
          {wish ? `Dear ${wish.name} 💖` : " 💖"}
        </h2> */}

        <h2 className="text-lg font-semibold text-pink-600">
          {wish?.title || "Wishing You a Wonderful Birthday!"}
        </h2>

        <p className="mx-auto mt-4 max-w-xl leading-8 text-gray-700">
          {wish?.message ||
            "May your life be filled with happiness, success, and beautiful memories!"}
        </p>

        {/* Date of Birth */}
        <div className="mt-6 rounded-2xl bg-pink-50 p-5">
          <h3 className="text-xl font-bold text-purple-700">
            🎂 Date of Birth
          </h3>

          <p className="mt-2 text-lg text-gray-700">
            {wish?.dob || "Add birthday date in backend"}
          </p>
        </div>

        <button
          onClick={() => setShowSurprise(!showSurprise)}
          className="mt-6 w-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 font-bold text-white shadow-lg transition hover:scale-105 sm:w-auto"
        >
          🎁 {showSurprise ? "Close Surprise" : "Open Your Surprise"}
        </button>

        {showSurprise && (
          <div className="mt-6 rounded-2xl bg-purple-50 p-6">
            <p className="text-4xl">🎉🎊💖🎊🎉</p>
            <h3 className="mt-3 text-2xl font-bold text-pink-600">
              You Are Amazing!
            </h3>
            <p className="mt-3 leading-7 text-gray-700">
              Happy Birthday to my amazing sister ! May your dreams
              come true and your life always be full of smiles and success.
              Keep shining! ❤️
            </p>
          </div>
        )}
      </section>

      {/* Photo Gallery */}
      <section className="mx-auto mt-10 max-w-5xl rounded-3xl bg-white/90 p-5 shadow-xl sm:p-8">
        <h2 className="mb-6 text-center text-3xl font-extrabold text-pink-600">
          📸 Beautiful Memories
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="overflow-hidden rounded-2xl bg-pink-50 shadow-md"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-64 w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Birthday Video */}
      <section className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white/90 p-5 shadow-xl sm:p-8">
        <h2 className="mb-6 text-center text-3xl font-extrabold text-purple-700">
          🎥 Special Birthday Video
        </h2>

       <video
controls
className="mx-auto w-full max-w-lg rounded-xl"

>

  <source src="/images/birthday.mp4" type="video/mp4" />
  Your browser does not support this video.
</video>


        <p className="mt-4 text-center text-gray-600">
          A little video filled with special memories and happiness! 💖
        </p>
      </section>

      <footer className="py-8 text-center text-sm text-gray-600">
        Made with ❤️ for my amazing project Ajad pandey.
      </footer>
    </main>
  );
}





