<template>
    <div id="container">
        <router-link to="/About" class="link">About Me</router-link>
        <a href="/documents/Resume.pdf" target="_blank" rel="noopener" class="link">Check out my Resume</a>
        <a class="link">Projects</a>
    </div>
</template>

<script>

export default {
    name: 'NavLinks',
    components:{

    },
    props: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    /* Space between items */
    padding: 20px;
}

.link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    margin: 10px;
    border: 2px solid #4a90e2;
    /* Light blue border */
    border-radius: 12px;
    /* Round corners */
    text-decoration: none;
    /* No underline */
    color: #4a90e2;
    /* Light blue text */
    font-weight: 500;
    transition: all 0.3s ease;
    background-color: #444343;
}

.link:hover {
    background-color: #4a90e2;
    /* Change background on hover */
    color: white;
    /* White text on hover */
    border-color: #357abd;
    /* Darker border on hover */
    transform: translateY(-2px);
    /* Slight lift effect */
}

.link:active {
    transform: translateY(0);
    /* Reset lift on click */
}

/* Optional: Make it responsive */
@media (max-width: 768px) {
    #container {
        grid-template-columns: 1fr;
    }
}
</style>
