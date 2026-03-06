/**
 * Location hub page content: Drainage profiles, landmarks, FAQs, and case studies
 * Each location has unique, genuinely researched content optimized for SEO and user experience
 */

export interface LocationHubFAQ {
  question: string;
  answer: string;
}

export interface LocationHubContent {
  landmarks: string[];
  drainageProfile: string;
  localFAQs: LocationHubFAQ[];
  caseStudy: string;
}

export const LOCATION_HUB_CONTENT: Record<string, LocationHubContent> = {
  sheffield: {
    landmarks: [
      "Sheffield Cathedral",
      "Meadowhall Shopping Centre",
      "University of Sheffield",
      "Sheffield Hallam University",
      "Crucible Theatre",
      "Kelham Island Museum",
      "Sheffield Winter Garden",
      "Millennium Gallery",
      "Sheffield Botanical Gardens",
      "Weston Park Museum",
      "Sheffield Town Hall",
      "Peace Gardens",
      "Ponderosa Park",
      "Abbeydale Industrial Hamlet",
      "Graves Park",
      "Endcliffe Park",
      "Forge Dam",
      "Sheffield Station",
      "Devonshire Quarter",
      "Fargate",
      "The Moor Market",
      "Sheffield Arena"
    ],
    drainageProfile: `Sheffield's drainage infrastructure is shaped by its extraordinary topography and industrial heritage. The city famously sits at the confluence of five rivers—the Don, Sheaf, Rivelin, Loxley, and Porter Brook—and is built across a series of steep hills and valleys that create some of the most complex drainage challenges in the UK. Water flows rapidly downhill through the city's network of Victorian-era pipes, placing immense pressure on aging infrastructure during heavy rainfall. The city centre, positioned where the Sheaf meets the Don, is particularly vulnerable to surface water accumulation, as demonstrated during the severe flooding events of 2007 and 2019.

The legacy of Sheffield's steel industry has left an indelible mark on its underground infrastructure. Many properties in areas like Kelham Island, Attercliffe, and the Lower Don Valley sit on former industrial sites where complex networks of culverted watercourses, mill races, and industrial drainage channels remain partially in place beneath modern development. These historic waterways can interact unpredictably with modern drainage systems, creating blockages and flooding issues that require specialist knowledge to diagnose and resolve.

Sheffield's geology adds further complexity. The western side of the city sits on gritstone and coal measures, while the eastern side transitions to magnesian limestone. This geological diversity means soil conditions and groundwater behaviour vary significantly across the city. Properties in areas like Crookes and Walkley, built on steep hillsides with shallow bedrock, experience different drainage challenges from those on the flatter clay soils of the eastern suburbs. Victorian-era clay pipes, still serving thousands of Sheffield properties, respond differently to these varied ground conditions—some sections remain remarkably sound while others have deteriorated significantly.

Yorkshire Water manages the public sewer network across Sheffield, and the city's combined sewer system—carrying both foul water and surface water in a single pipe—is common in older neighbourhoods. During intense rainfall, these combined sewers can be overwhelmed, leading to sewer flooding and combined sewer overflows into local watercourses. Property owners in lower-lying areas near the rivers should be particularly aware of this risk and consider installing backflow prevention devices. Our engineers have extensive experience working across Sheffield's varied terrain, from the steep hillside terraces of Sharrow and Netherthorpe to the sprawling suburban estates of the south-west, and we understand the specific drainage character of each neighbourhood.`,
    localFAQs: [
      {
        question: "Why does Sheffield experience so many drainage problems during heavy rain?",
        answer: "Sheffield's position at the confluence of five rivers, combined with its steep hillside topography, means rainwater reaches the drainage system extremely quickly. Many older areas still use Victorian combined sewers that carry both rainwater and foul water in one pipe. During heavy downpours, these systems are overwhelmed, causing flooding and backflow into properties. The 2007 and 2019 floods demonstrated this vulnerability clearly. Properties in lower-lying areas near the Don and Sheaf are most at risk."
      },
      {
        question: "How does Sheffield's steel industry heritage affect drainage?",
        answer: "Sheffield's industrial past left a complex underground legacy. Areas like Kelham Island, Attercliffe, and the Lower Don Valley have historic mill races, culverted watercourses, and industrial drainage channels running beneath modern properties. These can interact with your domestic drainage in unexpected ways, causing blockages or flooding. If your property sits on a former industrial site, a CCTV drain survey is strongly recommended to map what lies beneath."
      },
      {
        question: "Is Yorkshire Water responsible for my blocked drain in Sheffield?",
        answer: "Yorkshire Water is responsible for the public sewer network—the shared pipes that serve multiple properties and run under public highways. However, you are typically responsible for the private drains within your property boundary, including the section connecting your home to the public sewer. If the blockage is in the shared sewer, Yorkshire Water should attend free of charge. If it is in your private drain, you will need a drainage engineer. We can help determine responsibility during our initial assessment."
      },
      {
        question: "Which Sheffield areas are most prone to drain problems?",
        answer: "Areas with the oldest infrastructure—particularly Victorian terraced neighbourhoods like Sharrow, Walkley, Netherthorpe, and Heeley—experience the most frequent issues due to aging clay pipes and tree root intrusion. Low-lying areas near the rivers, including the city centre, Hillsborough, and Brightside, are vulnerable to flooding. Hillside properties in Crookes, Stannington, and Lodge Moor face rapid surface water runoff challenges. Each area requires a tailored approach based on its specific terrain and infrastructure."
      }
    ],
    caseStudy: `Emergency call-out to a Victorian terrace in Sharrow: The homeowner reported raw sewage backing up through the ground-floor toilet and shower during a period of heavy rain. Our CCTV survey revealed a collapsed section of the original clay drain where it passed beneath a rear extension added in the 1960s. The weight of the extension foundations had gradually crushed the pipe over decades, reducing it to roughly 30% capacity. Tree roots from a neighbouring garden had colonised the damaged section, creating a near-total blockage. We excavated and replaced the collapsed four-metre section with modern PVC pipework, installed a new inspection chamber for future access, and performed high-pressure jetting on the remainder of the run. The repair was completed within a single day, restoring full drainage and preventing further sewage flooding. Result: the property now has reliable drainage with easy maintenance access, and the homeowner has peace of mind ahead of future heavy rainfall events.`
  },

  rotherham: {
    landmarks: [
      "Magna Science Adventure Centre",
      "Rotherham Minster",
      "Clifton Park and Museum",
      "Rotherham Town Hall",
      "New York Stadium",
      "Wentworth Woodhouse",
      "Rother Valley Country Park",
      "Catcliffe Glass Cone",
      "Boston Castle",
      "Keppel's Column",
      "Rotherham Central Station",
      "Parkgate Shopping Park",
      "Wath upon Dearne",
      "Rawmarsh",
      "Brinsworth",
      "Wickersley"
    ],
    drainageProfile: `Rotherham's drainage challenges are defined by its industrial heritage and its position along the River Don corridor. The town grew rapidly during the 18th and 19th centuries as iron, steel, and coal industries expanded, and much of the drainage infrastructure serving older properties dates from this period of rapid development. Victorian-era clay pipes, often laid hastily to serve rows of workers' housing, now struggle to meet the demands of modern living. Areas like Rawmarsh, Masbrough, and the town centre feature some of the oldest and most vulnerable drainage networks in South Yorkshire.

The River Don flows through the heart of Rotherham, and the town has experienced significant flooding events, most notably in 2007 when the Don burst its banks and caused widespread damage. Properties along the Don corridor—from Meadowhall through to Swinton—face ongoing flood risk, and the interaction between river levels and the sewer network means that rising river water can prevent drains from discharging properly, causing backflow into properties even when the drainage system itself is functioning correctly. Yorkshire Water has invested in flood alleviation measures, but individual property owners should still consider backflow prevention.

Former industrial sites across Rotherham present particular drainage challenges. The Magna Science Adventure Centre itself occupies a former steelworks, and many residential developments across the borough have been built on brownfield land where industrial contamination and legacy infrastructure complicate drainage work. Excavation on these sites can uncover unexpected obstacles—old foundations, buried pipework, and contaminated ground—that require specialist handling. The transition from heavy industry to residential use has been rapid in areas like Templeborough and Aldwarke, and drainage systems on these sites sometimes reflect compromises made during redevelopment.

The surrounding villages and suburbs each have their own drainage character. Wickersley and Bramley, built largely in the post-war period, feature concrete and clay pipe systems of varying quality. Wentworth and the rural areas to the west have longer drainage runs through agricultural land, where ground movement and root intrusion are common. Wath upon Dearne and Swinton, former mining communities, sometimes sit above old mine workings that can cause ground subsidence affecting drainage pipework. Our engineers understand these local variations and bring area-specific expertise to every job.`,
    localFAQs: [
      {
        question: "How does Rotherham's industrial past affect residential drainage?",
        answer: "Many Rotherham properties sit on or near former industrial sites—steelworks, ironworks, and collieries. Legacy infrastructure including old foundations, buried pipework, and contaminated ground can complicate drainage work. Properties built on brownfield sites may have drainage systems that were designed as compromises during redevelopment. CCTV surveys are particularly important here to understand what lies beneath your property before problems develop."
      },
      {
        question: "Is my Rotherham property at risk of flooding from the River Don?",
        answer: "Properties along the Don corridor from Meadowhall through to Swinton face genuine flood risk, as demonstrated in 2007 and subsequent events. When river levels rise, the sewer network cannot discharge effectively, causing backflow into properties. Check your flood risk on the Environment Agency website, maintain clear drains, and consider installing a backflow preventer if you are in a high-risk zone. Yorkshire Water also provides information on local flood alleviation schemes."
      },
      {
        question: "Do former mining areas in Rotherham have specific drainage problems?",
        answer: "Yes. Areas like Wath upon Dearne, Swinton, and parts of Rawmarsh sit above old coal mine workings. Ground subsidence from historic mining can cause drainage pipes to crack, separate at joints, or lose their gradient. If you notice slow drainage or recurring blockages in a former mining area, a CCTV survey can identify whether subsidence damage is the underlying cause."
      },
      {
        question: "Who should I call for a blocked drain in Rotherham—Yorkshire Water or a private engineer?",
        answer: "If the blockage is in the public sewer (the shared pipe serving multiple properties, usually running under the road), Yorkshire Water is responsible and will attend free of charge. If the blockage is in your private drain—the pipe within your property boundary connecting to the public sewer—you need a private drainage engineer. We can attend quickly, diagnose the issue, and advise on responsibility if there is any uncertainty."
      }
    ],
    caseStudy: `Call-out to a 1930s semi-detached property in Wickersley: The homeowner had experienced slow drainage for several months, with the kitchen sink and downstairs toilet both draining sluggishly. Previous attempts with shop-bought drain unblocker had provided only temporary relief. Our CCTV survey revealed two separate issues: a significant fat and grease accumulation in the kitchen waste pipe (common in properties of this era where kitchen drainage runs are long and have minimal fall), and root intrusion from a privet hedge into the main drain at the boundary. We cleared the grease buildup using high-pressure jetting, removed the root mass, and recommended the homeowner consider a root barrier installation along the hedge line. Total time on site: three hours. Result: drainage restored to full flow with advice on preventing grease buildup and managing root risk going forward.`
  },

  doncaster: {
    landmarks: [
      "Doncaster Racecourse",
      "Frenchgate Centre",
      "Doncaster Minster",
      "Conisbrough Castle",
      "Cusworth Hall and Park",
      "Doncaster Museum and Art Gallery",
      "Keepmoat Stadium",
      "Doncaster Market",
      "Yorkshire Wildlife Park",
      "Brodsworth Hall",
      "The Dome Leisure Centre",
      "Doncaster Station",
      "Lakeside",
      "Mexborough",
      "Thorne",
      "Hatfield"
    ],
    drainageProfile: `Doncaster presents drainage challenges fundamentally different from the hilly terrain of Sheffield and its western neighbours. The borough sits on the flat, low-lying plain of the River Don as it flows eastward toward the Humber, and much of the surrounding area—particularly to the east around Thorne, Hatfield, and the Isle of Axholme—was historically marshland that has been progressively drained over centuries. This flat terrain means drainage systems rely almost entirely on minimal gradients and pumping stations rather than the natural gravity-fed flow found in hillier locations. When these systems are compromised by blockages, the consequences can be severe because water has nowhere else to go.

The flat topography also means Doncaster is particularly vulnerable to flooding. The town experienced catastrophic flooding in November 2019 when the River Don overflowed, devastating communities in Bentley, Toll Bar, and Fishlake. Properties in these areas remain at elevated flood risk, and the interaction between river levels, surface water drainage, and the sewer network creates complex challenges during heavy rainfall. Standing water is a recurring issue in low-lying streets, and blocked drains in Doncaster can cause localised flooding far more quickly than in areas with natural slope to carry water away.

Doncaster's geological profile—predominantly flat alluvial deposits over magnesian limestone and sandstone—creates specific ground conditions that affect drainage infrastructure. The soft, sometimes waterlogged ground in eastern areas can cause pipe settlement and loss of gradient over time, leading to sections where water pools rather than flows. In the western parts of the borough, around Conisbrough and Sprotbrough where the land rises slightly, the ground conditions are firmer but properties often have longer runs to connect to main sewers in the valley below.

The town's mix of property types adds further variation. The Victorian terraces around the town centre and Hexthorpe feature aging clay pipe systems typical of their era. Large post-war housing estates in Intake, Cantley, and Bessacarr were built with concrete and clay drainage that is now reaching the end of its design life. Former mining communities at Armthorpe, Edlington, and Rossington may sit above old workings where subsidence has affected pipe alignment. Yorkshire Water manages the public sewer network, but private drains on flat terrain require particular attention to maintain the minimal gradients that keep water flowing.`,
    localFAQs: [
      {
        question: "Why do drains block more easily on Doncaster's flat terrain?",
        answer: "Unlike hilly Sheffield where gravity helps move water through pipes quickly, Doncaster's flat topography means drainage systems operate on very slight gradients. Any debris, fat buildup, or pipe settlement that reduces this gradient can cause water to pool rather than flow, leading to blockages. Regular maintenance is particularly important in Doncaster because the system has less natural capacity to self-clear than gravity-fed systems on steeper ground."
      },
      {
        question: "Is my Doncaster property at flood risk after the 2019 floods?",
        answer: "The 2019 flooding affected large parts of Doncaster, particularly Bentley, Toll Bar, Fishlake, and surrounding low-lying areas. While flood defences have been improved since then, the underlying risk remains for properties on the Don floodplain. Check your specific risk on the Environment Agency flood map, ensure your drains are clear and functioning, and consider installing a backflow preventer if you are in a higher-risk zone. Well-maintained drainage reduces the impact of flooding on individual properties."
      },
      {
        question: "Do former mining areas around Doncaster have specific drainage problems?",
        answer: "Yes. Former colliery villages like Armthorpe, Edlington, Rossington, and Maltby may experience ground subsidence from historic mine workings. This subsidence can crack pipes, displace joints, and alter pipe gradients, causing recurring drainage problems. If you live in a former mining area and experience persistent slow drainage or blockages, a CCTV survey can determine whether subsidence damage is the root cause."
      }
    ],
    caseStudy: `Emergency call-out to a property in Bentley following heavy rainfall: The homeowner reported water backing up through the manhole cover in the rear garden, with foul water beginning to pool around the back door. Given the area's flood history, rapid response was essential. Our investigation revealed a substantial blockage in the private drain caused by a combination of silt accumulation (common on flat terrain where flow velocity is low) and a build-up of wet wipes and sanitary products. The minimal gradient on the 20-metre run to the public sewer meant the pipe had virtually no self-cleansing capacity. We cleared the blockage with high-pressure jetting, flushed the entire run, and installed a new inspection chamber at the midpoint to allow easier future maintenance access. We also advised the homeowner on what should never be flushed and recommended annual preventative jetting given the flat terrain. Result: drainage fully restored with improved maintenance access for a flood-vulnerable property.`
  },

  barnsley: {
    landmarks: [
      "Experience Barnsley Museum",
      "Locke Park",
      "Barnsley Town Hall",
      "The Civic Theatre",
      "Elsecar Heritage Centre",
      "Cannon Hall Museum and Country Park",
      "Wentworth Castle Gardens",
      "Worsbrough Mill and Country Park",
      "Barnsley Market",
      "Oakwell Stadium",
      "The Alhambra Centre",
      "Barnsley Interchange",
      "Penistone",
      "Wombwell",
      "Hoyland",
      "Darton"
    ],
    drainageProfile: `Barnsley's drainage landscape is profoundly shaped by its coal mining heritage. For over two centuries, the town and its surrounding villages were defined by deep coal mining, and the legacy of this industry continues to affect drainage infrastructure across the borough. Ground subsidence caused by historic mine workings is one of the most significant drainage challenges in the Barnsley area. As underground voids from former coal seams gradually collapse or settle, the ground above shifts, cracking drainage pipes, displacing joints, and altering the carefully calculated gradients that keep water flowing. Communities built directly above former collieries—including Wombwell, Hoyland, Darfield, and Royston—are particularly affected.

The terrain around Barnsley varies considerably. The town centre sits in the valley of the River Dearne, with land rising steeply to the west toward Penistone and the Pennine foothills, and more gently to the east toward the Don Valley. This varied topography creates different drainage challenges in different areas. Western hillside villages like Penistone, Silkstone, and Cawthorne experience rapid surface water runoff during heavy rain, with water racing downhill through Victorian pipe systems not designed for modern rainfall intensity. Properties in the Dearne Valley floor are more vulnerable to flooding as water accumulates from the surrounding hills.

Much of Barnsley's housing stock dates from the mining era—rows of terraced cottages built quickly to house colliery workers, often with shared drainage systems serving multiple properties. These shared drains, typically constructed from clay pipes with lime mortar joints, are now well over a century old and increasingly fragile. The dense, terraced layout means that a drainage problem affecting one property frequently impacts its neighbours, requiring coordinated repair efforts. Victorian building standards in mining communities were often basic, and some drainage systems were laid with insufficient gradient or inadequate pipe sizing from the outset.

Yorkshire Water maintains the public sewer network, but the private drainage serving individual properties and shared runs between terraced houses is the homeowner's responsibility. In Barnsley's former mining communities, understanding where private responsibility ends and public infrastructure begins can be complicated by the historic layout of housing and drainage. Our engineers are experienced in navigating these complexities, working with homeowners and Yorkshire Water to determine responsibility and deliver effective solutions. We also understand the specific challenges of working in areas where mining subsidence is active or historic, ensuring repairs account for ongoing ground movement.`,
    localFAQs: [
      {
        question: "How does mining subsidence affect drains in the Barnsley area?",
        answer: "Historic coal mining beneath much of Barnsley has left underground voids that continue to settle, causing ground movement at the surface. This subsidence cracks drainage pipes, displaces pipe joints, and alters gradients. Properties in former mining villages like Wombwell, Hoyland, Darfield, and Royston are particularly vulnerable. If you experience recurring blockages or notice new cracks in your property, mining subsidence may be the underlying cause. A CCTV drain survey can identify subsidence damage to pipework."
      },
      {
        question: "What are shared drains and who is responsible in Barnsley's terraced streets?",
        answer: "Many terraced properties in Barnsley's former mining communities share drainage pipework with their neighbours. Historically, a single clay drain might serve an entire terrace row. Since 2011, shared drains serving two or more properties have generally transferred to Yorkshire Water's responsibility. However, the section within your property boundary usually remains your responsibility. If you are unsure, we can help determine the ownership boundary during a survey."
      },
      {
        question: "Why does the Penistone area have different drainage challenges to central Barnsley?",
        answer: "Penistone and the western villages sit at higher elevation on the Pennine fringe, with steeper terrain and higher rainfall than the Dearne Valley. Surface water runs off hillsides rapidly, overwhelming Victorian drainage systems during storms. The rocky ground also makes excavation more expensive if pipe replacement is needed. Properties here benefit from regular gutter and drain maintenance to manage the higher water volumes, and from preventative jetting to keep pipes clear."
      },
      {
        question: "Are new-build estates in Barnsley free from drainage problems?",
        answer: "Modern estates benefit from plastic pipework and current building standards, but they are not immune to issues. Some new developments in Barnsley are built on former colliery or industrial sites where ground conditions are challenging. Connections to older public sewers can create transition points where problems develop. Additionally, new estates sometimes have drainage designed to minimum acceptable standards, which leaves little margin for error. We recommend understanding your drainage layout from the start of ownership."
      }
    ],
    caseStudy: `Call-out to a terraced property in Wombwell: The homeowner reported persistent slow drainage affecting the kitchen and bathroom, with occasional foul odours in the rear yard. The property sits in a row of former miners' cottages above a disused colliery. Our CCTV survey revealed that mining subsidence had caused a three-metre section of the clay drain to lose its gradient entirely, creating a belly in the pipe where water and waste accumulated rather than flowing. Root intrusion from a nearby tree had compounded the problem by colonising the stagnant section. We excavated and replaced the affected section with new PVC pipe laid on a compacted bed to restore correct gradient, cleared roots from the adjacent pipework, and performed high-pressure jetting along the full run. We also advised the neighbouring property owner, whose shared section showed early signs of similar subsidence damage. Result: full drainage restored with correct gradient, and the neighbour was alerted to take preventative action before their section failed completely.`
  },

  chesterfield: {
    landmarks: [
      "Crooked Spire (Church of St Mary and All Saints)",
      "Chesterfield Market Hall",
      "Pomegranate Theatre",
      "Queen's Park",
      "Chesterfield Museum",
      "Chesterfield Canal",
      "The Winding Wheel Theatre",
      "Holmebrook Valley Park",
      "Tapton House",
      "Revolution House",
      "Brampton Mile",
      "Chesterfield Station",
      "Vicar Lane Shopping Centre",
      "Staveley",
      "Brimington",
      "Hasland"
    ],
    drainageProfile: `Chesterfield sits at the transition between the Pennine foothills to the west and the flatter coal measures landscape to the east, giving the town a distinctive drainage profile that combines hillside challenges with mining-related ground conditions. The town centre, dominated by the famous Crooked Spire of St Mary's Church, is built on gently sloping ground above the River Rother, with older properties radiating outward from the medieval market centre. Much of the drainage infrastructure in the town centre and inner suburbs dates from the Victorian era, with clay pipes that are now well over a century old.

The River Rother and Chesterfield Canal both flow through the borough, and properties close to these watercourses face flood risk during heavy rainfall. The Rother Valley has experienced flooding on multiple occasions, affecting properties in Brimington, Staveley, and parts of the town centre. The canal, while largely restored for leisure use, still plays a role in the local drainage picture, and properties alongside it sometimes experience elevated water tables that affect basement drainage and ground-level pipe performance.

Chesterfield's property mix reflects its long history. The town centre features Georgian and Victorian buildings with some of the oldest drainage infrastructure in Derbyshire. Inner suburbs like Brampton and Hasland contain a mix of Victorian terraces and inter-war semis, each with their own era-specific drainage materials and configurations. The eastern side of the borough, around Staveley and Brimington, includes former mining communities where subsidence from coal workings affects drainage infrastructure in the same way as it does across the South Yorkshire coalfield.

As a Derbyshire town, Chesterfield falls within the area served by Severn Trent Water for water supply, but Yorkshire Water manages the sewerage network in the northern parts of the borough. This split in responsibility can sometimes cause confusion for property owners when drainage issues arise. Our engineers are familiar with the specific regulatory landscape in Chesterfield and can advise on which water company is responsible for public sewer issues in your particular location. Whether your property is a Georgian townhouse near the Crooked Spire, a Victorian terrace in Brampton, or a modern home on the outskirts, we bring local knowledge of Chesterfield's varied drainage landscape to every job.`,
    localFAQs: [
      {
        question: "Do properties near the Chesterfield Canal face specific drainage challenges?",
        answer: "Yes. Properties close to the canal can experience higher water tables, which affects ground-level drainage performance and can cause dampness in basements and lower-ground floors. The canal's water level also fluctuates, particularly after heavy rain, which can temporarily impede the discharge of private drainage into public sewers. If you live near the canal, maintaining clear drains and considering waterproofing measures for below-ground spaces is advisable."
      },
      {
        question: "Does mining subsidence affect drainage in parts of Chesterfield?",
        answer: "The eastern parts of the borough, including Staveley, Brimington, and Duckmanton, sit above former coal workings. Ground subsidence from historic mining can crack pipes, displace joints, and alter drainage gradients. If you experience recurring slow drainage or blockages in these areas, subsidence damage may be the cause. A CCTV survey can identify whether your pipework has been affected by ground movement."
      },
      {
        question: "Which water company handles sewer problems in Chesterfield?",
        answer: "Chesterfield sits at the boundary between Yorkshire Water and Severn Trent Water service areas. Which company manages the public sewer near your property depends on your exact location. If you have a blockage in the public sewer, you need to contact the correct water company for a free response. We can help clarify which company is responsible for your area and assist with communication if there is any uncertainty."
      },
      {
        question: "How do Chesterfield's older properties compare to modern homes for drainage reliability?",
        answer: "Georgian and Victorian properties near the town centre use clay pipes that are now 100-200 years old, and while some remain in serviceable condition, many are reaching the end of their usable life. They are vulnerable to root intrusion, joint displacement, and general deterioration. Modern properties use plastic pipework that is more durable and flexible, but connection points to older public sewers can still be problematic. Regular CCTV surveys help identify deterioration before it causes emergency blockages."
      }
    ],
    caseStudy: `Call-out to a Victorian end-terrace in Brampton: The property owner reported a foul smell in the front garden and slow drainage from the downstairs bathroom. Our CCTV survey revealed a fractured clay pipe section approximately four metres from the property, where the private drain connected to the public sewer beneath the pavement. The fracture had allowed soil to enter the pipe, creating a partial blockage and causing waste water to seep into the surrounding ground—the source of the odour. Given the location beneath the public footpath, we coordinated with the local authority for access permissions and replaced the damaged section with new PVC pipework, including a properly sealed connection to the public sewer. High-pressure jetting cleared accumulated debris from the remainder of the private drain. Result: odour eliminated, drainage fully restored, and a potential public health issue resolved before it could worsen.`
  },

  dronfield: {
    landmarks: [
      "Dronfield Hall Barn",
      "Dronfield Civic Centre",
      "Coal Aston Village",
      "Holmesdale Park",
      "Dronfield Sports Centre",
      "Dronfield Bottom",
      "Gosforth Valley",
      "Hallowes Golf Club",
      "Stubley Meadows",
      "Unstone",
      "Dronfield Henry Fanshawe School",
      "Dronfield Woodhouse"
    ],
    drainageProfile: `Dronfield is a small town perched on a hillside between Sheffield and Chesterfield, straddling the South Yorkshire and Derbyshire border. Its elevated position and sloping terrain create distinctive drainage challenges quite different from the larger towns on either side. The town is built across the valley of the Drone Brook, with properties climbing the hillsides on both sides, and this steep topography means surface water moves rapidly through the drainage system during heavy rain. Properties at the top of the slopes in areas like Coal Aston and Dronfield Woodhouse experience different drainage conditions from those in the valley bottom around Dronfield Bottom and Gosforth Valley.

The town's property stock is mixed but skews toward the 1950s-1970s period, when Dronfield expanded significantly as a commuter settlement for Sheffield. Many of these mid-century properties feature concrete or early PVC drainage that is now reaching the age where deterioration becomes a concern. Older properties in the original village centre around Dronfield Hall Barn date from the 18th and 19th centuries and retain original stone or clay drainage of considerable age. The variation in pipe materials across the town means our engineers must be prepared for different systems and different failure modes on every job.

Dronfield's hillside setting means that properties lower down the slope can receive significant volumes of surface water from properties above them during heavy rainfall. This cascade effect can overwhelm private drainage systems that are adequate under normal conditions. The Drone Brook itself can rise rapidly after heavy rain, and properties close to the watercourse in the valley bottom—particularly around Dronfield Bottom—face direct flood risk as well as the indirect risk of the sewer network being unable to discharge when the brook is in flood.

The town's green and leafy character, with mature gardens and established trees throughout the residential areas, creates the familiar challenge of tree root intrusion into aging drainage pipes. Properties in Coal Aston and Dronfield Woodhouse, where gardens are typically larger and more established, experience this most frequently. The combination of steep terrain, varied pipe materials, and tree-root pressure means Dronfield properties benefit from regular drainage assessment, even when no obvious problems are present.`,
    localFAQs: [
      {
        question: "How does Dronfield's hillside location affect drainage?",
        answer: "Dronfield's steep terrain means rainwater reaches the drainage network very quickly during storms. Properties lower on the hillside receive water cascading from properties above, which can overwhelm private drainage systems. The Drone Brook rises rapidly after heavy rain, and properties near the valley bottom face both direct flood risk and the risk of sewer backflow when the brook is high. Good surface water management around your property is important, especially if you are on a lower slope."
      },
      {
        question: "What drainage pipe materials are common in Dronfield properties?",
        answer: "Dronfield has a wide mix. Older village properties may have stone or clay drainage dating back 150 years or more. The large number of 1950s-1970s properties feature concrete or early PVC pipes that are now 50-70 years old and beginning to deteriorate. More recent properties use modern plastic systems. The pipe material affects the types of problems that can occur and the repair methods available. A CCTV survey identifies what your property uses and its current condition."
      },
      {
        question: "Is tree root intrusion a common problem in Dronfield?",
        answer: "Yes, particularly in areas with established gardens like Coal Aston and Dronfield Woodhouse. Mature trees seek out moisture in drainage pipes, and older clay and concrete pipes are especially vulnerable at their joints. Root intrusion causes recurring blockages that will return even after clearing unless the underlying pipe damage is addressed through relining or replacement. If you have large trees near your drain run, preventative surveying is worthwhile."
      }
    ],
    caseStudy: `Call-out to a 1960s detached property in Coal Aston: The homeowner had experienced three blockages in twelve months, each cleared by rodding but returning within weeks. Our CCTV survey identified the cause—an established silver birch tree had sent roots into the concrete drain pipe through deteriorated joints at two locations along the 12-metre run from the house to the boundary. The roots were regrowing rapidly after each clearing because the pipe damage provided easy access points. We recommended and carried out sectional drain relining on both affected areas, creating a smooth, sealed internal surface that prevents root re-entry while avoiding the cost and disruption of full excavation in the mature garden. Result: twelve months on, the homeowner reports no further blockages, and the birch tree continues to thrive without affecting the now-sealed drainage.`
  },

  chapeltown: {
    landmarks: [
      "Chapeltown Park",
      "Thorncliffe",
      "Ecclesfield Parish Church",
      "Charlton Brook",
      "Butterthwaite",
      "Chapeltown Market",
      "Whitley Hall Hotel",
      "High Green",
      "Grenoside",
      "Burncross",
      "Lane End",
      "Warren"
    ],
    drainageProfile: `Chapeltown is a suburban settlement on the northern fringe of Sheffield, positioned in the valley of the Blackburn Brook with residential areas climbing the hillsides toward High Green, Grenoside, and Ecclesfield. The area has a distinctive industrial history centred on the Newton Chambers steelworks at Thorncliffe, which for over two centuries was one of the largest industrial enterprises in the region. While the works have now largely been replaced by commercial and retail development, the industrial legacy remains in the local drainage infrastructure, with some properties connected to systems that were originally designed to serve the steelworks and its associated workers' housing.

The mix of property ages in Chapeltown creates varied drainage conditions. The oldest properties, clustered around the original village centre and in Ecclesfield, date from the 18th and 19th centuries with stone and clay drainage of considerable age. A significant proportion of housing dates from the post-war expansion of the 1950s and 1960s, when Chapeltown grew as a commuter settlement for Sheffield. These mid-century properties feature concrete and clay drainage that is now approaching or past its expected service life. Newer developments in High Green and around the periphery use modern plastic systems but often connect to older public sewer infrastructure.

Chapeltown's valley-and-hillside topography creates the same cascade challenges seen in other Sheffield-area settlements: properties on the slopes above the Blackburn Brook valley receive and shed surface water rapidly during storms, while properties in the valley bottom are vulnerable to accumulated runoff from the hillsides above. The Blackburn Brook itself can rise during heavy rainfall, and properties close to its course may experience flooding or sewer backflow when the brook is in spate.

The Grenoside and High Green areas, at higher elevation, experience more exposed weather conditions and have longer drainage runs to connect to main sewers in the valley below. These longer runs, combined with the often-steep gradients involved, create specific maintenance needs—high-velocity water flow can cause pipe erosion on steep sections, while debris tends to settle where the gradient eases off at the valley floor. Our engineers are familiar with the specific drainage characteristics of the Chapeltown area and bring targeted solutions to each neighbourhood.`,
    localFAQs: [
      {
        question: "How does the former Thorncliffe steelworks affect drainage in Chapeltown?",
        answer: "The Newton Chambers site at Thorncliffe was a major industrial complex, and some drainage infrastructure in the surrounding area was originally designed to serve the works and its workers' housing. While most of this legacy infrastructure has been replaced or upgraded, some older properties may still connect to drainage routes that date from the industrial era. If your property is near the former Thorncliffe site and you experience unusual drainage behaviour, a CCTV survey can help identify whether legacy industrial connections are involved."
      },
      {
        question: "Are properties in High Green and Grenoside at greater drainage risk?",
        answer: "These elevated areas have longer drainage runs to main sewers in the valley below, and the steep gradients involved create specific challenges. High-velocity water flow during storms can erode older pipes on steep sections, while debris tends to accumulate where the gradient levels out. Higher elevation also means greater rainfall exposure. Regular maintenance, including jetting and CCTV surveys, is particularly cost-effective for these properties because repairs at elevation tend to be more expensive."
      },
      {
        question: "What should I do about recurring blockages in my Chapeltown property?",
        answer: "Recurring blockages typically indicate an underlying structural problem rather than just a one-off obstruction. Common causes in the Chapeltown area include root intrusion into aging clay or concrete pipes, pipe fractures from ground movement, and loss of gradient due to settlement. A CCTV drain survey identifies the root cause, allowing us to recommend a permanent solution rather than repeated clearing of symptoms. Most surveys take under an hour and provide a clear picture of your drainage condition."
      }
    ],
    caseStudy: `Call-out to a 1950s semi-detached house in Grenoside: The homeowner reported that the downstairs toilet was slow to flush and occasionally gurgled, particularly after using the washing machine. Previous attempts with a plunger had been unsuccessful. Our CCTV survey revealed a gradual buildup of calcium and mineral deposits inside the concrete drain pipe—a common issue in mid-century concrete drainage where the pipe surface roughens with age, catching debris and waste. Over 15 metres of the 20-metre run showed significant encrustation, reducing the effective pipe diameter by approximately 40%. We performed high-pressure jetting with a specialist descaling nozzle, clearing the deposits and restoring full bore. We recommended annual preventative jetting to manage the ongoing encrustation, which is a characteristic of aging concrete pipes in the area. Result: full drainage flow restored, with the homeowner now on an annual maintenance schedule to prevent recurrence.`
  },

  stocksbridge: {
    landmarks: [
      "Stocksbridge Steelworks",
      "Fox Valley Shopping Park",
      "Stocksbridge Park Steels FC",
      "Underbank Reservoir",
      "Langsett Reservoir",
      "Midhopestones",
      "Bolsterstone",
      "Deepcar",
      "Ewden Valley",
      "Stocksbridge Leisure Centre",
      "St Matthias Church",
      "Bracken Moor"
    ],
    drainageProfile: `Stocksbridge occupies a dramatic Pennine valley position in the upper Don Valley, surrounded by moorland and reservoir catchments that define the character of its drainage challenges. The town grew around the steelworks that still operates at its centre, and the combination of industrial heritage, steep terrain, and moorland exposure creates one of the most demanding drainage environments in the Sheffield area. Properties here face challenges that are fundamentally different from those in the city's urban core.

The terrain around Stocksbridge is exceptionally steep. The town sits in the valley of the Little Don River, with properties climbing the hillsides on both sides toward Bolsterstone and the moorland above. This topography means rainwater reaches the drainage system extremely quickly during storms, creating surges of high-velocity water through pipes that were often laid decades ago. The upper reaches of the valley, around Midhopestones and Langsett, receive some of the highest rainfall in South Yorkshire due to their elevation and western exposure to weather systems crossing the Pennines. This combination of steep terrain and high rainfall intensity creates demanding conditions for drainage infrastructure.

The steelworks legacy permeates Stocksbridge's drainage landscape. Much of the town's older housing was built to accommodate steelworkers, with rows of stone terraces featuring drainage systems from the late 19th and early 20th centuries. These systems, constructed from stone and clay pipes, have endured decades of Pennine weather but are now increasingly fragile. The works site itself has influenced local drainage patterns over more than a century, and some residential drainage routes interact with industrial water management systems in ways that are not always well documented.

The Pennine environment creates specific hazards for drainage infrastructure. Freeze-thaw cycles during winter can damage exposed pipework and cause ground movement that displaces pipe joints. Peat-laden water from the surrounding moorland carries particulates that can accumulate in drainage systems. The reservoirs—Underbank, Langsett, and others—influence local water tables and groundwater movement. Properties in the outlying villages of Bolsterstone, Midhopestones, and Deepcar often have very long drainage runs through rural terrain where maintenance access can be difficult and root intrusion from hedgerows and woodland is common. Our engineers understand the extreme conditions that Stocksbridge drainage must endure and bring appropriate expertise and equipment to every job.`,
    localFAQs: [
      {
        question: "Why does Stocksbridge experience more drainage problems than lower Sheffield areas?",
        answer: "Stocksbridge faces a combination of factors that make drainage more challenging: significantly higher rainfall due to Pennine elevation and western exposure, extremely steep terrain that sends water through pipes at high velocity, aging stone and clay infrastructure from the steelworking era, and harsh winter conditions that cause freeze-thaw damage to pipes. These factors mean drainage systems here work harder than those in lower, more sheltered parts of Sheffield, and require more frequent maintenance."
      },
      {
        question: "How does the Stocksbridge steelworks history affect residential drainage?",
        answer: "The steelworks has been central to Stocksbridge for over 150 years, and much of the older housing was built to serve the works. Some drainage systems date from this era and may interact with industrial water management routes. If your property is near the works site and you experience unexpected drainage behaviour—particularly unusual flows or discharges during heavy rain—industrial-era connections may be a factor. A CCTV survey can map your drainage system and identify any unusual features."
      },
      {
        question: "Are outlying properties in Bolsterstone and Midhopestones harder to maintain?",
        answer: "Properties in the outlying villages typically have longer drainage runs, often through rural terrain with limited maintenance access. Hedgerow and tree root intrusion is common on these longer runs. The elevated position means higher rainfall and greater freeze-thaw exposure. Excavation in the rocky Pennine soil is expensive, making preventative maintenance through regular jetting and CCTV surveys particularly cost-effective for rural properties—catching problems early avoids the high cost of emergency excavation."
      }
    ],
    caseStudy: `Emergency call-out to a stone cottage in Bolsterstone during winter: The property owner reported complete drainage failure following a period of sub-zero temperatures. Our investigation found that a section of the clay drain pipe running through an exposed, north-facing stretch of garden had suffered frost damage—the saturated ground around the pipe had frozen and expanded, cracking the pipe at two joint locations over a 2.5-metre section. The fractured joints had allowed soil and ice to enter the pipe, creating a complete blockage. We excavated the damaged section—challenging work in frozen, rocky Pennine ground—and replaced it with insulated modern pipework laid at greater depth to reduce future frost exposure. We also lagged an exposed section of pipework near an outbuilding that was vulnerable to the same issue. Result: drainage restored and the property better protected against the harsh Pennine winters that are an annual feature of life in the upper Don Valley.`
  },

  hillsborough: {
    landmarks: [
      "Hillsborough Stadium (Sheffield Wednesday FC)",
      "Hillsborough Park",
      "Hillsborough Leisure Centre",
      "Hillsborough Corner",
      "Malin Bridge",
      "Owlerton Stadium",
      "Middlewood Road",
      "Wadsley Bridge",
      "Livesey Street",
      "Owlerton",
      "Parkwood Springs",
      "Hillsborough Barracks"
    ],
    drainageProfile: `Hillsborough is a densely built suburb in the north-west of Sheffield, positioned at a critical point in the city's drainage landscape where the River Loxley meets the River Don. This confluence, combined with Hillsborough's valley-floor location and surrounding steep hillsides, makes the area one of the most flood-vulnerable parts of Sheffield. The devastating floods of June 2007, when the Loxley and Don burst their banks, caused severe damage to hundreds of Hillsborough properties and remain a defining event in the community's recent history. The area around Malin Bridge, Owlerton, and Middlewood Road was particularly badly affected.

The housing stock in Hillsborough is predominantly Victorian and Edwardian, with terraced streets radiating outward from the commercial centre around Hillsborough Corner. These properties feature the clay drainage systems typical of their era—now well over a century old and increasingly vulnerable to deterioration, root intrusion, and joint displacement. The terraced layout means shared drainage systems are common, with multiple properties connected to a single main drain run. When blockages occur in shared sections, they affect several households simultaneously, requiring coordinated response and sometimes complex negotiation over repair responsibilities.

The stadium and its surrounding infrastructure add a unique dimension to Hillsborough's drainage profile. Match days at Sheffield Wednesday FC bring thousands of additional people to the area, placing peak demands on the local sewer network. The commercial premises—pubs, takeaways, and cafes—serving the matchday crowd generate significant grease and food waste that accumulates in nearby drainage systems. Properties close to the stadium may experience drainage effects that correlate with the football calendar.

Above the valley floor, properties climbing the hillsides toward Wadsley and Stannington experience the steep-terrain challenges common across Sheffield's western suburbs: rapid surface water runoff during storms, high-velocity flow through drainage pipes, and the risk of erosion in aging pipework on steep gradients. The contrast between these hillside properties and those on the flood-vulnerable valley floor creates a wide range of drainage conditions within a relatively small geographical area. Our engineers are well acquainted with Hillsborough's specific challenges, from flood-risk assessment in the valley bottom to steep-terrain drainage on the surrounding hills.`,
    localFAQs: [
      {
        question: "Is Hillsborough still at flood risk after the 2007 floods?",
        answer: "While significant flood defence work has been carried out since 2007, including along the Rivers Loxley and Don, the underlying risk for properties on the valley floor remains. The confluence of two rivers in a densely built area means that extreme rainfall events can still cause flooding. Property owners in Malin Bridge, Owlerton, and the lower parts of Middlewood Road should check their flood risk, maintain clear drains, and consider backflow prevention devices. Well-maintained private drainage reduces the impact of wider flooding events on individual properties."
      },
      {
        question: "How do shared drains work in Hillsborough's terraced streets?",
        answer: "Many terraced properties share a single main drain that serves several houses. Since 2011, shared drains serving two or more properties generally transferred to Yorkshire Water's responsibility for maintenance. However, the private section within your property boundary remains your responsibility. When blockages occur in shared sections, they can affect multiple households—if you and your neighbours experience problems simultaneously, the blockage is likely in the shared section and Yorkshire Water should be contacted."
      },
      {
        question: "Does Sheffield Wednesday matchday activity affect local drainage?",
        answer: "Properties close to Hillsborough Stadium can experience indirect drainage effects from matchday activity. The concentration of visitors places peak demands on the sewer network, and the surrounding pubs, takeaways, and cafes generate grease and food waste that can accumulate in drainage systems. If you live near the stadium and notice drainage issues that seem to worsen around matchdays, grease buildup in nearby commercial drains may be a contributing factor. Regular maintenance of your own drainage helps mitigate these effects."
      }
    ],
    caseStudy: `Call-out to a Victorian terrace on a street near Hillsborough Park: Three neighbouring properties simultaneously reported slow drainage and foul smells from rear yard gullies. This pattern strongly suggested a shared drain blockage rather than individual problems. Our CCTV survey of the shared main drain confirmed a substantial fat and grease blockage approximately eight metres from the properties, combined with root intrusion from a large sycamore tree growing in the alleyway behind the terrace. The shared drain was in Yorkshire Water's area of responsibility, but the initial private sections belonging to each property also required attention. We cleared the private sections by jetting, provided CCTV evidence of the shared drain condition to support the homeowners' report to Yorkshire Water, and Yorkshire Water subsequently attended to clear and repair the shared section. Result: coordinated resolution across private and public drainage, with all three properties restored to full drainage and Yorkshire Water addressing the root cause in the shared infrastructure.`
  },

  ecclesall: {
    landmarks: [
      "Ecclesall Road",
      "Endcliffe Park",
      "Bingham Park",
      "Ecclesall Woods",
      "Whirlow Brook Park",
      "Millhouses Park",
      "Abbeydale Road South",
      "Banner Cross",
      "Ecclesall Parish Church",
      "Ringinglow Road",
      "Hunters Bar",
      "Sharrow Vale Road",
      "Carter Knowle",
      "Parkhead",
      "Whirlow Hall Farm"
    ],
    drainageProfile: `Ecclesall is one of Sheffield's most affluent suburbs, characterised by substantial Victorian and Edwardian properties set in generous, mature gardens along tree-lined streets. This desirable residential character—the very features that make Ecclesall attractive—creates some of the most persistent and costly drainage challenges in the city. The combination of aging infrastructure, established trees, large properties with complex drainage layouts, and hilly terrain produces a distinctive set of issues that require specialist understanding.

Tree root intrusion is the single most common drainage problem in Ecclesall. The suburb's mature gardens contain specimen trees that are often over a century old, and the tree-lined streets along Ecclesall Road and its residential tributaries are a defining feature of the area. These established root systems inevitably seek out the moisture within drainage pipes, exploiting the joints and hairline cracks in aging clay pipework. Properties near Ecclesall Woods, Endcliffe Park, and Bingham Park face particular pressure, as woodland roots can extend significant distances underground. Root intrusion typically begins subtly, causing gradually slowing drainage before eventually producing complete blockages. Many Ecclesall homeowners face this issue repeatedly unless the underlying pipe vulnerability is addressed through relining.

The Victorian and Edwardian properties that predominate in Ecclesall were built with extensive clay drainage systems serving large homes—often with multiple bathrooms, external buildings, and long pipe runs across sizeable plots. These systems are now 100-140 years old and were designed for a different era of household water usage. Modern families with multiple bathrooms, dishwashers, washing machines, and en-suites place demands on these aging systems that their original designers never anticipated. Properties along the premium streets of Ecclesall Road South, Ringinglow Road, and around Banner Cross frequently have drainage runs of 30 metres or more from house to sewer connection, with every metre of aging clay pipe representing a potential point of failure.

Ecclesall's hillside location, sloping from the high ground of Ringinglow toward the Porter Brook valley, creates the familiar Sheffield challenge of rapid surface water runoff. Properties at higher elevation near Ringinglow and Whirlow experience fast-draining conditions during storms, while those lower down toward Hunters Bar and Sharrow Vale receive accumulated runoff from the slopes above. The Porter Brook, flowing through Endcliffe Park and Bingham Park, can rise during heavy rain and affect sewer discharge from properties along its course. Yorkshire Water manages the public sewer network, but the extensive private drainage systems serving Ecclesall's large properties are the homeowner's responsibility—and given the age, length, and complexity of these systems, proactive maintenance is a sound investment.`,
    localFAQs: [
      {
        question: "Why is tree root intrusion so prevalent in Ecclesall?",
        answer: "Ecclesall's mature gardens and tree-lined streets contain established root systems that actively seek out moisture in drainage pipes. The predominant clay pipework, now over 100 years old, develops cracks and joint separations that provide entry points for roots. Properties near Ecclesall Woods, Endcliffe Park, and Bingham Park are under particular pressure from woodland root systems. Root intrusion causes recurring blockages that will return after clearing unless the pipe is sealed—relining is the most effective long-term solution, creating a smooth barrier that roots cannot penetrate."
      },
      {
        question: "How should owners of large Ecclesall properties manage their drainage?",
        answer: "Large Victorian and Edwardian homes in Ecclesall often have drainage runs of 30 metres or more, serving multiple bathrooms and outbuildings. Every metre of aging clay pipe is a potential failure point. We recommend a comprehensive CCTV survey as a baseline to understand your system's condition, followed by a prioritised maintenance plan addressing the most vulnerable sections first. Annual preventative jetting helps manage gradual buildup, and strategic relining of problem sections prevents emergency failures."
      },
      {
        question: "Does Ecclesall's hillside location increase drainage risk?",
        answer: "Yes. Properties higher up toward Ringinglow experience rapid surface water runoff during storms, which can overwhelm private drainage systems. Lower properties toward Hunters Bar and the Porter Brook valley receive accumulated runoff from the slopes above and face potential flooding when the brook rises. Good surface water management—clear gutters, properly directed downpipes, and maintained garden drainage—is important for all Ecclesall properties regardless of their position on the slope."
      },
      {
        question: "Are modern extensions and conversions affecting drainage in older Ecclesall properties?",
        answer: "Many Ecclesall properties have been extended or converted over the decades—loft conversions with en-suites, basement developments, rear extensions with additional bathrooms, and garden offices with plumbing. Each addition places more demand on the original Victorian drainage system. If your property has been significantly modified, assessing whether the original drainage can handle the increased load is worthwhile. Properties with multiple extensions sometimes need drainage upgrades to prevent recurring problems."
      }
    ],
    caseStudy: `Call-out to a large Edwardian detached house on a premium road near Ecclesall Woods: The homeowner had experienced progressively worsening drainage over six months, with the ground-floor bathroom and kitchen both draining slowly and occasional gurgling from the downstairs toilet. Our comprehensive CCTV survey of the property's extensive drainage system—a 35-metre run from the house to the public sewer—revealed root intrusion at four separate locations where mature garden trees had penetrated the original clay pipe joints. The most severe intrusion, from an established beech tree, had reduced the pipe to approximately 20% capacity over a three-metre section. Rather than excavating through the established garden—which contained irreplaceable specimen planting—we recommended and carried out full structural relining of the affected sections. The relining created a sealed, smooth-bore pipe within the existing clay drainage, preventing root re-entry while preserving the garden above. Total time on site: one day. Result: full drainage capacity restored with a 15-year warranty on the relining work, the mature garden undisturbed, and the homeowner provided with a detailed drainage map for future reference.`
  }
};

export function getLocationHubContent(slug: string): LocationHubContent | undefined {
  return LOCATION_HUB_CONTENT[slug];
}
