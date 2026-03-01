<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToTest = () => {
  router.push({ name: 'test-ui' });
};
</script>

<template>
  <v-container class="home-container" fluid>
    <v-row class="hero-row" align="center" justify="center">
      <v-col cols="12" md="7" class="hero-left">
        <div class="eyebrow">
          <span class="pill">New</span>
          <span class="eyebrow-text">Front‑end visual QA playground</span>
        </div>

        <h1 class="hero-title">
          Catch UI bugs
          <span class="gradient-text">before</span>
          your users do.
        </h1>

        <p class="hero-subtitle">
          Web‑UI Testing Lab helps you review screenshots of your app and spot layout glitches,
          spacing problems, and visual inconsistencies before release.
        </p>

        <div class="hero-actions">
          <v-btn
            class="primary-cta"
            color="primary"
            variant="flat"
            size="large"
            rounded="xl"
            @click="goToTest"
          >
            Test your web screens
            <v-icon icon="mdi-arrow-right" end />
          </v-btn>

          <v-btn
            class="secondary-cta"
            color="secondary"
            variant="outlined"
            size="large"
            rounded="xl"
          >
            View sample report
          </v-btn>
        </div>

        <div class="hero-meta">
          <span>Step 1: Capture your screens</span>
          <span class="dot">•</span>
          <span>Step 2: Upload them</span>
          <span class="dot">•</span>
          <span>Step 3: Review the findings</span>
        </div>
      </v-col>

      <v-col cols="12" md="5" class="hero-right">
        <v-card class="preview-card" elevation="10">
          <v-card-item>
            <div class="preview-header">
              <span class="preview-label">Example visual review</span>
              <v-chip size="x-small" color="primary" variant="outlined">
                <span class="preview-pill">Sample Report</span>
              </v-chip>
            </div>
            <p class="preview-subtitle">
              A quick scan of a dashboard screen might highlight issues like:
            </p>
          </v-card-item>

          <v-divider />

          <v-card-text>
            <ul class="preview-list">
              <li>
                <span class="bullet-title">1. Header alignment.</span>
                <span class="bullet-text">
                  Main header is not aligned with the primary content grid at 1440px.
                </span>
              </li>
              <li>
                <span class="bullet-title">2. Card height consistency.</span>
                <span class="bullet-text">
                  Pricing cards use different heights, making comparison harder.
                </span>
              </li>
              <li>
                <span class="bullet-title">3. Typography scale.</span>
                <span class="bullet-text">
                  Body text does not follow the design‑system line height on mobile.
                </span>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.home-container {
  padding-top: 72px;
  padding-bottom: 72px;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-row {
  min-height: calc(100vh - 180px);
  row-gap: 48px;
}

/* Left side hero text */
.hero-left {
  max-width: 600px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.6rem;
  border-radius: 9999px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.45);
  margin-bottom: 1rem;
  margin-top: 1rem
}

.pill {
  background: linear-gradient(135deg, #38bdf8, #a855f7);
  color: #0b1120;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.15rem 0.5rem;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.eyebrow-text {
  font-size: 0.75rem;
  color: #e5e7eb;
}

.hero-title {
  font-size: clamp(2.4rem, 3.2vw + 1.4rem, 3.6rem);
  line-height: 1.1;
  margin-bottom: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.04em;
}

.gradient-text {
  background: linear-gradient(135deg, #38bdf8, #a855f7);
  -webkit-background-clip: text;
  color: transparent;
}

.hero-subtitle {
  font-size: 0.98rem;
  color: #cbd5f5;
  max-width: 100%;
  text-align: center;
  margin-bottom: 1.8rem;
}

/* CTAs */
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0rem;
}

.primary-cta,
.secondary-cta {
  cursor: pointer;
  text-transform: none;
  font-size: 1.7rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  padding: 20px 30px;
  border-radius: 12px;
}

.primary-cta {
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  border: 2px solid rgba(56, 189, 248, 0.35)
}

.primary-cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 6px rgba(56, 189, 248, 0.45);
}

.secondary-cta {
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  border: 2px solid rgba(56, 189, 248, 0.35)
}

.secondary-cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 6px rgba(56, 189, 248, 0.45);
}

/* Helper text */
.hero-meta {
  font-size: 0.8rem;
  color: #9ca3af;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  margin-bottom: 2rem;
  font-weight: 600;
}

.hero-meta .dot {
  opacity: 0.6;
}

/* Right side example card */
.hero-right {
  display: flex;
  justify-content: center;
}

.preview-card {
  width: 100%;
  max-width: 680px;
  padding: 12px;
  background: radial-gradient(circle at top, rgba(56, 189, 248, 0.16), transparent 55%),
              rgba(15, 23, 42, 0.96);
  border: 1px solid rgba(148, 163, 184, 0.4);
  backdrop-filter: blur(18px);
  border-radius: 18px;
}

.preview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.2rem;
  /* margin-bottom: 0.35rem; */
}

.preview-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #e5e7eb;
}

.preview-pill {
  background: linear-gradient(135deg, #38bdf8, #a855f7);
  color: #0b1120;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.1rem 0.4rem;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.preview-subtitle {
  font-size: 0.8rem;
  background: linear-gradient(135deg, #38bdf8, #a855f7);
  -webkit-background-clip: text;
  color: transparent;
  margin-top: 0.1rem;
  text-align: left;
}

/* Structured bullet list inside card */
.preview-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: grid;
  row-gap: 0.3rem;
}

.preview-list li {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  text-align: left;
}

.bullet-title {
  font-size: 0.86rem;
  font-weight: 600;
  color: #e5e7eb;
  text-align: left;
}

.bullet-text {
  font-size: 0.8rem;
  color: #9ca3af;
}

/* Responsive tweaks */
@media (max-width: 959px) {
  .home-container {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .hero-row {
    min-height: auto;
  }

  .hero-left {
    text-align: left;
  }

  .hero-actions {
    justify-content: flex-start;
  }
}
</style>
