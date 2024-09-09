document.getElementById('calculate').addEventListener('click', function() {
  // Lấy giá trị từ các trường nhập
  const amount = parseFloat(document.getElementById('amount').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const time = parseFloat(document.getElementById('time').value);

  // Kiểm tra đầu vào
  if (isNaN(amount) || isNaN(rate) || isNaN(time) || amount < 0 || rate < 0 || time < 0) {
      document.getElementById('result').innerText = 'Vui lòng nhập thông tin hợp lệ!';
      return;
  }

  // Tính lãi suất
  const interest = (amount * rate * time) / 100;
  
  // Hiển thị kết quả
  document.getElementById('result').innerText = `Tiền lãi: ${interest.toFixed(2)} VNĐ`;
});