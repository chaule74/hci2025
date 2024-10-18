function updateRightColumnTitle(title) {
  document.getElementById('content-title').textContent = title;
  document.getElementById('content-text').textContent = `Here are the resources for ${title}. Choose a chapter to view the content.`;
}

let currentSubject = '';

function showDocumentPage(subject) {
  currentSubject = subject;
  closeAllDetails();

  document.getElementById("subject-selection").style.display = "none";
  document.getElementById("document-container").style.display = "flex";
  document.getElementById("sidebar-title").textContent = subject;
      
  updateRightColumnTitle(subject);

  document.getElementById("pdf-viewer").style.display = "none";
  }

  document.getElementById('curriculum-section').addEventListener('click', function () {
    updateRightColumnTitle("Curriculum");
  });

  document.getElementById('exercise-section').addEventListener('click', function () {
    updateRightColumnTitle("Exercises");
  });

  const pdfFiles = {
  'Java': {
      curriculum: {
          'Chapter 1': 'Java_Chapter1.pdf',
          'Chapter 2': 'Java_Chapter2.pdf',
          'Chapter 3': 'Java_Chapter3.pdf'
      },
      exercises: {
          'Exercise 1': 'Java_Excercise1.pdf',
          'Exercise 2': 'Java_Excercise2.pdf',
          'Exercise 3': 'Java_Excercise3.pdf'
      },
      references: 'Java_Reference.pdf'
  },
  'Discrete Mathematics': {
      curriculum: {
          'Chapter 1': 'Trr_Chapter1.pdf',
          'Chapter 2': 'Trr_Chapter2.pdf',
          'Chapter 3': 'Trr_Chapter3.pdf'
      },
      exercises: {
          'Exercise 1': 'Trr_Exercise1.pdf',
          'Exercise 2': 'Trr_Exercise2.pdf',
          'Exercise 3': 'Trr_Exercise3.pdf'
      },
      references: 'Trr_Reference.pdf'
  },
  'Human-computer interaction': {
      curriculum: {
          'Chapter 1': 'Gtnm_Chapter1.pdf',
          'Chapter 2': 'Gtnm_Chapter2.pdf',
          'Chapter 3': 'Gtnm_Chapter3.pdf'
      },
      exercises: {
          'Exercise 1': 'Gtnm_Exercise1.pdf',
          'Exercise 2': 'Gtnm_Exercise2.pdf',
          'Exercise 3': 'Gtnm_Exercise3.pdf'
      },
      references: 'Gtnm_Reference.pdf'
  },
};

function loadChapterPDF(type, chapterName) {
  if (currentSubject && pdfFiles[currentSubject] && pdfFiles[currentSubject][type]) {
      const pdfUrl = pdfFiles[currentSubject][type][chapterName];
      if (pdfUrl) {
          const pdfViewer = document.getElementById("pdf-viewer");
          pdfViewer.src = pdfUrl; 
          pdfViewer.style.display = "block"; 

          document.getElementById("content-text").textContent = chapterName;
      } else {
          alert("No PDF file available for this chapter.");
      }
  } else {
      alert("Invalid selection or no files found.");
  }
}

function updateRightColumnTitle(title) {
  document.getElementById("content-title").textContent = title;
  document.getElementById("chapter-name").textContent = ""; 
}

function showReferences() {
  if (currentSubject && pdfFiles[currentSubject] && pdfFiles[currentSubject].references) {
      const pdfUrl = pdfFiles[currentSubject].references; 
      const pdfViewer = document.getElementById("pdf-viewer");
      pdfViewer.src = pdfUrl;  
      pdfViewer.style.display = "block";  

      document.getElementById("content-title").textContent = "References";
      document.getElementById("content-text").textContent = `Here are the references for ${currentSubject}.`;
  } else {
      alert("No references available for this subject.");
  }
}

function goBack() {
closeAllDetails();

document.getElementById("content-title").textContent = "Select a Document";
document.getElementById("content-text").textContent = "Choose a category to see the content here.";

document.getElementById("document-container").style.display = "none";
document.getElementById("subject-selection").style.display = "flex";

document.getElementById("pdf-viewer").style.display = "none"; 
}

function closeAllDetails() {
    const details = document.querySelectorAll("details");
    details.forEach((detail) => {
        detail.removeAttribute("open");
    });
}