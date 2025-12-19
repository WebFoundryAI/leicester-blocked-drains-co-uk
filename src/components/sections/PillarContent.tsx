import { CheckCircle, Clock, Shield, MapPin, Phone, Wrench, Camera, AlertTriangle } from "lucide-react";
import { BRAND } from "@/config/brand";

// Format phone for display (01234567890 -> 01234 567890)
const formatPhone = (phone: string) => {
  if (phone.length === 11) {
    return `${phone.slice(0, 5)} ${phone.slice(5)}`;
  }
  return phone;
};

export function PillarContent() {
  return (
    <article className="section-padding">
      <div className="container-wide px-4">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          
          {/* Emergency Call-outs Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <AlertTriangle className="h-7 w-7 text-primary shrink-0" />
              Emergency Drain Call-outs in Swindon
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Blocked drains rarely happen at a convenient time. That's why we offer a genuine 24-hour emergency 
              call-out service across Swindon and the surrounding villages. Whether it's a backed-up toilet at 
              midnight or a flooded kitchen drain on a Sunday morning, our local engineers can usually reach 
              you within 60–90 minutes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We don't charge extra for evenings, weekends, or bank holidays, and there's no call-out fee—you 
              only pay for the work we do. Once we arrive, we'll assess the problem and give you a fixed quote 
              before we start, so there are no surprises on your bill.
            </p>
            <div className="flex flex-wrap gap-4 mt-6 not-prose">
              <div className="flex items-center gap-2 text-sm bg-primary/10 text-primary px-4 py-2 rounded-full">
                <Clock className="h-4 w-4" />
                <span>60–90 minute response</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-primary/10 text-primary px-4 py-2 rounded-full">
                <Shield className="h-4 w-4" />
                <span>No call-out fee</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-primary/10 text-primary px-4 py-2 rounded-full">
                <CheckCircle className="h-4 w-4" />
                <span>Fixed pricing upfront</span>
              </div>
            </div>
          </section>

          {/* Common Blocked Drain Problems */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <Wrench className="h-7 w-7 text-primary shrink-0" />
              Common Blocked Drain Problems
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most blocked drains in Swindon homes fall into a handful of common categories. Understanding what's 
              causing your blockage helps us resolve it faster and advise you on prevention.
            </p>
            <ul className="space-y-3 text-muted-foreground mb-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Fat and grease build-up:</strong> The number one cause of kitchen drain blockages. Cooking fats solidify in pipes and gradually restrict water flow until nothing gets through.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Hair and soap scum:</strong> Bathroom drains collect hair, soap residue, and personal care products that form stubborn clogs over time.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Tree root ingress:</strong> Roots from nearby trees seek out moisture and can crack into older clay or concrete pipes—common in established Swindon neighbourhoods with mature gardens.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Foreign objects:</strong> Toys, sanitary products, wet wipes (even "flushable" ones), and other items that shouldn't be flushed account for many emergency call-outs.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Collapsed or damaged pipes:</strong> Older properties may have clay or pitch-fibre drains that have cracked, shifted, or collapsed over the decades.</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We use high-pressure water jetting to clear most blockages on the spot. For recurring problems or 
              suspected structural damage, we recommend a CCTV drain survey to find the root cause.
            </p>
          </section>

          {/* CCTV Drain Surveys */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <Camera className="h-7 w-7 text-primary shrink-0" />
              CCTV Drain Surveys
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you can't see what's happening underground, guesswork can be expensive. Our CCTV drain surveys 
              use a waterproof camera on a flexible rod to inspect your pipes from the inside. You'll see the 
              footage on-screen as we record it, so we can pinpoint blockages, cracks, root intrusion, or 
              misaligned joints in real time.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              CCTV surveys are especially useful if you're buying a property in Swindon. A pre-purchase drain 
              survey can reveal hidden problems that would cost thousands to repair—giving you negotiating 
              power or peace of mind before you exchange contracts.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              After the survey, you'll receive a written report and a copy of the video file. If repairs are 
              needed, you'll have the evidence to support an insurance claim or share with your solicitor.
            </p>
          </section>

          {/* Drain Repairs */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <Wrench className="h-7 w-7 text-primary shrink-0" />
              Drain Repairs
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Not every drain problem can be fixed with a jet wash. Cracked pipes, collapsed sections, or 
              severe root damage often require physical repair. We offer both traditional excavation and 
              modern no-dig solutions depending on the situation and your budget.
            </p>
            <ul className="space-y-3 text-muted-foreground mb-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Patch lining:</strong> A resin-coated liner seals small cracks without digging up your garden or driveway.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Full relining:</strong> For longer sections of damaged pipe, a continuous liner creates a new pipe inside the old one.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Excavation and replacement:</strong> When damage is too severe for lining, we excavate, remove the faulty section, and install new pipework.</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              All repair work comes with a guarantee, and we'll always explain your options clearly before any 
              work begins.
            </p>
          </section>

          {/* Areas We Cover */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <MapPin className="h-7 w-7 text-primary shrink-0" />
              Areas We Cover in Swindon
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We're based locally and cover all of Swindon borough plus the surrounding towns and villages. 
              Our engineers know the area well—including the quirks of different housing types and the 
              drainage challenges that come with them.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-muted-foreground mb-4">
              <ul className="space-y-1">
                <li>• Old Town & Town Centre</li>
                <li>• West Swindon & Shaw</li>
                <li>• Wichelstowe</li>
                <li>• Highworth</li>
                <li>• Wroughton</li>
                <li>• Blunsdon</li>
              </ul>
              <ul className="space-y-1">
                <li>• Stratton & Upper Stratton</li>
                <li>• Gorse Hill & Pinehurst</li>
                <li>• Covingham & Nythe</li>
                <li>• Chiseldon</li>
                <li>• Purton</li>
                <li>• Royal Wootton Bassett</li>
              </ul>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Not sure if we cover your area? Give us a call—if you're within about 15 miles of Swindon town 
              centre, we can usually help.
            </p>
          </section>

          {/* Local Proof Section */}
          <section className="mb-12 bg-muted/50 -mx-4 px-4 py-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Swindon Drainage: What We See on the Ground
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Swindon's housing stock is genuinely varied. You'll find Victorian terraces in Old Town with 
              original clay pipes that are over 100 years old. Post-war council estates in areas like Penhill 
              and Park North often have concrete or pitch-fibre drains—materials that were popular in the 
              1960s and 70s but are now reaching the end of their lifespan.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Newer developments like Wichelstowe and the Eastern Villages use modern plastic pipework that's 
              generally more durable, but installation quality can vary. We regularly attend new-build 
              properties where construction debris has been left in the drains or joints haven't been sealed 
              properly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Tree root problems are especially common in established areas with large gardens—Old Town, 
              Lawn, and parts of West Swindon see a lot of call-outs for this. If you have mature trees 
              near your property and slow-draining outside drains, roots are often the culprit.
            </p>
          </section>

          {/* Why Choose Us */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <Shield className="h-7 w-7 text-primary shrink-0" />
              Why Choose {BRAND.brandName}?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              There are plenty of drainage companies advertising in Swindon—so why choose us? Here's what 
              sets us apart:
            </p>
            <ul className="space-y-3 text-muted-foreground mb-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Genuinely local:</strong> We're based in Swindon, not a national call centre dispatching vans from miles away. You'll speak to someone who knows the area.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span><strong>No hidden fees:</strong> No call-out charges, no "minimum visit" fees, no surprise extras. You get a fixed quote before we start.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Available 24/7:</strong> Drains don't wait for office hours, and neither do we. Our emergency line is answered day and night, 365 days a year.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Experienced engineers:</strong> Our team has seen it all—from simple blockages to full drain collapses. We'll diagnose the problem accurately and fix it properly.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Fully insured:</strong> Public liability insurance up to £5 million. If anything goes wrong (it won't), you're covered.</span>
              </li>
            </ul>
            <div className="mt-6 not-prose">
              <a 
                href={`tel:${BRAND.phone}`}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call {formatPhone(BRAND.phone)} Now
              </a>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
}
