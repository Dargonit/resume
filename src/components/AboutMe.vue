<template>
  <section class="about-section">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <div class="about-text">
          <p class="intro">
            I'm a passionate software developer with a unique journey that blends hands-on experience with cutting-edge technology.
          </p>
          
          <div class="experience-grid">
            <div class="experience-item">
              <h3 class="experience-title">Equine Care & Precision</h3>
              <p class="experience-desc">
                10 years as a horse groom taught me the value of meticulous attention to detail, consistent care, and understanding complex systems - skills that translate beautifully into software development.
              </p>
            </div>
            
            <div class="experience-item">
              <h3 class="experience-title">Code & Innovation</h3>
              <p class="experience-desc">
                3 years as a software developer have honed my problem-solving abilities and technical expertise, allowing me to bridge the gap between traditional craftsmanship and modern technology.
              </p>
            </div>
          </div>
          
          <div class="interests">
            <h3 class="interests-title">What Drives Me</h3>
            <p class="interests-desc">
              My passion lies in <strong>AI development</strong> and <strong>robotics</strong>, where I can combine my analytical mindset with creative problem-solving to build intelligent systems that push the boundaries of what's possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<style scoped>
.about-section {
  padding: 4rem 0;
  background-color: #2e2e2e;
  color: #4a90e2;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
}
.hide-scrollbar {
  /* WebKit browsers */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  /* WebKit browsers */
  &::-webkit-scrollbar {
    display: none;
  }
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  box-sizing: border-box;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-weight: 700;
  color: #4a90e2;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #4a90e2, #667eea);
  margin: 1rem auto;
  border-radius: 2px;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: start;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
}

.intro {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  font-weight: 300;
  color: #4a90e2;
  text-align: center;
}

.experience-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 2rem;
}

.experience-item {
  background: rgba(74, 144, 226, 0.1);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(74, 144, 226, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-sizing: border-box;
}

.experience-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(74, 144, 226, 0.2);
}

.experience-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #4a90e2;
  display: flex;
  align-items: center;
  gap: 10px;
}

.experience-title::before {
  content: '✓';
  color: #667eea;
  font-size: 1.2rem;
}

.experience-desc {
  font-size: 1.1rem;
  opacity: 0.9;
  color: #4a90e2;
  line-height: 1.7;
}

.interests {
  padding: 2rem;
  background: rgba(74, 144, 226, 0.1);
  border-radius: 15px;
  border-left: 4px solid #4a90e2;
  border: 1px solid rgba(74, 144, 226, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
  box-sizing: border-box;
}

.interests-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #4a90e2;
  display: flex;
  align-items: center;
  gap: 10px;
}

.interests-title::before {
  content: '⚡';
  color: #667eea;
  font-size: 1.2rem;
}

.interests-desc {
  font-size: 1.1rem;
  opacity: 0.9;
  color: #4a90e2;
  line-height: 1.7;
}

/* Scroll behavior fixes */
.about-section {
  padding: 2rem 0;
  min-height: calc(100vh - 80px);
  overflow-y: auto;
}

@media (max-width: 768px) {
  .about-section {
    padding: 1rem 0;
    min-height: calc(100vh - 60px);
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .intro {
    font-size: 1.1rem;
  }
  
  .experience-item,
  .interests {
    padding: 1.5rem;
  }
  
  .experience-title,
  .interests-title {
    font-size: 1.3rem;
  }
}
</style>
