// Floating particles in Projects section
const projectsSection = document.getElementById('projects');
for(let i=0;i<30;i++){
    let particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random()*100+'%';
    particle.style.top = Math.random()*100+'%';
    particle.style.width = Math.random()*4 + 2+'px';
    particle.style.height = particle.style.width;
    particle.style.background = 'rgba(255,111,97,0.2)';
    particle.style.position = 'absolute';
    particle.style.borderRadius='50%';
    particle.style.animation = `floatParticle ${5 + Math.random()*5}s linear infinite alternate`;
    projectsSection.appendChild(particle);
}
