// Chức năng cho các tab
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetContent = this.dataset.content;

        // Xóa lớp active khỏi tất cả các tab
        tabLinks.forEach(link => link.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Thêm lớp active cho tab đã nhấp
        this.classList.add('active');
        document.querySelector(`.tab-content[data-category="${targetContent}"]`).classList.add('active');
    });
});