const questions = [
  {section:"How you think",icon:"🧠",q:"When you face a problem you have never seen before, what feels most natural?",hint:"Choose the option that sounds most like you, not what sounds impressive.",a:[
    ["Break it into smaller parts and look for a pattern",{analytical:3,research:2,curiosity:2}],
    ["Experiment with different ideas until something works",{technical:2,creative:2,practical:2}],
    ["Talk it through and understand how it affects people",{people:3,communication:2}],
    ["Think about the goal, resources and best strategy",{business:3,leadership:2}],
    ["I’m not sure yet — I usually need some time to understand it",{curiosity:1,persistence:1}]
  ]},
  {section:"How you think",icon:"🔎",q:"Which activity sounds satisfying?",hint:"Imagine you had an hour free and could choose any of these.",a:[
    ["Finding what a set of numbers is telling me",{analytical:3,maths:2}],
    ["Building or fixing something that actually works",{technical:3,practical:2}],
    ["Creating a visual, story, design or new concept",{creative:3,communication:1}],
    ["Understanding why people behave or choose something",{people:3,research:2}],
    ["Planning how to make an idea successful",{business:3,leadership:2}]
  ]},
  {section:"Your interests",icon:"🎯",q:"Which topic could you happily learn more about?",hint:"You don’t need to be good at it already.",a:[
    ["Technology, apps, computers or coding",{technical:3,curiosity:2}],
    ["Numbers, trends, science or logical systems",{analytical:3,maths:2,research:1}],
    ["Art, design, videos, writing or creative tools",{creative:3,communication:2}],
    ["Business, money, markets or how organisations work",{business:3,analytical:1}],
    ["People, teamwork, teaching or communication",{people:3,leadership:1}]
  ]},
  {section:"Your interests",icon:"📊",q:"You see a chart with unexpected results. What do you want to do first?",hint:"There is no wrong answer.",a:[
    ["Check the data and search for the reason",{analytical:3,research:2,maths:1}],
    ["Turn it into a clear visual that others can understand",{creative:2,analytical:2,communication:2}],
    ["Ask people what happened and gather their perspective",{people:3,research:2}],
    ["Think about what decision should be made from it",{business:3,leadership:1}],
    ["Try to automate or code a way to analyse it",{technical:3,analytical:2}]
  ]},
  {section:"Skills",icon:"🛠️",q:"Which strength would you most like to develop?",hint:"Pick the one you’d be excited to improve.",a:[
    ["Logical thinking and analysis",{analytical:3,maths:2}],
    ["Coding and building digital things",{technical:3,analytical:1}],
    ["Design and creative communication",{creative:3,communication:2}],
    ["Speaking, teamwork and understanding people",{people:3,communication:2}],
    ["Leadership, planning and decision-making",{leadership:3,business:2}]
  ]},
  {section:"Skills",icon:"➗",q:"How do you feel about maths?",hint:"This is about comfort, not marks.",a:[
    ["I enjoy maths and logical problems",{maths:3,analytical:2}],
    ["I’m okay with it when I understand why it matters",{maths:2,analytical:2}],
    ["I can use basic maths, but I don’t want it to dominate my work",{maths:1,people:1,creative:1}],
    ["I prefer work where maths is rarely central",{creative:2,people:2,communication:1}],
    ["It depends on the topic",{maths:1,curiosity:1}]
  ]},
  {section:"Skills",icon:"💻",q:"How interested are you in learning technology?",hint:"Think about your curiosity, not your current skill level.",a:[
    ["Very interested — I want to build things with it",{technical:3,curiosity:2}],
    ["Interested — especially if it helps solve a real problem",{technical:2,analytical:2}],
    ["A little — I’m happy using useful tools",{technical:1,business:1}],
    ["Not much — I prefer people or creative work",{people:2,creative:2}],
    ["I’m undecided",{curiosity:1}]
  ]},
  {section:"How you create",icon:"🎨",q:"When you get a blank page, what happens?",hint:"Imagine a project with no exact instructions.",a:[
    ["I start sketching or imagining possibilities",{creative:3}],
    ["I ask what the goal and audience are first",{business:2,communication:2}],
    ["I make a structure or plan before creating",{analytical:2,leadership:1}],
    ["I start experimenting and learn while doing",{practical:2,technical:1,curiosity:2}],
    ["I prefer clear instructions and examples",{persistence:1,practical:1}]
  ]},
  {section:"How you create",icon:"💡",q:"Which result would make you feel most proud?",hint:"Picture yourself finishing a project.",a:[
    ["A useful tool that I built",{technical:3,practical:2}],
    ["A clear insight that helped someone make a decision",{analytical:3,communication:1}],
    ["A beautiful experience people enjoy using",{creative:3,people:1}],
    ["A project where I helped a team succeed",{leadership:3,people:2}],
    ["An idea that grew into something successful",{business:3,leadership:1}]
  ]},
  {section:"People & work",icon:"🤝",q:"In a group project, which role do you naturally drift toward?",hint:"Think about what you actually enjoy.",a:[
    ["The person organising the plan and deadlines",{leadership:3,business:2}],
    ["The person solving the tricky technical/problem part",{technical:2,analytical:2}],
    ["The person making the output clear, attractive or creative",{creative:3,communication:1}],
    ["The person keeping everyone connected and involved",{people:3,communication:2}],
    ["The person checking information and details",{analytical:2,research:2}]
  ]},
  {section:"People & work",icon:"🗣️",q:"How do you feel about explaining an idea to other people?",hint:"It could be to classmates, customers, teammates or an audience.",a:[
    ["I enjoy it and can make complicated things simple",{communication:3,people:2}],
    ["I can do it well when I’m prepared",{communication:2,persistence:1}],
    ["I prefer showing the idea through a visual or demo",{creative:2,technical:1}],
    ["I’d rather work behind the scenes",{analytical:2,technical:1}],
    ["I’m still building confidence in this",{communication:1,curiosity:1}]
  ]},
  {section:"People & work",icon:"👥",q:"Which environment sounds best?",hint:"Imagine an ordinary workday, not a special event.",a:[
    ["Quiet focus time with a computer or data",{technical:2,analytical:2,independence:2}],
    ["A mix of focused work and teamwork",{people:2,technical:1,analytical:1}],
    ["A creative environment with freedom to experiment",{creative:3,independence:2}],
    ["Lots of discussion, meetings and people interaction",{people:3,communication:2}],
    ["A fast-moving environment where priorities change",{business:2,leadership:2,adaptability:2}]
  ]},
  {section:"Your nature",icon:"🧩",q:"When something doesn’t work the first time, what do you usually do?",hint:"Think about your normal reaction.",a:[
    ["Investigate what went wrong and try again",{persistence:3,analytical:2}],
    ["Try a completely different approach",{creative:2,curiosity:2,persistence:2}],
    ["Ask someone for another perspective",{people:2,communication:1,persistence:1}],
    ["Make a plan and work through the issue step by step",{leadership:2,analytical:2,persistence:2}],
    ["I may lose interest unless the problem feels meaningful",{curiosity:1,values:2}]
  ]},
  {section:"Your nature",icon:"⏳",q:"Which description fits your working style best?",hint:"Pick the closest one.",a:[
    ["I like deep focus and figuring things out independently",{independence:3,analytical:2}],
    ["I like variety and switching between different tasks",{adaptability:3,business:1}],
    ["I like freedom to create my own approach",{independence:2,creative:2}],
    ["I like working with people toward a shared goal",{people:3,teamwork:2}],
    ["I like clear steps and knowing what success looks like",{practical:2,persistence:2}]
  ]},
  {section:"Your nature",icon:"🧭",q:"When choosing between two options, what matters most?",hint:"There can be more than one important factor in real life.",a:[
    ["Evidence and logic",{analytical:3,research:2}],
    ["What feels useful and practical",{practical:3}],
    ["What gives me room to be creative",{creative:3,independence:1}],
    ["How it affects people",{people:3,values:2}],
    ["Which option has the strongest opportunity",{business:3,leadership:1}]
  ]},
  {section:"Learning",icon:"📚",q:"How do you learn best?",hint:"Think about something you learned successfully.",a:[
    ["By practising problems and getting feedback",{analytical:2,practical:2,persistence:2}],
    ["By building a small project myself",{technical:3,practical:2}],
    ["By watching examples and then creating my own version",{creative:2,technical:1}],
    ["By discussing it with someone or teaching it back",{people:3,communication:2}],
    ["By reading deeply and connecting ideas",{research:3,curiosity:2}]
  ]},
  {section:"Learning",icon:"🚀",q:"If you had a free month to explore a career, what would you rather do?",hint:"This is about the experience you would choose.",a:[
    ["Build a small app or digital tool",{technical:3}],
    ["Analyse a real dataset and present what I find",{analytical:3,maths:1}],
    ["Design an app, brand or user experience",{creative:3}],
    ["Run a small project, club or business idea",{leadership:3,business:3}],
    ["Interview people and research how a field works",{people:2,research:3}]
  ]},
  {section:"Goals",icon:"🌱",q:"What do you want your future work to give you?",hint:"Choose the strongest priority right now.",a:[
    ["Interesting problems to solve",{analytical:2,technical:2,curiosity:2}],
    ["The chance to create and express ideas",{creative:3,independence:1}],
    ["The chance to help, guide or work with people",{people:3,values:2}],
    ["Growth, responsibility and leadership",{leadership:3,business:2}],
    ["Flexibility and the ability to keep learning",{adaptability:2,curiosity:3}]
  ]},
  {section:"Goals",icon:"🌍",q:"Which impact sounds most meaningful?",hint:"There is no “better” type of impact.",a:[
    ["Making systems or technology work better",{technical:2,practical:2}],
    ["Helping organisations make smarter decisions",{analytical:3,business:2}],
    ["Making products easier and more enjoyable to use",{creative:3,people:1}],
    ["Helping people learn, communicate or collaborate",{people:3,communication:2}],
    ["Building something that grows and creates opportunity",{business:3,leadership:2}]
  ]},
  {section:"Real world",icon:"📈",q:"A small online store has falling sales. What would you want to investigate?",hint:"Choose the question you’d be most curious about.",a:[
    ["Which products, prices and traffic sources changed",{analytical:3,maths:1}],
    ["Whether the website experience is confusing",{creative:2,technical:1,people:1}],
    ["What customers are saying and why they stopped buying",{people:3,research:2}],
    ["Which new strategy could increase sales",{business:3,leadership:1}],
    ["Whether there is a technical problem in the ordering system",{technical:3,practical:1}]
  ]},
  {section:"Real world",icon:"🔧",q:"Which kind of challenge would you willingly spend an afternoon on?",hint:"Pick the one that sounds least boring.",a:[
    ["Finding the cause of a strange result",{analytical:3,curiosity:2}],
    ["Making a website or program work",{technical:3,persistence:2}],
    ["Redesigning something that looks or feels bad",{creative:3}],
    ["Figuring out what people actually need",{people:3,research:2}],
    ["Planning how to launch and grow an idea",{business:3,leadership:2}]
  ]},
  {section:"Real world",icon:"🧪",q:"How do you feel about experimenting and being wrong sometimes?",hint:"Exploration usually includes a few failed attempts.",a:[
    ["I enjoy testing ideas and learning from results",{curiosity:3,practical:2}],
    ["I’m comfortable if I can analyse what happened",{analytical:3}],
    ["I like creative experiments with lots of possibilities",{creative:3}],
    ["I prefer experiments that involve people and feedback",{people:3}],
    ["I’m okay with it when there is a clear goal",{business:2,persistence:2}]
  ]},
  {section:"Decision time",icon:"⚖️",q:"Which trade-off would you be most comfortable with?",hint:"Every career has trade-offs.",a:[
    ["More technical learning in exchange for building complex things",{technical:3,curiosity:2}],
    ["More analysis and numbers in exchange for strong evidence-based decisions",{analytical:3,maths:2}],
    ["More subjective feedback in exchange for creative freedom",{creative:3,independence:2}],
    ["More people interaction in exchange for influence and teamwork",{people:3,communication:2}],
    ["More uncertainty in exchange for ownership and opportunity",{business:3,leadership:2,adaptability:1}]
  ]},
  {section:"Decision time",icon:"🪄",q:"If you could instantly become good at one thing, what would you choose?",hint:"Go with your first instinct.",a:[
    ["Analysing complex information",{analytical:3,research:2}],
    ["Programming and building technology",{technical:3}],
    ["Designing amazing experiences",{creative:3}],
    ["Understanding and communicating with people",{people:3,communication:2}],
    ["Leading teams and making strong decisions",{leadership:3,business:2}]
  ]},
  {section:"Final reflection",icon:"✨",q:"Which sentence sounds most like your current mindset?",hint:"This won’t decide your result; it just adds context.",a:[
    ["I want to understand how things work.",{analytical:2,curiosity:3}],
    ["I want to build things that work.",{technical:3,practical:2}],
    ["I want to create things people remember.",{creative:3,communication:1}],
    ["I want to understand and help people.",{people:3,values:2}],
    ["I want to turn ideas into results.",{business:3,leadership:2}]
  ]},
  {section:"Final reflection",icon:"🌟",q:"What sounds like the best next step for you?",hint:"Choose the action you’d actually be willing to try.",a:[
    ["Solve a few beginner problems in a field I’m curious about",{analytical:2,persistence:2}],
    ["Build a tiny project and see if I enjoy it",{technical:2,practical:2,curiosity:2}],
    ["Make a design or creative portfolio piece",{creative:3}],
    ["Talk to someone who already works in the field",{people:2,research:2,communication:2}],
    ["Try a small real-world business or leadership project",{business:3,leadership:2}]
  ]}
];

const careers = [
  {id:"data-analyst",name:"Data Analyst",icon:"📊",desc:"Turn data into clear insights that help people and organisations make better decisions.",tags:["Analysis","Data","Business"],weights:{analytical:5,maths:3,technical:2,research:3,communication:2,business:3,curiosity:2},levels:{maths:3,tech:3,people:2,creative:2,analysis:5,leadership:2},challenge:"Analyse a simple sales table and identify the three products you would investigate first.",steps:"Create a tiny spreadsheet with product, price, quantity and revenue. Sort it, calculate totals, and write three observations.",roadmap:[["Now","Strengthen maths, logic and spreadsheet basics.","Practise percentages, averages, charts and simple tables."],["Learn","Pick up spreadsheets, SQL and basic data visualisation.","Build small projects using public or fictional datasets."],["Build","Create a mini portfolio project.","Show the question, analysis, chart and conclusion — not just screenshots."],["Explore","Talk to analysts and compare adjacent roles.","Explore business analytics, product analytics and data science before choosing."]]},
  {id:"software",name:"Software Developer",icon:"💻",desc:"Design and build software, websites and tools that solve real problems.",tags:["Coding","Technology","Problem solving"],weights:{technical:5,analytical:4,curiosity:3,practical:3,persistence:3,independence:2,maths:2},levels:{maths:2,tech:5,people:2,creative:3,analysis:4,leadership:2},challenge:"Build a tiny webpage that changes when a button is clicked.",steps:"Start with HTML for the structure, CSS for the look, and JavaScript for one interaction. Keep it tiny and finishable.",roadmap:[["Now","Learn programming fundamentals.","Practise variables, conditions, loops, functions and debugging."],["Learn","Choose one language and build consistently.","For web development, learn HTML, CSS and JavaScript together."],["Build","Make 3 small projects.","A useful tool, an interactive site and one project that solves a problem you care about."],["Explore","Try different software areas.","Web, mobile, backend, automation, data and security all use different strengths."]]},
  {id:"business-analyst",name:"Business Analyst",icon:"🧩",desc:"Understand business problems, connect people and information, and help teams choose better solutions.",tags:["Business","Analysis","Communication"],weights:{business:5,analytical:4,communication:4,people:3,research:3,leadership:2,adaptability:2},levels:{maths:2,tech:2,people:4,creative:2,analysis:4,leadership:3},challenge:"A college club has fewer members this year. Design five questions that would help you understand why.",steps:"Write questions that uncover behaviour, obstacles and motivations. Avoid leading questions. Then group the answers into themes.",roadmap:[["Now","Build communication and structured thinking.","Practise explaining problems clearly and asking useful questions."],["Learn","Explore spreadsheets, presentations and basic data analysis.","Learn how requirements, processes and business decisions connect."],["Build","Solve a realistic process problem.","Map the current process, identify friction and propose an improvement."],["Explore","Interview professionals in business and product roles.","Compare business analyst, product, consulting and operations paths."]]},
  {id:"uiux",name:"UI/UX Designer",icon:"🎨",desc:"Create useful, accessible and enjoyable digital experiences by combining design with user understanding.",tags:["Design","Users","Creativity"],weights:{creative:5,people:3,communication:3,research:3,independence:3,curiosity:2,technical:1},levels:{maths:1,tech:2,people:4,creative:5,analysis:3,leadership:2},challenge:"Redesign a familiar app screen on paper to make one task easier.",steps:"Pick one screen, identify the user’s goal, sketch a simpler version, and explain what you changed and why.",roadmap:[["Now","Practise observation and visual communication.","Study layout, hierarchy, colour, typography and accessibility."],["Learn","Explore UX research and interface design tools.","Learn wireframes, user flows, prototypes and usability testing."],["Build","Create 2–3 case studies.","Show the problem, your decisions, iterations and final design."],["Explore","Talk to designers and users.","Compare UI design, UX research, product design and visual design."]]},
  {id:"product",name:"Product Manager",icon:"🚀",desc:"Help teams decide what to build, why it matters, and how to move from idea to useful product.",tags:["Strategy","People","Technology"],weights:{leadership:5,business:4,communication:4,people:3,analytical:3,adaptability:3,curiosity:2},levels:{maths:2,tech:2,people:5,creative:3,analysis:3,leadership:5},challenge:"Choose a problem students face and write a one-page product idea.",steps:"Define the user, problem, why it matters, your proposed solution, one success metric and what you would test first.",roadmap:[["Now","Practise leadership, communication and problem framing.","Run a small project and learn to organise people and tasks."],["Learn","Explore product thinking and basic technology.","Learn how software is designed, built, tested and measured."],["Build","Lead a small project.","Document the problem, decisions, feedback and outcome."],["Explore","Interview product professionals.","Compare product, project management, business analysis and entrepreneurship."]]},
  {id:"digital-marketing",name:"Digital Marketing",icon:"📣",desc:"Combine creativity, communication and data to help ideas, products or organisations reach the right audience.",tags:["Creativity","Communication","Growth"],weights:{creative:4,communication:4,business:4,people:3,analytical:3,curiosity:2,adaptability:3},levels:{maths:2,tech:2,people:4,creative:4,analysis:3,leadership:2},challenge:"Create two different campaign ideas for the same student-focused product.",steps:"Define the audience, write two different messages, choose a channel for each, and explain what you would measure.",roadmap:[["Now","Practise writing, storytelling and audience thinking.","Study how different messages change behaviour."],["Learn","Explore content, analytics, search and social strategy.","Use ethical, transparent marketing principles."],["Build","Run a small project.","Create a mock campaign and analyse fictional or permission-based results."],["Explore","Compare marketing specialties.","Content, performance, brand, product marketing and communications have different day-to-day work."]]},
  {id:"financial-analyst",name:"Financial Analyst",icon:"💹",desc:"Use financial information, models and research to understand performance and support decisions.",tags:["Numbers","Finance","Research"],weights:{analytical:5,maths:5,research:4,business:4,curiosity:2,communication:2},levels:{maths:5,tech:3,people:2,creative:1,analysis:5,leadership:2},challenge:"Compare two fictional businesses using revenue, costs and profit margin.",steps:"Calculate profit and profit margin for each. Write two questions you would ask before deciding which business looks healthier.",roadmap:[["Now","Strengthen maths and financial literacy.","Practise percentages, ratios, graphs and interpreting business numbers."],["Learn","Explore accounting, finance and spreadsheets.","Learn how financial statements and simple models work."],["Build","Create a fictional company analysis.","Explain assumptions and show your calculations clearly."],["Explore","Talk to finance professionals.","Compare financial analysis, accounting, investment research and business analytics."]]},
  {id:"cybersecurity",name:"Cybersecurity Analyst",icon:"🛡️",desc:"Help protect systems and information by thinking carefully about risks, evidence and how technology behaves.",tags:["Security","Technology","Investigation"],weights:{technical:5,analytical:5,research:4,curiosity:4,persistence:4,maths:1,communication:2},levels:{maths:1,tech:5,people:2,creative:2,analysis:5,leadership:2},challenge:"Create a safe checklist for securing a fictional school website.",steps:"List possible risks at a high level, rank them by impact, and suggest defensive habits. Do not test real systems without permission.",roadmap:[["Now","Build computing fundamentals.","Learn how operating systems, networks and web applications work."],["Learn","Explore defensive security concepts.","Focus on secure design, authentication, logging and responsible testing."],["Build","Create safe lab projects.","Use intentionally vulnerable practice environments and document defensive lessons."],["Explore","Talk to security professionals.","Compare security operations, application security, governance and digital forensics."]]},
  {id:"research",name:"Research & Science",icon:"🔬",desc:"Ask questions, investigate evidence, test ideas and communicate what you discover.",tags:["Research","Science","Curiosity"],weights:{research:5,analytical:4,curiosity:5,persistence:4,maths:3,technical:2,communication:2},levels:{maths:3,tech:2,people:2,creative:2,analysis:5,leadership:1},challenge:"Turn an everyday curiosity into a testable question and a simple investigation plan.",steps:"Write a measurable question, a hypothesis, what you would observe, what could affect the result, and how you would record it.",roadmap:[["Now","Strengthen curiosity and scientific reasoning.","Practise asking measurable questions and checking evidence."],["Learn","Explore statistics, research methods and your favourite science area.","Read beginner-friendly research summaries critically."],["Build","Complete small investigations.","Keep a clear record of question, method, observations and limitations."],["Explore","Talk to researchers or teachers.","Compare academic research, industry R&D and applied science roles."]]},
  {id:"engineering",name:"Engineering & Design",icon:"⚙️",desc:"Use maths, science, design and practical problem-solving to create or improve systems and products.",tags:["Engineering","Design","Problem solving"],weights:{technical:4,analytical:5,practical:4,maths:4,creative:2,persistence:3,research:2},levels:{maths:4,tech:4,people:2,creative:3,analysis:5,leadership:2},challenge:"Design a simple solution to reduce a common everyday problem, then list constraints it must satisfy.",steps:"Define the problem, sketch a solution, list materials or resources, identify constraints, and think of one way to test it.",roadmap:[["Now","Strengthen maths, science and problem-solving.","Practise turning real-world problems into measurable requirements."],["Learn","Explore engineering fundamentals and design tools.","Try basic CAD, electronics, programming or modelling depending on interest."],["Build","Make a small physical or digital prototype.","Document constraints, iterations and test results."],["Explore","Compare engineering branches.","Computer, mechanical, civil, electronics and other branches have different subject mixes."]]}
];

const dimensions = [
  ["analytical","Analytical"],["technical","Technology"],["creative","Creative"],["people","People"],["communication","Communication"],
  ["business","Business"],["leadership","Leadership"],["research","Research"],["curiosity","Curiosity"],["persistence","Persistence"],
  ["maths","Maths comfort"],["practical","Practical"],["independence","Independence"],["adaptability","Adaptability"],["values","Values"],["teamwork","Teamwork"]
];

let current = 0;
let answers = Array(questions.length).fill(null);
let results = [];
let userScores = {};

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function show(id){
  ["home","how","quiz","loading","results"].forEach(x=>$("#"+x).classList.add("hidden"));
  $("#"+id).classList.remove("hidden");
  window.scrollTo({top:0,behavior:"smooth"});
}

function renderQuestion(){
  const q = questions[current];
  $("#quizSection").textContent = q.section;
  $("#questionIcon").textContent = q.icon;
  $("#questionCount").textContent = String(current+1).padStart(2,"0");
  $("#questionText").textContent = q.q;
  $("#questionHint").textContent = q.hint;
  $("#progressText").textContent = `Question ${current+1} of ${questions.length}`;
  const pct = Math.round(((current+1)/questions.length)*100);
  $("#progressPercent").textContent = pct+"%";
  $("#progressFill").style.width = pct+"%";
  $("#backBtn").style.visibility = current===0 ? "hidden":"visible";
  $("#answers").innerHTML = q.a.map((item,i)=>`
    <button class="answer ${answers[current]===i?"selected":""}" data-i="${i}">
      <span class="letter">${String.fromCharCode(65+i)}</span><span>${item[0]}</span>
    </button>`).join("");
  $$(".answer").forEach(b=>b.addEventListener("click",()=>choose(+b.dataset.i)));
}

function choose(i){
  answers[current]=i;
  if(current<questions.length-1){current++;renderQuestion();}
  else finishQuiz();
}

function finishQuiz(){
  show("loading");
  setTimeout(calculateResults,1100);
}

function calculateResults(){
  userScores={};
  dimensions.forEach(([k])=>userScores[k]=0);
  questions.forEach((q,qi)=>{
    const idx=answers[qi];
    if(idx===null)return;
    Object.entries(q.a[idx][1]).forEach(([k,v])=>userScores[k]=(userScores[k]||0)+v);
  });
  const maxDim={};
  dimensions.forEach(([k])=>maxDim[k]=questions.reduce((sum,q)=>Math.max(sum,...q.a.map(a=>a[1][k]||0)),0));
  const maxScores={};
  dimensions.forEach(([k])=>maxScores[k]=questions.reduce((sum,q)=>sum+Math.max(...q.a.map(a=>a[1][k]||0)),0));

  results=careers.map(c=>{
    let raw=0,total=0;
    Object.entries(c.weights).forEach(([k,w])=>{
      const normalized=maxScores[k] ? userScores[k]/maxScores[k] : 0;
      raw += Math.min(1,normalized)*w;
      total += w;
    });
    const score=Math.round((raw/total)*100);
    return {...c,score};
  }).sort((a,b)=>b.score-a.score);

  renderResults();
  show("results");
}

function renderResults(){
  const top=results[0];
  $("#topCareer").textContent=top.name;
  $("#topIcon").textContent=top.icon;
  $("#topDesc").textContent=top.desc;
  $("#topScore").textContent=top.score+"%";
  $("#topRing").style.background=`conic-gradient(var(--accent) ${top.score*3.6}deg, var(--accent2) ${top.score*3.6}deg, rgba(255,255,255,.07) ${top.score*3.6}deg)`;
  $("#topTags").innerHTML=top.tags.map(t=>`<span class="tag">${t}</span>`).join("");
  const strongest=Object.entries(userScores).sort((a,b)=>b[1]-a[1]).slice(0,3).map(x=>dimensions.find(d=>d[0]===x[0])?.[1]).filter(Boolean);
  $("#topWhy").textContent=`Your answers showed strong signals around ${strongest.join(", ").toLowerCase()}. ${top.name} often combines these kinds of strengths. Try the mini challenge below to see whether the actual work feels enjoyable to you.`;

  const maxVals={};
  dimensions.forEach(([k])=>maxVals[k]=maxScores[k]||1);
  const profile=dimensions.map(([k,label])=>({k,label,v:userScores[k]||0,pct:Math.round(((userScores[k]||0)/maxVals[k])*100)}))
    .filter(x=>x.pct>5).sort((a,b)=>b.pct-a.pct).slice(0,9);
  $("#profileBars").innerHTML=profile.map(x=>`
    <div class="bar-item"><span class="bar-name">${x.label}</span><div class="bar-track"><div class="bar-fill" style="width:${x.pct}%"></div></div><span class="bar-value">${x.pct}</span></div>`).join("");

  $("#matchList").innerHTML=results.slice(0,6).map((c,i)=>`
    <article class="match-card">
      <div class="match-head"><div class="match-name"><span>${c.icon}</span>${i+1}. ${c.name}</div><div class="match-score">${c.score}%</div></div>
      <p>${c.desc}</p><div class="mini-bar"><div style="width:${c.score}%"></div></div>
    </article>`).join("");

  const options=results.map(c=>`<option value="${c.id}">${c.icon} ${c.name}</option>`).join("");
  $("#compareA").innerHTML=options; $("#compareB").innerHTML=options;
  $("#compareA").value=results[0].id; $("#compareB").value=results[1].id;
  renderCompare();

  const challengeOrder=[...results.slice(0,6),...careers.filter(c=>!results.slice(0,6).some(x=>x.id===c.id))];
  $("#challengeGrid").innerHTML=challengeOrder.map(c=>{
    const done=localStorage.getItem("kyc_done_"+c.id)==="1";
    return `<article class="challenge-card ${done?"done":""}" data-id="${c.id}">
      <div class="challenge-top"><div class="challenge-title"><span>${c.icon}</span><h3>${c.name}</h3></div><span class="tag">${done?"✓ Tried":"10–20 min"}</span></div>
      <p>${c.challenge}</p>
      <div class="challenge-details"><strong>How:</strong> ${c.steps}</div>
      <button class="secondary-btn challenge-btn">${done?"Mark as not done":"I tried it ✓"}</button>
    </article>`}).join("");
  $$(".challenge-btn").forEach(btn=>btn.addEventListener("click",()=>{
    const card=btn.closest(".challenge-card"),id=card.dataset.id;
    const done=localStorage.getItem("kyc_done_"+id)==="1";
    localStorage.setItem("kyc_done_"+id,done?"0":"1");
    const now=!done; card.classList.toggle("done",now);btn.textContent=now?"Mark as not done":"I tried it ✓";
    card.querySelector(".tag").textContent=now?"✓ Tried":"10–20 min";
    toast(now?"Challenge marked as tried!":"Challenge reset.");
  }));

  $("#roadmapTitle").textContent=`A roadmap for exploring ${top.name}`;
  $("#roadmapIntro").textContent=top.roadmap.map(x=>x[0]).join(" → ")+". You do not need to complete every step before exploring another career.";
  $("#roadmap").innerHTML=top.roadmap.map((s,i)=>`
    <div class="road-step"><div class="step-number">${i+1}</div><div class="step-body"><h3>${s[0]}</h3><p>${s[1]}</p><ul><li>${s[2]}</li></ul></div></div>`).join("");
}

function renderCompare(){
  const a=careers.find(c=>c.id===$("#compareA").value),b=careers.find(c=>c.id===$("#compareB").value);
  const metrics=[["maths","Maths"],["tech","Technology"],["people","People"],["creative","Creativity"],["analysis","Analysis"],["leadership","Leadership"]];
  $("#compareGrid").innerHTML=[a,b].map(c=>`
    <article class="compare-card">
      <h3><span>${c.icon}</span>${c.name}</h3><p>${c.desc}</p>
      ${metrics.map(([k,l])=>`<div class="compare-row"><span>${l}</span><div class="bar-track"><div class="bar-fill" style="width:${c.levels[k]*20}%"></div></div><b>${c.levels[k]}/5</b></div>`).join("")}
      <div class="compare-footer"><strong>Try:</strong> ${c.challenge}</div>
    </article>`).join("");
}

function toast(msg){
  const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200);
}

function summary(){
  if(!results.length)return "";
  return `Know Your Career — exploration snapshot\nTop match: ${results[0].name} (${results[0].score}%)\nOther directions: ${results.slice(1,4).map(x=>x.name+" ("+x.score+"%)").join(", ")}\n\nThis result is a starting point for exploration, not a guaranteed prediction.`;
}

$("#startBtn").addEventListener("click",()=>{current=0;answers=Array(questions.length).fill(null);show("quiz");renderQuestion();});
$("#backBtn").addEventListener("click",()=>{if(current>0){current--;renderQuestion();}});
$("#skipBtn").addEventListener("click",()=>{answers[current]=null;if(current<questions.length-1){current++;renderQuestion();}else finishQuiz();});
$("#quitQuiz").addEventListener("click",()=>show("home"));
$("#retakeBtn").addEventListener("click",()=>{$("#startBtn").click()});
$("#copyBtn").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(summary());toast("Summary copied!");}catch{toast("Copy isn’t available here.");}});
$("#compareA").addEventListener("change",renderCompare);$("#compareB").addEventListener("change",renderCompare);

$$(".tab").forEach(tab=>tab.addEventListener("click",()=>{
  $$(".tab").forEach(t=>t.classList.remove("active"));tab.classList.add("active");
  $$(".tab-panel").forEach(p=>p.classList.remove("active"));$("#panel-"+tab.dataset.tab).classList.add("active");
}));

$("#privacyBtn").addEventListener("click",()=>$("#privacyModal").classList.remove("hidden"));
$$("[data-close='privacy']").forEach(x=>x.addEventListener("click",()=>$("#privacyModal").classList.add("hidden")));

document.addEventListener("keydown",e=>{
  if($("#quiz").classList.contains("hidden"))return;
  if(e.key>="1"&&e.key<="5")choose(+e.key-1);
  if(e.key==="ArrowLeft"&&current>0){current--;renderQuestion();}
});

show("home");
