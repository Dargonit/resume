<template>
  <div class="hello">
    <h1 class="typing-text">{{ displayedText }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      displayedText: '',
      fullText: this.msg || "Hello. I am Igor. Welcome!",
      currentIndex: 0,
      isDeleting: false,
      typingSpeed: 90,
    }
  },
  mounted() {
    this.startTyping();
  },
  methods: {
    startTyping() {
      this.typeText();
    },
    typeText() {
      
      if (this.currentIndex < this.fullText.length) {
        this.displayedText += this.fullText.charAt(this.currentIndex);
        this.currentIndex++;
        setTimeout(() => this.typeText(), this.typingSpeed);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.hello {
  text-align: center;
}

.typing-text {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #dfe4ea;
  margin: 0;
  display: inline-block;
  position: relative;
}

/* Blinking cursor effect */
.typing-text::after {
  content: '|';
  animation: blink 1s infinite;
  margin-left: 2px;
}

@keyframes blink {

  0%,
  50% {
    opacity: 1;
  }

  51%,
  100% {
    opacity: 0;
  }
}
</style>
