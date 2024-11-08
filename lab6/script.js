function showContent() {
    document.getElementById('cardContainer').style.display = 'none';
    document.getElementById("contentContinue").style.display = "block";
    document.getElementById("edit").style.display = "none"; // Ẩn trang chỉnh sửa khi hiển thị nội dung
}

function openEdit() {
    // Ẩn tất cả các phần khác trước khi mở trang chỉnh sửa
    document.getElementById('cardContainer').style.display = 'none';
    document.getElementById("contentContinue").style.display = "none";
    document.getElementById("edit").style.display = "block"; // Hiển thị trang chỉnh sửa
    
    // Ẩn header trong cardContainer
    document.getElementById('cardContainerHeader').style.display = 'none';
}
document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('edit').style.display = 'none';
        document.getElementById('contentContinue').style.display = 'none';
        document.getElementById('cardContainer').style.display = 'flex';
        document.getElementById('cardContainerHeader').style.display = 'flex';
    });
});