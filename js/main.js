// Dynamically load header.html
window.onload = function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading the header:', error));
};
document.getElementById("moreSkillsBtn").addEventListener("click", function() {
    var moreSkills = document.querySelectorAll(".more-skill");
    var button = document.getElementById("moreSkillsBtn");

    // Toggle visibility of additional skills
    moreSkills.forEach(function(skill) {
        skill.style.display = (skill.style.display === "none" || skill.style.display === "") ? "block" : "none";
    });

    // Change button text based on visibility
    if (moreSkills[0].style.display === "block") {
        button.textContent = "Less";
    } else {
        button.textContent = "More";
    }
});
let lastClickedTraining = ''; // Variable to track the last clicked training

// Function to show content when an image is clicked
function showContent(training) {
    let content = '';
    let relatedImages = '';

    // Check if the same training card was clicked again
    if (lastClickedTraining === training) {
        // If clicked again, reset the content
        document.getElementById('training-content').innerHTML = '';
        lastClickedTraining = ''; // Reset the tracking variable
        return; // Exit function
    }

    // Based on the clicked training, populate the content
    if (training === 'powerbi') {
        content = `
            <div class="training-description">
                <h3>Power BI</h3>
                <p>I conducted a hands-on Power BI training session, where I successfully trained over 60 students, equipping them with the skills to analyze and visualize data using Power BI. The training covered key areas, from data transformation and modeling to creating interactive reports and dashboards.</p>
                <p>Take Aways: </p>
                <ul>
                <li>Delivered comprehensive lessons on Power BI fundamentals, including data loading, DAX (Data Analysis Expressions), Power Query, and visualization techniques.</li>
                <li>Led practical sessions where students applied their learning to real-world datasets to build actionable insights.</li>
                <li>Focused on business intelligence and data-driven decision-making, helping participants leverage Power BI for efficient data analysis and reporting.</li>
                </ul>
                <img src="../images/Training(BI).jpg" alt="Power BI and Flutter Workshop" class="training-image">
            </div>
        `;
        relatedImages = `
            <div class="related-images">
                <img src="../images/pb1.jpg" alt="Power BI" class="related-image">
                <img src="../images/pb2.jpg" alt="Flutter" class="related-image">
                <img src="../images/pb3.jpg" alt="Dashboard" class="related-image">
            </div>
        `;
    } else if (training === 'python') {
        content = `
            <div class="training-description">
                <h3>Python Training</h3>
                <p>I led a hands-on Python training session where I successfully trained over 120 students, covering everything from basic Python concepts to the fundamentals of functions. The session was designed to help students build a solid foundation in Python programming.</p>
                <p>Take Aways: </p>
                <ul>
                <li>Taught Python basics, including variables, data types, control structures, and loops.</li>
                <li>Introduced students to functions and how to write reusable, efficient code.</li>
                <li>Conducted practical sessions where students built small projects to solidify their understanding.</li>
                <li>Provided guidance on problem-solving and best practices in Python programming.</li>
                <img src="../images/python1.jpg" alt="python Training" class="training-image">
            </div>
        `;
        relatedImages = `
            <div class="related-images">
                <img src="../images/python1.jpg" alt="python1" class="related-image">
                <img src="../images/Training(python).jpg" alt="python2" class="related-image">
                <img src="../images/python3.jpg" alt="python3" class="related-image">
            </div>
        `;
    } else if (training === 'data-science') {
        content = `
            <div class="training-description">
                <h3>Data Science</h3>
                <p>I conducted a comprehensive Data Science training session where I taught students the essential techniques for creating datasets, cleaning data, and establishing connections between datasets. The training was designed to equip students with the practical skills required to handle data and make it ready for analysis.</p>
                <p>Take Aways: </p>
                <ul>
                <li>Taught students how to create and manage datasets, including structuring and importing data.</li>
                <li>Covered the process of data cleaning, including handling missing values, outliers, and transforming data.</li>
                <li>Introduced the concept of establishing connections between multiple datasets to derive insights and build a cohesive data model.</li>
                <li>Conducted hands-on exercises where students worked with real-world data, applying techniques to clean and connect datasets.</li>
                </ul>
                <img src="../images/ds3.jpg" alt="AWS and Python Programming" class="training-image">
            </div>
        `;
        relatedImages = `
            <div class="related-images">
                <img src="../images/ds1.jpg" alt="AWS Console" class="related-image">
                <img src="../images/ds2.jpg" alt="Python" class="related-image">
                <img src="../images/Training(DS).jpg" alt="Cloud Deployment" class="related-image">
            </div>
        `;
    }

    // Insert the generated content into the training content section
    document.getElementById('training-content').innerHTML = content + relatedImages;
    lastClickedTraining = training; // Track the last clicked training
}

