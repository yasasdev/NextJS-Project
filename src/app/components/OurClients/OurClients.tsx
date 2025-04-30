import Image from "next/image";

const clients = [
  {
    logo: "/Images/Sellhub.png",
    name: "SellHub.lk",
    testimonial:
      "SellHub.lk transformed into a seamless buying and selling platform thanks to Innova Global's expertise. The website is fast, user-friendly, and exactly what we needed!",
    rating: 5,
    profileImage: "/images/profile.png",
  },
  {
    logo: "/Images/Vidu Auto.png",
    name: "Vidu Auto",
    testimonial:
      "Innova Global provided us with a powerful POS, inventory, and payroll system. Our operations are now smooth and efficient!",
    rating: 5,
    profileImage: "/images/profile.png",
  },
];

export default function ClientsSection() {
  return (
    <section className="bg-[#dfeeff] py-12">
      <div className="text-center mb-10">
        <h2 className="text-black text-4xl font-bold">Our Clients</h2>
        <p className="text-black mt-2">and what they say ...</p>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-stretch gap-10 px-4">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-[#dfcdcd79] rounded-xl p-6 w-full md:w-[280px] shadow-md flex flex-col justify-between relative min-h-[350px]"
          >
            <div>
              <div className="flex justify-center mb-4">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={80}
                />
              </div>

              <div className="relative border border-gray-400 rounded-md p-4 text-sm text-gray-700 h-[160px] flex flex-col justify-between">
                <p className="mb-4">{client.testimonial}</p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-1">
                    {Array.from({ length: client.rating }).map((_, idx) => (
                      <span key={idx}>⭐</span>
                    ))}
                  </div>
                  <span className="text-2xl text-blue-400">”</span>
                </div>

                {/* Profile image inside the box, bottom-left */}
                <div className="absolute -bottom-4 left-1">
                  <Image
                    src={client.profileImage}
                    alt={`${client.name} profile`}
                    width={32}
                    height={32}
                    className="rounded-full object-cover border border-white"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
