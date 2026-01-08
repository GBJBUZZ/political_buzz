import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Phone } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-primary/20 to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Ready to Win Your Next Election?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed text-pretty">
            Book a free strategy call with our experts. Let's discuss your campaign goals and create a winning plan
            together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
              <a href="https://wa.me/917058253695" className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp: +91 7058253695
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-6 bg-transparent"
            >
              <a href="tel:+917058253695" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            Available 24/7 during campaign season | Free initial consultation
          </p>
        </div>
      </div>
    </section>
  )
}
