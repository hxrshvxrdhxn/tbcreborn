import * as fs from 'fs';
import * as path from 'path';

const pages = [
  {
    path: 'app/services/custom-software-development/page.tsx',
    title: 'Custom Software Development Company in Noida | Turbo Bytes Consulting',
    description: 'Custom business software built around how your company works: workflows, approvals, portals and integrations. Fixed-phase delivery from Greater Noida.',
    h1: 'Custom software built around how your business actually works',
    subhead: 'When spreadsheets, WhatsApp groups and off-the-shelf tools stop keeping up, we design and build the system your team needs, in fixed phases with a clear price for each.',
    problems: [
      { title: 'Work lives in spreadsheets and chats.', description: 'Orders, approvals and status updates are scattered across Excel files and WhatsApp threads. Nobody has the full picture, and mistakes surface late.' },
      { title: 'Off-the-shelf tools force workarounds.', description: 'Your process is what makes you competitive, but generic software makes your team bend it to fit, then re-key data between systems.' },
      { title: 'Licence costs keep climbing.', description: 'Per-user subscriptions across several tools add up every year, and you still do not own the system or the data model.' },
      { title: 'The founder is the integration layer.', description: 'Decisions wait for one person because the information needed to make them lives nowhere else.' }
    ],
    featuresTitle: 'What we build',
    includedFeatures: [
      { title: 'Workflow systems:', items: ['purchase, sales, service and approval workflows with roles, limits and audit trails.'] },
      { title: 'Internal tools:', items: ['the admin panels, trackers and calculators your team uses every day.'] },
      { title: 'Client and vendor portals:', items: ['self-service access to orders, documents, tickets and invoices.'] },
      { title: 'Dashboards and reporting:', items: ['live numbers from every system in one place, for leadership and teams.'] },
      { title: 'Integrations:', items: ['Tally, Zoho, HubSpot, Razorpay, WhatsApp Business, email, and your existing databases.'] },
      { title: 'Modernisation:', items: ['replacing or wrapping ageing desktop software without stopping the business.'] }
    ],
    timelineSteps: [
      { number: '01', caption: 'Step 1', title: 'Discovery (1 to 3 weeks)', description: 'We map your workflows, users and systems and agree what the first phase must deliver.' },
      { number: '02', caption: 'Step 2', title: 'Specification and designs', description: 'You see every screen and approve the scope before a line of code is written. The phase price is fixed here.' },
      { number: '03', caption: 'Step 3', title: 'Build in two-week cycles', description: 'Working software every fortnight, reviewed with the person who will use it.' },
      { number: '04', caption: 'Step 4', title: 'Testing and launch', description: 'Acceptance testing with your team, data migration, training and a controlled go-live.' },
      { number: '05', caption: 'Step 5', title: 'Support and next phase', description: 'Maintenance, improvements, and the next workflow when you are ready.' }
    ],
    additionalParagraph: 'What you own: the source code, in a repository in your name; the data; and full documentation.',
    proof: ['Web Application Development', 'Business Diagnostic & Operational Restructure'],
    faq: [
      { q: 'How much does custom software cost?', a: 'Most focused internal tools fall between ₹5 lakh and ₹12 lakh, and department systems between ₹12 lakh and ₹30 lakh. Discovery produces a fixed price for each phase. Read our guide: <Link href="/blog/how-much-does-custom-software-development-cost-in-india-in-2026" className="text-gold hover:underline">custom software costs in India</Link>.' },
      { q: 'How long does it take?', a: 'A focused first phase usually goes live in 6 to 12 weeks. Larger systems are delivered in phases so value arrives early.' },
      { q: 'Do we own the code?', a: 'Yes. Source code and intellectual property transfer to you, and the repository sits in your account from day one.' },
      { q: 'Can it connect to Tally and our existing tools?', a: 'Yes. Integration with accounting, CRM, payment and messaging systems is part of most projects.' },
      { q: 'What happens after launch?', a: 'We offer support agreements covering fixes, security updates and small improvements, or we hand over to your own team with documentation.' }
    ],
    ctaBlock: 'Tell us which process is costing you the most time. We will map it and give you an honest view of scope, timeline and budget.'
  },
  {
    path: 'app/services/mobile-app-development/page.tsx',
    title: 'Mobile App Development Company in Noida | Turbo Bytes Consulting',
    description: 'iOS and Android apps for customers, field teams and operations. Cross-platform builds, offline support and integrations with your business systems.',
    h1: 'Mobile apps your customers and field teams will actually use',
    subhead: 'We build iOS and Android apps that connect to the systems you already run, work on patchy networks, and are simple enough to need no training.',
    problems: [
      { title: 'Field teams report by phone and WhatsApp.', description: 'Visits, orders and photos arrive late and incomplete, and nobody can see what happened today.' },
      { title: 'Customers expect self-service.', description: 'They want to place orders, track status and raise requests on their phones, not call your office.' },
      { title: 'Apps that nobody opens.', description: 'Many business apps fail because they add work instead of removing it.' },
      { title: 'Two platforms, double the cost.', description: 'Building separate iOS and Android apps doubles the effort for most business needs.' }
    ],
    featuresTitle: 'What we build',
    includedFeatures: [
      { title: 'Field and sales apps:', items: ['visits, orders, GPS check-ins, photos and signatures, working offline.'] },
      { title: 'Customer apps:', items: ['ordering, tracking, service requests, payments and notifications.'] },
      { title: 'Employee apps:', items: ['attendance, approvals, announcements and training for distributed teams.'] },
      { title: 'Admin panels and back ends:', items: ['the server, database and dashboard behind every app.'] },
      { title: 'Integrations:', items: ['your CRM, ERP, Tally, Razorpay, maps and WhatsApp.'] },
      { title: 'Launch and upkeep:', items: ['App Store and Play Store submission, updates for new OS versions.'] }
    ],
    additionalParagraph: 'How we work: Discovery and screen designs; a focused first version in 8 to 14 weeks; pilot with real users; phased rollout; ongoing support.\n\nMost business apps are built cross-platform with React Native or Flutter, which gives one codebase for iOS and Android. We build natively when an app depends heavily on device hardware.',
    proof: ['Web Application Development'],
    faq: [
      { q: 'How much does a business app cost?', a: 'Simple internal apps usually start around ₹3 lakh to ₹8 lakh; customer and field apps with payments or maps fall around ₹8 lakh to ₹25 lakh. See <Link href="/blog/mobile-app-development-cost-in-india-what-drives-the-price" className="text-gold hover:underline">what drives mobile app cost in India</Link>.' },
      { q: 'Do we need an app or would a web app do?', a: 'If users need offline access, the camera, GPS or push notifications, an app is usually right. Otherwise a mobile-friendly web app can cost less. We will tell you which.' },
      { q: 'Will it work without internet?', a: 'Yes. Field apps are built offline-first and sync when a connection returns.' },
      { q: 'Who publishes it to the stores?', a: 'We handle App Store and Play Store submission under your company\'s developer accounts.' },
      { q: 'How are updates handled?', a: 'Apple and Google change their platforms every year. A support agreement keeps the app compatible and secure.' }
    ],
    ctaBlock: 'Describe what your team or customers need to do on their phones. We will tell you the simplest way to build it.'
  },
  {
    path: 'app/services/ai-applications/page.tsx',
    title: 'AI Application & Chatbot Development in India | Turbo Bytes Consulting',
    description: 'AI chatbots, document processing and assistants trained on your own data. Private deployment options, tested for accuracy before launch.',
    h1: 'AI applications that work on your own data',
    subhead: 'Chatbots, document processing and internal assistants built on large language models, connected to your systems and tested for accuracy before anyone relies on them.',
    problems: [
      { title: 'Knowledge is locked in documents and people.', description: 'Staff and customers ask questions whose answers already exist somewhere, and wait.' },
      { title: 'Paperwork is still typed by hand.', description: 'Invoices, purchase orders and forms are read and re-keyed by staff.' },
      { title: 'Pilots that never reach production.', description: 'A demo impresses, then accuracy, security and integration problems stall it.' },
      { title: 'Worries about data leaving the company.', description: 'Client and financial data cannot simply be pasted into public tools.' }
    ],
    featuresTitle: 'What we build',
    includedFeatures: [
      { title: 'Document chatbots:', items: ['answers from your policies, manuals and past work, with sources shown.'] },
      { title: 'Customer assistants:', items: ['website and WhatsApp assistants in English and Hindi, with handover to a person.'] },
      { title: 'Document processing:', items: ['reading invoices, purchase orders, contracts and forms into your systems.'] },
      { title: 'Proposal and quotation assistants:', items: ['drafting technical proposals from a verified library of past work.'] },
      { title: 'Internal copilots:', items: ['assistants inside your CRM, ERP or custom software.'] },
      { title: 'Private deployment:', items: ['models in your cloud account or on your own servers. See <Link href="/services/custom-llm" className="text-gold hover:underline">Custom LLM</Link>.'] }
    ],
    additionalParagraph: 'How we work: Use-case selection; data review; four-week proof of concept measured against real questions; production build with guardrails; monitoring and monthly accuracy reviews.',
    proof: ['Custom LLM Deployment', 'Custom LLM — Retail & E-commerce'],
    proofExtra: 'Also try the <Link href="/ai-knowledge-portal.html" className="text-gold hover:underline">interactive knowledge portal demo</Link>.',
    faq: [
      { q: 'Will the AI make things up?', a: 'Our systems answer from your documents and are designed to say "I do not know" when the answer is not there. We measure this on a test set of real questions before launch.' },
      { q: 'Where does our data go?', a: 'Your choice: a private cloud account you own, or servers on your premises. We do not use your data to train public models.' },
      { q: 'How long does a pilot take?', a: 'A focused proof of concept takes about four weeks. A production system typically follows in six to ten weeks.' },
      { q: 'Does it work in Hindi?', a: 'Yes. Assistants can understand and answer in Hindi, English and a mix of both.' },
      { q: 'What does it cost to run?', a: 'Running costs depend on usage and hosting. We estimate them during the pilot so there are no surprises.' }
    ],
    ctaBlock: 'Pick one question your team answers every day, or one document they re-type. We will show you what AI can do with it.'
  },
  {
    path: 'app/services/business-automation/page.tsx',
    title: 'Business Process Automation, CRM & ERP Development | TBC',
    description: 'Custom CRM, ERP modules, approval workflows, dashboards and integrations with Tally and WhatsApp for growing Indian businesses.',
    h1: 'Automate the work that slows your business down',
    subhead: 'We replace manual steps, re-keying and chasing with connected systems: custom CRM and ERP modules, approvals, dashboards and integrations with the tools you already use.',
    problems: [
      { title: 'Data typed twice.', description: 'Sales enters an order, accounts enters it again in Tally, operations copies it into a spreadsheet.' },
      { title: 'Approvals wait in inboxes.', description: 'Purchases, discounts and leave requests stall until someone chases.' },
      { title: 'Reports take days.', description: 'Month-end numbers are assembled by hand from several sources.' },
      { title: 'Packaged software almost fits.', description: 'Standard CRM and ERP products cover most of the need, and your team works around the rest.' }
    ],
    featuresTitle: 'What we build',
    includedFeatures: [
      { title: 'Custom CRM:', items: ['leads, accounts, quotations, follow-ups and dealer networks, built around how you sell.'] },
      { title: 'ERP modules:', items: ['purchase, inventory, production planning, dispatch and service.'] },
      { title: 'Approval workflows:', items: ['purchase, discount, expense and leave approvals with limits and audit trails.'] },
      { title: 'Dashboards:', items: ['live leadership reporting from every system.'] },
      { title: 'Integrations:', items: ['Tally, Zoho, HubSpot, Razorpay, GST invoicing and WhatsApp Business API.'] },
      { title: 'Workflow automation:', items: ['n8n, Make or custom code, whichever is simplest to maintain.'] }
    ],
    additionalParagraph: 'How we work: Process review first (we remove steps before automating them); scope and fixed phase price; build; parallel run with your old process; switch-over.',
    proof: ['Business Diagnostic & Operational Restructure', 'Web Application Development'],
    faq: [
      { q: 'Should we use Zoho or HubSpot instead?', a: 'If your process is standard, yes, and we will say so. We build custom when your process does not fit or licence costs outgrow a one-time build. Read <Link href="/blog/custom-crm-vs-zoho-vs-hubspot-for-indian-smes" className="text-gold hover:underline">Custom CRM vs Zoho vs HubSpot</Link>.' },
      { q: 'Can you integrate with Tally?', a: 'Yes. We sync customers, invoices and payment status between Tally and your operational systems.' },
      { q: 'Can you extend our existing software instead of replacing it?', a: 'Often that is the best route. We build the missing piece and connect it by API.' },
      { q: 'How do you avoid disrupting operations?', a: 'New systems run alongside the old process until your team signs off.' },
      { q: 'What does automation cost?', a: 'Single workflows start small; multi-department systems are phased. Discovery gives a fixed price per phase.' }
    ],
    ctaBlock: 'Tell us where your team re-types data or waits for approvals. We will show you what can be automated first.'
  },
  {
    path: 'app/services/mvp-development/page.tsx',
    title: 'MVP Development for Founders in India | Turbo Bytes Consulting',
    description: 'A working first version of your product in 8 to 12 weeks: scoped to what proves the idea, built to grow, with the code owned by you.',
    h1: 'Your first working product in 8 to 12 weeks',
    subhead: 'We help founders cut an idea down to the version that proves it, then build that version properly so it can grow instead of being rebuilt.',
    problems: [
      { title: 'Scope that never stops growing.', description: 'Every feature feels essential, so launch keeps moving.' },
      { title: 'Cheap prototypes that must be thrown away.', description: 'Quick builds without structure cost more when real users arrive.' },
      { title: 'No technical co-founder.', description: 'Decisions on stack, hosting and security fall to someone without the background to make them.' },
      { title: 'Building before learning.', description: 'Months go into features nobody asked for.' }
    ],
    featuresTitle: 'What you get',
    includedFeatures: [
      { title: 'Scoping workshop:', items: ['the smallest product that tests your riskiest assumption.'] },
      { title: 'Clickable prototype:', items: ['tested with real prospective users before building.'] },
      { title: 'Production-quality build:', items: ['web, mobile or both, with authentication, payments and admin.'] },
      { title: 'Analytics from day one:', items: ['so you know what users actually do.'] },
      { title: 'Launch support:', items: ['hosting, app store submission, monitoring.'] },
      { title: 'A plan for version two:', items: ['based on usage, not guesses.'] }
    ],
    additionalParagraph: 'How we work: Two-week scoping and prototype; fixed-price build in two-week cycles; launch; iterate.\n\nWe build our own products this way. <Link href="/services/slate" className="text-gold hover:underline">Slate, our executive intelligence platform</Link>, began as a focused first version and grew from real usage.',
    proof: [],
    faq: [
      { q: 'What does an MVP cost?', a: 'It depends on scope, which is why scoping comes first. Most focused MVPs we build fall within the range of a small internal tool. See <Link href="/blog/how-much-does-custom-software-development-cost-in-india-in-2026" className="text-gold hover:underline">custom software costs</Link>.' },
      { q: 'Who owns the code and IP?', a: 'You do, fully, from day one.' },
      { q: 'Can you act as our technology partner after launch?', a: 'Yes, on a monthly basis, until you hire your own team, and we help you hire.' },
      { q: 'Web or mobile first?', a: 'Usually web, because it is faster to change. Mobile first when the product depends on the phone.' },
      { q: 'Do you take equity instead of fees?', a: 'No. We work on fees so the product and equity stay yours.' }
    ],
    ctaBlock: 'Tell us the idea and who it is for. We will tell you what the first version should be.'
  }
];

const locationPages = [
  {
    path: 'app/software-development-company-greater-noida/page.tsx',
    title: 'Software Development Company in Greater Noida | Turbo Bytes Consulting',
    description: 'A software, AI and consulting team based at Kasana Tower, Alpha I, Greater Noida. Custom software, apps and automation for local businesses.',
    h1: 'A software development team in Greater Noida',
    subhead: 'Turbo Bytes Consulting is based at Kasana Tower, Alpha I, Greater Noida. We build custom software, mobile apps and AI systems for businesses across the city\'s industrial sectors and beyond.',
    sections: [
      { title: 'Why work with a local team.', content: 'Some decisions are best made in a room: process mapping, workshops with your managers, and go-live days on the shop floor. Being in Greater Noida means we can be with your team in person when it matters, and online the rest of the time.' },
      { title: 'Who we work with here.', content: 'Manufacturers and engineering firms in the Ecotech and Udyog Vihar areas, distributors and logistics operators along the Eastern Peripheral and Yamuna Expressway corridors, and education institutes in Knowledge Park.' },
      { title: 'What we build.', content: '<Link href="/services/custom-software-development" className="text-gold hover:underline">Custom software</Link>, <Link href="/services/mobile-app-development" className="text-gold hover:underline">mobile apps</Link>, <Link href="/services/ai-applications" className="text-gold hover:underline">AI applications</Link> and <Link href="/services/business-automation" className="text-gold hover:underline">business automation</Link>.' }
    ],
    addressBlock: true,
    faq: [
      { q: 'Can you visit our factory or office?', a: 'Yes. For businesses in Greater Noida and Noida, discovery workshops are usually held on site.' },
      { q: 'Do you only work with local businesses?', a: 'No. We work with clients across Delhi NCR and India; local clients simply get more in-person time.' },
      { q: 'What size of business do you work with?', a: 'Mostly founder-led companies with 30 to 300 employees.' },
      { q: 'How do we start?', a: 'A 30-minute scoping call, then an on-site or online discovery session.' }
    ]
  },
  {
    path: 'app/software-development-company-noida/page.tsx',
    title: 'Software Development Company in Noida | Turbo Bytes Consulting',
    description: 'Custom software, mobile apps and AI applications for Noida businesses, from a team 30 minutes away in Greater Noida.',
    h1: 'Software development for Noida businesses',
    subhead: 'From Sector 62\'s IT corridor to the manufacturing belts of Phase 2 and the Noida Expressway offices, we build custom software, apps and AI systems for growing Noida companies.',
    sections: [
      { title: 'What Noida businesses ask us for most.', content: 'Replacing spreadsheets and WhatsApp coordination with proper workflow systems; field and sales apps for distributed teams; AI assistants on company knowledge; and integration between Tally, CRM and operations.' },
      { title: 'How we engage.', content: 'A discovery workshop at your office, a fixed-price first phase, and working software every two weeks.' },
      { title: 'Why not a large IT company?', content: 'Large vendors are built for large contracts. Founder-led companies of 30 to 300 people need senior attention, fast decisions and a partner who understands operations as well as code. That is who we are.' }
    ],
    addressBlock: false,
    faq: [
      { q: 'Are you based in Noida?', a: 'Our office is at Kasana Tower, Alpha I, Greater Noida, about 30 minutes from central Noida. We meet clients on site for workshops and launches.' },
      { q: 'Which industries do you serve in Noida?', a: 'Manufacturing, distribution, professional services, education and technology companies.' },
      { q: 'Can you take over an existing software project?', a: 'Yes. We start with a code and architecture review so you know what you have.' },
      { q: 'What does a project cost?', a: 'It depends on scope. See our guide to <Link href="/blog/how-much-does-custom-software-development-cost-in-india-in-2026" className="text-gold hover:underline">custom software costs in India</Link>.' }
    ]
  },
  {
    path: 'app/software-development-company-delhi-ncr/page.tsx',
    title: 'Software Development & AI Company in Delhi NCR | TBC',
    description: 'Custom software, mobile apps, AI applications and automation for founder-led businesses across Delhi, Noida, Gurugram, Ghaziabad and Faridabad.',
    h1: 'Software and AI development across Delhi NCR',
    subhead: 'We work with founder-led companies across Delhi, Noida, Greater Noida, Gurugram, Ghaziabad and Faridabad, combining management consulting with software delivery.',
    sections: [
      { title: 'Consulting and engineering in one team.', content: 'Most software projects fail on process, not code. Our team combines management consulting experience from firms such as Accenture with product engineering, so we fix the process before we automate it.' },
      { title: 'Coverage.', content: 'Delhi (professional services, trading and distribution)<br/>Noida and Greater Noida (manufacturing, technology, education)<br/>Gurugram (services and corporate offices)<br/>Ghaziabad and Faridabad (manufacturing and engineering)' },
      { title: 'Services.', content: '<Link href="/services/custom-software-development" className="text-gold hover:underline">Custom software</Link><br/><Link href="/services/mobile-app-development" className="text-gold hover:underline">Mobile apps</Link><br/><Link href="/services/ai-applications" className="text-gold hover:underline">AI applications</Link><br/><Link href="/services/business-automation" className="text-gold hover:underline">Business automation</Link><br/><Link href="/services/mvp-development" className="text-gold hover:underline">MVP development</Link>' }
    ],
    addressBlock: false,
    faq: [
      { q: 'Do you work outside Delhi NCR?', a: 'Yes, across India. NCR clients get in-person workshops as standard.' },
      { q: 'What makes you different from a typical software agency?', a: 'We start with how the business runs, not with a feature list, and we price in fixed phases.' },
      { q: 'Do you work with startups?', a: 'Yes, through <Link href="/services/mvp-development" className="text-gold hover:underline">MVP development</Link>, though most clients are established businesses with 30 to 300 employees.' },
      { q: 'How quickly can you start?', a: 'Discovery can usually begin within two weeks of a first call.' }
    ]
  }
];

const workItems = [
  {
    title: "Custom LLM Deployment",
    subtitle: "Professional services firm. Delhi NCR. 80 employees."
  },
  {
    title: "Social Media Management",
    subtitle: "Manufacturing company. Punjab. 200 employees."
  },
  {
    title: "Website Development",
    subtitle: "Financial services firm. Mumbai. 35 employees."
  },
  {
    title: "AI Executive Assistant (Slate)",
    subtitle: "Founder. E-commerce business. Bengaluru. 45 employees."
  },
  {
    title: "Business Diagnostic & Operational Restructure",
    subtitle: "B2B services firm. Delhi NCR. 37 employees."
  },
  {
    title: "Web Application Development",
    subtitle: "Logistics company. Gurugram. 120 employees."
  },
  {
    title: "Social Media Management & Personal Brand",
    subtitle: "Independent consultant. Mumbai."
  },
  {
    title: "Custom LLM — Retail & E-commerce",
    subtitle: "Consumer electronics retailer. Pan-India. 600 employees."
  },
  {
    title: "Website Development & SEO",
    subtitle: "Healthcare services provider. Pune. Private clinic group."
  },
  {
    title: "AI Training Programme",
    subtitle: "Financial services company. Mumbai. 180 employees."
  }
];

function generateServicePage(p: any) {
  const urlPath = p.path.replace('app', '').replace('/page.tsx', '');
  
  let proofHtml = '';
  if (p.proof && p.proof.length > 0) {
    proofHtml = `
      {/* ── PROOF ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-s6">
            <Reveal>
              <span className="eyebrow">PROOF</span>
              <h2 className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
                Client Outcomes
              </h2>
              <hr className="gold-rule gold-rule--center" />
              ${p.proofExtra ? `<p className="mt-4 font-sans text-[16px] text-mid-grey">${p.proofExtra}</p>` : ''}
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            ${p.proof.map((pf: string) => {
              const match = workItems.find(w => w.title === pf);
              if (!match) return '';
              return `
              <Reveal>
                <Link href="/work" className="block bg-white border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all h-full">
                  <h3 className="font-display font-bold text-[20px] text-ink leading-snug mb-3">${match.title}</h3>
                  <p className="font-sans text-[15px] font-medium text-ink/80 border-l-2 border-gold pl-3">${match.subtitle}</p>
                </Link>
              </Reveal>
              `;
            }).join('')}
          </div>
        </div>
      </section>
    `;
  }
  
  let timelineHtml = '';
  if (p.timelineSteps) {
    timelineHtml = `
      {/* ── HOW IT WORKS ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-s6">
            <Reveal>
              <span className="eyebrow">PROCESS</span>
              <h2 className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
                How We Work
              </h2>
              <hr className="gold-rule gold-rule--center" />
            </Reveal>
          </div>
          <div className="max-w-4xl mx-auto">
            ${p.timelineSteps.map((s: any, i: number) => `
              <Reveal delay={${i * 0.1}}>
                <div className="flex gap-6 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-ink text-gold flex items-center justify-center font-display font-bold text-[14px]">
                      ${s.number}
                    </div>
                    ${i !== p.timelineSteps.length - 1 ? '<div className="flex-1 w-px bg-light-grey my-2"></div>' : ''}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-display font-bold text-[20px] text-ink mb-2">${s.title}</h3>
                    <p className="font-sans text-[16px] text-mid-grey">${s.description}</p>
                  </div>
                </div>
              </Reveal>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }
  
  const additionalParagraphHtml = p.additionalParagraph 
    ? `
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="max-w-3xl mx-auto font-sans text-[17px] text-ink leading-relaxed space-y-4 text-center">
            <Reveal>
              ${p.additionalParagraph.split('\\n\\n').map((para: string) => `<p>${para.replace(/\\n/g, '<br/>')}</p>`).join('')}
            </Reveal>
          </div>
        </div>
      </section>
    ` 
    : '';

  return `
import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionInk from "@/components/SectionInk";

export const metadata: Metadata = {
  title: ${JSON.stringify(p.title)},
  description: ${JSON.stringify(p.description)},
  alternates: { canonical: ${JSON.stringify(urlPath)} },
  openGraph: {
    title: ${JSON.stringify(p.title)},
    description: ${JSON.stringify(p.description)},
    url: "https://turbobytesconsulting.com${urlPath}",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: ${JSON.stringify(p.title)},
    description: ${JSON.stringify(p.description)},
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: ${JSON.stringify(p.h1)},
  provider: {
    "@type": "Organization",
    name: "Turbo Bytes Consulting",
    url: "https://turbobytesconsulting.com",
  },
  url: "https://turbobytesconsulting.com${urlPath}",
  description: ${JSON.stringify(p.description)},
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ${p.faq.map((f: any) => `{
      "@type": "Question",
      name: ${JSON.stringify(f.q)},
      acceptedAnswer: {
        "@type": "Answer",
        text: ${JSON.stringify(f.a.replace(/<[^>]*>/g, ''))}
      }
    }`).join(',\n    ')}
  ]
};

export default function ServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── BREADCRUMB ── */}
      <nav aria-label="Breadcrumb" className="bg-ivory border-b border-light-grey">
        <div className="container-tbc py-3">
          <ol className="flex items-center gap-2 font-display text-[13px] uppercase tracking-widest text-mid-grey">
            <li><Link href="/" className="hover:text-ink transition-colors">Home</Link></li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li><Link href="/services" className="hover:text-ink transition-colors">Services</Link></li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li className="text-ink font-bold" aria-current="page">${p.h1}</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-ink overflow-hidden min-h-[400px] flex items-center border-b border-light-grey">
        <div className="container-tbc py-s6 relative z-10">
          <Reveal>
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6 text-balance">
              ${p.h1}
            </h1>
            <p className="text-body text-white/70 leading-relaxed max-w-3xl mb-8 text-pretty">
              ${p.subhead}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PROBLEMS ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow">THE FRICTION</span>
                <h2 className="font-display font-bold text-[clamp(26px,3vw,34px)] text-ink leading-[1.2] mb-6">
                  The Problem It Solves
                </h2>
                <hr className="gold-rule mb-8" />
              </Reveal>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              ${p.problems.map((prob: any, i: number) => `
                <Reveal delay={${i * 0.10}}>
                  <div className="bg-white border border-light-grey rounded p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                    <span className="font-display font-bold text-[13px] text-gold tracking-widest mb-3 block">0${i + 1}</span>
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-3">${prob.title}</h3>
                    <p className="text-body text-mid-grey">${prob.description}</p>
                  </div>
                </Reveal>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-s6">
            <Reveal>
              <span className="eyebrow">THE CAPABILITIES</span>
              <h2 className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
                ${p.featuresTitle}
              </h2>
              <hr className="gold-rule gold-rule--center" />
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${p.includedFeatures.map((feat: any, i: number) => `
              <Reveal delay={${i * 0.06}}>
                <article className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug">${feat.title}</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    ${feat.items.map((item: string) => `
                      <li className="flex items-start gap-3">
                        <span className="mt-[8px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="text-body text-mid-grey text-pretty" dangerouslySetInnerHTML={{ __html: ${JSON.stringify(item)} }} />
                      </li>
                    `).join('')}
                  </ul>
                </article>
              </Reveal>
            `).join('')}
          </div>
        </div>
      </section>

      ${timelineHtml}
      ${additionalParagraphHtml}
      ${proofHtml}

      {/* ── FAQ ── */}
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-s6">
            <Reveal>
              <span className="eyebrow">FAQ</span>
              <h2 className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
                Frequently Asked Questions
              </h2>
              <hr className="gold-rule gold-rule--center" />
            </Reveal>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            ${p.faq.map((faq: any, i: number) => `
              <Reveal delay={${i * 0.06}}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>${faq.q}</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: ${JSON.stringify(faq.a)} }} />
                </details>
              </Reveal>
            `).join('')}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <SectionInk className="text-center">
        <div className="container-tbc">
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(26px,3.5vw,40px)] text-white leading-[1.2] max-w-3xl mx-auto mb-6">
              ${p.ctaBlock}
            </h2>
            <div className="flex items-center justify-center gap-4 flex-wrap mt-10">
              <Link href="/book-consultation" className="btn-gold px-8 py-4 text-[16px]">
                Book a 30-minute scoping call
              </Link>
              <a href="https://wa.me/919354784377" target="_blank" rel="noopener noreferrer" className="btn-gold bg-transparent border border-gold text-gold hover:bg-gold/10 px-8 py-4 text-[16px]">
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </SectionInk>
    </>
  );
}
`;
}

function generateLocationPage(p: any) {
  const urlPath = p.path.replace('app', '').replace('/page.tsx', '');
  
  let addressBlockHtml = '';
  if (p.addressBlock) {
    addressBlockHtml = `
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <Reveal>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-ivory border border-light-grey rounded p-8">
              <div>
                <h3 className="font-display font-bold text-[24px] text-ink mb-4">Meet in person</h3>
                <p className="font-sans text-[16px] text-mid-grey mb-2">Kasana Tower, Alpha I<br/>Greater Noida, Uttar Pradesh</p>
                <p className="font-sans text-[16px] text-mid-grey mb-6">+91 93547 84377</p>
                <Link href="/book-consultation" className="btn-gold px-6 py-3">Book a visit</Link>
              </div>
              <div className="h-[200px] bg-light-grey rounded overflow-hidden flex items-center justify-center">
                <span className="text-mid-grey text-sm">[Embedded Google Map]</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    `;
  }

  return `
import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionInk from "@/components/SectionInk";

export const metadata: Metadata = {
  title: ${JSON.stringify(p.title)},
  description: ${JSON.stringify(p.description)},
  alternates: { canonical: ${JSON.stringify(urlPath)} }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: ${JSON.stringify(p.h1)},
  provider: {
    "@type": "Organization",
    name: "Turbo Bytes Consulting",
    url: "https://turbobytesconsulting.com",
  },
  url: "https://turbobytesconsulting.com${urlPath}",
  description: ${JSON.stringify(p.description)},
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Turbo Bytes Consulting",
  telephone: "+91 93547 84377",
  url: "https://turbobytesconsulting.com${urlPath}",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kasana Tower, Alpha I",
    addressLocality: "Greater Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ${p.faq.map((f: any) => `{
      "@type": "Question",
      name: ${JSON.stringify(f.q)},
      acceptedAnswer: {
        "@type": "Answer",
        text: ${JSON.stringify(f.a.replace(/<[^>]*>/g, ''))}
      }
    }`).join(',\n    ')}
  ]
};

export default function LocationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav aria-label="Breadcrumb" className="bg-ivory border-b border-light-grey">
        <div className="container-tbc py-3">
          <ol className="flex items-center gap-2 font-display text-[13px] uppercase tracking-widest text-mid-grey">
            <li><Link href="/" className="hover:text-ink transition-colors">Home</Link></li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li className="text-ink font-bold" aria-current="page">${p.h1}</li>
          </ol>
        </div>
      </nav>

      <section className="bg-ink overflow-hidden min-h-[400px] flex items-center border-b border-light-grey">
        <div className="container-tbc py-s6 relative z-10">
          <Reveal>
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6 text-balance">
              ${p.h1}
            </h1>
            <p className="text-body text-white/70 leading-relaxed max-w-3xl mb-8 text-pretty">
              ${p.subhead}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${p.sections.map((sec: any, i: number) => `
              <Reveal delay={${i * 0.10}}>
                <article className="bg-white border border-light-grey rounded p-8 shadow-card h-full">
                  <h3 className="font-display font-bold text-[20px] text-ink leading-snug mb-4">${sec.title}</h3>
                  <p className="text-body text-mid-grey leading-relaxed" dangerouslySetInnerHTML={{ __html: ${JSON.stringify(sec.content)} }} />
                </article>
              </Reveal>
            `).join('')}
          </div>
        </div>
      </section>

      ${addressBlockHtml}

      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-s6">
            <Reveal>
              <span className="eyebrow">FAQ</span>
              <h2 className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">Frequently Asked Questions</h2>
              <hr className="gold-rule gold-rule--center" />
            </Reveal>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            ${p.faq.map((faq: any, i: number) => `
              <Reveal delay={${i * 0.06}}>
                <details className="group border border-light-grey rounded bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                    <span>${faq.q}</span>
                    <span className="text-gold group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b" dangerouslySetInnerHTML={{ __html: ${JSON.stringify(faq.a)} }} />
                </details>
              </Reveal>
            `).join('')}
          </div>
        </div>
      </section>

      <SectionInk className="text-center">
        <div className="container-tbc">
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(26px,3.5vw,40px)] text-white leading-[1.2] max-w-3xl mx-auto mb-6">
              Start a Conversation
            </h2>
            <div className="flex items-center justify-center gap-4 flex-wrap mt-10">
              <Link href="/book-consultation" className="btn-gold px-8 py-4 text-[16px]">
                Book a 30-minute scoping call
              </Link>
              <a href="https://wa.me/919354784377" target="_blank" rel="noopener noreferrer" className="btn-gold bg-transparent border border-gold text-gold hover:bg-gold/10 px-8 py-4 text-[16px]">
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </SectionInk>
    </>
  );
}
`;
}

async function run() {
  for (const p of pages) {
    const fullPath = path.join('c:/Users/user/OneDrive/Desktop/TBC/tbc-website', p.path);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, generateServicePage(p));
    console.log('Wrote', p.path);
  }
  for (const p of locationPages) {
    const fullPath = path.join('c:/Users/user/OneDrive/Desktop/TBC/tbc-website', p.path);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, generateLocationPage(p));
    console.log('Wrote', p.path);
  }
}

run();
