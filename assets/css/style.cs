@keyframes backToUp-fade-in {
  from {
    opacity: 0;
    transform: translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.banner img {
  animation: backToUp-fade-in 1.5s ease-in-out;
}

@keyframes background-fade-in {
  from {
    opacity: 0;
    transform: translateY(-100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.banner {
  animation: background-fade-in 1.5s ease-in-out;
}

.hero-video {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .hero-video {
    display: none;
  }
}
@keyframes UpToBack-fade-in {
  from {
    opacity: 1;
    transform: translateY(-200px);
  }
  to {
    transform: translateY(0);
  }
}
.story {
  animation: backToUp-fade-in 1.5s ease-in-out;
}
.story p {
  opacity: 1;
  animation: UpToBack-fade-in 1.5s ease-in-out;
}

#studio {
  animation: backToUp-fade-in 1.5s ease-in-out;
}
#studio p {
  opacity: 1;
  animation: UpToBack-fade-in 1.5s ease-in-out;
}

footer {
  animation: backToUp-fade-in 1.5s ease-in-out;
}

.site-footer::before {
  display: none;
}

.site-footer::after {
  display: none;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.site-footer::after,
.site-footer ul::after,
.site-footer::before,
.story__article::after,
#studio h2::before,
#studio h2::after,
.story h2::after,
.sunflower-nomination,
.orchid-nomination {
  animation: rotate 10s linear infinite;
}

.animate-title {
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.5s ease-out;
  display: block;
}

.title-visible {
  opacity: 1;
  transform: translateY(0);
}

.nomination {
  display: flex;
  justify-content: center;
  animation: backToUp-fade-in 1.5s ease-in-out;
}
.nomination .sunflower-nomination {
  width: 155px;
  height: 160px;
  position: relative;
  left: 6em;
}
.nomination .orchid-nomination {
  width: 155px;
  height: 160px;
  position: relative;
  right: -6em;
  bottom: 2em;
}
.nomination .nomination-image {
  width: 75%;
  padding-top: 100px;
  padding-bottom: 50px;
}

/*# sourceMappingURL=style.cs.map */
