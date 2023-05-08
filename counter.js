function updateVisitorCount() {
  fetch('https://1nwyc8f74b.execute-api.us-east-1.amazonaws.com/prod/counter')
    .then((response) => {
      console.log('Fetch response:', response);
      return response.json();
    })
    .then((data) => {
      console.log('Data:', data);
      const visitorCountElement = document.getElementById('visitor-count');
      visitorCountElement.textContent = data.count;
    })
    .catch((error) => {
      console.error('Error fetching visitor count:', error);
    });
}

document.addEventListener('DOMContentLoaded', updateVisitorCount);
