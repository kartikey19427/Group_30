let counter = 1;
function addExperience() 
{
	counter++;
	let experiences = document.getElementById("experiences");
	let experience = document.createElement("div");
	experience.classList.add("experience");
	experience.innerHTML = `
		<br><br>
		<label for="company">Company:</label>
		<input type="text" id="company-${counter}" name="company">

		<label for="position">Position:</label>
		<input type="text" id="position-${counter}" name="position">

		<label for="duration">Duration:</label>
		<ul class="duration_dd">
						<li><label for="month">Month:</label></li>
						<li>
							<select id="month-${counter}" name="month">
							<option value="01">1</option>
							<option value="02">2</option>
							<option value="03">3</option>
							<option value="04">4</option>
							<option value="05">5</option>
							<option value="06">6</option>
							<option value="07">7</option>
							<option value="08">8</option>
							<option value="09">9</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
							</select>
						</li>
						<li><label for="year">Year:</label></li>
						<li>
							
							<select id="year-${counter}" name="year">
							</select>
						</li>
					</ul>`;

	experiences.appendChild(experience);
	const yearSelect = document.getElementById("year-" + counter);
	yearSelect.addEventListener("click", function(event) {
		console.log("year selected");
	});
	const currentYear = new Date().getFullYear();
	for (let i = 0; i <= 50; i++) 
	{
		const option = document.createElement("option");
		option.value = i;
		option.text = i;
		yearSelect.appendChild(option);
	}
}

function addEducation() {
	let education = document.getElementById("education");
	let degree = document.createElement("div");
	degree.classList.add("degree");
	degree.innerHTML = `
		<label for="institute">Institute:</label>
		<input type="text" id="institute" name="institute">

		<label for="degree">Degree:</label>
		<input type="text" id="degree" name="degree">

		<label for="edu-description">Description:</label>
		<textarea id="edu-description" name="edu-description"></textarea>`;
	education.appendChild(degree);
}

$(function(){


let form = document.getElementById("form");
form.addEventListener("submit", function(event) {
	event.preventDefault();
	section5.classList.remove("show");
	section5.style.display = "none";
	section6.classList.add("show");
	const outputContainer = document.getElementById('section-6');
	result1 = []
	for(var i=0; i<vChipsList1.length; i++)
	{
		result1.push(vChipsList1[i]["tag"]);
	}
	result2 = []
	for(var i=0; i<vChipsList2.length; i++)
	{
		result2.push(vChipsList2[i]["tag"]);
	}
	let data = new FormData(form);
	data.append("skills", result1);
	data.append("courses", result2);
	fetch("/submit", {
		method: "POST",
		body: data
	})
	.then(response => response.json())
	.then(data => {
		const outputHTML = `
			<h2>Based on your portfolio, following job profiles are recommended:</h2>
			<br>
			<h3>${data.pred1}</h3>
			<br>
			<h3>${data.pred2}</h3>
			<br>
			<h3>${data.pred3}</h3>
		`;
		form.remove();
		outputContainer.innerHTML = outputHTML;
	})
	.catch(error => {
		console.error(error);
	});
});

let section1 = document.getElementById("section-1");
let section2 = document.getElementById("section-2");
let section3 = document.getElementById("section-3");
let section4 = document.getElementById("section-4");
let section5 = document.getElementById("section-5");
let section6 = document.getElementById("section-6");

let next1 = document.getElementById('button-1');
next1.addEventListener("click", function(event) {
	event.preventDefault();
	next2.style.display = "block";
	next2.disabled = false;
	// section1.style.display = "none";
	// section2.style.display = "block";
	section1.classList.remove("show");
	section2.classList.add("show");
	section1.style.display = "none";
	
});

let next2 = document.getElementById('button-2');
next2.addEventListener("click", function(event) {
	event.preventDefault();
	next3.style.display = "block";
	next3.disabled = false;
	// section2.style.display = "none";
	// section3.style.display = "block";
	section2.classList.remove("show");
	section3.classList.add("show");
	section2.style.display = "none";
});

let next3 = document.getElementById("button-3");
next3.addEventListener("click", function(event) {
	event.preventDefault();
	next4.style.display = "block";
	next4.disabled = false;
	// section3.style.display = "none";
	// section4.style.display = "block";
	section3.classList.remove("show");
	section4.classList.add("show");
	section3.style.display = "none";
});

let next4 = document.getElementById("button-4");
next4.addEventListener("click", function(event) {
	event.preventDefault();
	next5.style.display = "block";
	next5.disabled = false;
	// section4.style.display = "none";
	// section5.style.display = "block";
	section4.classList.remove("show");
	section5.classList.add("show");
	section4.style.display = "none";
});

let next5 = document.getElementById("button-5");


// INITIALIZATION OF CHIPS COLLECTION
var vChipsList1 =  [];
var vChipsList2 =  [];

// INITIALIZATION OF AUTOCOMPLETE LIST
var vTagList1 =  {
'Python' : null,
'JavaScript' : null,
'Java' : null,
'C++' : null,
'HTML' : null,
'CSS' : null,
'Microsoft Office' : null,
'SQL' : null,
'Project Management' : null,
'Marketing' : null,
'Machine Learning' : null,
'Data Analysis' : null,
'Agile Methodologies' : null,
'Sales' : null,
'Graphic Design' : null,
'Social Media Marketing' : null,
'Digital Marketing' : null,
'Customer Service' : null,
'Leadership' : null,
'Product Management' : null,
'Teamwork' : null,
'Customer Relationship Management (CRM)' : null,
'Adobe Photoshop' : null,
'Public Speaking' : null,
'Time Management' : null,
'Microsoft Excel' : null,
'Strategic Planning' : null,
'Business Development' : null,
'Research' : null,
'Financial Analysis' : null,
'Microsoft Word' : null,
'Web Development' : null,
'Artificial Intelligence (AI)' : null,
'Finance' : null,
'Negotiation' : null,
'Business Analysis' : null,
'Operations Management' : null,
'Data Science' : null,
'Product Development' : null,
'Business Strategy' : null,
'Troubleshooting' : null,
'Software Development' : null,
'Human Resources (HR)' : null,
'User Experience (UX)' : null,
'Entrepreneurship' : null,
'iOS Development' : null,
'Android Development' : null,
'Recruiting' : null,
'Data Mining' : null,
'Market Research' : null,
'Content Strategy' : null,
'Risk Management' : null,
'Search Engine Optimization (SEO)' : null,
'Data Visualization' : null,
'Business Process Improvement' : null,
'Creative Writing' : null,
'Editing' : null,
'Investment Banking' : null,
'Retail' : null,
'Mobile Applications' : null,
'Social Networking' : null,
'Adobe Creative Suite' : null,
'Budgeting' : null,
'Brand Management' : null,
'Web Analytics' : null,
'Analytics' : null,
'Risk Assessment' : null,
'CRM Software' : null,
'Networking' : null,
'HTML5' : null,
'Search Engine Marketing (SEM)' : null,
'Corporate Finance' : null,
'Leadership Development' : null,
'Email Marketing' : null,
'Software Engineering' : null,
'Content Marketing' : null,
'Social Media Optimization (SMO)' : null,
'HTML CSS' : null,
'Project Coordination' : null,
'Marketing Strategy' : null,
'Market Analysis' : null,
'Digital Strategy' : null,
'Corporate Law' : null,
'Change Management' : null,
'Internal Communications' : null,
'Mobile Marketing' : null,
'PHP' : null,
'Global Business Development' : null,
'Microsoft PowerPoint' : null,
'Business Planning' : null,
'Strategic Partnerships' : null,
'Management Consulting' : null,
'Machine Vision' : null,
'Business Intelligence (BI)' : null,
'Investments' : null,
'Front-End Development' : null,
'Database Design' : null,
'Web Design' : null,
'Technical Writing' : null,
'Fashion' : null,
'Leadership Mentoring' : null,
'Investor Relations' : null,
'Business Process Design' : null,
'Visual Basic for Applications (VBA)' : null,
'Brand Development' : null,
'Social Media Management' : null,
'Team Building' : null,
'Online Advertising' : null,
'Strategic Thinking' : null,
'Video Production' : null,
'Marketing Communications' : null,
'Market Planning' : null,
'Online Marketing' : null,
'Microsoft Access' : null,
'Mobile Devices' : null,
'Problem Solving' : null,
'Medical Devices' : null,
'Performance Management' : null,
'Account Management' : null,
'Web Applications' : null,
'Manufacturing' : null,
'Media Relations' : null,
'Executive Management' : null,
'Microsoft SharePoint' : null,
'Competitive Analysis' : null,
'B2B Marketing' : null,
'Product Marketing' : null,
'SaaS' : null,
'Marketing Research' : null,
'Cloud Computing' : null,
'Corporate Communications' : null,
'Human-centered Design' : null,
'Java Enterprise Edition (JEE)' : null,
'Engineering' : null,
'Financial Modeling' : null,
'Data Warehousing' : null,
'Visual Design' : null,
'E-commerce' : null,
'User Interface Design' : null,
'Supply Chain Management' : null,
'Web Content Management' : null,
'Accounting' : null,
'Graphic Design Software' : null,
'Network Security' : null,
'Python Programming' : null,
'Brand Marketing' : null,
'Brand Awareness' : null,
'Business Process Reengineering' : null,
'Team Leadership' : null,
'Visual Merchandising' : null,
'Marketing Automation' : null,
'Digital Photography' : null,
'Online Sales' : null,
'Salesforce.com' : null,
'SEO Audits' : null,
'IT Strategy' : null,
'Cascading Style Sheets (CSS)' : null,
'Employee Engagement' : null,
'Financial Reporting' : null,
'Retail Sales' : null,
'SharePoint Designer' : null,
'Sales Management' : null,
'Web Content Development' : null,
'Business Intelligence Tools' : null,
'Data Management' : null,
'UX Design' : null,
'International Sales' : null,
'Product Launch' : null,
'Software Quality Assurance (SQA)' : null,
'Online Reputation Management' : null,
'Embedded Systems' : null,
'Strategic Communications' : null,
'Sales Operations' : null,
'User Interface (UI) Development' : null,
'Mobile Application Development' : null,
'Social Media Advertising' : null,
'User Experience Design' : null,
'IT Operations' : null,
'Corporate Strategy' : null,
'Systems Engineering' : null,
'Unix Administration' : null,
'Graphic Design Services' : null,
'Digital Art' : null,
'Digital Media' : null,
'Digital Strategy Consulting' : null,
'User Research' : null,
'Data Modeling' : null,
'Marketing Analytics' : null,
'Email Campaigns' : null,
'Strategic Human Resource Planning' : null,
'Financial Planning' : null,
'Advertising Management' : null,
'Software Documentation' : null,
'Team Management' : null,
'Supply Chain Optimization' : null,
'Financial Services' : null,
'Corporate Governance' : null,
'Management' : null,
'Financial Markets' : null,
'Data Governance' : null,
'Product Design' : null,
'Training' : null,
'International Business' : null,
'Market Development' : null,
'Cloud Security' : null,
'Software Documentation' : null,
'Team Management' : null,
'Supply Chain Optimization' : null,
'Financial Services' : null,
'Corporate Governance' : null,
'Management' : null,
'Financial Markets' : null,
'Data Governance' : null,
'Product Design' : null,
'Training' : null,
'International Business' : null,
'Market Development' : null,
'Cloud Security' : null,
'Structural Engineering' : null,
'Content Writing' : null,
'Visual Effects' : null,
'Investment Management' : null,
'Advertising' : null,
'Risk Mitigation' : null,
'Cybersecurity' : null,
'Statistical Analysis' : null,
'Software Architecture' : null,
'Solution Architecture' : null,
'Sustainability' : null,
'Operations' : null,
'iOS' : null,
'Android' : null,
'React' : null,
'Angular' : null,
'Vue.js' : null,
'Ruby on Rails' : null,
'RESTful Services' : null,
'Object-Oriented Programming (OOP)' : null,
'Functional Programming' : null,
'Agile Project Management' : null,
'Lean Startup' : null,
'Swift' : null,
'C#' : null,
'Django' : null,
'Flask' : null,
'ASP.NET' : null,
'Scala' : null,
'React Native' : null,
'Node.js' : null,
'Big Data Analytics' : null,
'Power BI' : null,
'Tableau' : null,
'Docker' : null,
'Kubernetes' : null,
'Cloud Computing Platforms' : null,
'Cloud Architecture' : null,
'Digital Transformation' : null,
'Blockchain' : null,
'DevOps' : null,
'CI/CD' : null,
'Virtualization' : null,
'ITIL' : null,
'Artificial Neural Networks (ANN)' : null,
'Convolutional Neural Networks (CNN)' : null,
'Recurrent Neural Networks (RNN)' : null,
'Natural Language Processing (NLP)' : null,
'Computer Vision' : null,
'Deep Learning' : null,
'Machine Vision' : null,
'Algorithm Design' : null,
'Algorithm Development' : null,
'Data Engineering' : null,
'Data Warehousing' : null,
'ETL (Extract, Transform, Load)' : null,
'NoSQL' : null,
'MySQL' : null,
'Oracle Database' : null,
'PostgreSQL' : null,
'MongoDB' : null,
'Apache Hadoop' : null,
'Apache Spark' : null,
'Apache Kafka' : null,
'Microsoft Azure' : null,
'Amazon Web Services (AWS)' : null,
'Google Cloud Platform (GCP)' : null,
'Containerization' : null,
'Microservices' : null,
'REST API' : null,
'SOAP' : null,
'GraphQL' : null,
'OAuth' : null,
'JSON' : null,
'XML' : null,
'JavaScript Frameworks' : null,
'React.js' : null,
'Angular.js' : null,
'Vue.js' : null,
'Ember.js' : null,
'Backbone.js' : null,
'jQuery' : null,
'Bootstrap' : null,
'Materialize' : null,
'Semantic UI' : null,
'Foundation' : null,
'Sass' : null,
'Less' : null,
'Webpack' : null,
'Babel' : null,
'Gulp' : null,
'Grunt' : null,
'Mocha' : null,
'Jasmine' : null,
'Enzyme' : null,
'Jest' : null,
'Cypress' : null,
'PHPUnit' : null,
'CodeIgniter' : null,
'Laravel' : null,
'Symfony' : null,
'Zend Framework' : null,
'CakePHP' : null,
'Ruby on Rails' : null,
'Sinatra' : null,
'Phoenix Framework' : null,
'Elixir' : null,
'Cucumber' : null,
'Behave' : null,
'Robot Framework' : null,
'Appium' : null,
'Selenium' : null,
'Protractor' : null,
'Load Testing' : null,
'Performance Testing' : null,
'Security Testing' : null,
'Unit Testing' : null,
'Integration Testing' : null,
'Functional Testing' : null,
'Continuous Integration (CI)' : null,
'Continuous Delivery (CD)' : null,
'Continuous Deployment (CD)' : null,
'Infrastructure as Code (IaC)' : null,
'Configuration Management' : null,
'Puppet' : null,
'Chef' : null,
'Ansible' : null,
'Terraform' : null,
'Prometheus' : null,
'Grafana' : null,
'ELK Stack' : null,
'Logstash' : null,
'Kibana' : null,
'Splunk' : null,
'Nagios' : null,
'Zabbix' : null,
'New Relic' : null,
'Application Performance Management (APM)' : null,
'Site Reliability Engineering (SRE)' : null,
'Linux Administration' : null,
'Windows Administration' : null,
'Shell Scripting' : null,
'Python Scripting' : null,
'Bash Scripting' : null,
'PowerShell Scripting' : null,
'SQL Scripting' : null,
'Java Scripting' : null,
'Object-Relational Mapping (ORM)' : null,
'Fluent NHibernate' : null,
'Entity Framework' : null,
'SQLAlchemy' : null,
'Hibernate' : null,
'Dapper' : null,
'PyTorch' : null,
'TensorFlow' : null,
'Keras' : null,
'Scikit-learn' : null,
'NLTK' : null,
'SpaCy' : null,
'OpenCV' : null,
'Pandas' : null,
'NumPy' : null,
'SciPy' : null,
'Matplotlib' : null,
'Seaborn' : null,
'Bokeh' : null,
'Altair' : null,
'Plotly' : null,
'OpenAI' : null,
'TensorBoard' : null,
'GANs' : null,
'Autoencoders' : null,
'Transfer Learning' : null,
'Reinforcement Learning' : null,
'Machine Translation' : null,
'Image Recognition' : null,
'Object Detection' : null,
'Generative Models' : null,
'Classification Models' : null,
'Regression Models' : null,
'Clustering Models' : null,
'Recommendation Systems' : null,
'Anomaly Detection' : null,
'Time Series Analysis' : null,
'Survival Analysis' : null,
'Monte Carlo Simulation' : null,
'Bayesian Inference' : null,
'Markov Chain Monte Carlo (MCMC)' : null,
'Simulink' : null,
'Matlab' : null,
'Octave' : null,
'R' : null,
'Scala' : null,
'Julia' : null,
'Perl' : null,
'Swift' : null,
'Objective-C' : null,
'Cocoa Touch' : null,
'RxSwift' : null,
'JavaFX' : null,
'JavaFX Scene Builder' : null,
'Java Persistence API (JPA)' : null,
'JavaServer Faces (JSF)' : null,
'Spring Framework' : null
};
var vTagList2 =  {};
function fDisplayChips() {
	// FILLS THE CHIPS ZONE FROM THE LIST
	$('#lg-Chips1').material_chip({
		data: vChipsList1
	});
	$('#lg-Chips2').material_chip({
		data: vChipsList2
	});
}


// ADDING A NEW CHIP
function fChipAdd1(lChipName1){
	lChipName1 = lChipName1.toLowerCase();
	// test1 : minimum word size
	if (!(lChipName1.length > 2)){
		return 0;
	}
	// test2 :  no duplicates
	for(i=0;i<vChipsList1.length;i++) {
		if(lChipName1 == vChipsList1[i].tag){
			return 0;
		}
	}
	// tests Okay => add the chip and refresh the view
	vChipsList1.push({"tag":lChipName1});
	fDisplayChips();
	return 1;
};
// ADDING A NEW CHIP
function fChipAdd2(lChipName2){
	lChipName2 = lChipName2.toLowerCase();
	// test1 : minimum word size
	if (!(lChipName2.length > 2)){
		return 0;
	}
	// test2 :  no duplicates
	for(i=0;i<vChipsList2.length;i++) {
		if(lChipName2 == vChipsList2[i].tag){
			return 0;
		}
	}
	// tests Okay => add the chip and refresh the view
	vChipsList2.push({"tag":lChipName2});
	fDisplayChips();
	return 1;
};
// delete chip command
$('#lg-Chips1').on('chip.delete', function(e, chip){
	vChipsList1 = $("#lg-Chips1").material_chip('data');
});


$("#lg-Chips1").focusin(function () {
	$("#lg-input1").focus();
});


fDisplayChips();

// NEW CHIP COMMAND

$(function(){$("#cmd-ChipsAjout1").click(function () {
	fChipAdd1($("#lg-input1").val()) ;
	$("#lg-input1").val("");
});

$("#lg-input1").autocomplete({
	data: vTagList1
});});



// delete chip command
$('#lg-Chips2').on('chip.delete', function(e, chip){
	vChipsList2 = $("#lg-Chips2").material_chip('data');
});


$("#lg-Chips2").focusin(function () {
	$("#lg-input2").focus();
});

$(function(){$("#cmd-ChipsAjout2").click(function () {
	fChipAdd2($("#lg-input2").val()) ;
	$("#lg-input2").val("");
});
$("#lg-input2").autocomplete({ data: vTagList2});});

const yearSelect = document.getElementById("year");
const currentYear = new Date().getFullYear();
for (let i = 0; i <= 50; i++) {
	const option = document.createElement("option");
	option.value = i;
	option.text = i;
	yearSelect.appendChild(option);
}
});