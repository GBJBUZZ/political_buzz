import Image from "next/image"

export function TrustBar() {
  const partners = [
    { name: "Meta Business Partner", logo: "/meta-business-partner.jpg" },
    { name: "Google Partner", logo: "/google-partner.jpg" },
    { name: "Government Certified", logo: "/government-certified.jpg" },
    { name: "DPDP Compliant", logo: "/dpdp-compliant.jpg" },
  ]

  return (
    <section className="w-full h-[100px] bg-[#E1F2FE] flex items-center">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex items-center justify-center md:justify-between gap-8 md:gap-12 flex-wrap">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
