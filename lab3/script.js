// Thay đổi nội dung tiêu đề khi chọn Curriculum hoặc Exercises
function updateRightColumnTitle(title) {
    document.getElementById('content-title').textContent = title;
    document.getElementById('content-text').textContent = `Here are the resources for ${title}. Choose a chapter to view the content.`;
  }

  function showDocumentPage(subject) {
    closeAllDetails();

    document.getElementById("subject-selection").style.display = "none";
    document.getElementById("document-container").style.display = "flex";
    document.getElementById("sidebar-title").textContent = subject;
    
    // Hiển thị tiêu đề môn học được chọn bên cột phải
    updateRightColumnTitle(subject);

    document.getElementById("pdf-viewer").style.display = "none";
  }

  // Hiển thị tên Curriculum trong cột phải
  document.getElementById('curriculum-section').addEventListener('click', function () {
    updateRightColumnTitle("Curriculum");
  });

  // Hiển thị tên Exercises trong cột phải
  document.getElementById('exercise-section').addEventListener('click', function () {
    updateRightColumnTitle("Exercises");
  });



  // Hàm này sẽ thay đổi PDF và tên chapter trong thẻ p
  function loadChapterPDF(pdfUrl, chapterName) {
    const pdfViewer = document.getElementById("pdf-viewer");
    pdfViewer.src = pdfUrl; // Đặt file PDF vào iframe
    pdfViewer.style.display = "block"; // Hiển thị iframe với file PDF

    // Cập nhật content-text để hiển thị tên chapter
    document.getElementById("content-text").textContent = chapterName;
  }

  // Hàm này sẽ thay đổi tiêu đề khi chọn Curriculum hoặc Exercises
  function updateRightColumnTitle(title) {
    document.getElementById("content-title").textContent = title;
    document.getElementById("chapter-name").textContent = ""; // Xóa tên chapter khi chọn Curriculum hoặc Exercises
  }

  // Hiển thị nội dung tham khảo
  function showReferences() {
    document.getElementById("pdf-viewer").style.display = "none"; // Ẩn PDF nếu đang hiển thị
    document.getElementById("content-title").textContent = "References";
    document.getElementById("content-text").textContent =
      "Here are some references and additional materials for your subject.";
    document.getElementById("chapter-name").textContent = ""; // Xóa tên chapter khi chọn References
  }

  function goBack() {
  // Đóng tất cả các thẻ <details>
  closeAllDetails();

  // Đặt lại nội dung tiêu đề
  document.getElementById("content-title").textContent = "Select a Document";
  document.getElementById("content-text").textContent = "Choose a category to see the content here.";
  
  // Ẩn phần tài liệu và hiển thị phần chọn môn
  document.getElementById("document-container").style.display = "none";
  document.getElementById("subject-selection").style.display = "flex";

  // Ẩn PDF khi quay lại
  document.getElementById("pdf-viewer").style.display = "none"; 
  }

  function closeAllDetails() {
      const details = document.querySelectorAll("details");
      details.forEach((detail) => {
          detail.removeAttribute("open"); // Đóng tất cả các thẻ <details>
      });
  }