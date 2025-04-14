import React from 'react';


function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Artist Introduction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-6">About Kaleidos Club</h1>
            <p className="text-lg text-gray-600 mb-4">
              Founded in 2024, Kaleidos Club is more than just an art gallery—it's a vibrant community 
              of artists and art enthusiasts coming together to celebrate creativity and expression.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is to make exceptional art accessible to everyone while supporting emerging 
              and established artists in their creative journey.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80"
              alt="Art Studio"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Creativity</h3>
              <p className="text-gray-600">
                We believe in the power of creativity to transform perspectives and inspire change.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">
                Building meaningful connections between artists and art lovers worldwide.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="text-gray-600">
                Curating exceptional artworks that meet the highest standards of artistic excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const team = [
  {
    name: "Ms.Ayushi Dixit",
    role: "Mentor",
    image: "Screenshot 2025-04-12 110928.png"
  },
  {
    name: "Mahak Singh",
    role: "President",
    image: "president madam .jpg"
  },
  {
    name: "Gajendra Sharma",
    role: "Vice President",
    image: "gajju bhaiya.jpg"
  },
  {
    name: "Aditya Srivastava",
    role: "General Secretary",
    image: "aditya me .jpg"
  }
];

export default About;