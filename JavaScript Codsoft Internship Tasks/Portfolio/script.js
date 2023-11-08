function downloadResume() {
    const resumeURL = 'resume.pdf';
    const confirmation = confirm("Download resume?");

    if (confirmation) {
        const downloadLink = document.createElement('a');
        downloadLink.href = resumeURL;
        downloadLink.download = 'your-resume.pdf';
        downloadLink.click();
    }
}

function visitGitHub() {
    const githubURL = 'https://github.com/yourusername'; // Replace with your GitHub URL
    window.open(githubURL, '_blank');
}

const downloadResumeBtn = document.querySelector('.download-resume-btn');
const visitGitHubBtn = document.querySelector('.visit-github-btn');

downloadResumeBtn.addEventListener('click', downloadResume);
visitGitHubBtn.addEventListener('click', visitGitHub);

const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('.menu-links');

menuToggle.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
});