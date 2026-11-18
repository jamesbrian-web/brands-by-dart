
const fs = require('node:fs');
const path = require('node:path');
const out = path.join(__dirname, 'dist');
const services = [
 ['branding','Brand Identity & Branding','Build a brand that means business.','For founders launching a business and established companies ready for a refresh.','We develop a visual identity that reflects your business and stays consistent wherever customers see it.','Logo design and brand refreshes|Brand strategy and visual positioning|Colour palettes and typography|Brand guidelines and identity manuals|Stationery and branded templates|Packaging and label design|Print and digital brand applications','Build your brand'],
 ['web-design','Website Design','Make your digital first impression count.','For businesses launching a new site or improving an existing one.','We design responsive websites that explain what you offer and make it easy for customers to take the next step. Development can be coordinated when included in the agreed scope.','Business and corporate websites|Website redesign|Responsive and accessible layouts|Landing pages|E-commerce interface design|UI and UX design|Figma prototypes|Website graphics|Conversion-focused page layouts','Discuss your website'],
 ['corporate-design','Corporate & Marketing Design','Give every business document a clear purpose.','For marketing teams and established companies that need consistent communications.','We design print and digital materials that make complex information clear and reflect the quality of your business.','Company profiles|Brochures and catalogues|Corporate stationery|Business proposals and annual reports|Newsletters and publications|Flyers and leaflets|Exhibition and event artwork|Signage and print-ready packaging','Request corporate design'],
 ['presentation-design','Pitch Decks & Presentations','Big ideas deserve powerful presentations.','For startup founders, sales teams and corporate teams presenting to decision-makers.','We shape your material into a clear visual story, with thoughtful layouts and data visualisation that help the audience follow your argument.','Investor pitch decks|Fundraising and sales presentations|Corporate PowerPoint and Google Slides decks|Business proposals and company introductions|Financial and data presentation design|Product presentations|Templates and deck redesigns','Design my presentation'],
 ['digital-marketing-design','Digital Advertising & Social Media Design','Creative content that stops the scroll.','For businesses launching products, promoting services or building a consistent presence online.','We create advertising and social assets around your audience and campaign objectives, with versions suited to the channels you use.','Campaign visual concepts|Facebook and Instagram ad graphics|LinkedIn graphics|Digital banners|Social posts and carousels|Email marketing graphics|Digital brand templates|Asset resizing and adaptation','Elevate your marketing'],
 ['design-retainers','Ongoing Creative Support','Your creative team. On your terms.','For businesses that need dependable creative support throughout the year.','We get to know your brand and agree a regular schedule of deliverables, with workload and turnaround tailored to what you need.','Regular marketing and campaign graphics|Corporate documents|Sales presentation updates|Website graphics|Stationery and branded templates|Brochure and catalogue updates|Design adaptations','Explore a design partnership'],
 ['white-label-design','Agency & White-Label Design Support','More creative capacity. Same high standards.','For agencies and consultancies that need extra design capacity during busy periods or longer-term support.','We work to your brief, process and confidentiality requirements while you manage your client relationship.','Brand identity support|Marketing artwork production|Website interface design|Corporate brochures and publications|Presentation design|Campaign and social assets|Production and adaptation|Recurring outsourced design','Partner with our studio']
];
const serviceNotes = {
 branding: ['Where will your brand need to work?', 'A name on a proposal, a mark on packaging and a profile picture all ask different things of an identity. We identify your most important uses early and design the system around them.', 'Bring any existing brand assets and two or three places customers see you most often.'],
 'web-design': ['What should visitors do next?', 'A site for a consultancy may need to turn a reader into an enquiry. A product site may need to explain how something works before the visitor is ready to buy. We use that next step to shape the navigation, page hierarchy and calls to action.', 'Bring your current site, if you have one, and tell us which action you most want visitors to take.'],
 'corporate-design': ['Make the document easy to use in the room.', 'A company profile needs to read well on its own. A sales brochure also needs to work while someone talks through it. We plan the information around how each piece will be read, shared and updated.', 'Send an existing document or outline, the audience, and whether the finished piece is for screen, print or both.'],
 'presentation-design': ['Give each slide one job.', 'An investor reading a deck after a meeting needs more context than an audience watching a talk. We structure the material around how the deck will be used and make the essential figures easy to find.', 'Share your draft, any verified figures and whether the deck will be presented live, circulated or used both ways.'],
 'digital-marketing-design': ['Build a campaign people can recognise across channels.', 'The same idea has to read quickly in a small placement and still hold up in a larger format. We design around the offer, the intended action and the placements you plan to use.', 'Share the offer, your planned channels and any sizes or deadlines already agreed with your media team.'],
 'design-retainers': ['Start with the work that keeps coming back.', 'Monthly reports, campaign graphics and sales updates are good places to start. We use those needs to agree priorities, review rounds and a realistic rhythm for delivery.', 'List the tasks from a typical month and flag the ones with fixed deadlines.'],
 'white-label-design': ['Set the handoff before the first brief.', 'We agree where briefs and feedback live, who approves work and how files are handed over. That gives your agency a clear review process while you manage the client relationship.', 'Tell us how your team briefs designers, who reviews the work and which confidentiality terms apply.']
};
const work = [
 {
  id: 'brands-by-dart-identity',
  name: 'Brands by Dart visual identity',
  category: 'Brand Identity',
  art: 'identity',
  description: 'An identity for our own studio, built around clarity, contrast and a cut in the D.',
  brief: 'We needed an identity that could sit comfortably on a corporate proposal and still feel at home on a campaign. It also had to be recognisable in the small space of a browser tab.',
  approach: 'We put the name first and used a small angled cut in the D as the signature detail. Midnight navy gives the wordmark a firm base, and electric lime draws attention to the actions and details that matter.',
  result: 'The identity includes a navy wordmark for light backgrounds, a white version for dark backgrounds and a D monogram for small formats. You can see the system in use in the header, browser tab and homepage of this site.',
  service: '/services/branding/'
 },
 {
  id: 'brands-by-dart-website',
  name: 'Brands by Dart website',
  category: 'Website Design',
  art: 'website',
  description: 'Our own website, designed around a simple question: what can this studio do for my business?',
  brief: 'Brands by Dart offers seven services, from brand identity to ongoing creative support. The site needed to explain that range clearly and give business owners a simple route to discuss the work they needed.',
  approach: 'We gave the homepage a bold navy-and-lime opening, then used white layouts for pages where visitors compare services, review deliverables or read how a project works. Each service has a dedicated page with an audience, deliverables and a next step.',
  result: 'This site is the result. It brings our visual identity, service information and studio process together in one place, with layouts that adapt from a phone to a desktop.',
  service: '/services/web-design/'
 }
];
const process = [
 ['Tell us about your project','Share your objectives, audience and what a successful outcome would look like.'],
 ['Scope & proposal','Agree the deliverables, creative requirements, timeline and quotation.'],
 ['Creative development','Develop the creative direction around the brief and brand requirements.'],
 ['Review & refinement','Review the work and share feedback during the agreed revision rounds.'],
 ['Final delivery','Receive the agreed files, with ongoing creative support available as needed.']
];
const nav = [['/portfolio/','Our Work'],['/services/','Services'],['/about/','About'],['/our-process/','Our Process'],['/contact/','Contact']];
const tagline = 'Creative That Means Business.';
const brand = (dark = false) => '<a class="brand" href="/" aria-label="Brands by Dart home"><img src="/assets/wordmark-'+(dark?'white':'navy')+'.png" width="1398" height="207" alt="Brands by Dart"></a>';
const button = (href,label,style='') => '<a class="btn '+style+'" href="'+href+'">'+label+' <span aria-hidden="true">↗</span></a>';
const contact = '/contact/';
const enquiryEmail = 'info@brandsbydart.ie';
const emailLink = '<a class="text-link" href="mailto:'+enquiryEmail+'">'+enquiryEmail+'</a>';
const intro = (label,title,body) => '<section class="page-intro wrap"><p class="eyebrow">'+label+'</p><h1>'+title+'</h1><p class="lead">'+body+'</p></section>';
const cta = (title="Let's work together.") => '<section class="closing"><div class="wrap call"><div><h2>'+title+'</h2><p>Tell us what you’re working on and what you want to achieve.</p></div>'+button(contact,'Discuss Your Project')+'</div></section>';
const description = 'Brands by Dart provides professional branding, website design, corporate graphic design, pitch decks and creative services for businesses across Ireland.';
const links = nav.map(([url,label])=>'<a href="'+url+'">'+label+'</a>').join('');
function page(url,title,body,summary=description){
 const dir = path.join(out,url);
 fs.mkdirSync(dir,{recursive:true});
 const html = '<!doctype html><html lang="en-IE"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><meta name="description" content="'+summary+'"><title>'+title+'</title><link rel="icon" href="/assets/monogram.png" type="image/png"><link rel="stylesheet" href="/assets/site.css"><script defer src="/assets/site.js"></script></head><body><a class="skip" href="#main">Skip to content</a><header><div class="wrap bar">'+brand()+'<button class="menu" type="button" aria-expanded="false" aria-controls="nav">Menu</button><nav id="nav" aria-label="Main navigation"><a href="/">Home</a>'+links+'</nav>'+button(contact,'Discuss Your Project','outline')+'</div></header><main id="main">'+body+'</main><footer><div class="wrap foot"><div>'+brand(true)+'<p>'+tagline+'</p><p>Remote creative services for businesses across Ireland.</p></div><nav aria-label="Footer navigation"><a href="/">Home</a>'+links+'</nav><div><p>© 2026 Brands by Dart</p><p>'+emailLink+'</p><a href="/privacy/">Privacy</a> · <a href="/cookies/">Cookies</a> · <a href="/terms/">Terms</a></div></div></footer></body></html>';
 const relativeRoot = '../'.repeat(url.split('/').filter(Boolean).length) || './';
 const portableHtml = html.replace(/\b(href|src)="\/(?!\/)/g, (_, attribute) => attribute+'="'+relativeRoot);
 fs.writeFileSync(path.join(dir,'index.html'),portableHtml);
}
const serviceList = () => '<div class="service-list">'+services.map(([id,name,,who,detail])=>'<a class="service" href="/services/'+id+'/"><h3>'+name+'</h3><p>'+detail+'</p><span aria-hidden="true">↗</span></a>').join('')+'</div>';
const workArt = (work) => work.art === 'identity'
 ? '<div class="work-art identity-art"><img src="/assets/wordmark-white.png" width="1398" height="207" alt="Brands by Dart wordmark in white"><img src="/assets/monogram.png" width="128" height="128" alt="Brands by Dart D monogram on lime"></div>'
 : '<div class="work-art website-art" aria-hidden="true"><img src="/assets/wordmark-navy.png" width="1398" height="207" alt=""><div><strong>Great businesses<br>deserve great <em>design.</em></strong></div></div>';
const workList = () => '<div class="work-grid">'+work.map(project=>'<article class="tile"><a href="/portfolio/'+project.id+'/">'+workArt(project)+'<div class="tile-note"><div><h3>'+project.name+'</h3><p>'+project.category+' · Studio project</p><p>'+project.description+'</p></div><span aria-hidden="true">↗</span></div></a></article>').join('')+'</div>';
const steps = (items) => '<ol class="steps">'+items.map(([name,details])=>'<li><h3>'+name+'</h3><p>'+details+'</p></li>').join('')+'</ol>';
page('/','Brands by Dart | Branding, Web Design & Creative Studio Ireland',
 '<section class="hero"><div class="wrap hero-inner"><h1>Great businesses<br>deserve great<br><em>design.</em></h1><p>Creative design solutions for ambitious brands across Ireland.</p><div class="actions">'+button(contact,'Discuss Your Project')+button('/services/','Explore Our Services','ghost')+'</div></div><div class="hero-mark" aria-hidden="true"><img src="/assets/monogram.png" width="128" height="128" alt=""></div></section>'+
 '<section class="wrap snapshot"><div><h2>'+tagline+'</h2><p>Remote-first creative support for businesses across Ireland.</p></div><div><h2>Creative services</h2><div class="quick"><a href="/services/branding/">Brand Identity</a><a href="/services/web-design/">Website Design</a><a href="/services/corporate-design/">Corporate Design</a><a href="/services/presentation-design/">Pitch Decks &amp; Presentations</a></div><a class="text-link" href="/services/">View all seven services ↗</a></div></section>'+
 '<section class="soft section"><div class="wrap"><div class="section-head"><h2>Studio work</h2><a href="/portfolio/">View our portfolio ↗</a></div>'+workList()+'</div></section>'+
 '<section class="section wrap split"><h2>Your ideas. Our creativity. Real impact.</h2><div><p class="lead">A new brand might need a visual identity people remember. An established business might need a website that explains its offer or a pitch deck that makes the numbers easier to follow. We design around the job each piece has to do.</p><a class="text-link" href="/about/">Discover our studio ↗</a></div></section>'+
 '<section class="section wrap"><div class="section-head"><h2>What we do</h2><a href="/services/">Explore our services ↗</a></div>'+serviceList()+'</section>'+
 '<section class="section soft"><div class="wrap"><div class="section-head"><h2>A creative partner you can count on.</h2></div><div class="benefits"><div><h3>Design with purpose</h3><p>We start with your audience and what your business needs to achieve.</p></div><div><h3>Support that fits</h3><p>Get help with a single project or work with us on an ongoing basis.</p></div><div><h3>Work together from anywhere</h3><p>Collaborate through online consultations, project updates and clear feedback rounds.</p></div></div></div></section>'+
 '<section class="section wrap"><div class="section-head"><h2>Great work starts with a conversation.</h2><a href="/our-process/">Our process ↗</a></div>'+steps([['Discover','Learn about your business, audience and goals.'],['Define','Agree scope, creative direction and timelines.'],['Design','Develop the work and refine it with your feedback.'],['Deliver','Hand over the agreed assets, ready to use.']])+'</section>'+cta("Let’s make your brand impossible to ignore."));
page('/services/','Creative Design Services Ireland | Brands by Dart',intro('Services','Design for every stage of your business.','From brand identity and web design to campaign artwork, presentations and ongoing creative support.')+'<section class="wrap section compact">'+serviceList()+'</section>'+cta());
for (const [id,name,head,who,detail,items,action] of services) {
 page('/services/'+id+'/',name+' Ireland | Brands by Dart',intro(name,head,detail)+'<section class="section wrap split"><div><h2>Who it’s for</h2><p class="lead">'+who+'</p></div><div><h2>What we can deliver</h2><ul class="deliverables">'+items.split('|').map(x=>'<li>'+x+'</li>').join('')+'</ul>'+button(contact+'?service='+id,action,'ink')+'</div></section><section class="section soft"><div class="wrap split"><h2>'+serviceNotes[id][0]+'</h2><div><p class="lead">'+serviceNotes[id][1]+'</p><h3>What to send us</h3><p>'+serviceNotes[id][2]+'</p></div></div></section>'+cta(),name+' for businesses across Ireland. '+detail);
}
page('/about/','About the Studio | Brands by Dart',intro('About us','A creative studio for ambitious businesses.','Brands by Dart is a remote-first creative design studio helping businesses across Ireland build stronger brands and communicate with confidence.')+
 '<section class="section wrap split"><div><h2>Our mission</h2><p class="lead">Help ambitious businesses grow their presence through thoughtful, distinctive and professionally executed design.</p></div><div><h2>Our vision</h2><p class="lead">Become a trusted creative partner for businesses in Ireland and beyond, known for quality, originality and reliability.</p></div></section><section class="section soft"><div class="wrap"><h2>What we believe</h2><div class="benefits"><div><h3>Clarity matters</h3><p>Good design makes the message easier to understand.</p></div><div><h3>Details build trust</h3><p>Typography, composition and consistency all affect how people see your business.</p></div><div><h3>Partnership makes stronger work</h3><p>Understanding your business helps us make better creative decisions together.</p></div></div></div></section>'+cta());
page('/our-process/','Our Creative Process | Brands by Dart',intro('Our Process','Good design starts with good understanding.','From the first conversation to final delivery, we agree on what you need, how we’ll work together and what you’ll receive.')+'<section class="section wrap compact">'+steps(process)+'</section>'+cta());
page('/portfolio/','Studio Work | Brands by Dart',intro('Our work','Made by Brands by Dart.','See how we applied our own approach to a visual identity and a website, from the first design decisions to the details you see on these pages.')+
 '<section class="section wrap compact" aria-label="Studio projects">'+workList()+'</section>'+cta('What are you working on?'),
 'Explore the Brands by Dart visual identity and website, two in-house studio projects.');
for (const project of work) {
 page('/portfolio/'+project.id+'/',project.name+' | Brands by Dart',intro(project.category+' · Studio project',project.name,project.description)+
 '<section class="wrap case" aria-label="Project artwork">'+workArt(project)+'</section>'+
 '<section class="section wrap split"><div class="prose"><h2>The brief</h2><p>'+project.brief+'</p><h2>Our approach</h2><p>'+project.approach+'</p></div><div class="prose"><h2>What we made</h2><p>'+project.result+'</p><a class="text-link" href="'+project.service+'">Explore '+project.category.toLowerCase()+' services ↗</a></div></section>'+cta(), project.description);
}
const field = (label,name,type='text',required=true)=>'<label>'+label+'<input name="'+name+'" type="'+type+'" '+(required?'required':'')+' maxlength="160"></label>';
const select = (label,name,options,required=false)=>'<label>'+label+'<select name="'+name+'" '+(required?'required':'')+'><option value="">Select an option</option>'+options.map(([value,label])=>'<option value="'+value+'">'+label+'</option>').join('')+'</select></label>';
page('/contact/','Discuss Your Project | Brands by Dart',intro('Contact','Have a project in mind? Let’s talk.','Tell us what you want to change, who you want to reach and when you need the work. A rough brief is enough for a first conversation.')+
 '<section class="section wrap compact contact-grid"><div><h2>Request a quote</h2><p>If you have a deadline, an existing website or materials we should see, include those in your brief. Tell us if you’d prefer to talk through the details on a call.</p><p class="availability-note">Email your brief to '+emailLink+'. You can use the questions here to plan what to include.</p></div><form id="enquiry" method="post" autocomplete="off"><fieldset disabled><legend class="sr-only">Project enquiry</legend><div class="form-grid">'+field('Full name','name')+field('Company or organisation','company')+field('Email address','email','email')+field('Phone number (optional)','phone','tel',false)+select('Service required','service',services.map(([id,name])=>[id,name]),true)+select('Preferred timeline (optional)','timeline',[['urgent','Within a month'],['soon','Within 1–3 months'],['flexible','Flexible']])+select('Estimated budget (optional)','budget',[['under2','Under €2,000'],['2to5','€2,000–€5,000'],['5to10','€5,000–€10,000'],['over10','Over €10,000'],['discuss','Let’s discuss']])+'<label class="full">Tell us about your project<textarea name="project" required maxlength="3000" rows="6"></textarea></label></div><button class="btn ink" type="submit" disabled>Send Project Enquiry</button></fieldset></form></section>');
const policySection = (title, body) => '<section><h2>'+title+'</h2>'+body+'</section>';
const policyBody = (sections) => '<div class="section wrap compact"><div class="policy-content">'+sections.join('')+'</div></div>';
page('/privacy/','Privacy | Brands by Dart',
 intro('Website information','Privacy','How this website handles information when you browse it.')+
 policyBody([
  policySection('Project enquiries','<p>The enquiry form is disabled. Brands by Dart does not receive or store information through it. If you email '+emailLink+', we use the details you share to reply to your message and discuss your project.</p>'),
  policySection('Website hosting','<p>The hosting service may process technical information, such as IP addresses and browser information, to serve pages and protect the service. If the site requires sign-in, the hosting service handles that sign-in.</p>'),
  policySection('Cookies and tracking','<p>See our <a href="/cookies/">cookie notice</a> for details on website tracking and sign-in.</p>')
 ]), 'How the Brands by Dart website handles information when you browse it.');
page('/cookies/','Cookies | Brands by Dart',
 intro('Website information','Cookies','How browser storage and tracking are used on this website.')+
 policyBody([
  policySection('Website tracking','<p>The Brands by Dart website does not place analytics or advertising cookies. It does not load advertising pixels or third-party analytics scripts.</p>'),
  policySection('Sign-in','<p>If this website asks you to sign in, the hosting service may use cookies to recognise your browser and keep your session active. Clearing them may require you to sign in again.</p>'),
  policySection('Browser settings','<p>You can review, block or delete cookies through your browser settings.</p>')
 ]), 'Information about cookies, tracking and sign-in on the Brands by Dart website.');
page('/terms/','Website Terms | Brands by Dart',
 intro('Website information','Website terms','How to use this website and what to expect when discussing a project with Brands by Dart.')+
 policyBody([
  policySection('Services and quotations','<p>We scope each project individually. Our proposal sets out the deliverables, timeline, fees and revision arrangements for the work. A project begins once the scope and terms are agreed.</p>'),
  policySection('Work displayed on this site','<p>The portfolio identifies studio projects by name and explains what we designed. Please ask before reproducing our wordmark, artwork or site copy. Terms for using files delivered as part of a client project are set out in the project agreement.</p>'),
  policySection('Privacy','<p>Read our <a href="/privacy/">privacy notice</a> for information about browsing this website.</p>')
 ]), 'Information about Brands by Dart services, quotations and use of this website.');
