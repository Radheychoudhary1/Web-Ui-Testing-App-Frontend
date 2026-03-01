<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const screenshotFiles = ref<File[]>([]);
const isProcessing = ref(false);
// const showReportCard = ref(false);
const showReportDialog = ref(false);


type ReportItem = {
  fileName: string;
  issues: string[];
};

const report = ref<ReportItem[]>([]);

const baseIssues = [
  'Header: Main navigation header is not aligned to the primary content grid.',
  'Buttons: Primary and secondary buttons use inconsistent padding and radius.',
  'Layout: Vertical spacing between sections is not following the 8px spacing scale.',
  'Typography: Body text does not follow the design-system line height on mobile.',
];

const fileInputEl = ref<HTMLInputElement | null>(null);

const triggerFileSelect = () => {
  fileInputEl.value?.click();
};

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    screenshotFiles.value.push(file);
  }
  // Reset so selecting the same file again still fires change
  target.value = '';
};

// const runFakeAnalysis = () => {
//   if (!screenshotFiles.value.length) {
//     report.value = [
//       {
//         fileName: 'No file selected',
//         issues: ['Please add at least one screenshot to generate a report.'],
//       },
//     ];
//     showReportCard.value = true;
//     return;
//   }

//   isProcessing.value = true;

//   setTimeout(() => {
//     report.value = screenshotFiles.value.map((file) => ({
//       fileName: file.name,
//       issues: baseIssues,
//     }));
//     isProcessing.value = false;
//     showReportCard.value = true;
//   }, 800);
// };
const runFakeAnalysis = () => {
  if (!screenshotFiles.value.length) {
    report.value = [
      {
        fileName: 'No file selected',
        issues: ['Please add at least one screenshot to generate a report.'],
      },
    ];
    showReportDialog.value = true;
    return;
  }

  isProcessing.value = true;

  setTimeout(() => {
    report.value = screenshotFiles.value.map((file) => ({
      fileName: file.name,
      issues: baseIssues,
    }));
    isProcessing.value = false;
    showReportDialog.value = true;
  }, 800);
};


const goBackHome = () => {
  router.push({ name: 'home' });
};
</script>

<template>
  <v-container class="test-container" fluid>
    <!-- Hidden native input for single-file upload -->
    <input
      ref="fileInputEl"
      type="file"
      accept="image/*"
      class="hidden-file-input"
      @change="handleFileChange"
    />

    <!-- Back to home -->
    <div class="back-row">
      <div class="back-btn" @click="goBackHome">
        <span class="pill">Back</span>
      </div>
    </div>

    <!-- Banner -->
    <v-row justify="center">
      <v-col cols="12" md="10" lg="9">
        <div class="test-banner">
          <h2 class="test-title">Test your web screens for UI issues</h2>
          <p class="test-subtitle">
            Upload screenshots of your pages and walk through a guided flow to simulate a visual QA
            pass. This prototype shows how a future automated checker could feel.
          </p>

          <div class="test-steps">
            <div class="step">
              <span class="step-number">1</span>
              <div>
                <div class="step-title">Import screenshots</div>
                <div class="step-text">Select one screen at a time from your app or website.</div>
              </div>
            </div>
            <div class="step">
              <span class="step-number">2</span>
              <div>
                <div class="step-title">Run a quick scan</div>
                <div class="step-text">Trigger a fake automated check that mimics real analysis.</div>
              </div>
            </div>
            <div class="step">
              <span class="step-number">3</span>
              <div>
                <div class="step-title">Review the report</div>
                <div class="step-text">
                  See a point‑wise summary of potential UI improvements.
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- Uploaded list + info -->
    <div class="preview-side-info">
      <h3 class="preview-heading mt-6">What this check looks for</h3>
      <ul class="preview-points">
        <li>Visual alignment between headers, content, and CTAs.</li>
        <li>Consistent use of spacing, radius, and elevation.</li>
        <li>Typography scale and contrast for readability.</li>
        <li>Obvious layout breaks across common breakpoints.</li>
      </ul>
    </div>

        <!-- CTA row (upload + view report) -->
    <div class="hero-actions">
      <v-btn
        class="primary-cta"
        color="primary"
        variant="flat"
        size="large"
        rounded="xl"
        @click="triggerFileSelect"
      >
        Upload your screenshots
        <v-icon icon="mdi-arrow-up-bold-box-outline" end />
      </v-btn>

      <v-btn
        class="secondary-cta"
        color="secondary"
        variant="outlined"
        size="large"
        rounded="xl"
        :loading="isProcessing"
        @click="runFakeAnalysis"
      >
        View Web‑UI test report
      </v-btn>
    </div>

          <div class="preview-side-info-text">
         <h3 class="preview-heading">Uploaded screenshots</h3>
      <div v-if="screenshotFiles.length" class="selected-files">
        <ul class="preview-points">
          <li v-for="file in screenshotFiles" :key="file.name">
            {{ file.name }}
          </li>
        </ul>
      </div>
      <div v-else class="upload-hint">
        No screenshots uploaded yet. Use “Upload your screenshots” to add one image at a time.
      </div>
      </div>

    <!-- Report card (fixed text, below CTAs) -->
        <!-- Report dialog modal -->
         <div class="hr-divider" />
         <div>
          <div v-if="showReportDialog = true" class="report-dialog">
            <div class="report-header-left">
            <h3 class="report-dialog-title">Web‑UI test report</h3>
            <div>
              <h4 class="sidebar-title">Screens analyzed</h4>
              <ul class="sidebar-list">
                <!-- <li v-for="item in report" :key="item.fileName">
                  {{ item.fileName }}
                </li> -->
              </ul>
            </div>
            <div
                v-for="item in report"
                :key="item.fileName"
                class="report-section"
              >
                <h4 class="report-file">{{ item.fileName }}</h4>
                <ol class="issue-list">
                  <li v-for="(issue, idx) in item.issues" :key="idx">
                    {{ issue }}
                  </li>
                </ol>
              </div>
          </div>
          </div>
         </div>

  </v-container>
</template>

<style scoped>
.test-container {
  padding-top: 72px;
  padding-bottom: 72px;
  max-width: 1200px;
  margin: 0 auto;
}

/* hide native input */
.hidden-file-input {
  display: none;
}

/* Back button */
.back-row {
  margin-bottom: 12px;
}
.back-btn {
  display: inline-flex;
  cursor: pointer;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.report-dialog {
  /* max-width: 760px; */
  background-color: white;
  border-radius: 20px;
  border: 1px solid rgba(148, 163, 184, 0.5);
  padding: 16px 24px 12px;
  margin-top: 24px;
}
 
.report-header-left {
  color: rgba(41, 42, 44, 0.93);
}
.sidebar-list {
  color: rgba(41, 42, 44, 0.93);
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
.hr-divider {
  border: 2px solid rgba(56, 189, 248, 0.35);
  /* border-color: red !important; */
  margin: 32px 0;
}

.preview-side-info-text {
  text-align: center;
  margin-top: 24px;
}

/* Top banner */
.test-banner {
  background: radial-gradient(circle at top left, rgba(56, 189, 248, 0.18), transparent 55%),
              rgba(15, 23, 42, 0.95);
  border-radius: 20px;
  padding: 0px 24px 24px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  margin-bottom: 32px;
}

.test-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.test-subtitle {
  font-size: 0.96rem;
  color: #cbd5f5;
  max-width: 44rem;
  margin-bottom: 1.4rem;
}

/* Steps */
.test-steps {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.step {
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
  padding: 0.6rem 0.9rem;
  border-radius: 9999px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.3);
  font-size: 0.8rem;
}

.step-number {
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  background: linear-gradient(135deg, #38bdf8, #a855f7);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: #020617;
}

.step-title {
  font-weight: 600;
  margin-bottom: 0.1rem;
}

.step-text {
  color: #9ca3af;
}

/* CTAs (match home) */
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2.5rem 0 1.5rem;
}

.primary-cta,
.secondary-cta {
  cursor: pointer;
  text-transform: none;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  padding: 16px 28px;
  border-radius: 12px;
}

.primary-cta {
  border: 2px solid rgba(56, 189, 248, 0.35);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.primary-cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 20px rgba(56, 189, 248, 0.45);
}

.secondary-cta {
  border: 2px solid rgba(56, 189, 248, 0.35);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.secondary-cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 20px rgba(56, 189, 248, 0.45);
}

/* Info / uploaded list */
.preview-side-info {
  padding: 0px 28px;
}

.preview-heading {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.preview-points {
  padding-left: 1.1rem;
  margin: 0;
  font-size: 0.85rem;
  color: #e5e7eb;
  list-style: none !important;
}

.preview-points li + li {
  margin-top: 0.25rem;
}

/* Uploaded files */
.selected-files {
  font-size: 0.85rem;
  color: #e5e7eb;
  margin-bottom: 1.5rem;
}

.upload-hint {
  font-size: 0.8rem;
  color: #9ca3af;
}

/* Report card below */
/* .report-dialog {
  max-width: 760px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid rgba(148, 163, 184, 0.5);
} */
/* .report-card {
  margin-top: 24px;
  background: rgba(15, 23, 42, 0.96);
  border-radius: 20px;
  border: 1px solid rgba(148, 163, 184, 0.4);
} */

.report-title {
  font-weight: 600;
}

.report-subtitle {
  font-size: 0.85rem;
  color: #9ca3af;
}

.report-section {
  margin-top: 1rem;
}

.report-file {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.issue-list {
  padding-left: 1.2rem;
  font-size: 0.88rem;
}

.issue-list li + li {
  margin-top: 0.25rem;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8rem;
}

/* .report-dialog-card {
  background: radial-gradient(circle at top, rgba(56, 189, 248, 0.16), transparent 55%),
              rgba(15, 23, 42, 0.97);
  border-radius: 20px;
  border: 1px solid rgba(148, 163, 184, 0.5);
} */

.report-dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 18px 24px 14px;
}

.report-header-left {
  max-width: 70%;
}

.report-dialog-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.report-dialog-subtitle {
  margin: 4px 0 0;
  font-size: 0.85rem;
  color: #9ca3af;
}

.report-dialog-body {
  padding: 16px 24px 8px;
}

.report-sidebar {
  border-right: 1px solid rgba(148, 163, 184, 0.3);
  padding-right: 16px;
}

.sidebar-title {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

.sidebar-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
  font-size: 0.82rem;
  color: #e5e7eb;
}

.sidebar-list li + li {
  margin-top: 0.25rem;
}

.report-main {
  padding-left: 16px;
}

.report-section {
  margin-bottom: 1rem;
}

.report-file {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.report-dialog-actions {
  padding: 10px 20px 14px;
  border-top: 1px solid rgba(148, 163, 184, 0.3);
}

/* Mobile */
@media (max-width: 959px) {
  .report-sidebar {
    border-right: none;
    border-bottom: 1px solid rgba(148, 163, 184, 0.3);
    margin-bottom: 8px;
    padding-right: 0;
    padding-bottom: 8px;
  }

  .report-main {
    padding-left: 0;
  }
}


/* Responsive */
@media (max-width: 959px) {
  .test-container {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .preview-side-info {
    padding-inline: 16px;
  }
}
</style>
