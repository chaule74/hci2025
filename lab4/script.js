function openTab(evt, tabName) {
  // Ẩn tất cả nội dung tab
  var tabContent = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
  }

  // Xóa lớp "active" khỏi tất cả các tab link
  var tabLinks = document.getElementsByClassName("tab-link");
  for (var i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("active");
  }

  // Hiện tab hiện tại và thêm lớp "active" vào button đã nhấn
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
  const coursesContainer = document.querySelector('.courses');
  const nextButtonCourses = document.querySelector('.courses-container .next-button');
  const prevButtonCourses = document.querySelector('.courses-container .prev-button');
  const recommendationsContainer = document.querySelector('.recommendations');
  const nextButtonRecommendations = document.querySelector('.recommend-section .next-button');
  const prevButtonRecommendations = document.querySelector('.recommend-section .prev-button');
  const scrollAmount = 620; // Kích thước thẻ bài học

  // Xử lý sự kiện nhấn nút cho courses-container
  nextButtonCourses.addEventListener('click', () => {
      coursesContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      updateButtonsCourses();
  });
  prevButtonCourses.addEventListener('click', () => {
      coursesContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      updateButtonsCourses();
  });

  // Cập nhật trạng thái của nút dựa trên vị trí cuộn cho courses-container
  function updateButtonsCourses() {
      const maxScrollLeft = coursesContainer.scrollWidth - coursesContainer.clientWidth;

      if (coursesContainer.scrollLeft > 0) {
          prevButtonCourses.style.display = 'flex';
      } else {
          prevButtonCourses.style.display = 'none';
      }

      if (coursesContainer.scrollLeft >= maxScrollLeft) {
          nextButtonCourses.style.display = 'none';
      } else {
          nextButtonCourses.style.display = 'flex';
      }
  }

  // Kiểm tra trạng thái của nút khi tải trang
  updateButtonsCourses();

  // Lắng nghe sự kiện khi cuộn để cập nhật lại nút
  coursesContainer.addEventListener('scroll', updateButtonsCourses);

  // Xử lý sự kiện nhấn nút cho recommend-section
  nextButtonRecommendations.addEventListener('click', () => {
      recommendationsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(updateButtonsRecommendations, 300); // Đảm bảo vị trí được cập nhật sau khi cuộn
  });
  prevButtonRecommendations.addEventListener('click', () => {
      recommendationsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setTimeout(updateButtonsRecommendations, 300);
  });
  // Cập nhật trạng thái của nút dựa trên vị trí cuộn cho recommend-section
  function updateButtonsRecommendations() {
      const maxScrollLeft = recommendationsContainer.scrollWidth - recommendationsContainer.clientWidth;
      
      if (Math.ceil(recommendationsContainer.scrollLeft) > 0) {
          prevButtonRecommendations.style.display = 'flex'; 
      } else {
          prevButtonRecommendations.style.display = 'none';
      }

      if (Math.ceil(recommendationsContainer.scrollLeft) >= maxScrollLeft) {
          nextButtonRecommendations.style.display = 'none'; 
      } else {
          nextButtonRecommendations.style.display = 'flex'; 
      }
  }

  // Kiểm tra trạng thái của nút khi tải trang
  updateButtonsRecommendations();

  // Lắng nghe sự kiện khi cuộn để cập nhật lại nút
  recommendationsContainer.addEventListener('scroll', updateButtonsRecommendations);