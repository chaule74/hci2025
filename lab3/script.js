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
          'Chapter 1': 'pdf/Java_Chapter1.pdf',
          'Chapter 2': 'pdf/Java_Chapter2.pdf',
          'Chapter 3': 'pdf/Java_Chapter3.pdf'
      },
      exercises: {
          'Exercise 1': 'pdf/Java_Excercise1.pdf',
          'Exercise 2': 'pdf/Java_Excercise2.pdf',
          'Exercise 3': 'pdf/Java_Excercise3.pdf'
      },
      references: 'pdf/Java_Reference.pdf'
  },
  'Discrete Mathematics': {
      curriculum: {
          'Chapter 1': 'pdf/Trr_Chapter1.pdf',
          'Chapter 2': 'pdf/Trr_Chapter2.pdf',
          'Chapter 3': 'pdf/Trr_Chapter3.pdf'
      },
      exercises: {
          'Exercise 1': 'pdf/Trr_Exercise1.pdf',
          'Exercise 2': 'pdf/Trr_Exercise2.pdf',
          'Exercise 3': 'pdf/Trr_Exercise3.pdf'
      },
      references: 'pdf/Trr_Reference.pdf'
  },
  'Human-computer interaction': {
      curriculum: {
          'Chapter 1': 'pdf/Gtnm_Chapter1.pdf',
          'Chapter 2': 'pdf/Gtnm_Chapter2.pdf',
          'Chapter 3': 'pdf/Gtnm_Chapter3.pdf'
      },
      exercises: {
          'Exercise 1': 'pdf/Gtnm_Exercise1.pdf',
          'Exercise 2': 'pdf/Gtnm_Exercise2.pdf',
          'Exercise 3': 'pdf/Gtnm_Exercise3.pdf'
      },
      references: 'pdf/Gtnm_Reference.pdf'
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