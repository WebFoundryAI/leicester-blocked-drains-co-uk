/**
 * Location-specific data including neighborhoods, landmarks, and drainage challenges
 */
export interface LocationData {
  neighborhoods: string[];
  landmarks: string[];
  drainageInfo: string;
  responseTime: string;
  propertyTypes: string;
}

export const LOCATION_DATA: Record<string, LocationData> = {
  sheffield: {
    neighborhoods: ["Ecclesall", "Crookes", "Broomhill", "Nether Edge", "Sharrow", "Walkley", "Hillsborough", "Dore", "Totley", "Heeley"],
    landmarks: ["Sheffield city centre", "Sheffield Cathedral", "the University of Sheffield", "Bramall Lane", "Meadowhall"],
    drainageInfo: "Sheffield's famously hilly terrain and five rivers create unique drainage challenges across the city. Victorian stone terraces on steep hillsides, former steel worker cottages in the Don Valley, and grand villas in the south-west all feature distinct drainage systems that require local knowledge and specialist attention.",
    responseTime: "typically within 60 minutes",
    propertyTypes: "stone terraces, Victorian villas, steel worker cottages, and modern estates"
  },
  rotherham: {
    neighborhoods: ["Moorgate", "Broom", "Wickersley", "Rawmarsh", "Kimberworth", "Whiston", "Brinsworth", "Catcliffe", "Dalton", "Thurcroft"],
    landmarks: ["Rotherham Minster", "Clifton Park", "New York Stadium", "Magna Science Adventure Centre", "Rotherham town centre"],
    drainageInfo: "Rotherham's industrial heritage and the confluence of the River Don and River Rother mean properties across the town face varied drainage challenges. Former steelworks sites, Victorian terraces in the town centre, and modern housing estates in areas like Wickersley all require different drainage approaches.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Victorian terraces, 1930s semis, modern housing estates, and industrial conversions"
  },
  doncaster: {
    neighborhoods: ["Bessacarr", "Cantley", "Balby", "Bentley", "Wheatley", "Intake", "Armthorpe", "Sprotbrough", "Edenthorpe", "Hatfield"],
    landmarks: ["Doncaster Racecourse", "the Frenchgate Centre", "Doncaster Minster", "Cusworth Hall", "Doncaster railway station"],
    drainageInfo: "Doncaster sits on relatively flat terrain near the River Don, making surface water management a key concern for properties across the town. The low-lying areas towards Hatfield and the Humberhead Levels are particularly susceptible to waterlogging, while older properties in the town centre have Victorian-era drainage requiring regular maintenance.",
    responseTime: "typically within 60-90 minutes",
    propertyTypes: "Edwardian terraces, 1930s semi-detached houses, post-war council housing, and modern detached homes"
  },
  barnsley: {
    neighborhoods: ["Worsborough", "Dodworth", "Penistone", "Darton", "Monk Bretton", "Royston", "Hoyland", "Wombwell", "Darfield", "Silkstone"],
    landmarks: ["Barnsley Town Hall", "the Alhambra Shopping Centre", "Locke Park", "Elsecar Heritage Centre", "Barnsley Interchange"],
    drainageInfo: "Barnsley's coal mining heritage has left a legacy of ground movement and subsidence that directly affects drainage infrastructure. The hilly terrain in western areas around Penistone contrasts with the flatter eastern districts, creating varied drainage challenges across the borough.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "stone-built miners' cottages, Victorian terraces, 1960s council estates, and new-build developments"
  },
  chesterfield: {
    neighborhoods: ["Brampton", "Walton", "Hasland", "Newbold", "Brimington", "Old Whittington", "Holme Hall", "Loundsley Green", "Ashgate", "Stonegravels"],
    landmarks: ["the Crooked Spire", "Chesterfield Market", "Queen's Park", "Pomegranate Theatre", "Chesterfield Canal"],
    drainageInfo: "Chesterfield's position at the edge of the Peak District means properties contend with both hilly terrain drainage and coal measures geology that can cause ground instability. The town's mix of medieval, Georgian, and Victorian architecture presents a wide range of drainage system ages and types.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "Georgian townhouses, Victorian terraces, stone cottages, and modern housing developments"
  },
  dronfield: {
    neighborhoods: ["Dronfield Woodhouse", "Coal Aston", "Holmesfield", "Unstone", "Apperknowle", "Hallowes", "Stubley", "Hill Top", "Gosforth Valley", "Summerley"],
    landmarks: ["Dronfield Hall Barn", "Lea Brook Valley", "Dronfield Sports Centre", "the Peel Centre", "Dronfield Civic Centre"],
    drainageInfo: "Dronfield's hillside location between Sheffield and Chesterfield creates natural drainage challenges, with properties often built on sloping ground that affects pipe gradients and surface water flow. The mix of historic village properties and modern estates means drainage systems span several centuries of construction methods.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "stone-built period properties, 1970s detached houses, modern family homes, and rural cottages"
  },
  chapeltown: {
    neighborhoods: ["High Green", "Burncross", "Ecclesfield", "Grenoside", "Thorpe Hesley", "Scholes", "Lane End", "Warren", "Whitley", "Charltonbrook"],
    landmarks: ["Chapeltown Park", "Ecclesfield Church", "Whitley Hall", "Charltonbrook nature reserve", "Chapeltown railway station"],
    drainageInfo: "Chapeltown and the surrounding villages sit on the northern fringe of Sheffield, where former coal mining areas and mixed terrain create specific drainage considerations. Many properties are built on land with mining subsidence risk, which can affect underground pipe stability over time.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "miners' terraces, 1950s council housing, modern estates, and converted farm buildings"
  },
  stocksbridge: {
    neighborhoods: ["Deepcar", "Bolsterstone", "Midhopestones", "Ewden Village", "Fox Valley", "Bracken Moor", "Pot House", "Lee Avenue", "Unsliven Road", "Royd"],
    landmarks: ["Fox Valley retail park", "Stocksbridge Leisure Centre", "Underbank Reservoir", "Stocksbridge Park Steels FC", "the Little Don River"],
    drainageInfo: "Stocksbridge's steep Pennine valley location and proximity to the Little Don River create significant drainage demands. Properties on hillsides face gradient challenges, while those closer to the river valley contend with higher water tables. The area's steelworks heritage means some sites have complex underground infrastructure.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "stone-built terraces, steelworker cottages, modern hillside estates, and rural Pennine properties"
  },
  hillsborough: {
    neighborhoods: ["Owlerton", "Wadsley", "Wisewood", "Loxley", "Malin Bridge", "Stannington", "Middlewood", "Wadsley Bridge", "Parkwood Springs", "Rivelin Valley"],
    landmarks: ["Hillsborough Stadium", "Hillsborough Park", "the Rivelin Valley", "Loxley Valley", "Hillsborough Barracks"],
    drainageInfo: "Hillsborough's position at the confluence of the Loxley and Rivelin valleys means many properties face river-related drainage challenges. The devastating 2007 floods demonstrated the area's vulnerability to surface water, and properties on the valley slopes contend with steep gradient drainage that demands careful maintenance.",
    responseTime: "typically within 30-45 minutes",
    propertyTypes: "Victorian stone terraces, inter-war semis, 1960s estates, and riverside properties"
  },
  ecclesall: {
    neighborhoods: ["Banner Cross", "Bents Green", "Whirlow", "Millhouses", "Abbeydale", "Greystones", "Ringinglow", "Carter Knowle", "Psalter Lane", "Endcliffe"],
    landmarks: ["Ecclesall Road", "the Botanical Gardens", "Endcliffe Park", "Whirlow Brook Park", "Abbeydale Industrial Hamlet"],
    drainageInfo: "Ecclesall is one of Sheffield's most prestigious residential areas, with large Victorian and Edwardian villas set in mature gardens along tree-lined avenues. The established vegetation and extensive grounds create significant root intrusion risks, while the hilly terrain towards Ringinglow and Whirlow demands well-maintained drainage systems.",
    responseTime: "typically within 30-45 minutes",
    propertyTypes: "large Victorian villas, Edwardian family homes, detached period properties, and modern executive houses"
  }
};

/**
 * Service-specific content for each location
 */
export interface ServiceContent {
  intro: string;
  commonProblems: string[];
  process: string;
  localTip: string;
}

type LocationServiceContentMap = Record<string, Record<string, ServiceContent>>;

export const LOCATION_SERVICE_CONTENT: LocationServiceContentMap = {
  sheffield: {
    "blocked-drains": {
      intro: "Sheffield's famously hilly landscape and five rivers mean blocked drains can present very differently depending on your location. From the steep stone terraces of Crookes and Walkley to the grand Victorian villas of Nether Edge, our experienced engineers understand the unique drainage challenges across Sheffield and respond quickly to restore your system to full working order.",
      commonProblems: ["Fat and grease buildup in student accommodation areas near the universities", "Tree root intrusion from mature street trees in leafy suburbs", "Debris accumulation in Victorian clay pipes on steep hillsides", "Silt and sediment washing downhill into valley-floor drains", "Foreign object obstructions in commercial premises along Ecclesall Road"],
      process: "We begin with a thorough assessment of your drainage system, often using CCTV cameras to pinpoint the exact location and cause of the blockage. Our high-pressure jetting equipment can clear even the most stubborn obstructions, and we always provide advice on preventing future blockages.",
      localTip: "Properties on Sheffield's steep hillsides in Crookes, Walkley, and Stannington should ensure gully pots are clear before heavy rain, as surface water runoff can overwhelm drainage on gradient streets."
    },
    "drain-unblocking": {
      intro: "When your drains back up in Sheffield, you need a fast response from engineers who know the local area. Whether you're in the city centre, Heeley, or out towards Dore and Totley, our drain unblocking teams are strategically positioned across Sheffield to reach you quickly and resolve the problem efficiently.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs from hair and soap scum", "External drain blockages from leaves and debris", "Shared drainage issues in back-to-back terraces", "Commercial kitchen drain problems along the Moor and Ecclesall Road"],
      process: "Our engineers arrive equipped with manual rods, electric eels, and high-pressure jetting equipment to handle any unblocking situation. We identify the blockage type, select the appropriate method, and clear your drains while minimising disruption to your property.",
      localTip: "Sheffield's many student houses in Broomhill and Crookesmoor often suffer from wet wipe and food waste blockages. Landlords should consider fitting sink strainers and providing disposal guidance to tenants."
    },
    "cctv-drain-surveys": {
      intro: "Understanding what's happening inside your Sheffield property's drainage system has never been easier. Our advanced CCTV drain surveys provide crystal-clear footage of pipe conditions, helping identify issues before they become emergencies. This is particularly valuable for Sheffield's older stone-built properties with Victorian-era drainage running down steep hillsides.",
      commonProblems: ["Hidden cracks in ageing clay pipes from ground movement on Sheffield's hills", "Displaced joints causing leaks on steep gradient pipework", "Root ingress at pipe connections from mature trees", "Scale and deposit buildup from Yorkshire's hard water", "Structural damage from mining subsidence in northern districts"],
      process: "We insert a high-definition camera into your drainage system, recording footage that clearly shows the condition of your pipes. You receive a detailed report with findings, recommendations, and annotated images showing any areas of concern.",
      localTip: "Buying a property in Sheffield's sought-after S7, S10, or S11 postcodes? A pre-purchase CCTV survey can reveal hidden drainage issues in these period properties that could cost thousands to repair."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting is the most effective way to clear stubborn blockages and clean Sheffield's often ageing pipe systems. Our specialist equipment delivers water at pressures up to 4,000 PSI, cutting through grease, scale, and debris while being gentle on pipe walls. Sheffield's hard water makes regular jetting particularly beneficial.",
      commonProblems: ["Heavy grease accumulation in busy household kitchens", "Scale buildup from Yorkshire's hard water supply", "Compacted debris and sediment washed downhill on steep terrain", "Root masses blocking flow in tree-lined suburbs", "General pipe cleaning needs for ageing Victorian systems"],
      process: "Our jetting equipment is carefully inserted into your drainage system, with the water pressure adjusted to suit your pipe type and condition. The rotating nozzle scours the pipe walls clean while flushing debris towards the sewer connection.",
      localTip: "Sheffield's hard water from Yorkshire Water contributes to significant scale buildup in pipes. Regular jetting every 12-18 months keeps systems flowing freely, especially in the older properties of Nether Edge and Sharrow."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies don't wait for convenient times, and neither do we. Our Sheffield emergency response teams operate around the clock, ready to tackle overflowing drains, flooding, and sewage backups anywhere in the city. From Broomhill student houses to city centre businesses, we're there when you need us most.",
      commonProblems: ["Overflowing manholes and drains during heavy rainfall", "Sewage backing up into properties in low-lying areas", "Flooding from blocked surface drains on Sheffield's steep streets", "Collapsed drains causing sinkholes", "Foul odours indicating serious drainage failures"],
      process: "Call our emergency line and we'll dispatch the nearest available engineer to your Sheffield location. They'll assess the situation, implement immediate containment if needed, and work to resolve the emergency quickly and safely.",
      localTip: "Know where your external manhole covers are located. Sheffield's steep terrain means water can flow rapidly during storms, so keeping gullies and drain covers accessible helps our engineers respond faster."
    },
    "drain-repairs": {
      intro: "Sheffield's mix of Victorian stone-built infrastructure, steel worker cottages, and modern developments means drain repairs require both traditional skills and contemporary techniques. Our repair specialists handle everything from patching minor cracks to complete pipe replacement, always selecting the most cost-effective approach for your specific situation.",
      commonProblems: ["Cracked and fractured pipes from ground movement on hillsides", "Displaced or misaligned joints on steep gradient drainage", "Tree root damage in leafy residential areas", "Corrosion in metal pipes from Sheffield's acidic soil", "Mining subsidence damage in northern and eastern districts"],
      process: "We assess the damage using CCTV inspection, then recommend the most appropriate repair method. Options range from no-dig pipe relining for accessible damage to excavation for severely collapsed sections. All repairs come with our workmanship guarantee.",
      localTip: "Sheffield's mixed geology means soil conditions vary hugely between districts. Properties in areas with coal measures, like parts of Handsworth and Mosborough, may experience subsidence-related pipe movement that requires flexible repair solutions."
    }
  },
  rotherham: {
    "blocked-drains": {
      intro: "Rotherham's position at the meeting point of the Rivers Don and Rother creates specific drainage considerations for properties across the town. From the Victorian terraces near the town centre to the modern estates in Wickersley and Whiston, our engineers understand Rotherham's varied drainage landscape and respond quickly to clear blockages of every kind.",
      commonProblems: ["Silt accumulation from river-adjacent properties", "Tree root intrusion from established street planting", "Fat and grease buildup in domestic kitchens", "Debris from former industrial site drainage", "Shared drainage blockages in older terraced housing"],
      process: "We assess each Rotherham blocked drain individually, considering the property's location relative to the rivers, its age, and the drainage configuration. Our engineers carry the full range of clearing equipment to handle any obstruction efficiently.",
      localTip: "Rotherham properties near the River Don in areas like Eastwood and Templeborough should have drainage checked after periods of high river levels, as silt can be deposited in pipe systems during flooding events."
    },
    "drain-unblocking": {
      intro: "When drains block in Rotherham, our local teams respond with the urgency and expertise your situation demands. Whether you're dealing with a backed-up kitchen sink in Broom or an overflowing external drain in Rawmarsh, we'll have your drainage flowing freely again with minimum fuss.",
      commonProblems: ["Kitchen waste accumulation in family homes", "Bathroom drain blockages from hair and soap", "External gulley obstructions from garden debris", "Toilet blockages from inappropriate flushing", "Fat buildup in commercial premises"],
      process: "Our Rotherham engineers arrive with comprehensive unblocking equipment suitable for all drain types. We assess the blockage location and severity, then apply the most effective clearing technique, ensuring complete removal of the obstruction.",
      localTip: "Rotherham's older terraced properties around Masbrough and Eastwood often share rear drainage runs. If your neighbours are also experiencing slow drains, the blockage is likely in the shared section."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're purchasing a period property near Rotherham Minster or investigating drainage issues at a Wickersley family home, our CCTV drain surveys provide the answers you need. High-definition cameras reveal the true condition of underground pipes, helping you make informed decisions about your Rotherham property.",
      commonProblems: ["Unknown pipe routes in older town centre properties", "Condition assessment for property purchases", "Investigation of recurring blockage causes", "Insurance claim documentation after flooding events", "Planning surveys for extensions or renovations"],
      process: "Our survey technicians access your drainage system through manholes or inspection chambers, then guide the camera through the entire pipe network. The real-time footage is recorded and later compiled into a comprehensive report for your records.",
      localTip: "Rotherham properties built on former industrial land should always have a thorough drainage survey before any renovation work, as unexpected underground services and drainage routes are common."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is the gold standard for drain cleaning in Rotherham, equally effective on Victorian clay pipes in the town centre and modern plastic systems in newer developments. Our specialist equipment removes years of accumulated deposits, restoring your drainage to optimal flow capacity.",
      commonProblems: ["Grease accumulation in residential and commercial kitchens", "Scale deposits from Yorkshire's hard water", "Silt and sediment from river-adjacent locations", "Root fragments after removal treatments", "General maintenance cleaning for optimal flow"],
      process: "We select the appropriate jetting nozzle and pressure setting for your pipe type and the deposits being removed. The jetting process works upstream from the blockage point, ensuring debris is flushed towards the sewer rather than further into your system.",
      localTip: "Rotherham's proximity to two major rivers means some properties experience higher groundwater levels that carry silt into drainage systems. Regular jetting prevents gradual flow reduction."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies across Rotherham receive our immediate attention, with engineers ready to respond rapidly to properties from Rawmarsh to Whiston and everywhere between. Sewage backups, flooding, and overflowing drains are all handled swiftly and professionally, minimising damage to your property.",
      commonProblems: ["Sewage backing up through toilets and sinks", "Surface water flooding during heavy rainfall events", "Manhole overflows affecting multiple properties", "Drain collapses causing ground instability", "River flooding affecting private drainage systems"],
      process: "Emergency calls are prioritised and dispatched to our nearest Rotherham engineer. We provide estimated arrival times and keep you informed throughout. On arrival, we secure the area, diagnose the problem, and implement the fastest effective solution.",
      localTip: "Rotherham properties in the Don Valley flood plain should fit non-return valves on main drainage connections to prevent river flooding from forcing sewage back into properties during high water events."
    },
    "drain-repairs": {
      intro: "Rotherham's diverse building stock requires drainage repair expertise spanning industrial heritage properties, Victorian terraces, and modern estates. Our repair teams handle everything from relining cracked pipes in Moorgate to replacing damaged sections in newer developments, always using materials and methods suited to your specific property.",
      commonProblems: ["Cracked clay pipes in Victorian properties", "Joint displacement from ground movement near rivers", "Root damage requiring pipe replacement", "Corrosion in older metal drainage connections", "Subsidence damage from former mining areas"],
      process: "Following CCTV diagnosis, we recommend the most appropriate repair approach. No-dig relining is ideal for accessible cracks and joints, while excavation may be necessary for collapsed sections. We always restore surfaces to their original condition.",
      localTip: "Rotherham's coal mining legacy means some areas experience ongoing ground settlement. Flexible repair solutions like pipe relining accommodate gradual movement better than rigid replacement pipes."
    }
  },
  doncaster: {
    "blocked-drains": {
      intro: "Doncaster's relatively flat terrain and proximity to the River Don create specific drainage challenges that differ from Sheffield's hillside properties. From the Edwardian terraces near the racecourse to the modern estates in Bessacarr and Cantley, our Doncaster blocked drain specialists understand how low-lying geography affects drainage systems across the town.",
      commonProblems: ["Silt accumulation in low-gradient drainage systems", "Root intrusion from mature trees in established suburbs", "Fat and grease buildup in domestic kitchens", "Surface water overwhelm during heavy rainfall", "Debris blockages in shared terraced housing drainage"],
      process: "We assess Doncaster blockages with knowledge of the area's flat topography, which can slow drainage flow and allow deposits to accumulate more quickly than in hillier locations. Our clearing methods restore full flow capacity and address the underlying causes.",
      localTip: "Doncaster's flat terrain means drainage relies heavily on pipe gradient rather than natural land fall. Even minor blockages can cause slow drainage, so address issues early before they worsen."
    },
    "drain-unblocking": {
      intro: "When Doncaster drains need unblocking, our local teams respond quickly across the town from Sprotbrough to Armthorpe. We handle the full range of drainage issues that Doncaster's family-oriented housing stock experiences, from kitchen waste blockages to external gulley problems with efficiency and care.",
      commonProblems: ["Kitchen sink blockages from cooking waste", "Bathroom drain clogs from hair and soap", "External gulley obstructions from garden debris", "Downpipe connection blockages", "Utility and laundry room drainage issues"],
      process: "Our Doncaster engineers arrive with equipment suited to the area's predominantly residential properties. We locate and clear blockages efficiently, providing advice on prevention to help you avoid future call-outs.",
      localTip: "Doncaster properties in low-lying areas near Hatfield and Stainforth should keep external gullies especially clear, as flat terrain means surface water cannot easily bypass blocked drainage points."
    },
    "cctv-drain-surveys": {
      intro: "Doncaster's active property market makes drainage condition a key consideration for buyers and sellers. Our CCTV surveys provide the detailed assessment needed for property transactions, as well as helping long-term homeowners understand and maintain their drainage systems in the town's varied housing stock.",
      commonProblems: ["Pre-purchase drainage assessment for older properties", "Investigating persistent slow drainage in flat terrain", "Root ingress from street and garden trees in Bessacarr", "Mapping drainage routes before home extensions", "Condition surveys for insurance purposes"],
      process: "We survey Doncaster properties thoroughly, with particular attention to pipe gradients given the area's flat terrain. Reports highlight any areas where inadequate fall may be contributing to drainage problems.",
      localTip: "Planning an extension on your Doncaster property? Commission a CCTV survey first, as the flat terrain means drainage diversions need careful gradient planning to maintain flow."
    },
    "drain-jetting": {
      intro: "Regular jetting is particularly important for Doncaster properties, where the flat terrain means drainage systems work harder to maintain adequate flow. Our high-pressure cleaning removes the deposits that accumulate more readily in low-gradient pipes, keeping your system operating at peak efficiency.",
      commonProblems: ["Silt deposits from low-gradient drainage runs", "Fat and grease accumulation in residential drains", "Scale buildup from Yorkshire's hard water supply", "Root fragments after treatment and removal", "Preventative maintenance for optimal flow"],
      process: "We pay special attention to pipe gradients when jetting Doncaster properties. Flat terrain requires thorough cleaning at key points where flow naturally slows, ensuring the entire system drains efficiently.",
      localTip: "Doncaster's low-lying properties near the River Don should schedule jetting more frequently than average, as flat drainage systems accumulate deposits faster than those on hillier ground."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Doncaster receive rapid response from our local teams, day and night. The town's low-lying position near the River Don means we're experienced with water-related emergencies and arrive prepared with pumping equipment and containment measures to protect your property.",
      commonProblems: ["Surface water flooding during heavy rainfall events", "Sewage backing up through ground-floor fittings", "Garden flooding from overwhelmed surface drainage", "Manhole overflows affecting neighbouring properties", "Rising water table causing drainage backup"],
      process: "Emergency calls from Doncaster receive priority dispatch. Our engineers understand the area's flood risk profile and arrive equipped to manage water ingress while resolving the underlying drainage failure.",
      localTip: "Doncaster properties in flood-risk zones along the Don Valley should fit non-return valves on main drainage connections. The 2019 flooding demonstrated how quickly river levels can overwhelm private drainage systems."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Doncaster requires understanding the area's specific challenges: flat terrain, variable water tables near the Don, and a mix of Edwardian, post-war, and modern property stock. Our repair specialists select methods and materials suited to these conditions, ensuring lasting results.",
      commonProblems: ["Cracked pipes from ground settlement in clay soil", "Root damage from mature trees in established suburbs", "Joint displacement in older clay pipe systems", "Low-gradient pipes requiring careful re-laying", "Waterlogged ground complicating excavation work"],
      process: "We assess Doncaster drainage repairs with the local water table and terrain in mind. Where excavation is needed, we manage groundwater appropriately, and all repairs account for the area's flat gradient requirements.",
      localTip: "Doncaster's clay soil shrinks and swells with moisture levels, causing pipe movement. Flexible repair solutions like no-dig relining accommodate this seasonal ground movement better than rigid replacements."
    }
  },
  barnsley: {
    "blocked-drains": {
      intro: "Barnsley's proud mining heritage is reflected in its drainage infrastructure, from stone-built miners' cottages to modern estates on former colliery sites. Our Barnsley blocked drain service combines traditional clearing expertise with modern techniques, effectively tackling blockages across the borough from Penistone in the west to Wombwell in the east.",
      commonProblems: ["Debris and sediment in older stone drainage channels", "Root intrusion from established garden trees", "Fat accumulation in domestic drains", "Ground movement from mining subsidence affecting pipe alignment", "Shared drainage conflicts in terraced housing"],
      process: "Barnsley's varied property types and mining heritage require flexible approaches. We assess your specific situation, considering property age, drainage type, ground conditions, and blockage characteristics before selecting the most effective clearing method.",
      localTip: "Barnsley properties on former mining land in areas like Grimethorpe and Goldthorpe should have drainage inspected regularly, as ongoing ground settlement can gradually misalign pipes and create blockage points."
    },
    "drain-unblocking": {
      intro: "When Barnsley drains need unblocking, our local team responds with the equipment and expertise to clear any obstruction. From Penistone to Royston, we handle residential and commercial drain unblocking with professional efficiency and minimal disruption to your daily routine.",
      commonProblems: ["Kitchen sink blockages in family homes", "Toilet and bathroom clogs", "External drain obstructions from garden debris", "Interceptor trap blockages in older properties", "Commercial drainage issues in town centre businesses"],
      process: "Our Barnsley engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Barnsley's stone-built miners' cottages often have deep, narrow inspection chambers. Ensure access covers are in good condition and accessible for maintenance."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Barnsley property's drainage is essential for proper maintenance and informed decision-making. Our CCTV surveys reveal the condition of pipes beneath your property, identifying issues that surface inspection cannot detect. This is particularly valuable in Barnsley where mining subsidence can affect underground infrastructure.",
      commonProblems: ["Subsidence damage assessment from historical mining", "Unknown drainage routes in older properties", "Pipe condition assessment for property purchases", "Root ingress detection from mature vegetation", "Joint and connection problems from ground movement"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations prioritised by urgency and accounting for Barnsley's specific ground conditions.",
      localTip: "Barnsley properties near former colliery sites should commission regular CCTV surveys. Mining subsidence can cause gradual pipe displacement that leads to blockages if left undetected."
    },
    "drain-jetting": {
      intro: "Barnsley's combination of hard Yorkshire water and varied pipe materials makes regular drain jetting a valuable maintenance investment. Our high-pressure cleaning service removes deposits that accumulate over time, maintaining optimal flow in domestic and commercial drainage systems throughout the borough.",
      commonProblems: ["Scale buildup from hard Yorkshire water", "Grease accumulation in residential kitchens", "Silt and debris deposits from surface water", "Root fragment removal after cutting treatment", "General maintenance needs for ageing systems"],
      process: "We assess your drainage and select appropriate jetting equipment. The cleaning process is thorough but controlled, removing deposits while protecting your pipe integrity. We verify results with flow testing.",
      localTip: "Barnsley's hard water supply from Yorkshire Water causes significant limescale accumulation in pipes. Regular jetting every 12 months is advisable for older properties to prevent gradual flow restriction."
    },
    "emergency-drain-services": {
      intro: "Barnsley drainage emergencies receive immediate attention from our dedicated response teams. Whether you're facing a flooded cellar in Worsborough or sewage backup in Monk Bretton, we're available around the clock to resolve the situation and protect your property from further damage.",
      commonProblems: ["Sewage backing up into ground-floor rooms", "Flooding from blocked surface water drains", "Overflowing manholes on terraced streets", "Collapsed drainage from ground movement", "Foul odour emergencies indicating pipe failure"],
      process: "Emergency calls are dispatched immediately to our nearest Barnsley engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Barnsley's former mining areas can experience sudden ground shifts that damage drainage. If you notice unexplained damp patches or slow drainage after periods of heavy rain, call us for an urgent assessment."
    },
    "drain-repairs": {
      intro: "Barnsley's property stock spans from original stone miners' cottages to modern estates, and our drain repair expertise matches this diversity. We provide repair solutions appropriate to each property type, using techniques that account for Barnsley's unique ground conditions and mining heritage.",
      commonProblems: ["Cracked pipes from mining subsidence movement", "Clay pipe deterioration in older properties", "Joint failures from ground settlement", "Root damage in established residential areas", "Ground movement effects on drainage alignment"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options and their implications. Repair work is completed to high standards with appropriate guarantees, using materials suited to Barnsley's ground conditions.",
      localTip: "Barnsley properties on former coal mining land benefit from flexible repair solutions like pipe relining that can accommodate ongoing ground settlement without cracking."
    }
  },
  chesterfield: {
    "blocked-drains": {
      intro: "Chesterfield's position at the gateway to the Peak District means properties face drainage challenges from both urban and semi-rural environments. From the Georgian townhouses near the Crooked Spire to the modern developments in Loundsley Green, our Chesterfield blocked drain specialists bring local knowledge and specialist equipment to clear any obstruction.",
      commonProblems: ["Silt and debris from Peak District runoff in western properties", "Root intrusion from mature gardens in established suburbs", "Fat and grease buildup in domestic kitchens", "Stone and mortar debris in heritage property drainage", "Shared drainage blockages in the town centre's terraced housing"],
      process: "Chesterfield's varied property types and proximity to the Peak District demand flexible approaches. We assess each situation individually, considering property age, pipe material, and the area's specific environmental factors before selecting our clearing method.",
      localTip: "Chesterfield properties in western areas near the Peak District should have external gullies cleared before autumn, as leaf fall and storm debris can quickly overwhelm hillside drainage systems."
    },
    "drain-unblocking": {
      intro: "When Chesterfield drains need unblocking, our local teams cover the entire area from Brimington to Walton and all points between. We handle everything from simple kitchen sink blockages to complex shared drainage issues in the town's many Victorian and Edwardian terraced properties.",
      commonProblems: ["Kitchen waste accumulation in family homes", "Bathroom drain blockages from hair and soap", "External gulley obstructions from fallen leaves", "Interceptor trap blockages in older period properties", "Washing machine and utility drain problems"],
      process: "Our Chesterfield engineers arrive with comprehensive unblocking tools suited to the area's property mix. We identify the obstruction quickly and clear it completely, testing flow restoration before finishing the job.",
      localTip: "Chesterfield's canal-side properties near the Chesterfield Canal should have drainage checked regularly, as canal-side tree roots and fluctuating water table levels can affect pipe integrity."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Chesterfield property's drainage is essential for effective maintenance. Our CCTV surveys provide detailed pipe condition assessments, particularly valuable for the town's Georgian townhouses, Victorian terraces, and properties near the canal where drainage history may be complex.",
      commonProblems: ["Mapping drainage in heritage town centre properties", "Pre-purchase surveys for period homes near the Crooked Spire", "Root ingress from mature vegetation in Ashgate and Brampton", "Investigating causes of recurring blockages", "Planning surveys for property extensions and renovations"],
      process: "We survey Chesterfield drainage methodically, recording condition and mapping routes. This is especially important for older town centre properties where drainage layouts can date back several centuries.",
      localTip: "Buying a period property in Chesterfield's historic centre? Always commission a full CCTV drain survey, as older buildings often have modified drainage that surface inspection cannot reveal."
    },
    "drain-jetting": {
      intro: "High-pressure jetting effectively maintains Chesterfield's varied drainage systems, from Georgian stone channels in heritage properties to modern plastic pipes in newer estates. Our specialist equipment clears the scale, grease, and debris that accumulate in local drainage systems over time.",
      commonProblems: ["Hard water scale accumulation from Yorkshire Water supply", "Grease buildup in residential drains", "Silt deposits from Peak District surface water", "Root fragments requiring clearance after treatment", "Pre-survey cleaning for accurate CCTV assessment"],
      process: "We match jetting equipment to Chesterfield's pipe types and conditions. Heritage drainage in period properties receives careful, lower-pressure treatment, while modern systems can handle more aggressive cleaning for thorough results.",
      localTip: "Chesterfield's hard water supply contributes to significant scale buildup. Properties with older clay pipes benefit from annual jetting to prevent the gradual flow restriction that hard water deposits cause."
    },
    "emergency-drain-services": {
      intro: "Chesterfield drainage emergencies receive rapid response from our local teams, whether you're dealing with flooding in Hasland or sewage backup in Brampton. Our engineers are available around the clock, equipped to handle emergencies at any property type across the town.",
      commonProblems: ["Surface water flooding during heavy Peak District rainfall", "Sewage backing up into ground-floor rooms", "Manhole overflows on terraced streets", "Drain collapses from ground movement", "Storm water overwhelming older drainage systems"],
      process: "Emergency calls from Chesterfield receive immediate dispatch. We provide realistic arrival times and come prepared with pumping equipment and emergency repair materials to contain damage and resolve the situation.",
      localTip: "Chesterfield properties on hillside locations towards the Peak District should maintain clear surface water drains year-round, as rainfall can be significantly heavier on higher ground."
    },
    "drain-repairs": {
      intro: "Chesterfield's drainage spans from original Georgian stone channels to modern plastic systems, and our repair teams work confidently with all types. Whether it's relining Victorian pipes in Brampton or replacing collapsed sections in newer Loundsley Green properties, we select repair methods suited to each situation.",
      commonProblems: ["Cracked stone drainage channels in heritage properties", "Joint displacement from ground movement", "Root damage requiring pipe replacement in mature suburbs", "Corrosion in older metal drainage connections", "Coal measures geology causing pipe instability"],
      process: "We investigate thoroughly before recommending Chesterfield drainage repairs. Our approach accounts for the area's mixed geology and varied property ages, using durable materials that provide long-lasting results.",
      localTip: "Chesterfield's coal measures geology means some areas experience gradual ground movement. Flexible repair solutions like pipe relining accommodate this better than rigid replacement sections."
    }
  },
  dronfield: {
    "blocked-drains": {
      intro: "Dronfield's hillside location between Sheffield and Chesterfield creates natural drainage challenges, with many properties built on sloping ground where pipe gradients and surface water management are critical. From period stone cottages in the old village to modern estates in Gosforth Valley, our Dronfield blocked drain specialists bring local knowledge to every call-out.",
      commonProblems: ["Silt accumulation from hillside surface water runoff", "Root intrusion from mature gardens and hedgerows", "Fat and grease buildup in domestic kitchens", "Debris washing into drains during heavy rainfall", "Ageing clay pipes in the historic village centre"],
      process: "We assess each Dronfield blockage with the area's hilly terrain in mind. Properties on slopes require different approaches than those on flatter ground, and our engineers carry equipment suited to every situation the hillside geography presents.",
      localTip: "Dronfield properties on the steeper streets towards Coal Aston and Holmesfield should ensure external gullies are kept clear, as surface water flows rapidly downhill during heavy rain and can overwhelm blocked drainage points."
    },
    "drain-unblocking": {
      intro: "When Dronfield drains need unblocking, our local team responds promptly with the right equipment for every situation. From Dronfield Woodhouse to Unstone, we handle residential drain unblocking across the town and surrounding villages with professional care.",
      commonProblems: ["Kitchen waste accumulation in family homes", "Bathroom drain blockages from hair and soap", "External gulley obstructions from garden debris and leaf litter", "Toilet blockages from inappropriate flushing", "Shared drainage issues in older properties"],
      process: "Our Dronfield engineers arrive with comprehensive equipment for the area's varied property types. We diagnose the blockage type and location quickly, then apply the most effective clearing technique for your specific situation.",
      localTip: "Dronfield's older village properties often have narrow, deep inspection chambers. Regular maintenance prevents serious blockages developing in these harder-to-access drainage systems."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're buying a stone cottage in Dronfield's historic centre or investigating drainage issues at a modern family home in Coal Aston, our CCTV surveys reveal what's happening beneath the surface. This is especially valuable in Dronfield where hillside properties can experience ground movement affecting pipe alignment.",
      commonProblems: ["Ground movement assessment on hillside properties", "Pre-purchase surveys for period village properties", "Root ingress from mature hedgerows and garden trees", "Investigating recurring blockage causes on gradient drainage", "Mapping drainage routes before building extensions"],
      process: "We survey Dronfield properties systematically, recording pipe condition and identifying defects. Reports include annotated footage and prioritised recommendations, accounting for the area's hilly terrain and mixed property ages.",
      localTip: "Dronfield's hillside properties experience greater ground water pressure on drainage joints. A CCTV survey can identify early signs of displacement before they cause blockages."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is essential maintenance for Dronfield's drainage systems, which contend with hillside silt, hard Yorkshire water, and the deposits that accumulate in ageing pipe systems. Our specialist equipment handles everything from clearing debris in village properties to descaling modern plastic pipes in newer estates.",
      commonProblems: ["Silt and sediment from hillside surface water", "Scale buildup from hard Yorkshire water", "Grease accumulation in residential drains", "Root fragments after cutting treatment", "General preventative maintenance cleaning"],
      process: "We select jetting equipment suited to Dronfield's conditions, adjusting pressure and nozzle selection to suit each pipe's material, age, and condition. Flow is verified before completing the service.",
      localTip: "Dronfield properties on steep ground experience faster silt accumulation from surface water runoff. Consider jetting every 12 months rather than the usual 18 to maintain optimal drainage."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Dronfield and surrounding villages receive our immediate attention, with engineers ready to respond around the clock. Whether you're facing sewage backup in Dronfield Woodhouse or flooding at a hillside property in Coal Aston, we respond with the urgency your situation demands.",
      commonProblems: ["Sewage backing up into ground-floor rooms", "Surface water flooding overwhelming hillside drainage", "Manhole overflows during heavy rainfall", "Drain collapses from ground movement", "Foul odours indicating pipe damage on steep terrain"],
      process: "Emergency calls from Dronfield trigger immediate dispatch. Our engineers arrive prepared for the area's hillside terrain with pumping equipment and temporary drainage solutions to protect your property.",
      localTip: "Dronfield's steep terrain means surface water can flow rapidly during storms. If you notice drainage slowing during rain, have it investigated before the next heavy downpour to avoid an emergency."
    },
    "drain-repairs": {
      intro: "Dronfield's mix of historic village properties and modern estates requires drainage repair expertise spanning several centuries of construction techniques. Our repair specialists work across the town and surrounding villages, using methods and materials suited to each property's age, position, and ground conditions.",
      commonProblems: ["Cracked pipes from ground movement on hillsides", "Joint displacement on steep gradient drainage", "Root damage from mature hedgerows and gardens", "Age-related deterioration of stone and clay drainage", "Ground movement damage from clay subsoil"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options. Dronfield's hilly terrain often makes no-dig relining the preferred solution, avoiding disruptive excavation on sloping gardens and driveways.",
      localTip: "Dronfield properties on steep slopes should use flexible repair materials that accommodate ground movement. Rigid replacement pipes on gradient sites can crack again if the ground shifts seasonally."
    }
  },
  ecclesall: {
    "blocked-drains": {
      intro: "Ecclesall's reputation as one of Sheffield's most desirable suburbs comes with distinctive drainage challenges. The area's large Victorian and Edwardian villas sit in mature gardens along tree-lined avenues, creating root intrusion risks alongside the steep terrain that characterises this part of the city. Our Ecclesall specialists understand these local factors and deliver effective blocked drain solutions for high-value properties.",
      commonProblems: ["Tree root intrusion from mature gardens and avenue planting", "Aged clay pipe deterioration in Victorian villas", "Fat and grease buildup from busy family kitchens", "Leaf debris blocking gullies in autumn months", "Complex drainage serving extensions, conservatories, and outbuildings"],
      process: "We approach Ecclesall blocked drains with appreciation for the area's prestigious period properties. Our clearing methods are effective yet gentle on original drainage features, preserving the integrity of your home's infrastructure.",
      localTip: "Ecclesall's beautiful mature trees along Ecclesall Road South and Ringinglow Road are a significant root intrusion risk. Consider annual CCTV checks if you have large trees within 5 metres of your drainage runs."
    },
    "drain-unblocking": {
      intro: "Ecclesall residents deserve drain unblocking services that match the quality of their homes. Our local teams respond promptly to calls from Banner Cross to Whirlow, bringing the expertise needed to clear blockages in period properties without causing unnecessary disruption to your home and gardens.",
      commonProblems: ["Bathroom drain clogs in period en-suites and family bathrooms", "Kitchen sink blockages from food waste", "External gulley obstructions from garden debris", "Downpipe connection blockages in large properties", "Cellar drainage issues in Victorian and Edwardian villas"],
      process: "Our Ecclesall engineers understand period property drainage. We use appropriate techniques for each situation, whether that's careful rodding of delicate original clay pipes or jetting for more robust modern sections added during renovations.",
      localTip: "Ecclesall's large Victorian villas often have extensive drainage networks serving original outbuildings, later extensions, and converted cellars. Know your property's full drainage layout to help us respond efficiently."
    },
    "cctv-drain-surveys": {
      intro: "Ecclesall's premium property market makes thorough drainage assessment essential for buyers and sellers alike. Our CCTV surveys provide detailed condition reports that protect your investment, revealing the true state of underground drainage in the area's sought-after Victorian and Edwardian homes along Ecclesall Road and its surrounding avenues.",
      commonProblems: ["Pre-purchase condition assessment for high-value homes", "Root ingress investigation from mature garden trees", "Drainage route mapping for complex period property layouts", "Period drainage feature documentation", "Insurance and renovation planning requirements"],
      process: "We survey Ecclesall properties with appreciation for their character and value. Our reports are comprehensive and professional, suitable for property transactions and insurance purposes at this price point.",
      localTip: "Selling your Ecclesall home? A proactive drainage survey can address any issues before they become negotiating points in what is always a significant property transaction."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Ecclesall's period drainage at peak performance. Our careful approach removes decades of accumulated deposits from Victorian clay pipes, restoring flow capacity while preserving the integrity of original drainage features in these highly valued properties.",
      commonProblems: ["Scale from Yorkshire's hard water supply", "Grease accumulation over time in large family kitchens", "Root mass removal from mature garden specimens", "Silt and debris clearing from hillside surface water", "Pre-survey preparation for accurate condition assessment"],
      process: "Ecclesall's period drainage requires measured jetting approaches. We adjust pressure and nozzle selection to suit pipe age and condition, achieving thorough cleaning without risk of damage to original Victorian and Edwardian pipework.",
      localTip: "Ecclesall's hard water from Yorkshire Water contributes to significant scale buildup. Periodic jetting maintains optimal flow and extends the lifespan of your property's period drainage system."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Ecclesall receive our immediate attention, with local engineers ready to protect your home from damage. Whether you're facing sewage backup in a Victorian villa on Ecclesall Road South or flooding at a family home in Bents Green, we respond with the urgency your property deserves.",
      commonProblems: ["Sewage backing up into cellars and ground-floor rooms", "Garden flooding from overwhelmed drainage on hillside properties", "Manhole overflows during heavy rainfall", "Drain collapse affecting foundations of period properties", "Persistent foul odours indicating serious pipe damage"],
      process: "Emergency response to Ecclesall properties is swift and professional. We understand the area's property values and act to minimise damage and disruption while resolving the underlying problem thoroughly.",
      localTip: "Ecclesall properties with cellars should ensure drainage pumps and non-return valves are regularly serviced. Sheffield's heavy rainfall can overwhelm hillside drainage systems quickly."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Ecclesall's prestigious properties requires specialist knowledge and sympathetic approaches. Our repair team works with all property ages, from original Victorian installations along Ecclesall Road to modern connections added during renovations, always selecting methods that preserve your home's integrity while delivering lasting results.",
      commonProblems: ["Aged clay pipe cracking in Victorian and Edwardian villas", "Root damage to joints from mature garden trees", "Ground movement effects on hillside drainage", "Historical modification issues from property extensions", "Cellar drainage problems in period properties"],
      process: "We investigate Ecclesall drainage issues thoroughly, recommending repairs that suit your property's age, character, and value. No-dig techniques are often ideal for period properties, avoiding disruption to mature gardens, patios, and landscaping.",
      localTip: "Ecclesall's Victorian drainage often includes original salt-glazed stoneware pipes. These can be repaired and relined rather than replaced, preserving the heritage features of your property's infrastructure."
    }
  },
  chapeltown: {
    "blocked-drains": {
      intro: "Chapeltown and the surrounding villages of High Green, Ecclesfield, and Grenoside form a distinctive community on Sheffield's northern fringe, where former mining areas create specific drainage challenges. Our Chapeltown blocked drain specialists understand how the area's industrial heritage and mixed terrain affect drainage systems in every property type.",
      commonProblems: ["Ground movement from historic mining causing pipe misalignment", "Root intrusion from established gardens and hedgerows", "Fat and grease accumulation in domestic drains", "Debris washed into drainage from surrounding countryside", "Shared drainage blockages in miners' terraces"],
      process: "We assess Chapeltown blockages with knowledge of the area's mining heritage and mixed terrain. Our engineers understand the specific drainage challenges that former mining communities face and bring appropriate equipment to every job.",
      localTip: "Chapeltown properties near former colliery sites should have drainage inspected regularly, as historical ground settlement can gradually shift pipe alignment and create new blockage points over time."
    },
    "drain-unblocking": {
      intro: "When drains block in Chapeltown and the surrounding villages, our local team responds promptly with the equipment and expertise to clear any obstruction. From High Green to Thorpe Hesley, we handle residential drain unblocking efficiently across this close-knit community.",
      commonProblems: ["Kitchen sink blockages from food waste", "Toilet and bathroom clogs in family homes", "External drain obstructions from leaves and garden debris", "Interceptor trap blockages in older miners' cottages", "Surface water drainage problems after heavy rain"],
      process: "Our Chapeltown engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Chapeltown's older miners' terraces often have shared rear drainage runs. If your neighbours are experiencing similar drainage problems, the issue is likely in the shared section requiring coordinated resolution."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Chapeltown property's drainage is essential, particularly given the area's mining heritage and the ground conditions this creates. Our CCTV surveys reveal the condition of pipes beneath your property, identifying issues that surface inspection simply cannot detect.",
      commonProblems: ["Subsidence damage assessment from historical mining activity", "Pre-purchase surveys for older village properties", "Root ingress detection from mature vegetation", "Investigating recurring blockages in miners' housing drainage", "Planning surveys before building extensions"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. Reports provide a clear picture of your system's condition, with recommendations that account for Chapeltown's specific ground conditions.",
      localTip: "Chapeltown properties built on or near former mining land should have CCTV drainage surveys every few years, as ground settlement is an ongoing process that can gradually affect pipe condition."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides the thorough cleaning that Chapeltown's varied drainage systems need. From clearing accumulated deposits in older miners' cottages to maintaining modern systems in newer estates, our jetting service restores optimal drainage performance across the area.",
      commonProblems: ["Scale buildup from hard Yorkshire water supply", "Grease accumulation in residential kitchens", "Silt deposits from surface water drainage", "Root fragments requiring removal after treatment", "General preventative maintenance cleaning"],
      process: "We select jetting equipment and settings appropriate for Chapeltown's mixed property stock. Older systems receive careful, lower-pressure treatment, while modern pipes can handle more thorough cleaning.",
      localTip: "Chapeltown's hard water from Yorkshire Water means pipes accumulate scale deposits over time. Regular jetting keeps drainage flowing freely and extends pipe lifespan."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies across Chapeltown and the surrounding villages receive our immediate response. Whether you're facing sewage backup in Ecclesfield or flooding at a High Green property, our engineers are available around the clock to protect your home.",
      commonProblems: ["Sewage backing up into ground-floor rooms", "Flooding from blocked surface water drains", "Overflowing manholes affecting terraced streets", "Drain collapses from ground movement", "Foul odour emergencies from pipe damage"],
      process: "Emergency calls from Chapeltown trigger immediate dispatch. Our engineers arrive prepared with pumping equipment and emergency repair materials to contain damage and resolve the situation as quickly as possible.",
      localTip: "Chapeltown properties should know the location of their external manhole covers and stopcock. This information helps our engineers begin work immediately when responding to a drainage emergency."
    },
    "drain-repairs": {
      intro: "Chapeltown's property stock ranges from original miners' cottages and Victorian terraces to modern family estates, and our drain repair expertise covers this full range. We select repair methods suited to each property's age, construction type, and the area's specific ground conditions.",
      commonProblems: ["Cracked pipes from mining subsidence movement", "Clay pipe deterioration in older cottages", "Joint failures from gradual ground settlement", "Root damage from mature gardens and hedgerows", "Corrosion in older metal drainage connections"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options. Chapeltown's ground conditions often favour flexible repair solutions like pipe relining that accommodate ongoing settlement.",
      localTip: "Chapeltown properties on former mining land benefit from flexible repair solutions that can accommodate gradual ground movement without cracking or separating at joints."
    }
  },
  hillsborough: {
    "blocked-drains": {
      intro: "Hillsborough's location at the confluence of the Loxley and Rivelin valleys creates distinctive drainage challenges. The steep valley sides, combined with proximity to watercourses, mean properties across the area face both gradient-related and water table drainage issues. Our Hillsborough specialists bring essential local knowledge to every blocked drain call-out.",
      commonProblems: ["Silt and debris washed down from Loxley and Rivelin valleys", "Root intrusion from valley-side vegetation", "Fat and grease accumulation in residential drains", "Surface water overwhelming drainage during heavy rainfall", "Debris blockages in shared terraced housing drainage"],
      process: "We assess Hillsborough blockages with knowledge of the area's valley location and flood history. Our engineers understand how the terrain and proximity to watercourses affect drainage systems and bring appropriate equipment to handle every situation.",
      localTip: "Hillsborough properties near the Loxley and Rivelin rivers should keep external gullies clear at all times. The area's flood history demonstrates how quickly valley drainage can become overwhelmed during heavy rainfall."
    },
    "drain-unblocking": {
      intro: "When drains block in Hillsborough, our local teams respond quickly with the urgency and expertise your situation demands. From Wadsley to Malin Bridge, we handle every kind of domestic drain unblocking with the efficiency that valley-floor properties often require when drainage problems escalate rapidly.",
      commonProblems: ["Kitchen waste accumulation in family kitchens", "Bathroom drain blockages from hair and soap", "External gulley obstructions from valley debris", "Shared drainage issues in terraced and semi-detached housing", "Surface water drain blockages during storm events"],
      process: "Our Hillsborough engineers arrive with comprehensive unblocking equipment. We assess the blockage location and severity quickly, then apply the most effective clearing technique to restore drainage before water levels rise.",
      localTip: "Hillsborough's valley-floor properties are susceptible to rapid water accumulation during storms. If external drains show any signs of slowing, have them cleared promptly rather than waiting for a full blockage."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Hillsborough property's drainage condition is especially important given the area's valley location and flood history. Our CCTV surveys reveal pipe condition, identify developing problems, and provide the detailed information needed to maintain effective drainage in this flood-sensitive part of Sheffield.",
      commonProblems: ["Flood damage assessment for valley-floor properties", "Root ingress from valley-side trees and vegetation", "Pipe condition surveys after storm events", "Pre-purchase assessment for properties in flood-risk areas", "Investigating recurring blockage causes related to terrain"],
      process: "We survey Hillsborough properties thoroughly, paying particular attention to gradient, pipe condition near watercourses, and any evidence of flood-related damage. Reports include specific recommendations for the area's unique conditions.",
      localTip: "Buying in Hillsborough or Malin Bridge? A comprehensive CCTV drain survey is essential given the area's flood history. It reveals whether previous flooding has damaged underground drainage infrastructure."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is critical maintenance for Hillsborough properties, where valley-floor silt, hard Yorkshire water, and leaf debris from surrounding woodlands all contribute to drainage deposits. Our specialist equipment restores full flow capacity to keep your system performing when it matters most.",
      commonProblems: ["Valley silt and alluvial deposits in drainage", "Scale buildup from hard Yorkshire water", "Storm debris accumulation from surrounding valleys", "Root fragments after removal treatment", "Preventative maintenance for flood-resilient drainage"],
      process: "We select jetting equipment and settings appropriate for Hillsborough's conditions. Valley-floor properties may require higher-capacity equipment to clear heavier deposits, while hillside pipes need careful pressure management.",
      localTip: "Hillsborough properties should prioritise drainage maintenance before autumn and winter when rainfall peaks. Annual jetting helps ensure your drainage is ready to handle the increased water volume that valley locations experience."
    },
    "emergency-drain-services": {
      intro: "Hillsborough's valley location makes rapid emergency drainage response essential. Our teams are ready around the clock to respond to flooding, sewage backup, and drain failures across the area. We understand the urgency that river-valley properties face and arrive equipped to manage water-related emergencies effectively.",
      commonProblems: ["Surface water flooding during heavy valley rainfall", "Sewage backing up when river levels rise", "Manhole overflows from overwhelmed combined drainage", "Drain collapses from waterlogged ground", "Rapid water accumulation in valley-floor properties"],
      process: "Emergency calls from Hillsborough receive the highest priority. Our engineers arrive with heavy-duty pumping equipment and containment materials, understanding that valley-floor emergencies can escalate rapidly.",
      localTip: "Hillsborough properties should have a flood plan in place. Non-return valves on main drainage connections are essential for properties near the Loxley and Rivelin rivers to prevent sewage backup during high water."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Hillsborough requires understanding the area's unique challenges: valley terrain, proximity to watercourses, and a history of flooding that places extra demands on pipe systems. Our repair specialists select methods and materials that deliver long-lasting results in these demanding conditions.",
      commonProblems: ["Flood damage to pipe joints and connections", "Cracked pipes from waterlogged ground movement", "Root damage from valley-side vegetation", "Erosion around pipes near watercourses", "Age-related deterioration accelerated by flood events"],
      process: "We investigate thoroughly, recommending repairs that account for Hillsborough's valley location and water table conditions. Materials are chosen for durability in high-moisture environments.",
      localTip: "Hillsborough properties near the rivers should use water-resistant repair materials and ensure all joints are fully sealed. The high water table in valley-floor locations can undermine repairs that would last perfectly well on higher ground."
    }
  },
  stocksbridge: {
    "blocked-drains": {
      intro: "Stocksbridge's steep Pennine valley location and proximity to the Little Don River create significant drainage demands for properties across the town. From the stone-built terraces that originally housed steelworkers to modern hillside estates, our Stocksbridge specialists understand the unique challenges that this valley-side community faces.",
      commonProblems: ["Silt and debris washed down from Pennine hillsides", "Root intrusion from moorland and garden vegetation", "Fat and grease buildup in domestic drains", "Storm debris overwhelming drainage during heavy rainfall", "Ageing stone and clay drainage in older properties"],
      process: "We assess Stocksbridge blockages with the area's steep valley terrain firmly in mind. Hillside properties require different approaches than those on the valley floor, and our engineers carry equipment suited to every situation the Pennine geography presents.",
      localTip: "Stocksbridge properties on the steeper hillsides towards Bolsterstone and Midhopestones should clear external gullies before winter, as Pennine storms can deposit large amounts of debris in drainage systems very quickly."
    },
    "drain-unblocking": {
      intro: "When drains block in Stocksbridge and the surrounding Pennine villages, our team responds with the equipment and local knowledge needed to clear any obstruction. From Deepcar to Bolsterstone, we handle residential drain unblocking efficiently in this close-knit steel valley community.",
      commonProblems: ["Kitchen waste blockages in family homes", "Bathroom drain clogs from hair and soap", "External drain obstructions from moorland debris and leaf fall", "Toilet blockages from inappropriate flushing", "Surface water drainage problems after Pennine storms"],
      process: "Our Stocksbridge engineers carry comprehensive equipment for the area's varied conditions. We diagnose the blockage type and location quickly, then apply the most effective clearing technique for your specific pipe material and terrain.",
      localTip: "Stocksbridge's steelworker terraces often share rear drainage systems. Coordinating maintenance with neighbours prevents recurring blockages in these shared pipe runs."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're buying a stone cottage in Bolsterstone or investigating drainage problems at a modern family home in the Fox Valley area, our CCTV surveys reveal what's happening beneath the surface. This is particularly important in Stocksbridge where steep terrain and Pennine weather conditions place extra demands on drainage systems.",
      commonProblems: ["Ground movement assessment on steep valley-side properties", "Storm damage assessment after heavy Pennine rainfall", "Pre-purchase surveys for stone-built period properties", "Root ingress from moorland vegetation and garden trees", "Investigating recurring blockages on steep gradient drainage"],
      process: "We survey Stocksbridge properties systematically, recording pipe condition and identifying defects. Reports include annotated footage and prioritised recommendations that account for the area's steep terrain and weather conditions.",
      localTip: "Stocksbridge's Pennine location means properties experience freeze-thaw cycles and heavy rainfall. A CCTV survey after harsh winters catches frost damage before it causes blockages."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is essential maintenance for Stocksbridge's drainage systems, which contend with Pennine rainfall, hillside silt, and hard Yorkshire water deposits. Our specialist equipment handles everything from clearing storm debris in hillside properties to descaling pipes in the valley floor homes.",
      commonProblems: ["Silt and sediment from Pennine hillside runoff", "Scale buildup from hard Yorkshire water", "Storm debris accumulation after heavy rainfall", "Root fragments after cutting treatment", "General preventative maintenance for hillside drainage"],
      process: "We select jetting equipment suited to Stocksbridge's demanding conditions, with higher capacity for storm-deposited debris and careful pressure settings for older stone-channelled drainage.",
      localTip: "Stocksbridge properties at higher elevations experience more rainfall and faster silt accumulation than Sheffield city centre. Consider jetting annually to maintain optimal drainage performance."
    },
    "emergency-drain-services": {
      intro: "Pennine weather can overwhelm drainage systems quickly, and Stocksbridge properties need an emergency service that understands this reality. Our teams respond around the clock to flooding, sewage backup, and drain failures across the town and surrounding villages, bringing the equipment needed for valley-side emergencies.",
      commonProblems: ["Storm water flooding overwhelming drainage capacity", "Sewage backing up during heavy Pennine rainfall events", "Hillside drain collapses after ground saturation", "Manhole overflows affecting terraced streets in Deepcar", "River-related drainage emergencies near the Little Don"],
      process: "Emergency calls from Stocksbridge trigger immediate dispatch. Our engineers arrive prepared for weather-related emergencies with heavy-duty pumping equipment and temporary drainage solutions to protect your property.",
      localTip: "Stocksbridge's steep valley terrain means surface water can accumulate rapidly during storms. If you notice drainage slowing during rain, call for assessment before the situation becomes an emergency."
    },
    "drain-repairs": {
      intro: "Stocksbridge's drainage faces unique stresses from Pennine weather, steep terrain, and the legacy of its steelworks heritage. Our repair specialists work across the town and surrounding villages, from relining cracked pipes in Deepcar's terraces to excavating collapsed drains in rural hillside properties.",
      commonProblems: ["Freeze-thaw cracking in exposed hillside pipes", "Ground movement damage on steep valley-side terrain", "Erosion around pipe joints from high water flow", "Root damage from moorland and garden vegetation", "Deterioration of original steelworker housing drainage"],
      process: "We assess Stocksbridge drainage repairs with the valley's demanding conditions in mind. Materials and methods are chosen to withstand Pennine weather, with flexible solutions preferred on steep terrain where ground movement is ongoing.",
      localTip: "Stocksbridge properties on steep hillsides should use frost-resistant pipe materials for any exposed or shallow drainage repairs. The Pennine altitude means ground frost occurs more frequently than in central Sheffield."
    }
  }
};

/**
 * How It Works steps per service (with {location} and {responseTime} placeholders)
 */
export interface HowItWorksStep {
  title: string;
  description: string;
}

export const SERVICE_HOW_IT_WORKS: Record<string, HowItWorksStep[]> = {
  "blocked-drains": [
    { title: "Call & Describe", description: "Phone us and describe the symptoms — slow drainage, gurgling, bad smells, or standing water. We dispatch a local engineer to your {location} property, arriving {responseTime}." },
    { title: "On-Site Diagnosis", description: "Your engineer inspects all access points and, where necessary, deploys a CCTV drain camera to pinpoint the exact blockage location and cause inside the pipework." },
    { title: "Clear the Blockage", description: "Using high-pressure water jetting, mechanical rodding, or electromechanical cutting tools, we remove the obstruction completely and flush the line clean." },
    { title: "Flow Verification", description: "We run water through every affected fixture and inspect the drainage run to confirm full flow has been restored with no secondary issues." },
    { title: "Report & Prevention Advice", description: "You receive a summary of what caused the blockage and practical steps to prevent it recurring, tailored to your {location} property type." }
  ],
  "drain-unblocking": [
    { title: "Emergency Contact", description: "Call our {location} response line. We gather details about the affected fixtures — sinks, toilets, baths, or external drains — and dispatch the nearest available engineer." },
    { title: "Access & Assessment", description: "On arrival {responseTime}, we identify which section of drainage is affected and determine whether the blockage is localised or further downstream." },
    { title: "Select the Right Method", description: "Depending on the blockage type, we use manual drain rods, an electromechanical drain snake, or high-pressure jetting equipment to clear the obstruction." },
    { title: "Clear & Flush", description: "The blockage is fully removed and the line is flushed with water to confirm unimpeded flow from every connected appliance." },
    { title: "Aftercare Guidance", description: "We explain what caused the issue and offer practical advice on preventing future blockages in your {location} property." }
  ],
  "cctv-drain-surveys": [
    { title: "Book Your Survey", description: "Contact us to arrange a convenient time. We arrive at your {location} property {responseTime} with self-contained survey equipment — no preparation is needed on your part." },
    { title: "Camera Insertion", description: "We access the drainage system through manholes or inspection chambers and feed a high-definition waterproof camera through the entire pipe network." },
    { title: "Live Inspection", description: "The camera transmits real-time footage to a monitor, allowing us to identify cracks, root ingress, displaced joints, blockages, and other defects as we progress." },
    { title: "Detailed Report", description: "You receive a written report with annotated screenshots, a pipe condition summary, and prioritised recommendations for any repairs or maintenance needed." }
  ],
  "drain-jetting": [
    { title: "Initial Assessment", description: "We inspect your {location} drainage system to determine pipe material, diameter, and condition. This ensures we select the correct jetting pressure and nozzle." },
    { title: "CCTV Pre-Check", description: "Where appropriate, a brief camera inspection confirms the location and nature of deposits so jetting effort is directed precisely where it is needed." },
    { title: "High-Pressure Cleaning", description: "Our specialist jetting unit delivers water at pressures up to 4,000 PSI through a rotating nozzle, scouring the pipe walls clean and flushing debris towards the sewer." },
    { title: "Post-Jetting Verification", description: "A final camera pass confirms the pipe is clear. We compare before-and-after footage so you can see the improvement, and advise on a suitable maintenance interval." }
  ],
  "emergency-drain-services": [
    { title: "Immediate Call Handling", description: "Our 24/7 emergency line is always staffed. Describe the situation — flooding, sewage backup, or collapse — and we prioritise dispatch to your {location} address." },
    { title: "Rapid Arrival", description: "The nearest available emergency engineer heads to your property {responseTime}, equipped with pumping, jetting, and containment gear to handle any scenario." },
    { title: "Containment & Safety", description: "On arrival, we secure the affected area, isolate the drainage failure if possible, and begin removing standing water or sewage to limit property damage." },
    { title: "Emergency Resolution", description: "We diagnose the root cause and implement the fastest effective repair — clearing blockages, patching failures, or arranging follow-up work for structural damage." },
    { title: "Follow-Up Support", description: "Once the immediate emergency is resolved, we provide a written summary and, if further repairs are needed, schedule them at a time that suits you." }
  ],
  "drain-repairs": [
    { title: "Diagnostic Survey", description: "We begin with a CCTV inspection of your {location} property's drainage to map the damage precisely — cracks, collapses, displaced joints, or root penetration." },
    { title: "Repair Options Explained", description: "You receive a clear explanation of available repair methods: no-dig pipe relining for accessible damage, patch repairs for localised cracks, or excavation for severe collapses." },
    { title: "Carry Out Repairs", description: "Our engineers complete the agreed work using professional-grade materials. No-dig relining typically takes a few hours; excavation work is completed as quickly as conditions allow." },
    { title: "Quality Verification", description: "A post-repair CCTV inspection confirms the fix is sound. We restore any excavated surfaces and provide a written guarantee on all completed repair work." }
  ]
};

/**
 * Why Choose Us bullet points per service (with placeholders)
 */
export const SERVICE_WHY_CHOOSE_US: Record<string, string[]> = {
  "blocked-drains": [
    "Local engineers who respond to {location} properties {responseTime}",
    "No call-out fee — you only pay for completed work",
    "Equipment suited to {propertyTypes}",
    "Familiarity with Yorkshire Water infrastructure and local council requirements"
  ],
  "drain-unblocking": [
    "Rapid response across {location} — engineers arrive {responseTime}",
    "We carry manual rods, electric drain snakes, and jetting gear to every job",
    "Fixed pricing agreed before work starts, with no hidden charges",
    "Knowledge of drainage layouts common in {propertyTypes}"
  ],
  "cctv-drain-surveys": [
    "HD camera equipment producing detailed, professional-grade reports",
    "Engineers who understand drainage typical of {propertyTypes}",
    "Response to {location} bookings {responseTime}",
    "Reports accepted by solicitors, insurers, and Yorkshire Water"
  ],
  "drain-jetting": [
    "Variable-pressure jetting units safe for all pipe materials",
    "Rapid attendance at {location} properties {responseTime}",
    "Before-and-after CCTV footage included at no extra cost",
    "Experience with drainage found in {propertyTypes}"
  ],
  "emergency-drain-services": [
    "Genuine 24/7 availability — nights, weekends, and bank holidays included",
    "Emergency engineers reach {location} {responseTime}",
    "Fully equipped vans carrying pumps, jetting gear, and repair materials",
    "Experienced with flood-risk and sewage situations across South Yorkshire"
  ],
  "drain-repairs": [
    "Both no-dig relining and excavation capabilities in-house",
    "CCTV diagnosis included so you only pay for repairs actually needed",
    "Written workmanship guarantee on all completed repairs",
    "Engineers experienced with {propertyTypes} in {location}"
  ]
};

/**
 * FAQ templates per service (with placeholders resolved at build time)
 */
export interface FAQTemplate {
  question: string;
  answer: string;
}

export const SERVICE_FAQ_TEMPLATES: Record<string, FAQTemplate[]> = {
  "blocked-drains": [
    {
      question: "How quickly can you reach {location} to clear a blocked drain?",
      answer: "Our engineers are based across South Yorkshire and typically reach {location} {responseTime}. For urgent blockages causing flooding or sewage backup, we prioritise dispatch to minimise property damage."
    },
    {
      question: "What does it cost to clear a blocked drain in {location}?",
      answer: "Most standard blockages in {location} are resolved for between £80 and £150 with no call-out fee. We provide a fixed quote before starting any work, so you know exactly what you will pay. Complex blockages requiring jetting or excavation may cost more."
    },
    {
      question: "What are the most common causes of blocked drains in {location}?",
      answer: "In {location} we frequently encounter {commonProblem1} and {commonProblem2}. Properties such as {propertyTypes} can be particularly susceptible due to ageing pipework and mature vegetation."
    }
  ],
  "drain-unblocking": [
    {
      question: "How fast can you unblock a drain in {location}?",
      answer: "We aim to arrive at {location} properties {responseTime}. Once on site, most drain unblocking jobs are completed within one to two hours depending on the nature and location of the obstruction."
    },
    {
      question: "Do you charge a call-out fee for drain unblocking in {location}?",
      answer: "No. We never charge a call-out fee for drain unblocking in {location} or anywhere else across South Yorkshire. You only pay for the work carried out, and we confirm the price before we start."
    },
    {
      question: "Should I try to unblock the drain myself before calling you?",
      answer: "Simple blockages near the plughole may respond to a plunger or drain cleaner. However, if water is backing up from external drains or multiple fixtures are affected, professional equipment is needed. Attempting to rod shared drainage incorrectly can push the blockage further downstream."
    }
  ],
  "cctv-drain-surveys": [
    {
      question: "How much does a CCTV drain survey cost in {location}?",
      answer: "A standard residential CCTV drain survey in {location} typically costs between £150 and £300 depending on property size and drainage complexity. We provide a fixed quote beforehand. Properties such as {propertyTypes} with larger drainage networks may sit towards the upper end."
    },
    {
      question: "Do I need a CCTV drain survey before buying a property in {location}?",
      answer: "We strongly recommend a pre-purchase drain survey for {location} properties, especially older builds. Hidden drainage defects can cost thousands to repair and are not covered by standard homebuyer surveys. A CCTV inspection gives you negotiating power and peace of mind."
    },
    {
      question: "How long does a CCTV drain survey take in {location}?",
      answer: "A typical residential survey in {location} takes between one and two hours. You receive the full report with annotated footage within 24 hours. Larger properties or those with complex drainage layouts may require additional time."
    }
  ],
  "drain-jetting": [
    {
      question: "Is drain jetting safe for older pipes in {location}?",
      answer: "Yes, when carried out by qualified engineers. We adjust water pressure to suit the pipe material and condition — lower pressures for older clay pipes common in {location}, higher pressures for modern plastic systems. A brief CCTV check beforehand confirms the pipe can safely be jetted."
    },
    {
      question: "How much does drain jetting cost in {location}?",
      answer: "Drain jetting in {location} typically costs between £100 and £250 depending on the length of pipe and severity of deposits. We confirm the price before starting. Regular maintenance jetting is usually at the lower end of this range."
    },
    {
      question: "How often should drains be jetted in {location}?",
      answer: "For most {location} residential properties, jetting every 12 to 18 months keeps drainage flowing freely. Properties with mature trees nearby, or commercial kitchens producing grease, may benefit from more frequent cleaning — typically every 6 to 12 months."
    }
  ],
  "emergency-drain-services": [
    {
      question: "How quickly can you respond to a drain emergency in {location}?",
      answer: "Our emergency teams are positioned across South Yorkshire and reach {location} {responseTime}. We operate around the clock — 24 hours a day, 7 days a week, including bank holidays — so help is available whenever you need it."
    },
    {
      question: "What counts as a drainage emergency?",
      answer: "Situations requiring an emergency response include sewage backing up into your property, flooding from blocked or collapsed drains, overflowing manholes, and any drainage failure presenting a health risk. If in doubt, call us and we will advise whether an emergency visit is needed."
    },
    {
      question: "Do you charge more for emergency callouts in {location}?",
      answer: "We offer competitive fixed pricing for emergency callouts in {location} with no hidden charges. While emergency work may cost more than routine maintenance due to the urgency and equipment required, we always confirm the price before starting."
    }
  ],
  "drain-repairs": [
    {
      question: "How much do drain repairs cost in {location}?",
      answer: "Drain repair costs in {location} depend on the extent of damage and the method required. No-dig pipe relining typically ranges from £300 to £800 per section. Excavation repairs vary more widely depending on depth and access. We provide a detailed quote after CCTV diagnosis."
    },
    {
      question: "Can drains be repaired without digging in {location}?",
      answer: "In many cases, yes. No-dig pipe relining inserts a resin-coated liner into the damaged pipe, which cures to form a new pipe within the old one. This is ideal for cracks, joint displacement, and root damage in {location} properties, avoiding disruption to gardens, driveways, and landscaping."
    },
    {
      question: "How long do drain repairs take in {location}?",
      answer: "No-dig relining is typically completed in a single day. Excavation repairs may take one to three days depending on the extent of damage, pipe depth, and ground conditions in {location}. We always provide a realistic timeframe before work begins."
    }
  ]
};

/**
 * Interpolate placeholders in template strings with location-specific data
 */
export function interpolateLocationText(
  text: string,
  locationName: string,
  locationData: LocationData | null,
  serviceContent: ServiceContent | null
): string {
  let result = text.replace(/\{location\}/g, locationName);
  if (locationData) {
    result = result
      .replace(/\{responseTime\}/g, locationData.responseTime)
      .replace(/\{propertyTypes\}/g, locationData.propertyTypes)
      .replace(/\{neighborhood\}/g, locationData.neighborhoods[0] || '')
      .replace(/\{landmark\}/g, locationData.landmarks[0] || '');
  }
  if (serviceContent) {
    result = result
      .replace(/\{commonProblem1\}/g, serviceContent.commonProblems[0]?.toLowerCase() || 'debris accumulation')
      .replace(/\{commonProblem2\}/g, serviceContent.commonProblems[1]?.toLowerCase() || 'root intrusion');
  }
  return result;
}

/**
 * Get resolved FAQs for a specific location and service combination
 */
export function getLocationServiceFAQs(
  locationSlug: string,
  serviceSlug: string
): Array<{ question: string; answer: string }> {
  const locationData = LOCATION_DATA[locationSlug] || null;
  const serviceContent = LOCATION_SERVICE_CONTENT[locationSlug]?.[serviceSlug] || null;
  const templates = SERVICE_FAQ_TEMPLATES[serviceSlug];
  if (!templates) return [];

  const locationName = locationSlug.charAt(0).toUpperCase() + locationSlug.slice(1);
  return templates.map(t => ({
    question: interpolateLocationText(t.question, locationName, locationData, serviceContent),
    answer: interpolateLocationText(t.answer, locationName, locationData, serviceContent)
  }));
}

/**
 * Get content for a specific location and service combination
 */
export function getLocationServiceContent(locationSlug: string, serviceSlug: string): ServiceContent | null {
  const locationContent = LOCATION_SERVICE_CONTENT[locationSlug];
  if (!locationContent) return null;
  return locationContent[serviceSlug] || null;
}

/**
 * Get location data
 */
export function getLocationData(locationSlug: string): LocationData | null {
  return LOCATION_DATA[locationSlug] || null;
}
